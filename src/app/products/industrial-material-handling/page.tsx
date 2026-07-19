'use client';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const features = [
  'Custom-designed conveyor systems for factory automation',
  'Heavy-duty material handling equipment',
  'Bulk material handling solutions',
  'Automated sorting and packaging lines',
  'Ergonomic workstations and assembly lines',
  'End-to-end installation and commissioning',
];

const applications = [
  'Automotive manufacturing plants',
  'Warehousing and distribution centers',
  'Food processing facilities',
  'Pharmaceutical production lines',
  'Mining and mineral processing',
  'Port and cargo handling',
];

const productImages = Array.from({ length: 11 }, (_, i) => i + 62);

export default function ProductPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Industrial Material Handling</h1>
            <p>Comprehensive conveyor systems, material handling equipment, and factory automation solutions.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This product line covers industrial material handling solutions including conveyor systems, automated material handling equipment, and factory automation. We design and supply systems that improve efficiency, reduce labor costs, and enhance workplace safety across manufacturing and logistics operations.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Conveyor Systems</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Factory Automation</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Bulk Handling</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Turnkey Solutions</span>
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
            <p className="section-subtitle">Visual overview of our industrial material handling solutions.</p>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {productImages.map((num) => (
              <ScrollAnimation key={num}>
                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={`/images/products/PRODUCT_05_industrial_material_handling/Picture${num}.png`} alt={`Material Handling ${num}`} style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Material Handling Solutions?</h2>
            <p>Contact us for custom conveyor systems and factory automation equipment.</p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
