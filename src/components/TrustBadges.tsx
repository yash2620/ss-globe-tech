export default function TrustBadges() {
  const badges = [
    { name: 'GST Certified', icon: '/images/gst-badge.png' },
    { name: 'FIEO Member', icon: '/images/fieo-badge.png' },
    { name: 'APEDA Registered', icon: '/images/apeda-badge.png' },
    { name: 'SEPC Member', icon: '/images/sepc-badge.png' },
    { name: 'DGFT Licensed', icon: '/images/dgft-badge.png' },
  ];

  return (
    <section className="trust-badges-section">
      <div className="container">
        <p className="trust-badges-label">Certified &amp; Recognized By</p>
        <div className="trust-badges-grid">
          {badges.map((b) => (
            <div key={b.name} className="trust-badge-item">
              <div className="trust-badge-placeholder" />
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
