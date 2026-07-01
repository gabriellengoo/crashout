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
      'A day of testimony, research framing, sector challenge, and collective action around anti-racism in theatre.',
    description:
      'Crash Out brings theatre workers, artists, students, audience members, researchers, and cultural leaders together to record lived experience and turn it into evidence for sector accountability.',
    speakers: ['State Presenting', 'Rafier Piare Production', 'Royal Speech of Art'],
    programme: [
      'Opening provocation: what theatre still refuses to record',
      'Lived experience and testimony session',
      'Research workshop: turning experience into evidence',
      'Accountability roundtable for institutions and funders',
      'Survey completion space and access support'
    ],
    schedule: [
      { time: '10:30', item: 'Arrival and registration' },
      { time: '11:00', item: 'Opening session' },
      { time: '12:15', item: 'Testimony and research framing' },
      { time: '13:15', item: 'Break' },
      { time: '14:00', item: 'Workshops and survey support' },
      { time: '16:00', item: 'Sector demands and next steps' }
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
      'This session is designed for people who want to contribute to the research outside a conference format. You can arrive at any point during the session.',
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
