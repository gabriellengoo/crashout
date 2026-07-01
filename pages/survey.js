import { useMemo, useState } from 'react';
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

  const currentSlide = surveyScreens[currentStep];
  const activeQuestionIndex = useMemo(
    () => surveyScreens.slice(0, currentStep + 1).filter((screen) => screen.type !== 'fact').length - 1,
    [currentStep]
  );
  const isLast = currentStep === surveyScreens.length - 1;

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
    const missing = validateAll(formData);
    if (missing) {
      const missingIndex = surveyScreens.findIndex((screen) => screen.id === missing.id);
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
          formData,
          metadata: {
            eventSource: source,
            activeQuestionIndex,
            userAgent: navigator.userAgent
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

    moveToStep(currentStep + 1, 'forward');
  }

  function handleBack() {
    if (currentStep === 0) return;
    moveToStep(currentStep - 1, 'back');
  }

  return (
    <Layout bare>
      <div className="survey-page">
        <ProgressBar current={currentStep + 1} total={surveyScreens.length} />
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
