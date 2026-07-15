import React from 'react';

export default function Products() {
  return (
    <section className="section bg-light">
      <div className="container">
        <h1 className="hero-title text-center" style={{color: 'var(--primary-color)'}}>Our Products & Services</h1>
        <p className="text-center text-muted mb-5" style={{maxWidth: '800px', margin: '0 auto', marginBottom: '3rem'}}>
          We specialize in exporting a wide range of high-quality engineering products. With a focus on durability and performance, our products are sourced to meet diverse industrial needs worldwide.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>Forging Machining</h3>
            <p>High-quality gears, shafts, and Earth Mining hydraulic parts engineered for reliability.</p>
          </div>
          
          <div className="card">
            <h3>HPDC Auto Components & Light Fixtures</h3>
            <p>Casting machining including Aluminium Housing and EV parts for the modern automotive industry.</p>
          </div>
          
          <div className="card">
            <h3>Special Forge Long Shafts</h3>
            <p>Customer design forge long shafts featuring CNC/VMC and Gun Drill Processes (ID 5mm to 32mm, Length up to 1000mm).</p>
          </div>
          
          <div className="card">
            <h3>CI and SG Casting</h3>
            <p>Durable Cast Iron and Spheroidal Graphite iron components designed for robust performance.</p>
          </div>

          <div className="card">
            <h3>Ground Pins and Shafts</h3>
            <p>Precision hardened and ground pins manufactured for exacting industrial applications.</p>
          </div>
          
          <div className="card">
            <h3>Industrial Material Handling</h3>
            <p>Comprehensive material handling solutions to streamline your factory operations.</p>
          </div>
          
          <div className="card">
            <h3>Packaging Solutions</h3>
            <p>Secure, industrial-grade packaging solutions tailored to protect heavy engineering parts.</p>
          </div>
          
          <div className="card">
            <h3>Special Gauges, Fixtures & Leak Testing</h3>
            <p>Custom precision tools, fixtures, and leak testing machines for quality assurance.</p>
          </div>

          <div className="card bg-dark text-white" style={{backgroundColor: 'var(--primary-color)', color: 'white'}}>
            <h3 style={{color: 'var(--secondary-color)'}}>SchematicPro IT Services</h3>
            <p style={{color: '#ddd'}}>Professional electrical schematic services. Clean, precise, and standards-compliant CAD drawings for Automotive, Locomotive, and Marine sectors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
