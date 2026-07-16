import ScrollAnimation from '@/components/ScrollAnimation';

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>About SS Globe Tech</h1>
            <p>Passion for precision, driven by quality — your trusted global sourcing partner.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <ScrollAnimation className="col">
              <h2 className="text-gold">Mission</h2>
              <p>At SS Globe Tech, our mission is to connect global buyers with trusted manufacturers through reliable sourcing, high-quality engineering solutions, and seamless international trade services. We are committed to excellence, innovation, and ethical business practices that create lasting value for our clients and partners worldwide.</p>

              <h2 className="text-gold" style={{ marginTop: '2rem' }}>Vision</h2>
              <p>To be a leading global sourcing and export partner for engineering products, connecting manufacturers and buyers worldwide through quality, reliability, and innovation. We aim to drive sustainable growth and long-term success for our clients in the global marketplace.</p>
            </ScrollAnimation>
            <ScrollAnimation className="col">
              <h2 className="text-gold">Values</h2>
              <p>Integrity, innovation, quality, and customer focus are at the heart of our business. These values inspire us to deliver reliable sourcing and international trade solutions while building trust and long-term success for our clients worldwide.</p>

              <h2 className="text-gold" style={{ marginTop: '2rem' }}>Why Choose Us?</h2>
              <ul style={{ listStyle: 'inside', padding: '1rem 0', lineHeight: '2.2' }}>
                <li>Unparalleled expertise and professional services.</li>
                <li>High-quality products and complete client satisfaction.</li>
                <li>On-time delivery and price benefits.</li>
                <li>Certified by GST, FIEO, SEPC.</li>
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f0f2f8', textAlign: 'center' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Our Leadership</h2>
            <p className="section-subtitle">Meet the founder driving SS Globe Tech&rsquo;s vision.</p>
            <div style={{ marginTop: '2rem' }}>
              <img
                src="/images/sachin.jpeg"
                alt="Sachin GS"
                style={{ width: '220px', height: '300px', objectFit: 'cover', borderRadius: '8px', border: '4px solid var(--secondary)', boxShadow: 'var(--shadow-lg)' }}
              />
              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.3rem' }}>Sachin G.S.</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Founder & CEO</p>
              <p style={{ maxWidth: '700px', margin: '1.5rem auto', color: 'var(--text-light)', fontStyle: 'italic', fontSize: '1.1rem' }}>
                &ldquo;SS GlobeTech is your trusted Global Sourcing Partner, connecting international buyers with reliable Indian manufacturers for engineering products, industrial components, customized parts, packaging solutions, and IT services.&rdquo;
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
