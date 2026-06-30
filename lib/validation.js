import { answerableScreens } from '../data/surveyQuestions';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateAnswer(screen, value) {
  if (screen.type === 'fact') return '';

  const emptyArray = Array.isArray(value) && value.length === 0;
  const emptyString = typeof value === 'string' && value.trim() === '';
  const missing = value === undefined || value === null || value === false || emptyArray || emptyString;

  if (screen.required && missing) {
    if (screen.validation?.consent) return 'Please confirm consent before continuing.';
    return 'Please answer this before continuing.';
  }

  if (!missing && screen.validation?.email && typeof value === 'string' && !emailPattern.test(value.trim())) {
    return 'Please enter a valid email address.';
  }

  if (!missing && screen.validation?.minLength && typeof value === 'string') {
    if (value.trim().length < screen.validation.minLength) return 'Please answer this before continuing.';
  }

  return '';
}

export function validateAll(formData) {
  for (const screen of answerableScreens) {
    const message = validateAnswer(screen, formData[screen.id]);
    if (message) return { id: screen.id, message };
  }

  return null;
}

export function stripUnsafeText(value) {
  if (typeof value !== 'string') return value;
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').slice(0, 12000);
}
