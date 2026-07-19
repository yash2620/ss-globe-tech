import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const categories = [
  { id: 'forging', title: 'Forged & Machined Components', items: ['High-quality gears', 'Shafts and axles', 'Earth Mining hydraulic parts', 'Custom forging solutions'], link: '/products/forging-machining' },
  { id: 'hpdc', title: 'Automotive Components & Housings', items: ['Aluminium Housing', 'EV components', 'Die-cast auto parts', 'LED lighting fixtures'], link: '/products/hpdc-auto-components' },
  { id: 'shafts', title: 'High Precision Long Forge Machine Shafts', items: ['Customer-designed forge long shafts', 'CNC/VMC precision machining', 'Gun Drill Process (ID 5mm to 32mm)', 'Length up to 1000mm'], link: '/products/high-precision-shafts' },
  { id: 'casting', title: 'Gray Cast Iron & Ductile Iron Components', items: ['Cast Iron components', 'Spheroidal Graphite iron parts', 'Durable industrial castings', 'Custom specifications'], link: '/products/gray-cast-iron' },
  { id: 'pins', title: 'Hardened & Ground Precision Parts', items: ['Precision hardened pins', 'Ground shafts', 'Industrial application components'], link: '/products/hardened-ground-pins' },
  { id: 'material', title: 'Industrial Material Handling', items: ['Conveyor systems', 'Material handling equipment', 'Factory automation solutions'], link: '/products/industrial-material-handling' },
  { id: 'packaging', title: 'Packaging Solutions', items: ['Industrial-grade packaging', 'Heavy engineering part packaging', 'Export-ready crating'], link: '/products/packaging-solutions' },
  { id: 'gauges', title: 'Special Gauges, Fixtures & Leak Testing', items: ['Custom precision tools', 'Testing fixtures', 'Leak testing machines', 'Quality assurance equipment'], link: '/products/special-gauges-fixtures' },
  { id: 'injection', title: 'Injection Molding Products & Moulds', items: ['Injection molded components', 'Precision moulds', 'Plastic parts manufacturing'], link: '/products/injection-molding' },
  { id: 'custom', title: 'Custom Design Products', items: ['Bearing housings', 'Custom brackets & supports', 'Machined components per drawing'], link: '/products/custom-design-products' },
  { id: 'schematic', title: 'SchematicPro IT Services', items: ['CAD Conversion & Digitization', 'Schematic Modification & Revision Management', 'As-Built Documentation & Redline Integration'], link: '/products/schematic-design' },
  { id: 'publication', title: 'Technical Publication Services', items: ['Technical documentation', 'User manuals', 'Illustration & publishing'], link: '/products/technical-publication' },
  { id: 'awareness', title: 'Engineering GD & T, APQP & PPAP', items: ['GD&T implementation', 'APQP documentation', 'PPAP submissions'], link: '/products/engineering-awareness' },
];

export default function Products() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Our Products & Services</h1>
            <p>High-quality engineering solutions and IT services for global industries.</p>
          </ScrollAnimation>
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

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {categories.map((cat) => (
              <ScrollAnimation key={cat.id}>
                <div id={cat.id} className="card" style={{ scrollMarginTop: '100px' }}>
                  <h3 style={{ color: 'var(--secondary)' }}>
                    {cat.link ? (
                      <Link href={cat.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {cat.title}
                      </Link>
                    ) : (
                      cat.title
                    )}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cat.items.map((item) => (
                      <li key={item} style={{ padding: '0.4rem 0', color: 'var(--text-light)', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--secondary)' }}>&#10003;</span> {item}
                      </li>
                    ))}
                  </ul>
                  {cat.link && (
                    <Link href={cat.link} className="link-arrow" style={{ marginTop: '1rem', display: 'inline-block' }}>
                      View Services
                    </Link>
                  )}
                </div>
              </ScrollAnimation>
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
