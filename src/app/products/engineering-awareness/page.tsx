'use client';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const services = [
  {
    id: 'gdt',
    title: 'GD&T (Geometric Dimensioning & Tolerancing)',
    desc: 'GD&T is a globally accepted engineering language defined by ASME Y14.5 and ISO GPS standards. It is used to clearly define the allowable variation in the geometry of manufactured parts, ensuring interchangeability, functionality, and consistent quality.',
    image: '/images/products/SERVICE_13_engineering_awareness/1. GD&T (Geometric Dimensioning & Tolerancing).png',
  },
  {
    id: 'apqp',
    title: 'APQP (Advanced Product Quality Planning)',
    desc: 'APQP is a structured product quality planning methodology developed by the automotive industry (AIAG) to ensure customer requirements are met throughout product development and production.',
    images: [
      '/images/products/SERVICE_13_engineering_awareness/2. APQP (Advanced Product Quality Planning)-1.png',
      '/images/products/SERVICE_13_engineering_awareness/2. APQP (Advanced Product Quality Planning-2.png',
    ],
  },
  {
    id: 'ppap',
    title: 'PPAP (Production Part Approval Process)',
    desc: 'PPAP is a standardized process in the automotive and manufacturing industries to validate that production parts meet all customer engineering design and specification requirements. It ensures supplier manufacturing processes are capable of producing quality parts consistently.',
    images: [
      '/images/products/SERVICE_13_engineering_awareness/3. PPAP (Production Part Approval Process).png',
      '/images/products/SERVICE_13_engineering_awareness/3. PPAP (Production Part Approval Process)-1.png',
    ],
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Engineering GD &amp; T, APQP &amp; PPAP</h1>
            <p>Comprehensive engineering quality awareness and planning services for global manufacturing standards.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Service Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We provide expert engineering quality awareness and planning services covering GD&T implementation, APQP documentation, and PPAP submissions. Our services help manufacturing teams improve product quality, reduce defects, and meet global customer requirements.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>GD&T</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>APQP</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>PPAP</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {services.map((svc, i) => (
        <section key={svc.id} className="section" style={{ background: i % 2 === 0 ? '#fff' : '#f0f2f8' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: svc.images ? '1fr 1fr' : '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <ScrollAnimation className="col">
                <div>
                  <h2 className="text-gold" style={{ marginBottom: '1.25rem', fontSize: '1.75rem' }}>
                    {svc.title}
                  </h2>
                  <hr style={{ border: 'none', borderTop: '2px solid var(--secondary)', marginBottom: '1.5rem', width: '60px' }} />
                  <p style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text)' }}>{svc.desc}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation className="col">
                {svc.images ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {svc.images.map((img, idx) => (
                      <div key={idx} style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                        <img src={img} alt={`${svc.title} ${idx + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </div>
                    ))}
                  </div>
                ) : svc.image ? (
                  <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                    <img src={svc.image} alt={svc.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                ) : null}
              </ScrollAnimation>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Engineering Quality Support?</h2>
            <p>Contact us for GD&T, APQP, and PPAP training and implementation services.</p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
