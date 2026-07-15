import React from 'react';

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="hero-title text-center" style={{color: 'var(--primary-color)'}}>About SS Globe Tech</h1>
        <div className="two-col mt-4">
          <div className="col text-content">
            <h2 className="text-gold">Mission</h2>
            <p>At SS Globe Tech, our mission is to connect global buyers with trusted manufacturers through reliable sourcing, high-quality engineering solutions, and seamless international trade services. We are committed to excellence, innovation, and ethical business practices that create lasting value for our clients and partners worldwide.</p>
            
            <h2 className="text-gold mt-4">Vision</h2>
            <p>At SS Globe Tech, our vision is to be a leading global sourcing and export partner for engineering products, connecting manufacturers and buyers worldwide through quality, reliability, and innovation. We aim to drive sustainable growth and long-term success for our clients in the global marketplace.</p>
          </div>
          <div className="col">
            <h2 className="text-gold">Values</h2>
            <p>Integrity, innovation, quality, and customer focus are at the heart of our business. These values inspire us to deliver reliable sourcing and international trade solutions while building trust and long-term success for our clients worldwide.</p>
            
            <h2 className="text-gold mt-4">Why Choose Us?</h2>
            <ul style={{listStyle: 'inside', padding: '1rem 0'}}>
              <li>Unparalleled expertise and professional services.</li>
              <li>High-quality products and complete client satisfaction.</li>
              <li>On-time delivery and price benefits.</li>
              <li>Certified by GST, FIEO, SEPC.</li>
            </ul>
          </div>
        </div>

        <div className="section text-center mt-4 pt-4" style={{borderTop: '1px solid #ddd'}}>
          <h2 className="text-gold">Our Leadership</h2>
          <div style={{marginTop: '2rem'}}>
            <img src="/images/sachin.jpeg" alt="Sachin GS" style={{width: '250px', height: '350px', objectFit: 'cover', borderRadius: '8px', border: '4px solid var(--secondary-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
            <h3 className="mt-4" style={{marginBottom: '0.5rem'}}>Sachin G.S.</h3>
            <p className="text-muted" style={{fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px'}}>Founder & CEO</p>
            <p style={{maxWidth: '600px', margin: '1rem auto'}}>
              "SS GlobeTech is your trusted Global Sourcing Partner, connecting international buyers with reliable Indian manufacturers for engineering products, industrial components, customized parts, packaging solutions, and IT services."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
