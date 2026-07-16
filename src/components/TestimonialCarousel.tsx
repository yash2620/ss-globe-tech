'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: 'SS Globe Tech has been a reliable partner for our engineering component needs. Their quality and on-time delivery are outstanding.',
    author: 'Rajesh Mehta',
    role: 'CEO, Mehta Engineering Ltd.',
  },
  {
    quote: 'We have been sourcing industrial components through SS Globe Tech for over 3 years. Excellent service and product quality.',
    author: 'John Anderson',
    role: 'Procurement Head, Anderson Corp, USA',
  },
  {
    quote: 'Professional approach and deep understanding of international trade. Highly recommended for export sourcing.',
    author: 'Sarah Williams',
    role: 'Director, Williams Trading, Australia',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title light">What Our Clients Say</h2>
        <div className="testimonial-card">
          <div className="testimonial-quote">
            <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial-author">
              <strong>{t.author}</strong>
              <span>{t.role}</span>
            </div>
          </div>
          <div className="testimonial-controls">
            <button onClick={prev} className="testimonial-arrow" aria-label="Previous">&#8592;</button>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`dot ${i === current ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="testimonial-arrow" aria-label="Next">&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  );
}
