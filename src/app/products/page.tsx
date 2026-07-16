import ScrollAnimation from '@/components/ScrollAnimation';

const categories = [
  {
    id: 'forging',
    title: 'Forging & Machining',
    items: ['High-quality gears', 'Shafts and axles', 'Earth Mining hydraulic parts', 'Custom forging solutions'],
  },
  {
    id: 'hpdc',
    title: 'HPDC Auto Components & Light Fixtures',
    items: ['Aluminium Housing', 'EV components', 'Die-cast auto parts', 'LED lighting fixtures'],
  },
  {
    id: 'shafts',
    title: 'Special Forge Long Shafts',
    items: ['Customer-designed forge long shafts', 'CNC/VMC precision machining', 'Gun Drill Process (ID 5mm to 32mm)', 'Length up to 1000mm'],
  },
  {
    id: 'casting',
    title: 'CI and SG Casting',
    items: ['Cast Iron components', 'Spheroidal Graphite iron parts', 'Durable industrial castings', 'Custom specifications'],
  },
  {
    id: 'pins',
    title: 'Ground Pins and Shafts',
    items: ['Precision hardened pins', 'Ground shafts', 'Industrial application components'],
  },
  {
    id: 'material',
    title: 'Industrial Material Handling',
    items: ['Conveyor systems', 'Material handling equipment', 'Factory automation solutions'],
  },
  {
    id: 'packaging',
    title: 'Packaging Solutions',
    items: ['Industrial-grade packaging', 'Heavy engineering part packaging', 'Export-ready crating'],
  },
  {
    id: 'gauges',
    title: 'Special Gauges, Fixtures & Leak Testing',
    items: ['Custom precision tools', 'Testing fixtures', 'Leak testing machines', 'Quality assurance equipment'],
  },
  {
    id: 'it',
    title: 'SchematicPro IT Services',
    items: ['Professional electrical schematics', 'IEC and IEEE compliant CAD drawings', 'Automotive, Locomotive, Marine sectors'],
  },
];

export default function Products() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Our Products &amp; Services</h1>
            <p>High-quality engineering solutions and IT services for global industries.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {categories.map((cat) => (
              <ScrollAnimation key={cat.id}>
                <div id={cat.id} className="card" style={{ scrollMarginTop: '100px' }}>
                  <h3 style={{ color: 'var(--secondary)' }}>{cat.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cat.items.map((item) => (
                      <li key={item} style={{ padding: '0.4rem 0', color: 'var(--text-light)', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--secondary)' }}>&#10003;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
