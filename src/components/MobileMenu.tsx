'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Products & Services',
    children: [
      { label: 'Forging & Machining', href: '/products#forging' },
      { label: 'HPDC Auto Components', href: '/products#hpdc' },
      { label: 'Special Forge Shafts', href: '/products#shafts' },
      { label: 'CI & SG Casting', href: '/products#casting' },
      { label: 'Ground Pins & Shafts', href: '/products#pins' },
      { label: 'Industrial Material Handling', href: '/products#material' },
      { label: 'Packaging Solutions', href: '/products#packaging' },
      { label: 'IT Services', href: '/products#it' },
    ],
  },
  { label: 'Global Network', href: '/network' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <div className="mobile-overlay" onClick={onClose} />}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="mobile-close" onClick={onClose} aria-label="Close menu">&times;</button>
        <nav className="mobile-nav">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="mobile-nav-group">
                <span className="mobile-nav-label">{item.label}</span>
                <div className="mobile-subnav">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={onClose}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={onClose}>
                {item.label}
              </Link>
            )
          )}
        </nav>
        <Link href="/contact" className="btn-primary mobile-cta" onClick={onClose}>
          Enquire Now
        </Link>
      </div>
    </>
  );
}
