'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const features = [
  'Custom-engineered to customer specifications',
  'Precision hardening for maximum wear resistance',
  'Superior surface finish through precision grinding',
  'Tight dimensional tolerances',
  'Long service life in mechanical systems',
  'Batch production with consistent quality',
];

const applications = [
  'Automotive transmissions',
  'Industrial gearboxes',
  'Hydraulic systems',
  'Agricultural machinery',
  'Material handling equipment',
  'General mechanical assemblies',
];

const productImages = Array.from({ length: 7 }, (_, i) => i + 55);

export default function HardenedGroundParts() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Hardened &amp; Ground Precision Parts</h1>
            <p>Custom-engineered precision pins and shafts hardened and ground to exact specifications.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col" style={{ gap: '4rem' }}>
            <ScrollAnimation className="col">
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This product line focuses on custom-engineered precision parts such as pins and shafts. These are hardened and ground to meet specific customer requirements, ensuring wear resistance, accuracy, and long service life in mechanical systems.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Heat Treatment</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Precision Grinding</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>CNC Machining</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Custom Design</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="col">
              <div className="office-showcase">
                <img src="/images/products/PRODUCT_04_harden_and_ground_pins/Picture55.png" alt="Hardened & Ground Precision Parts" className="office-main-img" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f0f2f8' }}>
        <div className="container">
          <div className="two-col" style={{ gap: '4rem', alignItems: 'start' }}>
            <ScrollAnimation className="col">
              <h2 className="text-gold">Key Features</h2>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
                {features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--secondary)', fontSize: '1.2rem' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
            <ScrollAnimation className="col">
              <h2 className="text-gold">Applications</h2>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
                {applications.map((a, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--secondary)', fontSize: '1.2rem' }}>✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Product Gallery</h2>
            <p className="section-subtitle">Visual overview of our hardened and ground precision parts.</p>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {productImages.map((num) => (
              <ScrollAnimation key={num}>
                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={`/images/products/PRODUCT_04_harden_and_ground_pins/Picture${num}.png`} alt={`Hardened Part ${num}`} style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollAnimation>
            <div className="card" style={{ textAlign: 'center', padding: '3rem', background: 'var(--primary)', color: 'var(--white)' }}>
              <h2 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Custom Design Manufacturing</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700, margin: '0 auto 1rem', lineHeight: '1.8' }}>
                We manufacture hardened and ground pins and shafts to customer design specifications. From prototype to batch production, our team ensures precision and quality at every step.
              </p>
              <div style={{ fontSize: '2.5rem', marginTop: '1.5rem', color: 'var(--secondary)' }}>⚙️</div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Precision Parts?</h2>
            <p>Submit your design specifications for a custom quote.</p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
