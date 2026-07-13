export const events = [
  {
    slug: 'crash-out-conference',
    title: 'Crash Out Conference',
    date: '2026-09-18',
    displayDate: '18 September 2026',
    time: '10:30-17:00',
    venue: 'Royal Speech of Art',
    address: 'London, UK',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=London%2C%20UK',
    theme: 'cyan',
    summary:
      'A live survey activation for racially minoritised theatre workers.',
    description:
      'Crash/Out brings racially minoritised theatre workers together to gather, ask honest questions, contribute to practical resource-building, and complete the survey privately.',
    speakers: ['State Presenting', 'Rafier Piare Production', 'Royal Speech of Art'],
    programme: [
      'Opening provocation: race, power and theatre producing',
      'Shared meal and collective conversation',
      'Anonymous resource-pack questions',
      'Private survey completion space',
      'What meaningful change could look like across the sector'
    ],
    schedule: [
      { time: '10:30', item: 'Arrival and registration' },
      { time: '11:00', item: 'Opening session' },
      { time: '12:15', item: 'Collective conversation and anonymous questions' },
      { time: '13:15', item: 'Break' },
      { time: '14:00', item: 'Resource pack questions and survey support' },
      { time: '16:00', item: 'Shared themes and next steps' }
    ]
  },
  {
    slug: 'survey-room',
    title: 'Crash Out Survey Room',
    date: '2026-10-03',
    displayDate: '3 October 2026',
    time: '13:00-18:00',
    venue: 'Independent theatre venue',
    address: 'Manchester, UK',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Manchester%2C%20UK',
    theme: 'pink',
    summary:
      'A quieter drop-in space for people who want time, privacy, and access support while completing the survey.',
    description:
      'This session is designed for people who want to contribute to the research outside a conference format. You can arrive at any point, ask questions, and complete the survey privately.',
    speakers: ['Crash Out research team'],
    programme: [
      'Drop-in survey completion',
      'Access-supported private writing space',
      'Optional facilitated discussion',
      'Information about how evidence will be used'
    ],
    schedule: [
      { time: '13:00', item: 'Doors open' },
      { time: '13:30', item: 'Privacy and consent briefing' },
      { time: '14:00', item: 'Survey completion support' },
      { time: '16:30', item: 'Optional group discussion' }
    ]
  }
];

export function getEventBySlug(slug) {
  return events.find((event) => event.slug === slug);
}
