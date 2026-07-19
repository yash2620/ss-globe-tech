export default function TrustBadges() {
  const badges = [
    { name: 'GST Certified', icon: '/images/GST logo.webp' },
    { name: 'Udyog Aadhar', icon: '/images/Udyog-Aadhar-Certificate.webp' },
    { name: 'ICE Certified', icon: '/images/ICE-Certificate.webp' },
  ];

  return (
    <section className="trust-badges-section">
      <div className="container">
        <p className="trust-badges-label">Certified & Recognized By</p>
        <div className="trust-badges-grid">
          {badges.map((b) => (
            <div key={b.name} className="trust-badge-item">
              <img src={b.icon} alt={b.name} className="trust-badge-logo" />
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
