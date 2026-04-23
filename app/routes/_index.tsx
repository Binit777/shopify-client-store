import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import { ProductCard } from '~/components/ProductCard';
import { PRODUCTS } from './products._index';

export const meta: MetaFunction = () => [
  { title: 'ShopClient — Home' },
  { name: 'description', content: 'Discover our latest products.' },
];

export default function Index() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Welcome to ShopClient</h1>
        <p>Discover premium products curated just for you. Quality guaranteed, shipped fast.</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>

      {/* Featured Products */}
      <div className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/products" className="btn btn-dark">View All Products</Link>
        </div>
      </div>

      {/* Why Us */}
      <div style={{ background: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 className="section-title">Why Choose Us</h2>
        <div className="about-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="about-card"><div className="about-card__icon">🚚</div><h3>Free Shipping</h3><p>On all orders over $50. Fast & reliable delivery to your door.</p></div>
          <div className="about-card"><div className="about-card__icon">🛡️</div><h3>Secure Payments</h3><p>Your payment information is always safe with us.</p></div>
          <div className="about-card"><div className="about-card__icon">🔄</div><h3>Easy Returns</h3><p>30-day hassle-free returns on all products.</p></div>
        </div>
      </div>
    </>
  );
}
