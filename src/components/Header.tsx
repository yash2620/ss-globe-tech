'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Products & Services',
    href: '/products',
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
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <header className="site-header solid">
      <div className="container header-inner">
        <Link href="/" className="header-logo">
          <img src="/images/ss-globe-tech-logo.png" alt="SS Globe Tech" className="logo-img" />
          <span className="logo-text">SS Globe Tech</span>
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="nav-dropdown-wrapper"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link href={item.href} className="nav-link">
                  {item.label} <span className="dropdown-arrow">&#9662;</span>
                </Link>
                {dropdownOpen && (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="dropdown-link">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${activePath === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn-primary btn-small header-cta">
            Enquire Now
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
