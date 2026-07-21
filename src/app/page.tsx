import Link from 'next/link';
import TrustBadges from '@/components/TrustBadges';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <ScrollAnimation>
              <span className="hero-badge">Premier Merchant Exporter in India</span>
              <h1 className="hero-title">
                Precision <span className="highlight">.</span> Innovation <span className="highlight">.</span> Excellence
              </h1>
              <p className="hero-subtitle">
                Passion for precision, driven by quality. Connecting international buyers with reliable Indian manufacturers for engineering products, industrial components, packaging solutions, and Engineering Services.
              </p>
              <div className="hero-actions">
                <Link href="/products" className="btn-primary">Explore Products</Link>
                <Link href="/contact" className="btn-outline">Get in Touch</Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '3rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="two-col" style={{ gap: '3rem' }}>
            <ScrollAnimation className="col">
              <div style={{ background: '#f0f2f8', padding: '2rem', borderRadius: 'var(--radius)', height: '100%' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary)', marginBottom: '1rem', letterSpacing: '2px' }}>OUR MISSION</h3>
                <p style={{ lineHeight: '1.8', color: '#4b5563', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  "Our mission is to empower global industries by providing reliable engineering products, strategic sourcing solutions, and seamless export services with uncompromising quality and professionalism. Through innovation, technical expertise, and ethical business practices, we foster long-term partnerships, enhance supply chain excellence, and deliver sustainable value to customers across the world."
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="col">
              <div style={{ background: '#f0f2f8', padding: '2rem', borderRadius: 'var(--radius)', height: '100%' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary)', marginBottom: '1rem', letterSpacing: '2px' }}>OUR VISION</h3>
                <p style={{ lineHeight: '1.8', color: '#4b5563', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  "Our vision is to bridge global manufacturers and customers through trusted sourcing, precision engineering solutions, and seamless international trade. By embracing innovation, integrity, and operational excellence, we aim to become a benchmark for quality, reliability, and sustainable business growth in the global marketplace."
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="section" style={{ background: '#f8f9fc' }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center', gap: '3rem' }}>
            <ScrollAnimation className="col">
              <h2 className="text-gold" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>SS GLOBETECH SOLUTIONS</h2>
              <h3 style={{ color: 'var(--primary, #1e3a8a)', fontStyle: 'italic', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                Trusted Merchant Exporter from India
              </h3>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#4b5563' }}>
                SS GlobeTech Solutions is a trusted merchant exporter specializing in the global supply of high-quality engineering products and industrial solutions. We are committed to delivering excellence through reliable sourcing, stringent quality assurance, competitive pricing, and efficient international logistics.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#4b5563' }}>
                Our focus on integrity, precision, and customer satisfaction enables us to build long-term partnerships with clients across global markets. By combining industry expertise with a seamless export process, we ensure that every shipment meets the highest standards of quality, compliance, and timely delivery.
              </p>
              <blockquote style={{ borderLeft: '4px solid var(--gold, #d4af37)', paddingLeft: '1rem', fontStyle: 'italic', fontSize: '1.2rem', color: '#1f2937', marginTop: '1.5rem' }}>
                "Delivering Engineering Excellence. Connecting Global Markets."
              </blockquote>
            </ScrollAnimation>
            <ScrollAnimation className="col">
              <img src="/images/Homepage-1.png" alt="SS GlobeTech Solutions Overview" style={{ width: '100%', borderRadius: 'var(--radius, 8px)', boxShadow: 'var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1))' }} />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">About SS Globe Tech</h2>
            <p className="section-subtitle">
              We are the trusted Merchant Exporter in India, excelling in global trade and ensuring seamless exports of diverse products.
            </p>
          </ScrollAnimation>
          <div className="two-col">
            <ScrollAnimation className="col">
              <h2 className="text-gold">Who We Are</h2>
              <p>Operating from Pune, Maharashtra, we specialize in a diverse range of engineering products and Engineering Services. We connect global buyers with trusted manufacturers, ensuring quality, reliability, and on-time delivery.</p>
              <Link href="/about" className="link-arrow" style={{ marginTop: '1rem' }}>Learn More About Us</Link>
            </ScrollAnimation>
            <ScrollAnimation className="col">
              <img src="/images/office-1.png" alt="About SS Globe Tech Office" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }} />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Precision Engineering. Global Delivery.</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>From forged components to Engineering Services — we deliver quality across industries and continents.</p>
            <Link href="/products" className="btn-primary">Explore Our Products</Link>
          </ScrollAnimation>
        </div>
      </section>

      <section className="global-network-section">
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ color: 'var(--white)', fontSize: '2.2rem' }}>Our Global Network</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Connecting Businesses Across Continents</p>
            <div className="network-locations">
              <span>India (Pune & Gujarat)</span><span className="dot">·</span>
              <span>USA (California)</span><span className="dot">·</span>
              <span>Australia (NSW)</span><span className="dot">·</span>
              <span>Canada (Ontario)</span><span className="dot">·</span>
              <span>Dubai (Sharjah)</span>
            </div>
            <Link href="/network" className="btn-primary" style={{ marginTop: '1rem' }}>View Our Global Offices</Link>
          </ScrollAnimation>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation>
            <h2>Ready to Partner With Us?</h2>
            <p>Get in touch with our team for sourcing, exports, and global trade solutions.</p>
            <Link href="/contact" className="btn-primary">Contact Us Today</Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
