import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';

export const meta: MetaFunction = () => [
  { title: 'ShopClient — About Us' },
  { name: 'description', content: 'Learn about ShopClient and our mission.' },
];

export default function About() {
  return (
    <>
      <div className="about-hero">
        <h1>About ShopClient</h1>
        <p>We believe shopping should be simple, joyful, and sustainable. Every product we carry is hand-picked for quality and value.</p>
      </div>

      <div className="section">
        <h2 className="section-title">Our Values</h2>
        <div className="about-grid">
          <div className="about-card"><div className="about-card__icon">⭐</div><h3>Quality First</h3><p>We test every product before listing it. Only the best makes it to your cart.</p></div>
          <div className="about-card"><div className="about-card__icon">🌍</div><h3>Sustainability</h3><p>We partner with eco-conscious suppliers and use minimal, recycled packaging.</p></div>
          <div className="about-card"><div className="about-card__icon">🤝</div><h3>Customer First</h3><p>Real humans handle every support request. We are here when you need us.</p></div>
          <div className="about-card"><div className="about-card__icon">🛡️</div><h3>Safe & Secure</h3><p>End-to-end encrypted checkout. Your data is never sold or shared.</p></div>
        </div>
      </div>

      <div style={{ background: '#1a1a1a', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Shop?</h2>
        <p style={{ color: '#ccc', marginBottom: '2rem' }}>Explore our full catalogue of 15+ premium products.</p>
        <Link to="/products" className="btn">Browse Products</Link>
      </div>
    </>
  );
}
