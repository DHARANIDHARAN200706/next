import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="main-header">
        <div className="wrapper nav-wrapper">
          <div className="brand-logo">Urwish Shoes</div>
          <nav className="main-nav">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/shop" className="nav-item">Shop</Link>
            <Link href="#support" className="nav-item">Support</Link>
          </nav>
        </div>
      </header>

      <section className="wrapper hero-section">
        <div className="intro">
          <h1 className="headline">Step into Style with Urwish</h1>
          <p className="tagline">
            Discover comfort and trendsetting designs that fit your vibe. Walk your way with confidence.
          </p>
          <Link href="/shop">
            <button className="cta-button">Browse Collection</button>
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-menu">
          <Link href="/" className="footer-item">Home</Link>
          <Link href="/shop" className="footer-item">Shop</Link>
          <a href="#support" className="footer-item">Support</a>
        </div>
        <p>© 2025 Urwish Shoes Store. Walk Different.</p>
      </footer>
    </>
  );
}
