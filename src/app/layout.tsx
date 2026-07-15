import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SS Globe Tech | Premier Merchant Exporter in India',
  description: 'Passion for precision, driven by quality. Connecting international buyers with reliable Indian manufacturers for engineering products, industrial components, packaging solutions, and IT services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container header-content">
            <div className="logo">
              <a href="/">SS Globe Tech</a>
            </div>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/products">Products & Services</a>
              <a href="/network">Global Network</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} SS Globe Tech. All rights reserved.</p>
            <p>Email: info@ssglobetech.com | Phone: +91 9767644980</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
