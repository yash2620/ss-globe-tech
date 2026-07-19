'use client';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const features = [
  'Custom-designed products per customer specifications and drawings',
  'Rapid prototyping and sample development',
  'Batch production with consistent quality',
  'Multi-material capability including alloy steel, stainless steel, and aluminum',
  'In-house CNC machining and finishing',
  'Stringent quality inspection at every stage',
];

const applications = [
  'Automotive custom components',
  'Industrial machinery parts',
  'Hydraulic and pneumatic system components',
  'Agricultural equipment parts',
  'Material handling components',
  'General engineering custom requirements',
];

const productImages = Array.from({ length: 7 }, (_, i) => i + 92);

export default function ProductPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Custom Design Products</h1>
            <p>Customer-designed and manufactured products tailored to specific engineering requirements.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This product line focuses on custom design and manufacturing of components based on customer drawings and specifications. We work closely with clients to develop prototypes, refine designs, and deliver batch production with consistent quality. Our multi-material capability and in-house machining ensure fast turnaround and precise results.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Custom Design</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Rapid Prototyping</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>CNC Machining</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Batch Production</span>
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
            <p className="section-subtitle">Visual overview of our custom-designed products.</p>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {productImages.map((num) => (
              <ScrollAnimation key={num}>
                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={`/images/products/PRODUCT_09_customer_design_products/Picture${num}.png`} alt={`Custom Design Product ${num}`} style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Custom Designed Products?</h2>
            <p>Submit your drawings and specifications for a custom quote.</p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
