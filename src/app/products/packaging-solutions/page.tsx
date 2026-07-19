'use client';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const consumablePackaging = [
  'PP sheet / PP Solid sheet / HDPE Solid sheet / PP Floor protection',
  'Packaging Bubble rolls and bags',
  'EPE/EVA Foam Rolls with and without adhesive',
  'EPE/EVA Foam sheet with and without adhesive',
  'PVC Transparent / Mesh Dust cover for crate and trolleys',
  'Stretch film Wrapping rolls',
  'Strapping & container Lashing solution',
  'Biodegradable & compostable poly bags',
  'VCI Packaging to protect parts from rust',
  'PET & PP Straps',
  'HDPE Tape with adhesive',
  'Transparent tape',
  'Stretch Belts',
  'HDPE/PP Jumbo Bags',
  'All Packaging accessories — Handle, Top corners, Bottom corners, Rivets, Crate dust cover & all other consumable packaging for customer support',
];

const applications = [
  'Automotive component export packaging',
  'Heavy machinery and equipment crating',
  'Fragile instrumentation packaging',
  'Oversized and irregular shape handling',
  'Batch production packaging for OEMs',
  'Hazardous material compliant packaging',
];

const productImages = Array.from({ length: 4 }, (_, i) => i + 73);

export default function ProductPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Packaging Solutions</h1>
            <p>Industrial-grade packaging, heavy engineering part packaging, and export-ready crating services.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This product line focuses on professional packaging solutions for industrial and engineering components. We provide export-ready crating, corrosion protection, custom cushioning, and logistics coordination to ensure your products reach global destinations in perfect condition.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Export Crating</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Corrosion Protection</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Custom Cushioning</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Logistics Support</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f0f2f8' }}>
        <div className="container">
          <div className="two-col" style={{ gap: '4rem', alignItems: 'start' }}>
            <ScrollAnimation className="col">
              <h2 className="text-gold">Consumable Packaging</h2>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
                {consumablePackaging.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--secondary)', fontSize: '1.2rem' }}>✓</span>
                    {item}
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
            <p className="section-subtitle">Visual overview of our packaging solutions.</p>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {productImages.map((num) => (
              <ScrollAnimation key={num}>
                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={`/images/products/PRODUCT_06_packaging_solutions/Picture${num}.png`} alt={`Packaging ${num}`} style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Packaging Solutions?</h2>
            <p>Contact us for export-ready packaging and crating services.</p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
