'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const segments = [
  {
    id: 'off-highway',
    prefix: 'A',
    title: 'A) Off Highway Segments',
    desc: 'Heavy-duty cast iron and ductile iron components for construction, mining, and agricultural machinery.',
    count: 4,
  },
  {
    id: 'gearbox',
    prefix: 'B',
    title: 'B) Gear Box Segments',
    desc: 'Precision cast housings and components for automotive and industrial gearbox applications.',
    count: 4,
  },
  {
    id: 'ev',
    prefix: 'C',
    title: 'C) Electric Vehicle Segments',
    desc: 'Lightweight ductile iron components designed for EV drivetrain and chassis applications.',
    count: 4,
  },
  {
    id: 'genset',
    prefix: 'D',
    title: 'D) Genset and Other Segments',
    desc: 'Robust cast components for generator sets and other heavy equipment applications.',
    count: 4,
  },
];

export default function GrayCastIron() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Gray Cast Iron &amp; Ductile Iron Components</h1>
            <p>High-strength cast iron and ductile iron parts for heavy machinery, automotive, and EV applications.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This product line specializes in cast iron and ductile iron parts. Applications include heavy machinery (off-highway), automotive gearboxes, electric vehicle components, and generator sets. These materials are chosen for strength, vibration resistance, and cost-effective manufacturing.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Gray Cast Iron</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Ductile Iron</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>CNC Machining</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Heat Treatment</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {segments.map((seg, index) => (
        <section
          key={seg.id}
          className="section"
          style={{ background: index % 2 === 0 ? '#f0f2f8' : '#fff' }}
        >
          <div className="container">
            <ScrollAnimation>
              <h2 className="section-title">{seg.title}</h2>
              <p className="section-subtitle">{seg.desc}</p>
            </ScrollAnimation>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '1.5rem',
                marginTop: '3rem',
              }}
            >
              {Array.from({ length: seg.count }, (_, i) => i + 1).map((num) => (
                <ScrollAnimation key={num}>
                  <div
                    style={{
                      borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                      border: '1px solid #e5e7eb',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <img
                      src={`/images/products/PRODUCT_03_gray_cast_iron/${seg.prefix}-${num}.png`}
                      alt={`${seg.title} - Image ${num}`}
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'contain',
                        background: '#fff',
                        display: 'block',
                      }}
                    />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Cast Iron Components?</h2>
            <p>Contact us for custom casting solutions across all application segments.</p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
