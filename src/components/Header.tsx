'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products & Services',
    href: '/products',
    children: [
      { label: 'Forging & Machining', href: '/products#forging' },
      { label: 'HPDC Auto Components & Light Fixtures', href: '/products#hpdc' },
      { label: 'Special Forge Long Shafts', href: '/products#shafts' },
      { label: 'CI & SG Casting', href: '/products#casting' },
      { label: 'Ground Pins & Shafts', href: '/products#pins' },
      { label: 'Industrial Material Handling', href: '/products#material' },
      { label: 'Packaging Solutions', href: '/products#packaging' },
      { label: 'Special Gauges & Leak Testing', href: '/products#gauges' },
      { label: 'SchematicPro IT Services', href: '/products#it' },
    ],
  },
  { label: 'Global Network', href: '/network' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={`site-header ${isHome ? 'transparent' : 'solid'}`}>
      <div className="container header-inner">
        <Link href="/" className="header-logo">
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
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
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
