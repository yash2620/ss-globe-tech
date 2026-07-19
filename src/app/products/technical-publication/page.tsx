'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const BASE = '/images/products/SERVICE_12_technical_publication';

const services = [
  {
    title: 'Authoring, Editing & Illustration',
    desc: 'Our technical authoring, editing, and technical illustration services deliver precise operation, maintenance, and service manuals enhanced with high-quality visuals. We create XML-based structured content compliant with S1000D and DITA standards, ensuring consistency and scalability. Our experts produce accurate 2D, isometric, and schematic technical illustrations with detailed IPC/IPL and BOM integration. Each deliverable reflects engineering accuracy through continuous updates, standardization, and high-resolution renderings.',
    icon: '✍️',
    tools: [
      { label: 'Adobe Illustrator', img: `${BASE}/illustration-1.png` },
      { label: 'Arbortext Isodraw', img: `${BASE}/illustration-2.png` },
    ],
  },
  {
    title: 'Content Management & Quality Control',
    desc: 'Through our Content Management & Quality Control capabilities, we manage technical documentation lifecycles with meticulous attention to detail. Our processes include structured content organization, version control, validation, and comprehensive quality assurance checks. By establishing and enforcing style guides, we maintain uniformity across all deliverables while ensuring every document meets regulatory and client-specific standards.',
    icon: '🛡️',
    img: `${BASE}/content-image.png`,
    tools: [
      { label: 'Jira', img: `${BASE}/content-and-version-management.png` },
    ],
  },
  {
    title: 'Publishing & Delivery',
    desc: 'Our Publishing & Delivery solutions ensure that your technical documentation reaches users in the right format and platform. We specialize in multi-channel publishing, delivering responsive and interactive documentation in formats such as PDF, XML, HTML5, and image-based outputs. Whether it\'s a digital spare parts catalog or a web-based manual, we ensure seamless access across devices for improved user experience.',
    icon: '📤',
    img: `${BASE}/publishing-image.png`,
    tools: [
      { label: 'Authoring & Publishing Tools', img: `${BASE}/Authoring & Publishing'.png` },
    ],
  },
  {
    title: 'Translation & Localization',
    desc: 'We also offer Translation & Localization services to support global product communication. We translate and localize technical documentation into multiple languages, ensuring regional compliance and cultural relevance for diverse markets.',
    icon: '🌐',
  },
  {
    title: 'Animation & eLearning',
    desc: 'To further enhance engagement and understanding, our Animation & eLearning services bring complex engineering processes to life through interactive 2D and 3D animations, component visualizations, and 3D PDFs that simplify learning and maintenance procedures.',
    icon: '🎬',
    tools: [
      { label: 'Articulate Storyline 360', img: `${BASE}/elearning-authoring-tools-1.png` },
      { label: 'Camtasia', img: `${BASE}/elearning-authoring-tools-2.png` },
    ],
  },
  {
    title: 'Legacy Conversion & Modernization',
    desc: 'With our legacy data conversion and modernization services, we help organizations transition from outdated documentation to modern, structured formats. We digitize legacy manuals and illustrations, convert them into XML or SGML, and rewrite them in Simplified Technical English (ASD-STE) to enhance readability and compliance. Our team also redraws technical illustrations and migrates content from obsolete systems, preserving valuable technical data while upgrading its usability.',
    icon: '🔄',
  },
];

const highlights = [
  { title: 'Smart, Interactive Publications', desc: 'From illustrated parts catalogs to digital IETMs, we create intuitive, intelligent documents that enhance usability and maintenance.' },
  { title: 'Effortless & Accurate Documentation', desc: 'Our streamlined workflows and expert teams ensure every manual and guide is precise, clear, and ready for use.' },
  { title: 'Future-Ready Scalability', desc: 'Modular workflows and advanced tools keep your documentation flexible, scalable, and ready for growth.' },
  { title: 'Standards-Driven Compliance', desc: 'Every delivery aligns with global standards, ensuring reliability, safety, and audit readiness.' },
];

const faqs = [
  {
    q: 'What types of technical documents do you develop?',
    a: 'We develop a wide range of technical documentation, including Illustrated Parts Catalogs (IPC), Operation & Maintenance Manuals (OMM), Service and Repair Manuals, Installation & Commissioning Guides, Training Manuals, and Interactive Electronic Technical Manuals (IETM/IETP), among others.',
  },
  {
    q: 'Can you modernize or convert old documents?',
    a: 'Yes, we specialize in legacy data conversion, upgrading outdated or unstructured content into standardized, structured, and easily maintainable digital formats.',
  },
  {
    q: 'How do you ensure quality and accuracy?',
    a: 'Every project undergoes technical validation by domain experts, multi-stage quality checks, editorial reviews, and compliance verification to ensure precision and consistency.',
  },
  {
    q: 'What is your typical turnaround time?',
    a: 'Turnaround times depend on project scope and complexity, but our streamlined processes and automation tools enable faster delivery without compromising quality.',
  },
  {
    q: 'Do you support translation and localization?',
    a: 'Absolutely. We provide multilingual translation and localization services, adapting content to regional standards, units, and cultural nuances for global readiness.',
  },
  {
    q: 'Do you offer on-site or offshore support models?',
    a: 'Yes, we offer flexible engagement models — on-site, offshore, or hybrid — tailored to your project scale, timeline, and cost requirements, supporting full technical documentation outsourcing solutions.',
  },
];

export default function TechnicalPublication() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="page-header" style={{ position: 'relative', overflow: 'hidden', minHeight: '320px', display: 'flex', alignItems: 'center' }}>
        <img
          src={`${BASE}/title.png`}
          alt="Technical Publication Services"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollAnimation>
            <h1>Technical Publication Services</h1>
            <p style={{ maxWidth: '700px', fontSize: '1.15rem', lineHeight: '1.8' }}>
              Transforming complex engineering data into clear, compliant, and interactive documentation — DITA/XML authoring, iETM, 2D &amp; 3D illustrations and GenAI-assisted workflows.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Highlights */}
      <section className="section" style={{ background: 'var(--primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {highlights.map((h, i) => (
              <ScrollAnimation key={i}>
                <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(200,168,55,0.35)', borderRadius: 'var(--radius)', padding: '2rem' }}>
                  <h3 style={{ color: 'var(--secondary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{h.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>{h.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((svc, i) => (
        <section key={i} className="section" style={{ background: i % 2 === 0 ? '#fff' : '#f0f2f8' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: svc.img ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'center' }}>
              <ScrollAnimation>
                <div>
                  <h2 className="text-gold" style={{ marginBottom: '1.25rem', fontSize: '1.75rem' }}>
                    {svc.icon} {svc.title}
                  </h2>
                  <hr style={{ border: 'none', borderTop: '2px solid var(--secondary)', marginBottom: '1.5rem', width: '60px' }} />
                  <p style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text)', marginBottom: svc.tools ? '2rem' : 0 }}>{svc.desc}</p>

                  {/* Tools used */}
                  {svc.tools && (
                    <div>
                      <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Tools Used</h4>
                      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        {svc.tools.map((tool, ti) => (
                          <div key={ti} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <img
                              src={tool.img}
                              alt={tool.label}
                              style={{ height: '64px', objectFit: 'contain', borderRadius: '8px' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollAnimation>

              {svc.img && (
                <ScrollAnimation>
                  <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                    <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                  </div>
                </ScrollAnimation>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* FAQs */}
      <section className="section" style={{ background: '#f0f2f8' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title" style={{ color: 'var(--primary)' }}>Frequently Asked Questions (FAQs)</h2>
          </ScrollAnimation>
          <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            {faqs.map((faq, i) => (
              <ScrollAnimation key={i}>
                <div
                  style={{ background: 'var(--white)', borderRadius: 'var(--radius)', marginBottom: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow)' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', textAlign: 'left', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem' }}>{faq.q}</span>
                    <span style={{ color: 'var(--secondary)', fontSize: '1.25rem', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.5rem', background: '#f8f9fc' }}>
                      <p style={{ color: 'var(--text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Ready to Elevate Your Technical Documentation?</h2>
            <p>Contact us to discuss your documentation needs and get a tailored solution.</p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
