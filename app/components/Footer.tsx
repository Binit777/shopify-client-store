import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="footer">
      <p>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/about">About</Link>
      </p>
      <p style={{ marginTop: '0.75rem' }}>&copy; {new Date().getFullYear()} ShopClient. All rights reserved.</p>
    </footer>
  );
}
