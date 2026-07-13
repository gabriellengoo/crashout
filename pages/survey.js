import { useEffect, useMemo, useState } from 'react';
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
    if (currentStep >= visibleScreens.length) setCurrentStep(Math.max(visibleScreens.length - 1, 0));
  }, [currentStep, visibleScreens.length]);

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

  return (
    <Layout bare>
      <div className="survey-page">
        <ProgressBar current={currentStep + 1} total={visibleScreens.length} />
        <div className="survey-shell">
          <p className="survey-brand">{currentSlide.section}</p>
          <div
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
        </div>
        <SurveyNavigation
          canGoBack={currentStep > 0}
          isLast={isLast}
          isSubmitting={isSubmitting}
          onBack={handleBack}
          onNext={handleNext}
        />
      </div>
    </Layout>
  );
}
