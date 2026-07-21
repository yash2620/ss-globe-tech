import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const productTags = [
  { label: 'Forging & Machining', href: '/products/forging-machining' },
  { label: 'HPDC Auto Components', href: '/products/hpdc-auto-components' },
  { label: 'High Precision Shafts', href: '/products/high-precision-shafts' },
  { label: 'Gray Cast Iron', href: '/products/gray-cast-iron' },
  { label: 'Hardened Ground Pins', href: '/products/hardened-ground-pins' },
  { label: 'Industrial Material Handling', href: '/products/industrial-material-handling' },
  { label: 'Packaging Solutions', href: '/products/packaging-solutions' },
  { label: 'Special Gauges & Fixtures', href: '/products/special-gauges-fixtures' },
  { label: 'Injection Molding', href: '/products/injection-molding' },
  { label: 'Custom Design Products', href: '/products/custom-design-products' },
  { label: 'Schematic Design', href: '/products/schematic-design' },
  { label: 'Technical Publication', href: '/products/technical-publication' },
  { label: 'Engineering Awareness', href: '/products/engineering-awareness' },
];

export default function Products() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Our Products & Services</h1>
            <p>High-quality engineering solutions and Engineering Services for global industries.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div className="product-tag-grid">
            {productTags.map((tag) => (
              <Link key={tag.href} href={tag.href} className="product-tag">
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that drive every solution we deliver.</p>
          </ScrollAnimation>
          <div className="grid-3" style={{ marginTop: '3rem' }}>
            {[
              { icon: '🔒', title: 'Safety', desc: 'We follow the data encryption standard for clients\' products and related branches.' },
              { icon: '💡', title: 'Innovation & Continual Improvement', desc: 'We provide low-cost machining solutions to clients, making small, incremental changes regularly rather than waiting for major overhauls.' },
              { icon: '🤝', title: 'Trust', desc: 'Our committed team assures "Right Cost, Right Quality, and Right Quantity."' },
              { icon: '🙂', title: 'Positive', desc: 'We are always open to criticism as an opportunity to grow.' },
              { icon: '⭐', title: 'Excellence', desc: 'We keep our team updated with the latest tools, technology, and quality standards so they can perform with excellence.' },
            ].map((v) => (
              <div key={v.title} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: '#f0f2f8' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <ScrollAnimation>
            <h2 className="section-title">Our Timeline</h2>
            <p className="section-subtitle">From planning to success — our proven workflow.</p>
          </ScrollAnimation>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
            {[
              { title: 'Planning', desc: 'Align resources based on client RFQ.' },
              { title: 'Process', desc: 'Produce parts per customer specifications.' },
              { title: 'Target', desc: 'Achieve KRAs set by customers.' },
              { title: 'Success', desc: '100% customer satisfaction via progress sheets.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', background: 'var(--secondary)',
                  color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1.2rem', flexShrink: 0, position: 'relative', zIndex: 2,
                }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1, background: 'var(--white)', padding: '1.5rem 2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
                  <h3 style={{ marginBottom: '0.3rem', color: 'var(--secondary)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
            <div style={{
              position: 'absolute', left: 23, top: 0, bottom: 0, width: 2,
              background: 'var(--secondary)', opacity: 0.3, zIndex: 1,
            }} />
          </div>
        </div>
      </section>
    </>
  );
}
