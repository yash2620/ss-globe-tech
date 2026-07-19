'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const categories = [
  {
    id: 'exporter',
    title: 'Exporter of Rolled Rings, Bearing Races & Automobile Components',
    desc: 'Ring rolling forging and machining for automotive and industrial applications.',
    image: '/images/services-forging.png',
  },
  {
    id: 'mining',
    title: 'Mining Hydraulic Parts',
    desc: 'Forged & CNC machined hydraulic guide sleeve/retainer (alloy steel) for mining hydraulic cylinders.',
    image: '/images/services-machining.png',
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Industry',
    desc: 'Proto sample and batch production for oil and gas sector requirements.',
    image: '/images/services-engineering.png',
  },
];

export default function ForgedMachined() {
  const [activeCategory, setActiveCategory] = useState('exporter');

  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Forged &amp; Machined Components</h1>
            <p>Heavy-duty forged and machined parts for automotive, mining, and oil &amp; gas industries.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This product line focuses on heavy-duty forged and machined parts. It covers automotive applications (bearing races, rolled rings), mining equipment (hydraulic sleeves/retainers), and oil &amp; gas industry prototypes. The emphasis is on durability, precision machining, and industrial-grade alloy steel.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Alloy Steel</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>CNC Machining</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Ring Rolling</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>Heat Treatment</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>



      <section className="section">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Product Gallery</h2>
            <p className="section-subtitle">Visual overview of our forged and machined components.</p>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {Array.from({ length: 14 }, (_, i) => i + 8).map((num) => (
              <ScrollAnimation key={num}>
                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={`/images/products/PRODUCT_01_forging_machining/Picture${num}.png`} alt={`Forged Component ${num}`} style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Forged &amp; Machined Components?</h2>
            <p>Contact us for custom solutions, prototypes, and batch production.</p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
