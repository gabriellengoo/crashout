import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import FactSlide from '../components/FactSlide';
import SurveyQuestion from '../components/SurveyQuestion';
import SurveyNavigation from '../components/SurveyNavigation';
import { surveyScreens } from '../data/surveyQuestions';
import { validateAll, validateAnswer } from '../lib/validation';

export default function SurveyPage() {
  const router = useRouter();
  const source = typeof router.query.source === 'string' ? router.query.source : '';
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [questionMotionDirection, setQuestionMotionDirection] = useState('forward');
  const [questionContentMasked, setQuestionContentMasked] = useState(false);
  const [questionContentRevealing, setQuestionContentRevealing] = useState(false);
  const [questionContentBlank, setQuestionContentBlank] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const questionFrameRef = useRef(null);
  const [questionCanScroll, setQuestionCanScroll] = useState(false);
  const [questionScrolledDown, setQuestionScrolledDown] = useState(false);

  const visibleScreens = useMemo(
    () => surveyScreens.filter((screen) => !screen.visibleWhen || screen.visibleWhen(formData)),
    [formData]
  );
  const currentSlide = visibleScreens[currentStep] || visibleScreens[visibleScreens.length - 1];
  const activeQuestionIndex = useMemo(
    () => visibleScreens.slice(0, currentStep + 1).filter((screen) => screen.type !== 'fact').length - 1,
    [currentStep, visibleScreens]
  );
  const isLast = currentStep === visibleScreens.length - 1;

  useEffect(() => {
    if (currentStep < visibleScreens.length) return undefined;
    const timer = window.setTimeout(() => setCurrentStep(Math.max(visibleScreens.length - 1, 0)), 0);
    return () => window.clearTimeout(timer);
  }, [currentStep, visibleScreens.length]);

  useEffect(() => {
    const frame = questionFrameRef.current;
    if (!frame || questionContentBlank) return undefined;
    if (currentSlide?.type === 'fact') {
      const timer = window.setTimeout(() => {
        setQuestionCanScroll(false);
        setQuestionScrolledDown(false);
      }, 0);
      return () => window.clearTimeout(timer);
    }

    const matrixList = frame.querySelector('.matrix-list');
    const scrollTarget =
      matrixList && matrixList.scrollHeight - matrixList.clientHeight > 48 ? matrixList : frame;

    function updateScrollState() {
      const maxScroll = scrollTarget.scrollHeight - scrollTarget.clientHeight;
      setQuestionCanScroll(maxScroll > 48);
      setQuestionScrolledDown(scrollTarget.scrollTop >= maxScroll - 8);
    }

    updateScrollState();
    scrollTarget.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      scrollTarget.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [currentSlide?.id, currentSlide?.type, questionContentBlank]);

  function setValue(id, value) {
    setFormData((current) => ({ ...current, [id]: value }));
    setErrors((current) => ({ ...current, [id]: '' }));
  }

  function syncCurrentField() {
    if (!currentSlide || currentSlide.type === 'fact') return formData;

    const field = document.getElementById(`field-${currentSlide.id}`);
    if (!field) return formData;

    let value = formData[currentSlide.id];
    if (currentSlide.type === 'consent') value = field.checked;
    if (['text', 'email', 'textarea', 'select'].includes(currentSlide.type)) value = field.value;

    const nextFormData = { ...formData, [currentSlide.id]: value };
    setFormData(nextFormData);
    return nextFormData;
  }

  function moveToStep(nextStep, direction) {
    setQuestionMotionDirection(direction);
    setErrors({});

    if (direction === 'forward') {
      setQuestionContentMasked(true);
      setQuestionContentBlank(true);
      window.setTimeout(() => {
        setCurrentStep(nextStep);
        window.setTimeout(() => {
          setQuestionContentBlank(false);
          setQuestionContentMasked(false);
          setQuestionContentRevealing(true);
          window.setTimeout(() => setQuestionContentRevealing(false), 650);
        }, 80);
      }, 140);
      return;
    }

    setCurrentStep(nextStep);
    setQuestionContentBlank(false);
    setQuestionContentMasked(false);
    setQuestionContentRevealing(false);
  }

  async function handleSubmit() {
    const visibleAnswerableScreens = visibleScreens.filter((screen) => screen.type !== 'fact');
    const visibleAnswerIds = new Set(visibleAnswerableScreens.map((screen) => screen.id));
    const visibleOtherIds = new Set(visibleAnswerableScreens.filter((screen) => screen.otherField).map((screen) => `${screen.id}__other`));
    const visibleFormData = Object.fromEntries(
      Object.entries(formData).filter(([key]) => visibleAnswerIds.has(key) || visibleOtherIds.has(key))
    );
    const scaleLabels = visibleAnswerableScreens
      .filter((screen) => screen.scaleLabels)
      .reduce((labels, screen) => ({ ...labels, [screen.id]: screen.scaleLabels }), {});
    const identifyingFields = visibleAnswerableScreens.filter((screen) => screen.identifying).map((screen) => screen.id);
    const missing = validateAll(visibleFormData, visibleScreens);
    if (missing) {
      const missingIndex = visibleScreens.findIndex((screen) => screen.id === missing.id);
      setErrors({ [missing.id]: missing.message });
      moveToStep(missingIndex, missingIndex > currentStep ? 'forward' : 'back');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/survey-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formData: visibleFormData,
          metadata: {
            eventSource: source,
            activeQuestionIndex,
            scaleLabels,
            identifyingFields,
            visibleScreenIds: visibleScreens.map((screen) => screen.id)
          },
          website: ''
        })
      });

      if (!response.ok) throw new Error('Submit failed');
      router.push('/thank-you');
    } catch {
      setErrors({ [currentSlide.id]: 'The survey could not be submitted. Please try again.' });
      setIsSubmitting(false);
    }
  }

  function handleNext() {
    const nextFormData = syncCurrentField();

    if (currentSlide.type !== 'fact') {
      const message = validateAnswer(currentSlide, nextFormData[currentSlide.id]);
      if (message) {
        setErrors({ [currentSlide.id]: message });
        return;
      }
    }

    if (isLast) {
      handleSubmit();
      return;
    }

    moveToStep(Math.min(currentStep + 1, visibleScreens.length - 1), 'forward');
  }

  function handleBack() {
    if (currentStep === 0) return;
    moveToStep(currentStep - 1, 'back');
  }

  function handleQuestionScrollToggle() {
    const frame = questionFrameRef.current;
    if (!frame) return;
    const matrixList = frame.querySelector('.matrix-list');
    const scrollTarget =
      matrixList && matrixList.scrollHeight - matrixList.clientHeight > 12 ? matrixList : frame;

    scrollTarget.scrollTo({
      top: questionScrolledDown ? 0 : scrollTarget.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <Layout bare>
      <div className="survey-page">
        <ProgressBar current={currentStep + 1} total={visibleScreens.length} />
        <div className="survey-shell">
          <p className="survey-brand">
            <span>Making Theatre Anti-Racist</span>
            <span>Estimated time: 10–15 minutes</span>
            {currentSlide.section && currentSlide.section !== 'Making Theatre Anti-Racist' ? (
              <em>{currentSlide.section}</em>
            ) : null}
          </p>
          <div
            ref={questionFrameRef}
            className={[
              'question-frame',
              currentSlide.type === 'fact' ? 'fact-frame' : '',
              `motion-${questionMotionDirection}`,
              questionContentMasked ? 'question-content-masked' : '',
              questionContentRevealing ? 'question-content-revealing' : ''
            ].join(' ')}
          >
            {questionContentBlank ? null : currentSlide.type === 'fact' ? (
              <FactSlide screen={currentSlide} />
            ) : (
              <SurveyQuestion
                screen={currentSlide}
                value={formData[currentSlide.id]}
                onChange={(value) => setValue(currentSlide.id, value)}
                extraValue={formData[`${currentSlide.id}__other`]}
                onExtraChange={(value) => setValue(`${currentSlide.id}__other`, value)}
                onEnter={handleNext}
                error={errors[currentSlide.id]}
              />
            )}
          </div>
          {questionCanScroll && !questionContentBlank ? (
            <button
              className={questionScrolledDown ? 'question-scroll-toggle up' : 'question-scroll-toggle'}
              type="button"
              onClick={handleQuestionScrollToggle}
              aria-label={questionScrolledDown ? 'Scroll question up' : 'Scroll question down'}
            >
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                <polyline points="24 28 32 36 40 28" />
                <rect x="8" y="8" width="48" height="48" />
              </svg>
            </button>
          ) : null}
        </div>
        <SurveyNavigation
          canGoBack={currentStep > 0}
          isFirst={currentStep === 0}
          isLast={isLast}
          isSubmitting={isSubmitting}
          onBack={handleBack}
          onNext={handleNext}
        />
      </div>
    </Layout>
  );
}
