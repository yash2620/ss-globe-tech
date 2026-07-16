import Link from 'next/link';
import StatsCounter from '@/components/StatsCounter';
import TrustBadges from '@/components/TrustBadges';
import TestimonialCarousel from '@/components/TestimonialCarousel';
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
                Passion for precision, driven by quality. Connecting international buyers with reliable Indian manufacturers for engineering products, industrial components, packaging solutions, and IT services.
              </p>
              <div className="hero-actions">
                <Link href="/products" className="btn-primary">Explore Products</Link>
                <Link href="/contact" className="btn-outline">Get in Touch</Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <StatsCounter />

      <TrustBadges />

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
              <p>Operating from Pune, Maharashtra, we specialize in a diverse range of engineering products and IT services. We connect global buyers with trusted manufacturers, ensuring quality, reliability, and on-time delivery.</p>
              <Link href="/about" className="link-arrow" style={{ marginTop: '1rem' }}>Learn More About Us</Link>
            </ScrollAnimation>
            <ScrollAnimation className="col">
              <img src="/images/about.png" alt="About SS Globe Tech" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }} />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">High-quality engineering solutions and seamless international trade services.</p>
          </ScrollAnimation>
          <div className="grid-3">
            {[
              { img: '/images/service_forging.png', title: 'Forging & Machining', desc: 'Gears, shafts, Earth Mining hydraulic parts.' },
              { img: '/images/service_hpdc.png', title: 'Specialized Gun Drilling', desc: 'High precision long forge machine shafts with ID taper 0.1mm per 100mm.' },
              { img: '/images/service_schematic.png', title: 'SchematicPro IT Services', desc: 'Professional electrical schematic services compliant with IEC and IEEE standards.' },
            ].map((s) => (
              <ScrollAnimation key={s.title}>
                <div className="service-card">
                  <img src={s.img} alt={s.title} className="service-card-img" />
                  <div className="service-card-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

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
