export const events = [];

export function getEventBySlug(slug) {
  return events.find((event) => event.slug === slug);
}
