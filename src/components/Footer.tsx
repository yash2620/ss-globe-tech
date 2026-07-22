import Link from 'next/link';

export default function Footer() {
  const certifications = [
    { src: '/images/GST logo.webp', alt: 'GST Registered', title: 'GST' },
    { src: '/images/Udyog-Aadhar-Certificate.webp', alt: 'Udyog Aadhar', title: 'Udyog Aadhar' },
    { src: '/images/ICE-Certificate.webp', alt: 'ICE Certified', title: 'ICE' },
    { src: '/images/fieo.png', alt: 'FIEO Registered', title: 'FIEO' },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>SS Globe Tech</h4>
            <p>
              Premier Merchant Exporter in India, connecting global buyers with trusted
              manufacturers for engineering products, industrial components, and Engineering Services.
            </p>
            <div className="certifications">
              {certifications.map((cert) => (
                <img
                  key={cert.title}
                  src={cert.src}
                  alt={cert.alt}
                  title={cert.title}
                  className="cert-logo"
                />
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">Products & Services</Link>
            <Link href="/network">Global Network</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <Link href="/products#forging">Forging & Machining</Link>
            <Link href="/products#hpdc">HPDC Components</Link>
            <Link href="/products#shafts">Special Shafts</Link>
            <Link href="/products#casting">CI & SG Casting</Link>
            <Link href="/products#it">Engineering Services</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><img src="/images/india.png" alt="" style={{ width: 28, height: 20, objectFit: 'cover', borderRadius: 2 }} /><strong>India (Pune)</strong></p>
            <p>K-Town, A1-802. Kiwale, Ravet.</p>
            <p>Pune, Pin code - 411020.</p>
            <p><strong>Phone:</strong> <a href="tel:+919767644980" className="contact-link">+91 9767644980</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@ssglobetech.com" className="contact-link">info@ssglobetech.com</a></p>
            <a href="https://ssglobetech.com" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.3rem' }}>
              <img src="/images/globe-icon.png" alt="Globe" style={{ width: 18, height: 18 }} />
              ssglobetech.com
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{'\u00A9'} 2026 SS Globe Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
