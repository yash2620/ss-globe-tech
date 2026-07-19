'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Products & Services',
    children: [
      { label: 'Forging Machining', href: '/products/forging-machining' },
      { label: 'HPDC Auto Components', href: '/products/hpdc-auto-components' },
      { label: 'Gray Cast Iron', href: '/products/gray-cast-iron' },
      { label: 'Hardened Ground Pins', href: '/products/hardened-ground-pins' },
      { label: 'Industrial Material Handling', href: '/products/industrial-material-handling' },
      { label: 'Packaging Solutions', href: '/products/packaging-solutions' },
      { label: 'Special Gauges & Fixtures', href: '/products/special-gauges-fixtures' },
      { label: 'Injection Molding', href: '/products/injection-molding' },
      { label: 'Custom Design Products', href: '/products/custom-design-products' },
      { label: 'High Precision Shafts', href: '/products/high-precision-shafts' },
      { label: 'Schematic Design Services', href: '/products/schematic-design' },
      { label: 'Technical Publication', href: '/products/technical-publication' },
      { label: 'Engineering Awareness', href: '/products/engineering-awareness' },
    ],
  },
  { label: 'Global Network', href: '/network' },
  { label: 'About Us', href: '/about' },
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
