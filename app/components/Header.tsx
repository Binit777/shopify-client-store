import { NavLink } from 'react-router';

export function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">ShopClient</NavLink>
      <nav className="header__nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Shop</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      </nav>
    </header>
  );
}
