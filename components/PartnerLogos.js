/* eslint-disable @next/next/no-img-element */

const partners = [
  {
    name: 'State of the Art',
    src: '/images/partners/state-of-the-art.jpeg'
  },
  {
    name: 'Rafia Hussain Productions',
    src: '/images/partners/rafia-hussain-productions.jpeg'
  },
  {
    name: 'Royal Central School of Speech and Drama',
    src: '/images/partners/royal-central.jpeg'
  }
];

export default function PartnerLogos({ compact = false }) {
  return (
    <div className={compact ? 'partner-strip compact' : 'partner-strip'} aria-label="Project partners">
      {partners.map((partner) => (
        <div className="partner-logo" key={partner.name}>
          <img src={partner.src} alt={partner.name} />
        </div>
      ))}
    </div>
  );
}
