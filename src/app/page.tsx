import React from 'react';

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(11,31,61,0.8), rgba(11,31,61,0.8)), url('/images/hero.png')" }}>
        <div className="container hero-content animate-fade-in">
          <h1 className="hero-title">Precision <span className="text-gold">.</span> Innovation <span className="text-gold">.</span> Excellence</h1>
          <p className="hero-subtitle">Passion for precision, driven by quality...</p>
          <a href="/products" className="btn-primary">Explore Our Products</a>
        </div>
      </section>

      <section className="section about-snippet">
        <div className="container">
          <div className="two-col">
            <div className="col text-content">
              <h2>About SS Globe Tech</h2>
              <p>We are the trusted Merchant Exporter in India, excelling in global trade and ensuring seamless exports of diverse products. Exporting excellence is our commitment, setting us apart in the industry.</p>
              <p>Operating from Pune, Maharashtra, we specialize in a diverse range of engineering products and IT services. We connect global buyers with trusted manufacturers.</p>
              <a href="/about" className="link-arrow">Read More</a>
            </div>
            <div className="col image-content">
              <img src="/images/about.png" alt="Premium Office" style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="section services-snippet bg-dark">
        <div className="container">
          <div className="text-center">
            <h2 className="text-white">Our Expertise</h2>
            <p className="text-muted">High-quality engineering solutions and seamless international trade services.</p>
          </div>
          <div className="grid-3">
            <div className="card text-center">
              <img src="/images/service_forging.png" alt="Forging & Machining" style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem'}} />
              <h3>Forging & Machining</h3>
              <p>Gears, shafts, Earth Mining hydraulic parts.</p>
            </div>
            <div className="card text-center">
              <img src="/images/service_hpdc.png" alt="Specialized Gun Drilling" style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem'}} />
              <h3>Specialized Gun Drilling</h3>
              <p>High precision long forge machine shafts, ID taper 0.1 mm per 100 mm.</p>
            </div>
            <div className="card text-center">
              <img src="/images/service_schematic.png" alt="SchematicPro IT Services" style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem'}} />
              <h3>SchematicPro IT Services</h3>
              <p>Professional electrical schematic services, compliant with IEC and IEEE.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section global-network">
        <div className="container text-center">
          <h2>Global Network</h2>
          <p>Connecting Businesses Across Continents</p>
          <div className="network-locations">
            <span>India (Pune & Gujarat)</span>
            <span className="dot">·</span>
            <span>USA (California)</span>
            <span className="dot">·</span>
            <span>Australia (NSW)</span>
            <span className="dot">·</span>
            <span>Canada (Ontario)</span>
            <span className="dot">·</span>
            <span>Dubai (Sharjah)</span>
          </div>
          <a href="/network" className="btn-primary mt-4">View Our Global Offices</a>
        </div>
      </section>
    </>
  );
}
