export const surveyScreens = [
  {
    id: 'privacy_notice',
    section: 'Consent and privacy',
    type: 'fact',
    label: 'Before you begin',
    description:
      'Crash Out collects structured responses and lived testimony about racism, exclusion, barriers, and change in theatre. Optional questions can be skipped. Identifying details will not be shared publicly without permission.'
  },
  {
    id: 'consent',
    section: 'Consent and privacy',
    type: 'consent',
    label: 'Consent',
    description:
      'I understand that my answers may be used for Crash Out research, reporting, sector engagement, and advocacy around anti-racism in theatre. I understand I can skip optional questions and that identifying details will not be shared publicly without permission.',
    required: true,
    validation: { consent: true }
  },
  {
    id: 'email',
    section: 'Final contact / optional follow-up',
    type: 'email',
    label: 'Email address',
    description: 'Optional. Add this only if you are open to follow-up or want project updates.',
    required: false,
    placeholder: 'name@example.com',
    validation: { email: true }
  },
  {
    id: 'relationship_to_theatre',
    section: 'About you / relationship to theatre',
    type: 'multi-select',
    label: 'What is your relationship to theatre?',
    description: 'Select every option that feels relevant.',
    required: true,
    options: [
      'Actor / performer',
      'Director / writer / producer',
      'Front of house',
      'Backstage / technical',
      'Student / graduate',
      'Freelancer',
      'Audience member',
      'I left theatre because of racism or exclusion',
      'Other'
    ]
  },
  {
    id: 'career_stage',
    section: 'About you / relationship to theatre',
    type: 'select',
    label: 'Where are you in your theatre journey?',
    required: false,
    options: ['Training', 'Early career', 'Mid career', 'Senior / leadership', 'Paused', 'Left the sector', 'Prefer not to say']
  },
  {
    id: 'fact_recorded',
    section: 'Context',
    type: 'fact',
    label: 'Did you know',
    description:
      'Many people leave theatre before their experiences are ever formally recorded. Your answer can help turn lived experience into evidence.'
  },
  {
    id: 'experience_summary',
    section: 'Your experience in theatre',
    type: 'textarea',
    label: 'What do you want Crash Out to know about your experience in theatre?',
    description: 'Write as much or as little as feels safe.',
    required: true,
    placeholder: 'Your answer',
    validation: { minLength: 20 }
  },
  {
    id: 'where_harm_happened',
    section: 'Racism, exclusion, barriers, and harm',
    type: 'multi-select',
    label: 'Where have you experienced or witnessed racism, exclusion, or barriers?',
    required: false,
    options: [
      'Auditions / casting',
      'Training',
      'Rehearsal rooms',
      'Productions',
      'Venues',
      'Funding / commissioning',
      'Education outreach',
      'Audience spaces',
      'Leadership / governance',
      'I would rather describe it in my own words'
    ]
  },
  {
    id: 'impact',
    section: 'Racism, exclusion, barriers, and harm',
    type: 'textarea',
    label: 'How did it affect you, your work, or your relationship to theatre?',
    required: false,
    placeholder: 'Your answer'
  },
  {
    id: 'fact_optional',
    section: 'Context',
    type: 'fact',
    label: 'You stay in control',
    description:
      'You can skip questions that do not feel safe to answer unless they are marked required.'
  },
  {
    id: 'reported',
    section: 'Reporting / accountability / what happened after',
    type: 'radio',
    label: 'Did you report or raise what happened?',
    required: false,
    options: ['Yes', 'No', 'I tried to', 'Not sure', 'Prefer not to say']
  },
  {
    id: 'accountability_response',
    section: 'Reporting / accountability / what happened after',
    type: 'textarea',
    label: 'What happened after you raised it, or what stopped you from raising it?',
    required: false,
    placeholder: 'Your answer'
  },
  {
    id: 'change_needed',
    section: 'What needs to change',
    type: 'textarea',
    label: 'What needs to change for theatre to become anti-racist?',
    required: true,
    placeholder: 'Your answer',
    validation: { minLength: 15 }
  },
  {
    id: 'public_quote_permission',
    section: 'Final contact / optional follow-up',
    type: 'segmented',
    label: 'May Crash Out contact you about using an anonymised quote?',
    required: false,
    options: ['Yes', 'No', 'Contact me first']
  },
  {
    id: 'follow_up',
    section: 'Final contact / optional follow-up',
    type: 'segmented',
    label: 'Would you like to hear about future Crash Out events or findings?',
    required: false,
    options: ['Yes', 'No']
  }
];

export const answerableScreens = surveyScreens.filter((screen) => screen.type !== 'fact');
