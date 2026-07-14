const option = (_letter, text) => text;
const otherOption = () => 'Other, please specify';

const scale = ['1', '2', '3', '4', '5'];

export const surveyScreens = [
  {
    id: 'survey_intro',
    section: 'Making Theatre Anti-Racist',
    type: 'fact',
    variant: 'survey-intro',
    label: 'Making Theatre Anti-Racist',
    subtitle: 'Experiences of race, power and producing in British theatre.',
    description:
      'This survey is for anyone who works in British theatre, in any role, and is racially minoritised in this country.\n\nThe survey should take around 10-15 minutes. There are no compulsory questions. You can skip any question.\n\nSome questions ask about racism, racialised harm and difficult workplace experiences. Please take your time, and only share what feels manageable.'
  },
  {
    id: 'project_statement',
    section: 'Making Theatre Anti-Racist',
    type: 'fact',
    variant: 'statement',
    label: 'About this project',
    description:
      'This project is being led by the Royal Central School of Speech and Drama and Rafia Hussain Productions, and is supported by Arts Council England and the Arts and Humanities Research Council. Outreach for the survey is also being supported by state of the [art].\n\nThe goal of this project is to make recommendations about how theatre producing can be made more effectively anti-racist. This survey has been designed by Munotida Chinyanga and Tom Six, with advisory input from the project’s advisory group, for the purpose of gathering information and feedback about how models of theatre producing can work better for racially minoritised artists and workers.\n\nThe survey asks about you, your working life, your experiences of racism, and your experiences of EDI, equality, diversity and inclusion, and anti-racism. There are no compulsory questions, and any information that you give us that could be used to identify you will not be shared publicly.\n\nWe will ask you to identify yourself in racialised and gendered terms. We are aware that this information is often used by organisations in ways that objectify or instrumentalise people, and that you may be reluctant to give us this information for this or other reasons. In this project, this information will only be used for the purposes of interpreting the data that we collect. We therefore ask that you represent yourself as accurately as possible within the terms available.'
  },
  {
    id: 'section_about_you',
    section: 'About You',
    type: 'fact',
    label: 'About You',
    description: 'These questions ask how you describe yourself, how you are identified, and how you are positioned in relation to theatre work.'
  },
  {
    id: 'identity_preferences',
    section: 'About You',
    type: 'multi-select',
    label: 'Which of the following feel important to how you describe yourself, your position, or your perspective?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'In terms of identity categories (e.g. as a queer Black woman)'),
      option('B', 'In terms of what you do professionally'),
      option('C', 'In relation to aesthetic choices or preferences (e.g. about your appearance or taste)'),
      option('D', 'As a member of a particular ethnic group (e.g. Yoruba, Jewish, Welsh etc)'),
      option('E', 'In terms of your nationality (e.g. British, Nigerian, American)'),
      option('F', 'As a member of a religious group (e.g. Muslim, Jewish, Christian etc)'),
      option('G', 'In terms of your place of birth'),
      option('H', 'In relation to habitual activities or hobbies (e.g. as a skater, musician, runner)'),
      option('I', 'In terms of your relationships with other people (e.g. as a parent or friend)'),
      option('J', 'In terms of your background or material experiences (e.g. as a migrant or survivor, or being from the class you grew up in)'),
      option('K', 'In terms of your socio-economic position'),
      option('L', 'In relation to your educational background'),
      option('M', 'In terms of your character or characteristic behaviour'),
      option('N', 'Political identity, values or commitments'),
      option('O', 'Disabled, D/deaf, neurodivergent, chronically ill, or access-related identity'),
      otherOption('P')
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
    label: 'Thinking about racialised or ethnic terms, how are you usually identified in Britain?',
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
    placeholder: 'Type your answer here...',
    visibleWhen: (answers) => answers.gender_identity === option('F', 'Not in any of these ways')
  },
  {
    id: 'working_life_identified',
    section: 'About You',
    type: 'multi-select',
    label: 'In your theatre work, in which of the following ways do you think you are most often identified?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'As someone who performs a specific function in their work (e.g. as a facilitator)'),
      option('B', 'As a "type" or in relation to your assumed character (e.g. as someone who plays certain roles)'),
      option('C', 'As a member of an identity category'),
      option('D', 'In terms of your background or experience'),
      option('E', 'In terms of your class background'),
      option('F', 'In relation to the expectations of an organisation or project'),
      option('G', 'In relation to the aesthetic, taste, tone or type of work you make'),
      option('H', 'In relation to your collaborators, peers or networks'),
      otherOption('I')
    ]
  },
  {
    id: 'positioning_changes',
    section: 'About You',
    type: 'radio',
    label: 'Has the way you are seen, racialised, or positioned in the theatre sector changed over time? For example, compared with the start of your career or practice.',
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
    placeholder: 'Type your answer here...',
    visibleWhen: (answers) => answers.positioning_changes === option('Y', 'Yes')
  },
  {
    id: 'born_in_uk',
    section: 'About You',
    type: 'radio',
    label: 'Were you born in the UK?',
    required: false,
    otherField: true,
    options: [
      option('A', 'Yes, and I have lived here for all or most of my life'),
      option('B', 'Yes, but I have lived for significant periods of time outside the UK'),
      option('C', 'No, but I came to the UK as a young child'),
      option('D', 'No, but I was educated at least partly in the British school system'),
      option('E', 'No, but I attended a British university'),
      option('F', 'No, I came to the UK as an adult'),
      option('G', 'No, and I am only temporarily resident in the UK'),
      otherOption('H')
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
    id: 'interlude_sector_workforce',
    section: 'About You',
    type: 'fact',
    variant: 'interlude',
    label: 'Sector note',
    description:
      'Over 200,000 self-employed and freelance workers make up around 70% of the UK theatre workforce.\n\nThe next section asks about work, roles, contracts and income because producing structures shape who gets in, who gets paid and who is able to stay.',
    source: 'Freelancers Make Theatre Work and Stage Directors UK written evidence to UK Parliament, 2024.'
  },
  {
    id: 'section_working_life',
    section: 'Your Working Life',
    type: 'fact',
    label: 'Your Working Life',
    description: 'These questions ask about your roles, work contexts, contracts, career stage and financial security.'
  },
  {
    id: 'main_work',
    section: 'Your Working Life',
    type: 'multi-select',
    label: 'Which of the following roles describe your work?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'Performer / Actor'),
      option('B', 'Director'),
      option('C', 'Writer'),
      option('D', 'Dramaturg'),
      option('E', 'Producer'),
      option('F', 'Designer (sound / set / lighting / video / costume)'),
      option('G', 'Choreographer / Movement Director / Voice Coach'),
      option('H', 'Composer'),
      option('I', 'Stage management / Technical / Production'),
      option('J', 'Intimacy Director / Wellbeing Support'),
      option('K', 'Facilitator / Participation / Learning / Community'),
      option('L', 'Arts management / Administration / Marketing / Fundraising / Press'),
      option('M', 'Critic / Researcher / Academic'),
      otherOption('N')
    ]
  },
  {
    id: 'work_mode',
    section: 'Your Working Life',
    type: 'multi-select',
    label: 'Thinking about your theatre/arts work specifically, how are you usually paid or contracted?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'Freelance (project-to-project)'),
      option('B', 'PAYE / contracted staff'),
      option('C', 'Self-employed sole trader'),
      option('D', 'Limited company'),
      option('E', 'Mainly unpaid / voluntary'),
      otherOption('F')
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
      option('E', 'These labels do not fit my experience')
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
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'Subsidised theatre (e.g. NT, Young Vic, RSC, Leeds Playhouse, Birmingham Rep)'),
      option('B', 'Commercial theatre (e.g. West End, commercial touring)'),
      option('C', 'Independent or fringe'),
      option('D', 'Opera'),
      option('E', 'Dance'),
      option('F', 'Cabaret'),
      option('G', 'Circus'),
      option('H', 'Drag'),
      option('I', 'Youth theatre / participatory / community settings'),
      option('J', 'Festivals / outdoor / site-based work'),
      option('K', 'Education / conservatoire / university'),
      otherOption('L')
    ]
  },
  {
    id: 'financial_security',
    section: 'Your Working Life',
    type: 'segmented',
    label: 'How financially secure does your theatre/arts work currently feel?',
    description:
      '1 = No security, unpredictable income, no stable contracts or financial buffer. 5 = Very secure, stable income, predictable work and some financial buffer.',
    required: false,
    options: scale,
    scaleLabels: {
      '1': 'No security, unpredictable income, no stable contracts or financial buffer',
      '2': 'Low security, some paid work, but income is unstable',
      '3': 'Mixed, some stability, but still financially uncertain',
      '4': 'Fairly secure, regular income or reliable contracts',
      '5': 'Very secure, stable income, predictable work and some financial buffer'
    }
  },
  {
    id: 'interlude_before_racism',
    section: 'Your Working Life',
    type: 'fact',
    variant: 'interlude',
    label: 'Before you continue',
    description:
      'The 2025 Big Freelancer Survey found that 44% of respondents earned less than the 2024 UK National Living Wage.\n\nSecurity shapes what people can challenge, refuse, report or leave. The next section asks about racism and racialised harm. You can skip any question.',
    source: 'Freelancers Make Theatre Work, Big Freelancer Survey 2025.'
  },
  {
    id: 'section_experiencing_racism',
    section: 'Experiencing Racism',
    type: 'fact',
    label: 'Experiencing Racism',
    description: 'These questions ask about racism and racialised harm in and around theatre work. You can skip any question.'
  },
  {
    id: 'racism_locations',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'Where do you most often experience racism or racialised harm?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
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
      otherOption('R')
    ]
  },
  {
    id: 'outside_racism_impact',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'Have experiences of racism or racialised harm outside formal theatre work affected your working life, wellbeing, or sense of safety in the sector?',
    description: 'Select all that apply. If you select No, Not sure, or Prefer not to say, please do not select any other option.',
    required: false,
    otherField: true,
    exclusiveOptions: [
      option('F', 'No'),
      option('G', 'Not sure'),
      option('H', 'Prefer not to say')
    ],
    options: [
      option('A', 'Yes, through public or audience encounters'),
      option('B', 'Yes, through online racism or social media'),
      option('C', 'Yes, through travel, commuting, policing, borders or public space'),
      option('D', 'Yes, through wider social, community or family experiences'),
      option('E', 'Yes, through cumulative exhaustion or emotional impact'),
      option('F', 'No'),
      option('G', 'Not sure'),
      option('H', 'Prefer not to say'),
      otherOption('I')
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
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'I was tokenised or used for optics'),
      option('B', 'A racist stereotype was applied to or assumed of me or my work'),
      option('C', 'I was expected to perform authenticity (e.g. in accent, behaviour, or cultural expression)'),
      option('D', 'I was excluded socially or professionally'),
      option('E', 'I was subject to gatekeeping'),
      option('F', 'I was consistently spoken over or dismissed'),
      option('G', 'My expertise was doubted or undermined'),
      option('H', 'I was overly scrutinised or micro-managed'),
      option('I', 'I was held to a different standard than others'),
      option('J', 'I was labelled difficult, aggressive, intimidating, ungrateful or unprofessional'),
      option('K', 'I or my work was deemed too "risky"'),
      option('L', 'I was favoured for being seen as "safe", compliant or non-confrontational'),
      option('M', 'A harmful comment or joke was made'),
      option('N', 'I experienced barriers in institutional processes (contracts, pay, access, credits, casting)'),
      option('O', 'I was asked to educate others or do additional emotional labour'),
      option('P', 'A complaint or concern was ignored or contained'),
      option('Q', 'A specific culture, language, ethnicity, region, or community was assumed from my broader racial/national identity'),
      option('R', 'I was included to illustrate diversity, but not given any agency'),
      option('S', 'My work, ideas, language, cultural knowledge, or community connections were used without proper credit, payment, consent, or acknowledgement'),
      option('T', 'I was expected to represent or speak for a whole community'),
      option('U', 'I was treated as interchangeable with others from a broader racial or cultural group'),
      option('V', 'My racial or cultural identity was misread or misclassified'),
      option('W', 'I felt pressure to avoid making work that was "too political" or "too racial"'),
      otherOption('X')
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
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    exclusiveOptions: [
      option('N', 'No one had the power to change it'),
      option('O', 'I am not sure')
    ],
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
      option('O', 'I am not sure'),
      otherOption('P')
    ]
  },
  {
    id: 'interlude_racism_impact',
    section: 'Experiencing Racism',
    type: 'fact',
    variant: 'interlude',
    label: 'Sector note',
    description:
      'A 2021 report from Freelancers Make Theatre Work found that 94% of the work created for the nation’s stages is entirely reliant on freelancers.\n\nThe next questions ask about impact because harm is not only about what happened. It is also about what changes afterwards.',
    source: 'Freelancers Make Theatre Work, Big Freelancer Report 2021.'
  },
  {
    id: 'impact',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'What impact did this experience have on you?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    exclusiveOptions: [option('M', 'It had little or no lasting impact')],
    options: [
      option('A', 'I avoided that organisation or sector afterwards'),
      option('B', 'I became more politically active (e.g. in a union or campaigning)'),
      option('C', 'It affected my confidence or mental health'),
      option('D', 'It affected future opportunities or references'),
      option('E', 'It changed the kind of work I make or how I frame it'),
      option('F', 'It changed how I negotiate fees or contracts'),
      option('G', 'It made me consider leaving theatre/performance or the arts sector'),
      option('H', 'It made me document incidents or communicate more carefully in writing'),
      option('I', 'It affected my physical health or energy levels'),
      option('J', 'It affected my sense of safety in work environments'),
      option('K', 'It affected my trust in organisations or institutions'),
      option('L', 'It made me seek support from peers, community, or external networks'),
      option('M', 'It had little or no lasting impact'),
      option('N', 'It affected my behaviour or expression at work'),
      otherOption('O')
    ]
  },
  {
    id: 'behaviour_expression_impact',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'If the experience affected your behaviour or expression at work, how did that show up?',
    description: 'Answer only if relevant.',
    required: false,
    otherField: true,
    visibleWhen: (answers) => Array.isArray(answers.impact) && answers.impact.includes(option('N', 'It affected my behaviour or expression at work')),
    options: [
      option('A', 'I became more cautious'),
      option('B', 'I became quieter'),
      option('C', 'I avoided certain conversations'),
      option('D', 'I avoided certain people, rooms or organisations'),
      option('E', 'I felt I had to over-explain myself'),
      option('F', 'I felt I had to manage how I was perceived'),
      option('G', 'I became more careful about what I shared'),
      option('H', 'I changed how I spoke, dressed, moved or presented myself'),
      otherOption('I')
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
    options: scale,
    scaleLabels: {
      '1': 'Almost never',
      '5': 'Almost always'
    }
  },
  {
    id: 'spaces_with_others',
    section: 'Experiencing Racism',
    type: 'multi-select',
    label: 'When you are in spaces with other racially minoritised people, how would you describe the experience?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
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
      otherOption('J')
    ]
  },
  {
    id: 'interlude_before_edi',
    section: 'Experiencing Racism',
    type: 'fact',
    variant: 'interlude',
    label: 'Context',
    description:
      'Creative UK\'s 2025 Diversity Leaders report found that people from ethnic minority heritage make up 15.9% of the UK workforce, but just over 9.8% of managers and directors across the cultural sector.\n\nThe next section asks how diversity and anti-racism are understood, measured and practised.',
    source: 'Creative UK, Diversity Leaders Report 2025.'
  },
  {
    id: 'section_edi',
    section: 'EDI and Anti-racism',
    type: 'fact',
    label: 'EDI and Anti-racism',
    description: 'These questions ask how diversity, EDI and anti-racism are understood, measured and practised in theatre.'
  },
  {
    id: 'diversity_measured',
    section: 'EDI and Anti-racism',
    type: 'multi-select',
    label: 'In your experience, how is racial diversity usually understood or measured in British theatre?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'By the number of racially minoritised people involved'),
      option('B', 'By who is visible on stage or in public-facing roles'),
      option('C', 'By who is in leadership or decision-making roles'),
      option('D', 'By who is present in casts, creative teams or production teams'),
      option('E', 'By whether racially minoritised people are supported into long-term careers, not just short-term projects'),
      option('F', 'By the stories, cultures or communities represented in the work'),
      option('G', 'By audience or community engagement'),
      option('H', 'In relation to funding, marketing or reporting requirements'),
      option('I', 'In terms of anti-racist practice, care or accountability'),
      option('J', 'In relation to class, politics, disability, gender or other intersecting factors'),
      option('K', 'It is often treated superficially or tokenistically'),
      option('L', 'I do not think it is meaningfully measured'),
      option('M', 'I am not sure / it varies a lot'),
      otherOption('N')
    ]
  },
  {
    id: 'work_without_reduction',
    section: 'EDI and Anti-racism',
    type: 'segmented',
    label: 'How often have you felt able to work without being reduced to your racialised identity or perceived diversity value?',
    description: '1 = Never. 5 = As much as I have wanted.',
    required: false,
    options: scale,
    scaleLabels: {
      '1': 'Never',
      '5': 'As much as I have wanted'
    }
  },
  {
    id: 'identity_shaped_non_race_projects',
    section: 'EDI and Anti-racism',
    type: 'multi-select',
    label: 'When working on projects not explicitly about race or identity, has your racial identity, cultural background, or experience as a racially minoritised person affected how your work is interpreted, programmed, marketed, funded or valued? If so, in what ways?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    exclusiveOptions: [option('A', 'It did not significantly shape the experience')],
    options: [
      option('A', 'It did not significantly shape the experience'),
      option('B', 'I was still subject to assumptions or stereotypes'),
      option('C', 'I was treated as a technical or functional contributor rather than a creative one'),
      option('D', 'I felt pressure to avoid making the work about race'),
      option('E', 'I felt freer because identity was not the focus'),
      option('F', 'I felt invisible or unacknowledged'),
      option('G', 'I was included for diversity optics'),
      otherOption('H')
    ]
  },
  {
    id: 'non_race_projects_context',
    section: 'EDI and Anti-racism',
    type: 'textarea',
    label: 'You can use this space to expand on your answer if you wish.',
    required: false,
    placeholder: 'Type your answer here...'
  },
  {
    id: 'work_misrepresented',
    section: 'EDI and Anti-racism',
    type: 'segmented',
    label: 'How often have you found your work framed in relation to your racialised identity in a way that misrepresented it?',
    description: '1 = Never happened. 5 = Happens all the time.',
    required: false,
    options: scale,
    scaleLabels: {
      '1': 'Never happened',
      '5': 'Happens all the time'
    }
  },
  {
    id: 'diversity_data_misrepresent',
    section: 'EDI and Anti-racism',
    type: 'segmented',
    label: 'Have you experienced data about diversity being used to misrepresent your experience of working with or for an organisation?',
    description: '1 = No, never. 5 = Yes, always.',
    required: false,
    options: scale,
    scaleLabels: {
      '1': 'No, never',
      '5': 'Yes, always'
    }
  },
  {
    id: 'misrepresentation_context',
    section: 'EDI and Anti-racism',
    type: 'textarea',
    label: 'If you answered that your work is sometimes or often misrepresented in this way, you can use this space to expand on that answer if you wish.',
    description: 'Answer only if relevant.',
    required: false,
    placeholder: 'Type your answer here...',
    visibleWhen: (answers) => Number(answers.work_misrepresented) >= 3 || Number(answers.diversity_data_misrepresent) >= 3
  },
  {
    id: 'section_power_accountability',
    section: 'Power & Accountability',
    type: 'fact',
    label: 'Power & Accountability',
    description: 'These questions ask about reporting, accountability, power and what usually happens when issues are raised.'
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
    options: [
      { short: 'VU', label: 'Very uncomfortable', value: 'Very uncomfortable' },
      { short: 'U', label: 'Uncomfortable', value: 'Uncomfortable' },
      { short: 'N', label: 'Neutral', value: 'Neutral' },
      { short: 'C', label: 'Comfortable', value: 'Comfortable' },
      { short: 'VC', label: 'Very comfortable', value: 'Very comfortable' },
      { short: 'N/A', label: 'Not applicable', value: 'Not applicable' }
    ]
  },
  {
    id: 'raised_issue_outcomes',
    section: 'Power & Accountability',
    type: 'multi-select',
    label: 'When these issues are raised, what usually happens in your experience?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
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
      otherOption('O')
    ]
  },
  {
    id: 'not_raise_reasons',
    section: 'Power & Accountability',
    type: 'multi-select',
    label: 'If you chose not to raise an issue related to racism or racialised harm, what were (or would be) the main reasons?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
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
      otherOption('N')
    ]
  },
  {
    id: 'interlude_before_support',
    section: 'Power & Accountability',
    type: 'fact',
    variant: 'interlude',
    label: 'Context',
    description:
      'The 2025 Big Freelancer Survey also reported that 32% of respondents said more than half of the hours they worked in the sector were unpaid.\n\nThe next section asks what support, prevention and development need to look like in practice.',
    source: 'Freelancers Make Theatre Work, Big Freelancer Survey 2025.'
  },
  {
    id: 'section_prevention_support',
    section: 'Prevention, Support and Development',
    type: 'fact',
    label: 'Prevention, Support and Development',
    description: 'These questions ask what might help prevent or reduce harm, and what development opportunities people have been offered.'
  },
  {
    id: 'mitigation_supports',
    section: 'Prevention, Support and Development',
    type: 'multi-select',
    label: 'Thinking about situations you have experienced or witnessed, which of the following would help prevent or reduce racism or racialised harm in theatre workplaces or projects?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'Mandated anti-racism training'),
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
      otherOption('R')
    ]
  },
  {
    id: 'development_opportunities',
    section: 'Prevention, Support and Development',
    type: 'multi-select',
    label: 'What kinds of development opportunities have you been offered in theatre or the wider arts sector?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    exclusiveOptions: [option('W', 'I have not been offered development opportunities')],
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
      otherOption('X')
    ]
  },
  {
    id: 'development_experience',
    section: 'Prevention, Support and Development',
    type: 'multi-select',
    label: 'How would you describe your experience of development opportunities overall?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'I have progressed into larger opportunities'),
      option('B', 'I have repeatedly been offered development without progression'),
      option('C', 'I have been brought in without long-term support'),
      option('D', 'I have not accessed development opportunities'),
      otherOption('E')
    ]
  },
  {
    id: 'interlude_before_future',
    section: 'Prevention, Support and Development',
    type: 'fact',
    variant: 'interlude',
    label: 'Nearly there',
    description:
      'Creative PEC found that 60% of arts, culture and heritage workers grew up in a household where the main income earner was in a managerial or professional role, compared with 43% of the whole workforce.\n\nThe final section asks what meaningful change could look like, what has worked, and who has power to make it happen.',
    source: 'Creative PEC, Arts, Culture and Heritage: Audiences and Workforce, 2024.'
  },
  {
    id: 'section_change_future',
    section: 'Change and The Future',
    type: 'fact',
    label: 'Change and The Future',
    description: 'These questions ask what meaningful change could look like, what has worked, and who has power to make change happen.'
  },
  {
    id: 'feedback_faith',
    section: 'Change and The Future',
    type: 'segmented',
    label: 'If you were asked to give feedback to an organisation about racism, racialised harm, or your experience as a racially minoritised person, how much faith would you have that the organisation would respond honestly and constructively?',
    description: '1 = Almost no faith at all. 5 = Almost complete faith.',
    required: false,
    options: scale,
    scaleLabels: {
      '1': 'Almost no faith at all',
      '5': 'Almost complete faith'
    }
  },
  {
    id: 'beneficial_changes',
    section: 'Change and The Future',
    type: 'multi-select',
    label: 'In your experience, which of the following have led to significant, beneficial changes in the theatre sector?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
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
      otherOption('N')
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
    id: 'power_to_make_anti_racist',
    section: 'Change and The Future',
    type: 'multi-select',
    label: 'In your experience, who has significant power to make British theatre more meaningfully anti-racist?',
    description: 'Select all that apply.',
    required: false,
    otherField: true,
    options: [
      option('A', 'Funders'),
      option('B', 'Boards'),
      option('C', 'Artistic Directors'),
      option('D', 'Producers / Executive producers'),
      option('E', 'Unions (e.g. Equity)'),
      option('F', 'Freelancers, artists and creative workers collectively'),
      option('G', 'Critics / press'),
      option('H', 'Audiences / community pressure'),
      option('I', 'No one alone, the system is designed to resist change'),
      otherOption('J')
    ]
  },
  {
    id: 'follow_up_contact',
    section: 'Final contact / optional follow-up',
    type: 'email',
    label: 'If you are willing to be contacted about a possible 30-minute follow-up interview, please leave your contact details here. This is optional. Your contact details will only be used to contact you about the interview and will be handled confidentially.',
    required: false,
    placeholder: 'name@example.com',
    validation: { email: true },
    identifying: true
  }
];

export const answerableScreens = surveyScreens.filter((screen) => screen.type !== 'fact');
