import ScrollAnimation from '@/components/ScrollAnimation';

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>About SS Globe Tech</h1>
            <p>Passion for precision, driven by quality — your trusted global sourcing partner.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>ABOUT SS GLOBETECH SOLUTIONS</h2>
            <div style={{ border: '1px solid #000', padding: '1.5rem', marginBottom: '3rem', background: '#fff', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div style={{ flex: '1 1 500px' }}>
                <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#1f2937', margin: 0 }}>
                  <strong>Welcome to SS Globe Tech Solutions</strong>, a distinguished Engineering Products and Services company based in India. We are committed to delivering world-class engineering solutions and building long-term partnerships through quality, reliability, and innovation. SS Globe Tech Solutions specializes in the sourcing and supply of precision-engineered products, industrial components, custom manufacturing solutions, and value-added engineering services. Our expertise, professional approach, and unwavering commitment to excellence enable us to meet the evolving requirements of customers across international markets. Driven by the principles of quality, integrity, innovation, and customer satisfaction, we deliver products and services that comply with global standards while ensuring timely delivery and competitive value. At SS Globe Tech Solutions, every project reflects our dedication to engineering excellence and our vision of connecting industries worldwide through reliable products and professional services.
                </p>
              </div>
              <div style={{ width: '250px', flexShrink: 0, textAlign: 'center', margin: '0 auto' }}>
                <img
                  src="/images/sachin.jpeg"
                  alt="Founder Sachin G.S."
                  style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px', border: '4px solid #d4af37', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <h3 style={{ marginTop: '1rem', marginBottom: '0.2rem', fontSize: '1.2rem', color: '#1e3a8a' }}>Sachin G.S.</h3>
                <p style={{ color: '#4b5563', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Founder & CEO</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div style={{ background: '#93c5fd', padding: '0.75rem', marginBottom: '2rem' }}>
              <h2 style={{ margin: 0, color: '#1e3a8a', fontSize: '1.5rem' }}>ENGINEERING PRODUCTS AND SERVICES</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { 
                  title: 'MISSION', 
                  img: 'Globe-1.png', 
                  text: "Our mission is to empower global industries by providing reliable engineering products, strategic sourcing solutions, and seamless export services with uncompromising quality and professionalism. Through innovation, technical expertise, and ethical business practices, we foster long-term partnerships, enhance supply chain excellence, and deliver sustainable value to customers across the world." 
                },
                { 
                  title: 'VISION', 
                  img: 'globe-2.png', 
                  text: "Our vision is to bridge global manufacturers and customers through trusted sourcing, precision engineering solutions, and seamless international trade. By embracing innovation, integrity, and operational excellence, we aim to become a benchmark for quality, reliability, and sustainable business growth in the global marketplace." 
                },
                { 
                  title: 'VALUES', 
                  img: 'globe-3.png', 
                  text: "Our core values of integrity, innovation, quality, accountability, and customer excellence drive every decision we make. By combining technical expertise with ethical business practices and a commitment to continuous improvement, SS Globe Tech Solutions delivers dependable engineering solutions and international trade services that build trust, strengthen global partnerships, and support sustainable business growth." 
                }
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', border: '1px solid #000', padding: '0' }}>
                  <div style={{ width: '150px', background: '#d5cfc1', padding: '2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', borderRight: '1px solid #000' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{item.title}</h3>
                  </div>
                  <div style={{ width: '220px', padding: '1rem', flexShrink: 0, margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                    <img src={`/images/${item.img}`} alt={item.title} style={{ width: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: '1 1 300px', padding: '1.5rem', borderLeft: '1px solid #000' }}>
                    <p style={{ lineHeight: '1.6', color: '#000', margin: 0, fontWeight: '500' }}>
                      "{item.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <div style={{ marginTop: '4rem' }}>
            <ScrollAnimation>
              <h3 style={{ background: '#d5cfc1', display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid #000', marginBottom: '1.5rem' }}>
                CORE OBJECTIVES
              </h3>
              <div style={{ border: '1px solid #000', padding: '1.5rem', marginBottom: '3rem' }}>
                <ol style={{ paddingLeft: '1rem', lineHeight: '2', fontWeight: 'bold', margin: 0, listStylePosition: 'inside' }}>
                  <li>Promote Indian Engineering in Global Market</li>
                  <li>Expand Exports and Foreign exchange earnings</li>
                  <li>Highlight the Quality and Reliability on Indian Engineering Products and services</li>
                  <li>Build Long term International Partnership</li>
                  <li>Support sustainable Growth and Job Creation</li>
                  <li>Deliver ethical, customer-focused export solutions</li>
                </ol>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e3a8a' }}>Why Choose Us?</h2>
              <div style={{ border: '1px solid #000', padding: '1.5rem' }}>
                <p style={{ lineHeight: '1.8', color: '#000', fontWeight: '500', marginBottom: '3rem' }}>
                  We are committed to delivering engineering excellence through trusted sourcing, precision, quality assurance, and seamless export solutions. By combining technical expertise with customer-focused service and ethical business practices, we help our clients achieve operational efficiency, sustainable growth, and global competitiveness.
                </p>
                <div style={{ background: '#93c5fd', border: '1px solid #000', padding: '0.75rem', textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  Engineering Excellence • Trusted Sourcing • Global Reach • Lasting Partnership
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f0f2f8' }}>
        <div className="container">
          <div className="office-showcase">
            <ScrollAnimation>
              <img src="/images/office-1.png" alt="SS Globe Tech Office" className="office-main-img" />
            </ScrollAnimation>
          </div>
        </div>
      </section>

    </>
  );
}
