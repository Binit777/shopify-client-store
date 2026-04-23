import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="footer-brand__logo">LuxeGem</div>
          <div className="footer-brand__tagline">Fine Jewellery</div>
          <p className="footer-brand__desc">
            Crafting timeless pieces that celebrate life's most precious moments.
            Every jewel tells a story — let yours begin here.
          </p>
          <div className="footer-social" style={{ marginTop: '1.5rem' }}>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">👍</a>
            <a href="#" aria-label="Pinterest">📌</a>
            <a href="#" aria-label="Twitter / X">𝕏</a>
          </div>
        </div>

        {/* Collections */}
        <div className="footer-col">
          <h4>Collections</h4>
          <ul>
            <li><Link to="/products">All Jewellery</Link></li>
            <li><Link to="/products">Rings</Link></li>
            <li><Link to="/products">Necklaces</Link></li>
            <li><Link to="/products">Earrings</Link></li>
            <li><Link to="/products">Bracelets</Link></li>
            <li><Link to="/products">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Exchange</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LuxeGem Fine Jewellery. All rights reserved.</p>
        <p style={{ display: 'flex', gap: '.75rem', alignItems: 'center', color: 'rgba(255,255,255,.4)', fontSize: '.75rem' }}>
          <span>💳 Visa</span>
          <span>💳 Mastercard</span>
          <span>🅿️ PayPal</span>
          <span>🍎 Apple Pay</span>
        </p>
      </div>
    </footer>
  );
}
