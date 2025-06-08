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

      <section className="wrapper featured-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="/images/product1.jpg" alt="Classic Leather Loafers" className="product-image" />
            <h3 className="product-name">Classic Leather Loafers</h3>
            <p className="product-price">₹3,499</p>
            <Link href="/shop/product1">
              <button className="product-button">View Details</button>
            </Link>
          </div>
          {/* Add more product items here */}
        </div>
      </section>

      <section className="wrapper testimonial-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p className="testimonial-text">"Absolutely love my new Urwish sneakers! Comfortable and stylish."</p>
            <p className="testimonial-author">- Priya, Chennai</p>
          </div>
          {/* Add more testimonials here */}
        </div>
      </section>

      <section className="wrapper instagram-section">
        <h2 className="section-title">Follow Us on Instagram</h2>
        <div className="instagram-gallery">
          <img src="/images/insta1.jpg" alt="Instagram Post 1" className="insta-image" />
          {/* Add more Instagram images here */}
        </div>
      </section>

      <section className="wrapper newsletter-section">
        <h2 className="section-title">Stay Updated</h2>
        <p className="newsletter-text">
          Sign up for our newsletter to receive the latest updates and exclusive offers.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
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
