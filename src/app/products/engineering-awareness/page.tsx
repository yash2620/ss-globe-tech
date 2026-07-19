'use client';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const services = [
  {
    title: 'GD&T (Geometric Dimensioning & Tolerancing)',
    desc: 'Comprehensive GD&T training and implementation services to ensure precise engineering communication. We help teams interpret and apply GD&T standards per ASME Y14.5, reducing ambiguity in design specifications and improving manufacturing accuracy.',
    icon: '📐',
  },
  {
    title: 'APQP (Advanced Product Quality Planning)',
    desc: 'Structured APQP framework to guide product development from concept to production launch. Our process ensures all quality requirements are identified early, risks are mitigated, and deliverables are met on schedule.',
    icon: '📋',
  },
  {
    title: 'PPAP (Production Part Approval Process)',
    desc: 'End-to-end PPAP documentation and submission support. We prepare all required documentation levels (1-5) including dimensional results, material certifications, capability studies, and control plans for customer approval.',
    icon: '✅',
  },
  {
    title: 'FMEA (Failure Mode & Effects Analysis)',
    desc: 'Proactive risk assessment through Design FMEA and Process FMEA. We identify potential failure modes, evaluate their severity and occurrence, and implement corrective actions to prevent defects.',
    icon: '🛡️',
  },
  {
    title: 'Control Plans & Inspection Planning',
    desc: 'Development of comprehensive control plans and inspection checklists tailored to your production process. We define critical control points, measurement methods, and frequency to maintain consistent quality.',
    icon: '📊',
  },
  {
    title: 'Training & Implementation Support',
    desc: 'Hands-on training programs for engineering and quality teams on GD&T, APQP, PPAP, FMEA, and SPC. We customize the curriculum to your industry and help implement these systems in your daily operations.',
    icon: '🎓',
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Engineering GD &amp; T, APQP &amp; PPAP</h1>
            <p>Comprehensive engineering quality planning services including GD&T, APQP, PPAP, FMEA, and control plans.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Service Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We provide expert engineering quality planning and awareness services including GD&T implementation, APQP documentation, PPAP submissions, FMEA analysis, and control plan development. Our services help manufacturing teams improve product quality, reduce defects, and meet global customer requirements.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>GD&T</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>APQP</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>PPAP</span>
                <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>FMEA</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f0f2f8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((svc, i) => (
              <ScrollAnimation key={i}>
                <div className="card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{svc.icon}</div>
                  <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.15rem' }}>{svc.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.7', flex: 1 }}>{svc.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Need Engineering Quality Support?</h2>
            <p>Contact us for GD&T, APQP, PPAP, and FMEA training and implementation services.</p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
