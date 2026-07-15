'use client';

import React, { useState, FormEvent } from 'react';

const SERVICE_OPTIONS = [
  'Select a service',
  'IT Services & Software Development',
  'Engineering Products & Industrial Components',
  'Packaging Solutions',
  'Import / Export Advisory',
  'Global Logistics & Shipping',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  return (
    <section className="section bg-light">
      <div className="container">
        <h1 className="hero-title text-center" style={{color: 'var(--primary-color)'}}>Contact Us</h1>
        <p className="text-center text-muted mb-5" style={{maxWidth: '800px', margin: '0 auto', marginBottom: '3rem'}}>
          We are a leading international company in the world. Get in touch with our global network across India, USA, Australia, Canada, and Dubai.
        </p>

        <div className="two-col mt-4">
          <div className="col">
            <h2 className="text-gold">Head Office</h2>
            <div style={{marginBottom: '1.5rem'}}>
              <strong>India (Pune)</strong><br />
              K-Town, A1-802. Kiwale, Ravet.<br />
              Pune, Pin code - 411020.<br />
              <strong>Phone:</strong> +91 9767644980<br />
              <strong>Email:</strong> info@ssglobetech.com / service@ssglobetech.com
            </div>
            
            <h2 className="text-gold mt-4">Global Network</h2>
            <div style={{marginBottom: '1rem'}}>
              <strong>USA (California)</strong><br />
              10454, Sterling Blvd, Cupertino, CA 95014.
            </div>
            <div style={{marginBottom: '1rem'}}>
              <strong>Australia (NSW)</strong><br />
              30A Wolseley Street, Fairfield, NSW 2165.
            </div>
            <div style={{marginBottom: '1rem'}}>
              <strong>Canada (Ontario)</strong><br />
              1505-2910 Highway 7, Concord, Ontario L4K0H8.
            </div>
            <div style={{marginBottom: '1rem'}}>
              <strong>Dubai (Sharjah)</strong><br />
              244, Burj 2000 Damas building, Al Ghuwair, Sharjah.
            </div>
            <div style={{marginBottom: '1rem'}}>
              <strong>India (Gujarat)</strong><br />
              Plot No - 906, BOL GIDC, Village - Bol, Tal - Sanand, Ahmedabad.
            </div>
          </div>
          
          <div className="col">
            <div className="card" style={{boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
              <h2 className="text-gold" style={{marginBottom: '2rem'}}>Send an Inquiry</h2>

              {status === 'success' && (
                <div style={{padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '1rem'}}>
                  Thank you! Your message has been received. We&rsquo;ll get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div style={{padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: '4px', marginBottom: '1rem'}}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '1rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    style={{width: '100%', padding: '0.75rem', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#ddd'}} placeholder="Your Full Name" />
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    style={{width: '100%', padding: '0.75rem', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#ddd'}} placeholder="Your Email Address" />
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    style={{width: '100%', padding: '0.75rem', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#ddd'}} placeholder="Your Phone Number" />
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>Service Interest</label>
                  <select name="subject" value={form.subject} onChange={handleChange}
                    style={{width: '100%', padding: '0.75rem', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#ddd', background: '#fff'}}>
                    {SERVICE_OPTIONS.map(opt => (
                      <option key={opt} value={opt === 'Select a service' ? '' : opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    style={{width: '100%', padding: '0.75rem', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#ddd'}} placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{width: '100%', marginTop: '1rem', opacity: status === 'loading' ? 0.7 : 1}}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
