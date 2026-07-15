import React from 'react';

export default function GlobalNetwork() {
  const networks = [
    {
      country: 'India (Head Office)',
      name: 'Sachin S.',
      address: 'K-Town, A1-802. Kiwale, Ravet. Pune, Pin - 411020',
      email: 'info@ssglobetech.com'
    },
    {
      country: 'USA',
      name: 'Amit D.',
      address: '10454, Sterling Blvd, Cupertino, CA 95014',
      email: 'info@ssglobetech.com'
    },
    {
      country: 'Australia',
      name: 'Vishal P.',
      address: '30A Wolseley Street, Fairfield, NSW 2165',
      email: 'info@ssglobetech.com'
    },
    {
      country: 'Canada',
      name: 'Tushar A.',
      address: '1505-2910 Highway 7, Concord, Ontario, L4K0H8',
      email: 'info@ssglobetech.com'
    },
    {
      country: 'Dubai',
      name: 'Mahesh Y.',
      address: '244, Burj 2000 Damas building, Al Ghuwair, Sharjah',
      email: 'info@ssglobetech.com'
    },
    {
      country: 'India (Gujarat)',
      name: 'Raghavendra R.',
      address: 'Plot No - 906, BOL GIDC, Village - Bol, Tal - Sanand, Ahmedabad',
      email: 'info@ssglobetech.com'
    }
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <h1 className="hero-title text-center" style={{color: 'var(--primary-color)'}}>Our Global Network</h1>
        <p className="text-center text-muted mb-5" style={{maxWidth: '800px', margin: '0 auto', marginBottom: '3rem'}}>
          SS Globe Tech proudly operates across multiple continents. Our strategically located branches ensure seamless international trade and dedicated support for our global clients.
        </p>

        <div className="grid-3">
          {networks.map((net, index) => (
            <div key={index} className="card" style={{borderTop: '4px solid var(--secondary-color)'}}>
              <h3 className="text-gold" style={{marginBottom: '0.5rem'}}>{net.country}</h3>
              <p style={{fontWeight: 600, color: 'var(--primary-color)', marginBottom: '1rem'}}>{net.name}</p>
              <p className="text-muted" style={{fontSize: '0.95rem', marginBottom: '1rem'}}>
                {net.address}
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--primary-color)'}}>
                <strong>Email:</strong> {net.email}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 pt-4" style={{marginTop: '4rem'}}>
          <h2 className="text-gold">Connecting Businesses Across Continents</h2>
          <p className="text-muted mt-4" style={{maxWidth: '700px', margin: '1rem auto'}}>
            No matter where you are in the world, our trusted network of professionals is ready to provide you with top-tier engineering products and sourcing solutions.
          </p>
          <a href="/contact" className="btn-primary" style={{marginTop: '1.5rem'}}>Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
