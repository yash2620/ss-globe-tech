'use client';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const features = [
  'Suitable for forged shafts, automotive parts, hydraulic components, and precision engineering parts',
  'Gun drill size: 5 mm to 32 mm. (Mfg on Four Spindle / Two spindle auto machine)',
  'Maximum drilling depth: 1000 mm.',
  'Part between centre Run out (CNC machining stage) within 0.010 mm.',
  'Gun drill ID taper: 0.1 mm per 100 mm drilling length.',
];

const applications = [
  'Automotive transmission shafts',
  'Hydraulic cylinder pistons and rods',
  'Industrial gearbox shafts',
  'Earth mining equipment components',
  'Oil and gas drilling equipment',
  'General engineering precision shafts',
];

const images = [
  { file: 'GUN DRILL ID 8 MM AND DRILL LENGTH 300 MM.png', name: 'GUN DRILL ID 8 MM AND DRILL LENGTH 300 MM' },
  { file: 'GUN DRILL ID 15 MM AND DRILL LENGTH 850 MM.png', name: 'GUN DRILL ID 15 MM AND DRILL LENGTH 850 MM' },
  { file: 'GUN DRILL ID 16 MM AND DRILL LENGTH 450 MM.png', name: 'GUN DRILL ID 16 MM AND DRILL LENGTH 450 MM' },
  { file: 'GUN DRILL ID 25 MM AND DRILL LENGTH 650 MM.png', name: 'GUN DRILL ID 25 MM AND DRILL LENGTH 650 MM' },
  { file: 'GUN DRILL ID 28 MM AND DRILL LENGTH 850 MM.png', name: 'GUN DRILL ID 28 MM AND DRILL LENGTH 850 MM' },
  { file: 'critical Long shaft 900 mm length.png', name: 'CRITICAL LONG SHAFT 900 MM LENGTH' },
  { file: 'Picture99.png', name: 'HIGH PRECISION SHAFT - 1' },
  { file: 'Picture100.png', name: 'HIGH PRECISION SHAFT - 2' },
];

export default function ProductPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>High Precision Long Forge Machine Shafts</h1>
            <p>Customer-designed forge long shafts with CNC/VMC precision machining and gun drill capabilities.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This product line specializes in high-precision long forge machine shafts manufactured to customer specifications. We offer CNC/VMC precision machining, gun drill process (ID 5mm to 32mm), and lengths up to 1000mm. Our shafts are used across automotive, hydraulic, mining, and industrial applications where precision and durability are critical.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>CNC Machining</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Gun Drilling</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Heat Treatment</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Custom Design</span>
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
            <p className="section-subtitle">Visual overview of our high precision shafts with specifications.</p>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {images.map((img) => (
              <ScrollAnimation key={img.file}>
                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={`/images/products/PRODUCT_10_high_precision_shafts/${encodeURIComponent(img.file)}`} alt={img.name} style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                  <div style={{ padding: '0.75rem 1rem', background: 'var(--primary)', color: 'var(--white)', fontSize: '0.8rem', fontWeight: 600, textAlign: 'center', letterSpacing: '0.5px' }}>
                    {img.name}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need High Precision Shafts?</h2>
            <p>Contact us for custom-designed forge shafts with gun drilling and precision machining.</p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
