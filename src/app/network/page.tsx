import ScrollAnimation from '@/components/ScrollAnimation';

const networks = [
  { country: 'India (Head Office)', flag: '/images/india.png', name: 'Sachin S.', address: 'K-Town, A1-802. Kiwale, Ravet. Pune, Pin - 411020', email: 'service@ssglobetech.com' },
  { country: 'USA', flag: '/images/usa.png', name: 'Amit D.', address: '10454, Sterling Blvd, Cupertino, CA 95014', email: 'info@ssglobetech.com' },
  { country: 'Australia', flag: '/images/australia.png', name: 'Vishal P.', address: '30A Wolseley Street, Fairfield, NSW 2165', email: 'service@ssglobetech.com' },
  { country: 'Canada', flag: '/images/canada.png', name: 'Tushar A.', address: '1505-2910 Highway 7, Concord, Ontario, L4K0H8', email: 'service@ssglobetech.com' },
  { country: 'Dubai', flag: '/images/dubai.png', name: 'Mahesh Y.', address: '244, Burj 2000 Damas building, Al Ghuwair, Sharjah', email: 'info@ssglobetech.com' },
  { country: 'India (Gujarat)', flag: '/images/india.png', name: 'Raghavendra R.', address: 'Plot No - 906, BOL GIDC, Village - Bol, Tal - Sanand, Ahmedabad', email: 'service@ssglobetech.com' },
];

export default function GlobalNetwork() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Our Global Network</h1>
            <p>SS Globe Tech proudly operates across multiple continents with strategically located branches.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="global-network-map">
        <div className="container">
          <ScrollAnimation>
            <div className="network-map-wrapper">
              <img src="/images/global-network-1.png" alt="Global Network Map" className="network-map-img" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {networks.map((net, index) => (
              <ScrollAnimation key={index}>
                <div className="card" style={{ borderTop: '4px solid var(--secondary)' }}>
                  <h3 className="text-gold" style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src={net.flag} alt="" style={{ width: 28, height: 20, objectFit: 'cover', borderRadius: 2 }} />
                    {net.country}
                  </h3>
                  <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '0.8rem' }}>{net.name}</p>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.8rem', lineHeight: '1.6' }}>{net.address}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--primary)' }}><strong>Email:</strong> {net.email}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
