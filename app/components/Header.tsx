import { NavLink, Link } from 'react-router';

export function Header() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>✦ Free Shipping on Orders Above $99</span>
        <span>✦ 30-Day Easy Returns</span>
        <span>✦ Certified Authentic Jewelry</span>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="header-logo" aria-label="LuxeGem Home">
            <span className="header-logo__name">LuxeGem</span>
            <span className="header-logo__tagline">Fine Jewellery</span>
          </Link>

          {/* Navigation */}
          <nav className="header-nav" aria-label="Main navigation">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Collections</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button className="header-icon-btn" aria-label="Search" title="Search">🔍</button>
            <button className="header-icon-btn" aria-label="Wishlist" title="Wishlist">🤍</button>
            <div className="header-cart-badge">
              <button className="header-icon-btn" aria-label="Shopping cart" title="Cart">🛍️</button>
              <span className="header-cart-badge__count">0</span>
            </div>
            <button className="hamburger" aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
