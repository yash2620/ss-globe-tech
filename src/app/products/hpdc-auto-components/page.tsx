'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const products = [
  { name: 'Differential Gear Box Cover', image: '/images/automotive.png' },
  { name: 'Main Centre Housing', image: '/images/product2.png' },
  { name: 'Gear Box Cover', image: '/images/product1.png' },
  { name: 'Engine Side Cover (BS3)', image: '/images/services-machining.png' },
];

const additionalRange = [
  'LED light fixtures',
  'Casted components',
  'Auto part housings',
  'Crankcase body',
  'PDC components',
  'Diesel engine pistons',
  'Gearbox housing assemblies',
  'Engine crankcases',
];

export default function AutomotiveHousings() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Automotive Components &amp; Housings</h1>
            <p>Precision-cast housings and covers for automotive and mechanical systems.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This product line highlights precision-cast housings and covers for automotive and mechanical systems. It also extends into diversified manufacturing with LED fixtures and engine components. The focus is on casting, machining, and assembly for automotive and industrial applications.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Die Casting</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>CNC Machining</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Aluminium</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Assembly</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f0f2f8' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Product Gallery</h2>
            <p className="section-subtitle">Visual overview of our HPDC auto components and light fixtures.</p>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {Array.from({ length: 14 }, (_, i) => i + 25).map((num) => (
              <ScrollAnimation key={num}>
                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={`/images/products/PRODUCT_02_hpdc_auto_components/Picture${num}.png`} alt={`HPDC Component ${num}`} style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col" style={{ gap: '4rem', alignItems: 'start' }}>
            <ScrollAnimation className="col">
              <h2 className="text-gold">Additional Product Range</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>We also manufacture a wide range of complementary components.</p>
            </ScrollAnimation>
            <ScrollAnimation className="col">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {additionalRange.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>&#10003;</span>
                    <span style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Automotive Components?</h2>
            <p>Contact us for casting, machining, and assembly solutions.</p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
