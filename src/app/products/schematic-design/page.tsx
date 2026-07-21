'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const schematicServices = [
  {
    id: 'cad-conversion',
    title: 'CAD Conversion & Digitization',
    shortDesc: 'Convert hand-drawn, scanned, or legacy paper schematics into clean, editable CAD files with full annotation and component labelling.',
    icon: '/images/services-1.png',
    fullDesc: 'Our CAD conversion service transforms your legacy documentation into modern, editable digital formats. We handle hand-drawn sketches, scanned PDFs, faded blueprints, and outdated CAD files, converting them into precise, layered drawings in your preferred CAD environment (AutoCAD Electrical, EPLAN, SolidWorks Electrical, Zuken E3.series). Every component is accurately labelled, cross-references are maintained, and the drawing structure follows your company standards.',
    features: [
      'Hand-drawn to CAD conversion',
      'Scanned PDF/blueprint digitization',
      'Legacy CAD format migration',
      'Full annotation & component labelling',
      'Cross-reference preservation',
      'Company standard compliance',
    ],
    standards: ['IEC 60617', 'IEEE 315', 'NFPA 79', 'Company Standards'],
    industries: ['Automotive', 'Rail/Locomotive', 'Marine', 'Industrial Machinery'],
    image: '/images/services-1.png',
  },
  {
    id: 'schematic-modification',
    title: 'Schematic Modification & Revision Management',
    shortDesc: 'Component swaps, rerouting, new circuit additions, or full revision-block updates to keep documentation in sync with hardware changes.',
    icon: '/images/services-2.jpeg',
    fullDesc: 'Keep your electrical documentation current with our modification services. Whether you need component substitutions, circuit rerouting, new circuit additions, or complete revision-block updates, we ensure your schematics accurately reflect the as-built hardware. All changes maintain full revision history, version control, and standards compliance.',
    features: [
      'Component substitution & swaps',
      'Circuit rerouting & additions',
      'Revision-block updates',
      'Full revision history tracking',
      'Version-controlled deliverables',
      'Change summary reports',
    ],
    standards: ['IEC 60617', 'IEEE 315', 'NFPA 79', 'ASME Y14.35'],
    industries: ['Automotive', 'Rail/Locomotive', 'Marine', 'Power Generation'],
    image: '/images/services-2.jpeg',
  },
  {
    id: 'as-built-documentation',
    title: 'As-Built Documentation & Redline Integration',
    shortDesc: 'Transfer site redlines and as-installed markups into the master drawing set, producing a clean, version-controlled as-built package.',
    icon: '/images/As-Built-Documentation-Redline-Integration.jpeg',
    fullDesc: 'Bridge the gap between design intent and field reality. We take your site redlines, as-installed markups, and field annotations and integrate them into the master drawing set. The result is a clean, version-controlled as-built package ready for commissioning, maintenance, and regulatory compliance.',
    features: [
      'Redline/markup integration',
      'As-installed verification',
      'Master drawing set updates',
      'Version-controlled as-built package',
      'Commissioning-ready deliverables',
      'Regulatory compliance documentation',
    ],
    standards: ['IEC 60617', 'IEEE 315', 'NFPA 79', 'ISO 9001'],
    industries: ['Automotive', 'Rail/Locomotive', 'Marine', 'Infrastructure'],
    image: '/images/As-Built-Documentation-Redline-Integration.jpeg',
    isStatic: true,
  },
];

const industries = [
  {
    id: 'automotive',
    title: 'Automotive Sector',
    image: '/images/automotive.png',
    description: 'End-to-end electrical schematic solutions for vehicle architectures — from concept to production.',
    capabilities: [
      'Vehicle electrical architecture design',
      'Harness routing & bundle optimization',
      'ECU & sensor integration schematics',
      'EV/HEV high-voltage power distribution',
      'Body control module wiring',
      'ADAS sensor interface diagrams',
    ],
    standards: ['ISO 26262', 'IEC 60617', 'SAE J1939', 'LV 148'],
    tools: ['AutoCAD Electrical', 'EPLAN', 'Zuken E3.series', 'Capital'],
  },
  {
    id: 'locomotive',
    title: 'Locomotive & Rail Sector',
    image: '/images/locomotive.png',
    description: 'Rail-specific schematic engineering for traction, signaling, and auxiliary systems across global networks.',
    capabilities: [
      'Traction power & converter schematics',
      'Train control & monitoring (TCMS)',
      'Signaling & communication systems',
      'Auxiliary power & HVAC wiring',
      'Brake system control circuits',
      'Door & passenger info systems',
    ],
    standards: ['EN 50121', 'IEC 60617', 'IEEE 1473', 'UIC 558'],
    tools: ['AutoCAD Electrical', 'EPLAN', 'Zuken E3.series', 'SEE Electrical'],
  },
  {
    id: 'marine',
    title: 'Marine & Offshore Sector',
    image: '/images/marine.png',
    description: 'Marine-grade electrical documentation for commercial vessels, naval ships, and offshore platforms.',
    capabilities: [
      'Main & emergency power distribution',
      'Propulsion & thruster control systems',
      'Navigation & communication networks',
      'Safety, alarm & monitoring systems',
      'Ballast & cargo handling controls',
      'DP (Dynamic Positioning) systems',
    ],
    standards: ['IEC 60092', 'IEEE 45', 'DNV-CG-0339', 'ABS Rules'],
    tools: ['AutoCAD Electrical', 'EPLAN', 'Zuken E3.series', 'SolidWorks Electrical'],
  },
];

export default function SchematicServices() {
  const [activeIndustry, setActiveIndustry] = useState('automotive');

  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>SchematicPro Engineering Services</h1>
            <p>Precision Electrical CAD — Standards-Compliant Drawings for Global Industries</p>
          </ScrollAnimation>
        </div>
      </section>

      {/* INFO-1: Schematic Design Services intro */}
      <section className="section" style={{ background: '#f0f2f8' }}>
        <div className="container">
          <ScrollAnimation>
            <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="text-gold" style={{ marginBottom: '1.5rem' }}>Schematic Design Services</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--text)' }}>
                We provide professional schematic design services for engineering and industrial applications, including electrical schematics, wiring diagrams, hydraulic and pneumatic circuits, mechanical layouts, control panel drawings, PLC documentation, and CAD drafting. Our designs are prepared to international engineering standards, ensuring accuracy, reliability, and ease of manufacturing, installation, and maintenance.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* INFO-2: Vision & Mission */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <ScrollAnimation>
              <div className="card" style={{ padding: '2.5rem', borderTop: '4px solid var(--secondary)' }}>
                <h2 style={{ color: 'var(--primary)', marginBottom: '1.25rem', fontSize: '2rem' }}>Vision</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-light)' }}>
                  To be the trusted partner for electrical schematic modifications and updates, delivering accurate, standards-compliant drawings for clients across industrial, commercial, and infrastructure sectors worldwide.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="card" style={{ padding: '2.5rem', borderTop: '4px solid var(--primary)' }}>
                <h2 style={{ color: 'var(--primary)', marginBottom: '1.25rem', fontSize: '2rem' }}>Mission</h2>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
                  {[
                    'Delivering clean, precise, and standards-compliant electrical drawings.',
                    'Applying deep industry expertise across Automotive, Locomotive, and Marine domains.',
                    'Ensuring compliance with IEC 60617, IEEE 315, NFPA 79 standards.',
                    'Empowering clients with reliable, high-quality electrical design documentation.',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--secondary)', fontSize: '1.2rem', flexShrink: 0 }}>✓</span>
                      <span style={{ color: 'var(--text)', fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* INFO-3: Industry Experience */}
      <section className="section" style={{ background: 'var(--primary)' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Our Industry Experience</h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', marginTop: '3rem', textAlign: 'center' }}>
            {[
              { pct: '60%', label: 'Automotive', sector: 'Automotive Sector', desc: 'E3.series schematic modifications for OEMs and Tier-1 automotive suppliers worldwide.', color: '#c8a837' },
              { pct: '25%', label: 'Locomotive', sector: 'Locomotive Sector', desc: 'E3.series wiring and control system schematics for rail and locomotive engineering projects.', color: '#c8a837' },
              { pct: '15%', label: 'Marine', sector: 'Marine Sector', desc: 'E3.series electrical schematic services for commercial and defense marine vessel projects.', color: '#c8a837' },
            ].map((item, i) => (
              <ScrollAnimation key={i}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '120px', height: '120px', borderRadius: '50%',
                    border: `12px solid ${item.color}`,
                    borderTopColor: 'rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.8rem', fontWeight: '800', color: item.color,
                  }}>
                    {item.pct}
                  </div>
                  <span style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '0.4rem 1.5rem', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.label}
                  </span>
                  <h3 style={{ color: 'var(--secondary)', margin: 0 }}>{item.sector}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '250px' }}>{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Our Schematic Services</h2>
            <p className="section-subtitle">Three core services covering the full lifecycle of electrical documentation — from digitization to as-built delivery.</p>
          </ScrollAnimation>

          <div className="grid-3" style={{ marginTop: '3rem' }}>
            {schematicServices.map((service) => (
              <div key={service.id} className={`service-card ${service.isStatic ? 'service-card-static' : ''}`}>
                <ScrollAnimation>
                  {service.isStatic ? (
                    <>
                      <img src={service.icon} alt={service.title} className="service-card-img" />
                      <div className="service-card-body">
                        <h3>{service.title}</h3>
                        <p>{service.shortDesc}</p>
                        <span className="static-badge">Detailed Scope Available on Request</span>
                      </div>
                    </>
                  ) : (
                    <Link href={`/products/schematic/${service.id}`} className="service-card-link">
                      <img src={service.icon} alt={service.title} className="service-card-img" />
                      <div className="service-card-body">
                        <h3>{service.title}</h3>
                        <p>{service.shortDesc}</p>
                      </div>
                    </Link>
                  )}
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f0f2f8' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">Deep domain expertise across three core sectors with multi-CAD proficiency.</p>
          </ScrollAnimation>

          <div style={{ marginTop: '3rem' }}>
            <div className="industry-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`industry-tab ${activeIndustry === ind.id ? 'active' : ''}`}
                  style={{
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    border: '2px solid var(--secondary)',
                    background: activeIndustry === ind.id ? 'var(--secondary)' : 'transparent',
                    color: activeIndustry === ind.id ? 'var(--primary)' : 'var(--secondary)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {ind.title}
                </button>
              ))}
            </div>

            <div className="industry-content">
              {industries.filter((ind) => ind.id === activeIndustry).map((ind) => (
                <div key={ind.id} className="industry-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                  <ScrollAnimation className="col">
                    <div className="industry-image-wrapper" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                      <img src={ind.image} alt={ind.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation className="col">
                    <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '2rem' }}>{ind.title}</h3>
                    <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>{ind.description}</p>

                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Core Capabilities</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                        {ind.capabilities.map((cap, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
                            <span style={{ color: 'var(--secondary)', fontSize: '1.2rem' }}>✓</span>
                            <span style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                      <div>
                        <h4 style={{ marginBottom: '0.75rem', color: 'var(--primary)' }}>Standards Compliance</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {ind.standards.map((std, i) => (
                            <span key={i} style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.35rem 0.85rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 500 }}>
                              {std}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 style={{ marginBottom: '0.75rem', color: 'var(--primary)' }}>CAD Platforms</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {ind.tools.map((tool, i) => (
                            <span key={i} style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '0.35rem 0.85rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Our Project Workflow</h2>
            <p className="section-subtitle">A streamlined 5-step process from file submission to production-ready deliverables.</p>
          </ScrollAnimation>
          <div className="grid-3" style={{ marginTop: '3rem', gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem', position: 'relative' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>1</div>
              <h3>Submit Your Files</h3>
              <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>Upload existing files — scans, PDFs, or CAD — along with a brief describing the required changes.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>2</div>
              <h3>Engineer Review & Quote</h3>
              <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>A qualified engineer audits your files, clarifies scope, and sends a fixed-price quote within 4 business hours.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>3</div>
              <h3>Drafting & Modification</h3>
              <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>Work is carried out in your target CAD environment with full revision history maintained throughout.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>4</div>
              <h3>QA & Standards Check</h3>
              <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>A second engineer checks every drawing against your brief, applicable standards, and DRC rules before release.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>5</div>
              <h3>Deliver & Sign Off</h3>
              <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>Native files, PDFs, and a change summary delivered — revision-stamped, named, and ready for production.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Ready to Modernize Your Schematics?</h2>
            <p>Send us your files for a fixed-price quote within 4 business hours. Revisions due to our error are free.</p>
            <Link href="/contact" className="btn-primary">Get Started</Link>
          </ScrollAnimation>
        </div>
      </section>

      <style jsx>{`
        .service-card-static {
          cursor: default;
        }
        .service-card-static:hover {
          transform: none;
          box-shadow: var(--shadow);
        }
        .static-badge {
          display: inline-block;
          margin-top: 0.75rem;
          padding: 0.35rem 1rem;
          background: var(--primary);
          color: var(--white);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 50px;
        }
        .industry-tab:hover {
          background: rgba(200, 168, 55, 0.1) !important;
        }
        .industry-panel {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .industry-panel {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .industry-tabs {
            flex-direction: column;
            align-items: center;
          }
          .industry-tab {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </>
  );
}