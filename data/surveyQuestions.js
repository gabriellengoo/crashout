const option = (letter, text) => `${letter}. ${text}`;

const scale = ['1', '2', '3', '4', '5'];

export const surveyScreens = [
  {
    id: 'survey_intro',
    section: 'Making Theatre Antiracist',
    type: 'fact',
    label: 'Making Theatre Antiracist',
    description:
      'Experiences of race, power and producing in British theatre\n\nThis survey gathers experiences from racially minoritised people working in British theatre. It takes around 10-15 minutes. You can skip any question.'
  },
  {
    id: 'project_statement',
    section: 'Making Theatre Antiracist',
    type: 'fact',
    variant: 'statement',
    label: 'About this project',
    description:
      'This project is being led by the Royal Central School of Speech and Drama and Rafia Hussain Productions, and is being supported by Arts Council England and the Arts and Humanities Research Council.\n\nThe goal for this project is to make recommendations about how theatre producing can be made more effectively antiracist. This survey has been designed by Munotida Chinyanga and Tom Six with advisory input from LIST for the purpose of gathering information and feedback about how models of theatre producing can work better for racially minoritized artists and workers.\n\nWe want to hear from anyone who works in the British theatre (in any role) and is racially minoritized in this country.\n\nThe survey has four sections, asking about you, your working life, your experiences of racism, and your experiences of EDI (equality, diversity and inclusion) and antiracism. There are no compulsory questions, and any information that you give us that could be used to identify you will not be shared publicly.\n\nWe will ask that you identify yourself in racialized and gendered terms. We are aware that this information is often used by organisations in ways that objectify or instrumentalize people, and that you may be reluctant to give us this information for this or other reasons. In this project, this information will only be used for the purposes of interpreting the data that we collect. We therefore ask that you represent yourself as accurately as possible within the terms available.'
  },
  {
    id: 'section_about_you',
    section: 'About You',
    type: 'fact',
    label: 'About You',
    description: 'These questions are about how you choose to identify yourself and how you are identified by others.'
  },
  {
    id: 'identity_preferences',
    section: 'About You',
    type: 'multi-select',
    label: 'In which of the following ways do you prefer to identify yourself?',
    description: 'Select all that apply. Choose as many as you like.',
    required: false,
    options: [
      option('A', 'In terms of identity categories (e.g. as a queer Black woman)'),
      option('B', 'In terms of what you do professionally'),
      option('C', 'In relation to aesthetic choices or preferences (e.g. about your appearance or taste)'),
      option('D', "As a member of a particular ethnic group (e.g. 'Yoruba', 'Jewish', 'Welsh', etc)"),
      option('E', "In terms of your nationality (e.g. 'British', 'Nigerian', 'American')"),
      option('F', "As a member of a religious group (e.g. 'Muslim', 'Jewish', 'Christian', etc)"),
      option('G', 'In terms of your place of birth'),
      option('H', 'In relation to habitual activities or hobbies (e.g. as a skater, musician, runner...)'),
      option('I', 'In terms of your relationships with other people (e.g. as a parent or friend)'),
      option('J', 'In terms of your background or material experiences (e.g. as a migrant or survivor, or being from the class you grew up in)'),
      option('K', 'In terms of your socio-economic position'),
      option('L', 'In imaginative terms'),
      option('M', 'In relation to your educational background'),
      option('N', 'In terms of your character or characteristic behaviour'),
      option('O', 'Other')
    ]
  },
  {
    id: 'identity_context',
    section: 'About You',
    type: 'textarea',
    label: 'You can use this space to contextualise or expand on your answer if you wish.',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'racialised_terms',
    section: 'About You',
    type: 'textarea',
    label: 'Thinking about racialized or ethnic terms, how are you usually identified in Britain?',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'gender_identity',
    section: 'About You',
    type: 'radio',
    label: 'How do you identify in gendered terms?',
    required: false,
    options: [
      option('A', 'I am a transgender woman'),
      option('B', 'I am a cisgender woman'),
      option('C', 'I am a transgender man'),
      option('D', 'I am a cisgender man'),
      option('E', 'I am a non-binary person'),
      option('F', 'Not in any of these ways'),
      option('G', 'Prefer not to say')
    ]
  },
  {
    id: 'gender_expand',
    section: 'About You',
    type: 'textarea',
    label: 'If you answered "not in any of these ways", you can expand here.',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'working_life_identified',
    section: 'About You',
    type: 'multi-select',
    label: 'How do you think you are habitually or significantly identified in your working life?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'As someone who performs a specific function in their work (e.g. as a facilitator)'),
      option('B', 'As a "type" or in relation to your assumed character (e.g. as someone who plays certain roles)'),
      option('C', 'As a member of an identity category'),
      option('D', 'In terms of your background or experience'),
      option('E', 'In terms of your class background'),
      option('F', 'In relation to the expectations of an organisation or project'),
      option('G', 'Other')
    ]
  },
  {
    id: 'positioning_changes',
    section: 'About You',
    type: 'radio',
    label: 'Have you noticed any significant changes in how you are positioned or identified in your working life?',
    required: false,
    options: [option('Y', 'Yes'), option('N', 'No')]
  },
  {
    id: 'positioning_changes_context',
    section: 'About You',
    type: 'textarea',
    label: 'If you answered yes, what kinds of change have you noticed and what do they seem to be triggered by/connected to?',
    description: 'For example, historical events, geographical location, changes to your working environment, appearance or status.',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'born_in_uk',
    section: 'About You',
    type: 'radio',
    label: 'Were you born in the UK?',
    description: 'Please choose the answer that fits your experience best.',
    required: false,
    options: [
      option('A', 'Yes, and I have lived here for all or most of my life'),
      option('B', 'Yes, but I have lived for significant periods of time outside the UK'),
      option('C', 'No, but I came to the UK as a young child'),
      option('D', 'No, but I was educated at least partly in the British school system'),
      option('E', 'No, but I attended a British university'),
      option('F', 'No, I came to the UK as an adult'),
      option('G', 'No, and I am only temporarily resident in the UK'),
      option('H', 'Other')
    ]
  },
  {
    id: 'age',
    section: 'About You',
    type: 'radio',
    label: 'How old are you?',
    required: false,
    options: [
      option('A', '18-25'),
      option('B', '26-35'),
      option('C', '36-45'),
      option('D', '46-55'),
      option('E', '56-65'),
      option('F', '66-75'),
      option('G', '76-85'),
      option('H', '86 or older'),
      option('I', 'Prefer not to say')
    ]
  },
  {
    id: 'section_working_life',
    section: 'Your Working Life',
    type: 'fact',
    label: 'Your Working Life',
    description:
      "These questions are about your working life and will enable us to analyse how people's experiences may alter in relation to their role, employment status, career progression, etc."
  },
  {
    id: 'main_work',
    section: 'Your Working Life',
    type: 'multi-select',
    label: 'Which best describes your main work in theatre?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Performer / Actor'),
      option('B', 'Director'),
      option('C', 'Writer / Dramaturg'),
      option('D', 'Producer'),
      option('E', 'Designer (sound / set / lighting / video / costume)'),
      option('F', 'Choreographer / Movement Director / Voice Coach'),
      option('G', 'Composer'),
      option('H', 'Stage management / Technical / Production'),
      option('I', 'Intimacy Director / Wellbeing Support'),
      option('J', 'Facilitator / Participation / Learning / Community'),
      option('K', 'Arts management / Administration / Marketing / Fundraising / Press'),
      option('L', 'Critic / Researcher / Academic'),
      option('M', 'Other')
    ]
  },
  {
    id: 'work_mode',
    section: 'Your Working Life',
    type: 'multi-select',
    label: 'How do you usually work?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Freelance (project-to-project)'),
      option('B', 'PAYE / contracted staff'),
      option('C', 'Self-employed sole trader'),
      option('D', 'Limited company'),
      option('E', 'Mainly unpaid / voluntary'),
      option('F', 'Other')
    ]
  },
  {
    id: 'career_stage',
    section: 'Your Working Life',
    type: 'radio',
    label: 'Where do you feel you are in your career?',
    required: false,
    options: [
      option('A', 'Emerging'),
      option('B', 'Early career'),
      option('C', 'Mid-career'),
      option('D', 'Established'),
      option('E', "These labels don't fit my experience")
    ]
  },
  {
    id: 'years_in_theatre',
    section: 'Your Working Life',
    type: 'radio',
    label: 'How long have you been working in theatre?',
    required: false,
    options: [
      option('A', '0-5 years'),
      option('B', '6-10 years'),
      option('C', '11-15 years'),
      option('D', '16-20 years'),
      option('E', '21-25 years'),
      option('F', '26-30 years'),
      option('G', '31+ years')
    ]
  },
  {
    id: 'work_settings',
    section: 'Your Working Life',
    type: 'multi-select',
    label: 'Where do you regularly work?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Subsidised theatre (e.g. NT, Young Vic, RSC, Leeds Playhouse, Birmingham Rep)'),
      option('B', 'Commercial theatre (e.g. West End, commercial touring)'),
      option('C', 'Independent or fringe'),
      option('D', 'Opera'),
      option('E', 'Dance'),
      option('F', 'Cabaret'),
      option('G', 'Youth theatre / participatory / community settings'),
      option('H', 'Festivals / outdoor / site-based work'),
      option('I', 'Education / conservatoire / university'),
      option('J', 'Other')
    ]
  },
  {
    id: 'financial_security',
    section: 'Your Working Life',
    type: 'segmented',
    label: 'How much financial security does theatre provide you?',
    description: '1 = No security at all. 5 = A great security.',
    required: false,
    options: scale
  },
  {
    id: 'section_experiencing_racism',
    section: 'Experiencing Racism',
    type: 'fact',
    label: 'Experiencing Racism',
    description:
      'These questions are about experiences of racism or racialised harm in theatre and performance work, including where these experiences happen, how they take shape, and what impact they have.'
  },
  {
    id: 'racism_locations',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'Where do you most often experience racism or racialized harm?',
    description: 'Select all that apply.',
    required: false,
    options: [
      option('A', 'Funding applications/panels'),
      option('B', 'Interviews or general meetings'),
      option('C', 'Auditions or casting meetings'),
      option('D', 'Workshops'),
      option('E', 'Rehearsals'),
      option('F', 'Design decisions (e.g. costume or sound)'),
      option('G', 'Producing or management decisions'),
      option('H', 'Marketing, press or PR'),
      option('I', 'Touring'),
      option('J', 'Executive meetings'),
      option('K', 'Education or training spaces'),
      option('L', 'Front-of-house or audience interactions'),
      option('M', 'Online or social media engagement'),
      option('N', 'Networking or social events (formal or informal)'),
      option('O', 'Pay, contracts or employment terms'),
      option('P', 'Complaints, HR, safeguarding or reporting processes'),
      option('Q', 'Leadership, governance or board-level decisions'),
      option('R', 'Other')
    ]
  },
  {
    id: 'race_present_moment',
    section: 'Experiencing Racism',
    type: 'textarea',
    label: 'Can you describe a moment in your working life where race felt particularly present?',
    description:
      'This could be about how you were treated, supported, blocked, or used; something someone said; a hiring or funding process; responses from audiences, co-workers or peers; or how your work was framed by an organisation or individual.',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'experience_categories',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'Thinking about this/these moment/s, how would you categorise what you describe?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'I was tokenised or used for optics'),
      option('B', 'A racist stereotype was applied to or assumed of me or my work'),
      option('C', 'I was expected to perform authenticity (e.g. in accent, behaviour, or cultural expression)'),
      option('D', 'I was expected to represent or speak for a whole community'),
      option('E', 'I was excluded socially or professionally'),
      option('F', 'I was subject to gatekeeping'),
      option('G', 'I was consistently spoken over or dismissed'),
      option('H', 'My expertise was doubted or undermined'),
      option('I', 'I was overly scrutinised or micro-managed'),
      option('J', 'I was held to a different standard than others'),
      option('K', 'I was labelled difficult, aggressive, intimidating, ungrateful or unprofessional'),
      option('L', 'I or my work was deemed too "risky"'),
      option('M', 'I was favoured for being seen as "safe", compliant or non-confrontational'),
      option('N', 'A harmful comment or joke was made'),
      option('O', 'I experienced barriers in institutional processes (contracts, pay, access, credits, casting)'),
      option('P', 'I was asked to educate others or do additional emotional labour'),
      option('Q', 'A complaint or concern was ignored or contained'),
      option('R', 'A specific culture, language, ethnicity, region, or community was assumed from my broader racial/national identity'),
      option('S', 'I was included to illustrate diversity, but not given any agency'),
      option('T', 'My work, ideas, language, cultural knowledge, or community connections were used without proper credit, payment, consent, or acknowledgement'),
      option('U', 'I was held to a different standard than others'),
      option('V', 'I was labelled difficult, aggressive, intimidating, or unprofessional'),
      option('W', 'I was expected to represent or speak for a whole community'),
      option('X', 'I was treated as interchangeable with others from a broader racial or cultural group'),
      option('Y', 'My racial or cultural identity was misread or misclassified'),
      option('Z', 'I was favoured for being seen as "safe", compliant, or non-confrontational'),
      option('AA', 'I felt pressure to avoid making work that was "too political" or "too racial"'),
      option('AB', 'Other')
    ]
  },
  {
    id: 'experience_categories_context',
    section: 'Experiencing Racism',
    type: 'textarea',
    label: 'You can use this space to contextualise or expand on your answer if you wish.',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'power_to_alter',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'Thinking about the same experience, who had the power to alter it?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Artistic Director or other senior leader'),
      option('B', 'Writer, playwright or dramaturg'),
      option('C', 'Producer, executive producer or production manager'),
      option('D', 'Director or other lead creative'),
      option('E', 'Casting team'),
      option('F', 'Funders or other decision-makers'),
      option('G', 'Stage management'),
      option('H', 'Press, marketing or communications'),
      option('I', 'Other colleagues or peers'),
      option('J', 'Audience members or community participants'),
      option('K', 'Board, trustees or other people in governance roles'),
      option('L', 'Education or training staff'),
      option('M', 'Agent, personal representative, union representative'),
      option('N', 'No one had the power to change it'),
      option('O', "I'm not sure"),
      option('P', 'Other')
    ]
  },
  {
    id: 'impact',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'What impact did this experience have on you?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'I avoided that organisation or sector afterwards'),
      option('B', 'I became more outspoken or politically active (e.g. in a union or campaigning)'),
      option('C', 'I became more cautious or quiet at work'),
      option('D', 'It affected my confidence or mental health'),
      option('E', 'It affected future opportunities or references'),
      option('F', 'It changed the kind of work I make or how I frame it'),
      option('G', 'It changed how I negotiate fees or contracts'),
      option('H', 'It made me consider leaving theatre/performance or the arts sector'),
      option('I', 'It made me document incidents or communicate more carefully in writing'),
      option('J', 'It affected my physical health or energy levels'),
      option('K', 'It affected my sense of safety in work environments'),
      option('L', 'It affected my trust in organisations or institutions'),
      option('M', 'It made me seek support from peers, community, or external networks'),
      option('N', 'It had little or no lasting impact'),
      option('O', 'Other')
    ]
  },
  {
    id: 'considered_leaving',
    section: 'Experiencing Racism',
    type: 'radio',
    label: 'Have you considered stopping working in the live performance sector because of racism?',
    required: false,
    options: [option('Y', 'Yes'), option('N', 'No')]
  },
  {
    id: 'only_person_frequency',
    section: 'Experiencing Racism',
    type: 'segmented',
    label: 'How often are you the only racially minoritised person in a rehearsal room, creative or production team?',
    description: '1 = Almost never. 5 = Almost always.',
    required: false,
    options: scale
  },
  {
    id: 'spaces_with_others',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'When you are in spaces with other racially minoritised people, how would you describe the experience?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'I feel a sense of solidarity or shared understanding'),
      option('B', 'I feel safer or less isolated'),
      option('C', 'I still feel isolated because my specific identity is not represented'),
      option('D', 'I feel some groups are more visible or prioritised than others'),
      option('E', 'I feel pressure to align with a shared "diverse" perspective'),
      option('F', 'I feel competition for limited opportunities or attention'),
      option('G', 'I feel able to speak openly about differences between experiences'),
      option('H', 'I feel unable to speak openly about differences'),
      option('I', 'It varies depending on the context'),
      option('J', 'Other')
    ]
  },
  {
    id: 'section_edi',
    section: 'EDI and Antiracism',
    type: 'fact',
    label: 'EDI and Antiracism',
    description:
      'These questions are about equality, diversity and inclusion (EDI), antiracism, and how diversity is structured within theatre organisations, projects, and working environments.'
  },
  {
    id: 'diversity_structured',
    section: 'EDI and Antiracism',
    type: 'multi-select',
    label: "Which of the following accurately describes how diversity has been structured in projects you've worked on?",
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'It is integrated across the whole company/team'),
      option('B', 'It is concentrated in one production (e.g. an all-Black / all-Asian cast) but not elsewhere'),
      option('C', 'It is concentrated in support for development rather than full productions'),
      option('D', 'It is concentrated in more visible roles (e.g. actors, public-facing staff)'),
      option('E', 'It is concentrated in peripheral or lower-status roles (e.g. understudies, assistants)'),
      option('F', 'It is dispersed through isolated individuals'),
      option('G', "I'm not sure or it varies a lot"),
      option('H', 'It is present in casts or creative teams but not in leadership'),
      option('I', 'It is present in junior roles but not senior roles'),
      option('J', 'It is concentrated in outreach or community-facing work'),
      option('K', 'It appears mainly in projects about race or identity'),
      option('L', 'It appears mainly in marketing, reporting, or funding language'),
      option('M', 'It is present in recruitment but not in retention or progression'),
      option('N', 'It is supported in short-term projects but not long-term careers'),
      option('O', 'Other')
    ]
  },
  {
    id: 'work_without_reduction',
    section: 'EDI and Antiracism',
    type: 'segmented',
    label: 'How often have you felt able to work without being reduced to your racialised identity or perceived diversity value?',
    description: '1 = Never. 5 = As much as I have wanted.',
    required: false,
    options: scale
  },
  {
    id: 'identity_shaped_non_race_projects',
    section: 'EDI and Antiracism',
    type: 'multi-select',
    label: 'When working on projects not explicitly about race or identity, how has your racialised identity still shaped your experience?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'It did not significantly shape the experience'),
      option('B', 'I was still subject to assumptions or stereotypes'),
      option('C', 'I was treated as a technical or functional contributor rather than a creative one'),
      option('D', 'I felt pressure to avoid making the work about race'),
      option('E', 'I felt freer because identity was not the focus'),
      option('F', 'I felt invisible or unacknowledged'),
      option('G', 'I was included for diversity optics'),
      option('H', 'Other')
    ]
  },
  {
    id: 'non_race_projects_context',
    section: 'EDI and Antiracism',
    type: 'textarea',
    label: 'You can use this space to expand on your answer if you wish.',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'work_misrepresented',
    section: 'EDI and Antiracism',
    type: 'segmented',
    label: 'How often have you found your work framed in relation to your racialised identity in a way that misrepresented it?',
    description: '1 = Never happened. 5 = Happens all the time.',
    required: false,
    options: scale
  },
  {
    id: 'diversity_data_misrepresent',
    section: 'EDI and Antiracism',
    type: 'segmented',
    label: 'Have you experienced data about diversity being used to misrepresent your experience of working with or for an organisation?',
    description: '1 = No, never. 5 = Yes, always.',
    required: false,
    options: scale
  },
  {
    id: 'misrepresentation_context',
    section: 'EDI and Antiracism',
    type: 'textarea',
    label: 'If you answered that your work is sometimes or often misrepresented in this way, you can use this space to expand on that answer if you wish.',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'section_power_accountability',
    section: 'Power & Accountability',
    type: 'fact',
    label: 'Power & Accountability',
    description:
      'These questions are about who holds power in theatre workplaces, how concerns about racism or racialised harm are raised, and what happens when they are raised. This section asks about raising concerns and how organisations respond.'
  },
  {
    id: 'raising_issue_comfort',
    section: 'Power & Accountability',
    type: 'matrix',
    label: 'How comfortable would you feel raising an issue related to racism or racialised harm with the following people?',
    required: false,
    rows: [
      'A producer',
      'A director',
      'A stage manager',
      'A company or production manager',
      'Someone in human resources',
      'An organisational leader (Executive or Artistic Director)',
      'A board member',
      'A representative of a funder',
      'A union representative',
      'An external mediator',
      'A trusted peer'
    ],
    options: ['Very uncomfortable', 'Uncomfortable', 'Neutral', 'Comfortable', 'Very comfortable', 'Not applicable']
  },
  {
    id: 'raised_issue_outcomes',
    section: 'Power & Accountability',
    type: 'multi-select',
    label: 'When these issues are raised, what usually happens in your experience?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'The issue is raised directly with individuals concerned, resulting in accountability'),
      option('B', 'The issue is addressed in general by the organisation, leading to change'),
      option('C', 'The issue is dismissed or minimised'),
      option('D', 'The issue is diluted or dissipated through organisational processes'),
      option('E', 'People express sympathy, but nothing changes'),
      option('F', 'The person/people involved are offered support, but there is no other change'),
      option('G', 'The person/people who raised the issue are sidelined or removed'),
      option('H', 'The issue is delayed or passed between people or departments'),
      option('I', 'The focus shifts to how the issue was raised rather than the issue itself'),
      option('J', 'The organisation becomes defensive or prioritises protecting its reputation'),
      option('K', 'An apology is given, but no meaningful change happens'),
      option('L', 'The issue is reframed as a misunderstanding or personality clash'),
      option('M', 'The person raising the issue is treated as the problem'),
      option('N', 'The issue is handled informally rather than through a clear process'),
      option('O', 'Other')
    ]
  },
  {
    id: 'not_raise_reasons',
    section: 'Power & Accountability',
    type: 'multi-select',
    label: 'If you chose not to raise an issue related to racism or racialised harm, what were (or would be) the main reasons?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Fear of being labelled "difficult"'),
      option('B', 'Fear of losing future work or being informally blacklisted'),
      option('C', 'Lack of clarity about reporting pathways'),
      option('D', 'Lack of faith in reporting pathways'),
      option('E', 'The power of the person or people involved'),
      option('F', 'My emotional response (shock, distress, exhaustion)'),
      option('G', 'Concern about causing harm to co-workers or a project'),
      option('H', 'Previous experience of raising similar issues'),
      option('I', 'Concern about damaging relationships or reputation'),
      option('J', 'Concern about being socially isolated within a project or organisation'),
      option('K', 'Fear of being seen as ungrateful'),
      option('L', 'Fear of being excluded from informal networks'),
      option('M', 'It did not feel serious enough to raise'),
      option('N', 'Other')
    ]
  },
  {
    id: 'section_prevention_support',
    section: 'Prevention & Support',
    type: 'fact',
    label: 'Prevention & Support',
    description:
      'These questions are about what might help prevent or reduce racism or racialised harm, and how development opportunities are offered, structured, or withheld.'
  },
  {
    id: 'mitigation_supports',
    section: 'Prevention & Support',
    type: 'multi-select',
    label: 'Would any of the following help to avert or mitigate the kinds of issues related to racism or racialised harm that you are thinking of?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Mandated antiracism training'),
      option('B', 'Not being the only racially minoritised person in the room'),
      option('C', 'Having a named, independent person to report to'),
      option('D', 'There being clear consequences for harm'),
      option('E', 'Having real-time support in the room'),
      option('F', 'Open acknowledgement of power dynamics from senior staff'),
      option('G', 'Interventions from colleagues in the moment'),
      option('H', 'Improvements to contracts'),
      option('I', 'More time and resources for the organisation or project'),
      option('J', 'Protection from retaliation after raising concerns'),
      option('K', 'Clear and transparent reporting processes'),
      option('L', 'More diversity in leadership and decision-making roles'),
      option('M', 'Transparent decision-making (casting, hiring, programming)'),
      option('N', 'Better onboarding and shared expectations at the start of projects'),
      option('O', 'Paid time for care, reflection, and conflict resolution'),
      option('P', 'Access to mediation, advocacy, or union support'),
      option('Q', 'Better budgeting for anti-racist practice and support'),
      option('R', 'Other')
    ]
  },
  {
    id: 'development_opportunities',
    section: 'Prevention & Support',
    type: 'multi-select',
    label: 'What kinds of development opportunities have been offered to you?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Labs'),
      option('B', 'Residency'),
      option('C', 'Networking opportunities'),
      option('D', 'Scratch performances'),
      option('E', 'Training (unpaid)'),
      option('F', 'Training (paid)'),
      option('G', 'Mentoring'),
      option('H', 'Assisting'),
      option('I', 'Seed funding'),
      option('J', 'A diversity-focused scheme'),
      option('K', 'R&D with a path towards commissioning or production'),
      option('L', 'Partially resourced commission'),
      option('M', 'Fully resourced commission'),
      option('N', 'Shadowing / traineeship / placement / internship'),
      option('O', 'Free or subsidised rehearsal/development space'),
      option('P', 'Associate artist role'),
      option('Q', 'Introductions to producers, venues, or funders'),
      option('R', 'Touring support'),
      option('S', 'Marketing, press, or audience development support'),
      option('T', 'Equipment, technical, or production support'),
      option('U', 'Paid work framed as "development"'),
      option('V', 'Unpaid or underpaid work framed as "development"'),
      option('W', 'I have not been offered development opportunities'),
      option('X', 'Other')
    ]
  },
  {
    id: 'development_experience',
    section: 'Prevention & Support',
    type: 'radio',
    label: 'How would you describe your experience of development opportunities overall?',
    required: false,
    options: [
      option('A', 'I have progressed into larger opportunities'),
      option('B', 'I have repeatedly been offered development without progression'),
      option('C', 'I have been brought in without long-term support'),
      option('D', 'I have not accessed development opportunities'),
      option('E', 'Other')
    ]
  },
  {
    id: 'section_change_future',
    section: 'Change and The Future',
    type: 'fact',
    label: 'Change and The Future',
    description:
      'These questions are about what has led to meaningful change in the theatre sector, and who has the power to make British theatre more effectively antiracist.'
  },
  {
    id: 'feedback_faith',
    section: 'Change and The Future',
    type: 'segmented',
    label: 'If you were asked to give feedback to an organisation about your experience, how much faith do you have that it would be treated in good faith?',
    description: '1 = Almost no faith at all. 5 = Almost complete faith.',
    required: false,
    options: scale
  },
  {
    id: 'beneficial_changes',
    section: 'Change and The Future',
    type: 'multi-select',
    label: 'In your experience, which of the following have led to significant, beneficial changes in the theatre sector?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Funders changing their policies'),
      option('B', 'Bold programming decisions'),
      option('C', 'Producing organisations changing their practices'),
      option('D', 'Organisations hiring different leaders'),
      option('E', 'Organised activism (e.g. unions or advocacy groups)'),
      option('F', 'Informal networks'),
      option('G', 'Mentoring or interpersonal support'),
      option('H', 'Training or development schemes'),
      option('I', 'Public pressure, media attention, or social media'),
      option('J', 'Artists refusing work or speaking out'),
      option('K', 'Changes to pay, contracts, or working conditions'),
      option('L', 'Racially minoritised artists creating their own platforms'),
      option('M', 'Long-term partnerships with racially minoritised artists or companies'),
      option('N', 'Other')
    ]
  },
  {
    id: 'real_step',
    section: 'Change and The Future',
    type: 'textarea',
    label: 'Have you experienced (or heard of) a structure, policy, or producing approach that felt like a real step in the right direction? If so, what was it, and why did it work?',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'power_to_make_antiracist',
    section: 'Change and The Future',
    type: 'multi-select',
    label: 'In your experience, who has significant power to make British theatre antiracist?',
    description: 'Choose as many as you like.',
    required: false,
    options: [
      option('A', 'Funders'),
      option('B', 'Boards'),
      option('C', 'Artistic Directors'),
      option('D', 'Producers / Executive producers'),
      option('E', 'Unions (e.g. Equity)'),
      option('F', 'Freelancers collectively'),
      option('G', 'Critics / press'),
      option('H', 'Audiences / community pressure'),
      option('I', 'No one - the system is designed to resist change'),
      option('J', 'Other')
    ]
  },
  {
    id: 'follow_up_contact',
    section: 'Final contact / optional follow-up',
    type: 'email',
    label: 'If you are willing to participate in a 30-minute follow-up interview, please leave your contact details here.',
    description: 'Optional.',
    required: false,
    placeholder: 'name@example.com',
    validation: { email: true }
  }
];

export const answerableScreens = surveyScreens.filter((screen) => screen.type !== 'fact');
