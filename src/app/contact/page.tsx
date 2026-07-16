'use client';

import { useState, FormEvent } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';

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
    <>
      <section className="page-header">
        <div className="container">
          <ScrollAnimation>
            <h1>Contact Us</h1>
            <p>Get in touch with our global network across India, USA, Australia, Canada, and Dubai.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="col">
              <ScrollAnimation>
                <h2 className="text-gold">Head Office</h2>
                <div style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                  <strong>India (Pune)</strong><br />
                  K-Town, A1-802. Kiwale, Ravet.<br />
                  Pune, Pin code - 411020.<br />
                  <strong>Phone:</strong> +91 9767644980<br />
                  <strong>Email:</strong> info@ssglobetech.com / service@ssglobetech.com
                </div>

                <h2 className="text-gold" style={{ marginTop: '2rem' }}>Global Network</h2>
                {[
                  { name: 'USA (California)', addr: '10454, Sterling Blvd, Cupertino, CA 95014.' },
                  { name: 'Australia (NSW)', addr: '30A Wolseley Street, Fairfield, NSW 2165.' },
                  { name: 'Canada (Ontario)', addr: '1505-2910 Highway 7, Concord, Ontario L4K0H8.' },
                  { name: 'Dubai (Sharjah)', addr: '244, Burj 2000 Damas building, Al Ghuwair, Sharjah.' },
                  { name: 'India (Gujarat)', addr: 'Plot No - 906, BOL GIDC, Village - Bol, Tal - Sanand, Ahmedabad.' },
                ].map((loc) => (
                  <div key={loc.name} style={{ marginBottom: '0.8rem', lineHeight: '1.6' }}>
                    <strong>{loc.name}</strong><br />
                    <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{loc.addr}</span>
                  </div>
                ))}
              </ScrollAnimation>
            </div>

            <div className="col">
              <ScrollAnimation>
                <div className="card" style={{ boxShadow: 'var(--shadow-lg)' }}>
                  <h2 className="text-gold" style={{ marginBottom: '2rem' }}>Send an Inquiry</h2>

                  {status === 'success' && (
                    <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
                      Thank you! Your message has been received. We&rsquo;ll get back to you shortly.
                    </div>
                  )}

                  {status === 'error' && (
                    <div style={{ padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {[
                      { label: 'Name *', name: 'name', type: 'text', placeholder: 'Your Full Name', required: true },
                      { label: 'Email *', name: 'email', type: 'email', placeholder: 'Your Email Address', required: true },
                      { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Your Phone Number', required: false },
                    ].map((f) => (
                      <div key={f.name} style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={(form as any)[f.name]}
                          onChange={handleChange}
                          required={f.required}
                          style={{
                            width: '100%', padding: '0.8rem 1rem', borderRadius: 'var(--radius)',
                            border: '1px solid #ddd', fontSize: '0.95rem', transition: 'border-color 0.3s',
                          }}
                          placeholder={f.placeholder}
                          onFocus={(e) => e.target.style.borderColor = 'var(--secondary)'}
                          onBlur={(e) => e.target.style.borderColor = '#ddd'}
                        />
                      </div>
                    ))}

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Service Interest</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        style={{
                          width: '100%', padding: '0.8rem 1rem', borderRadius: 'var(--radius)',
                          border: '1px solid #ddd', background: '#fff', fontSize: '0.95rem',
                          cursor: 'pointer',
                        }}
                      >
                        {SERVICE_OPTIONS.map(opt => (
                          <option key={opt} value={opt === 'Select a service' ? '' : opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        style={{
                          width: '100%', padding: '0.8rem 1rem', borderRadius: 'var(--radius)',
                          border: '1px solid #ddd', fontSize: '0.95rem', resize: 'vertical',
                        }}
                        placeholder="Tell us about your requirements..."
                        onFocus={(e) => e.target.style.borderColor = 'var(--secondary)'}
                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary"
                      style={{ width: '100%', opacity: status === 'loading' ? 0.7 : 1, textAlign: 'center' }}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
