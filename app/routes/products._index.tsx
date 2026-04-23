import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import { useState } from 'react';
import { ProductCard } from '~/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '~/data/products';

export const meta: MetaFunction = () => [
  { title: 'All Collections — LuxeGem Fine Jewellery' },
  { name: 'description', content: 'Browse our full collection of fine jewellery — diamond rings, gold necklaces, earrings, bracelets and more. All certified authentic.' },
];

export default function ProductsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === active);

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">✦ Handcrafted Excellence</p>
          <h1 className="page-hero__title">Our Collections</h1>
          <p className="page-hero__sub">
            {PRODUCTS.length} exquisite pieces — each one certified authentic and crafted to last a lifetime.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="filter-pills">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-pill${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="filter-count">{filtered.length} pieces</span>
        </div>

        {/* Product Grid */}
        <div className="product-grid" style={{ paddingBottom: '5rem' }}>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Payment & Shipping Section */}
      <section className="section section--cream" aria-labelledby="payment-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Checkout with Confidence</span>
            <h2 className="section-title" id="payment-heading">Payment &amp; Shipping</h2>
            <div className="divider" />
            <p className="section-sub">We partner with trusted payment and logistics providers so your order is always safe.</p>
          </div>
          <div className="payment-grid">
            <div className="payment-card">
              <div className="payment-card__icon">💳</div>
              <h3 className="payment-card__title">Secure Payments</h3>
              <p className="payment-card__desc">Pay with Visa, Mastercard, PayPal, Apple Pay or Google Pay — all encrypted end-to-end.</p>
              <div className="payment-logos">
                <span className="payment-logo">Visa</span>
                <span className="payment-logo">MC</span>
                <span className="payment-logo">PayPal</span>
                <span className="payment-logo">Apple Pay</span>
              </div>
            </div>
            <div className="payment-card">
              <div className="payment-card__icon">🚚</div>
              <h3 className="payment-card__title">Fast Delivery</h3>
              <p className="payment-card__desc">Express shipping available. Standard delivery 3–5 business days. Real-time tracking on every order.</p>
              <div className="payment-logos">
                <span className="payment-logo">FedEx</span>
                <span className="payment-logo">DHL</span>
                <span className="payment-logo">UPS</span>
              </div>
            </div>
            <div className="payment-card">
              <div className="payment-card__icon">↩️</div>
              <h3 className="payment-card__title">Easy Returns</h3>
              <p className="payment-card__desc">30-day hassle-free returns. Simply contact us — we'll arrange collection and process your refund within 3 days.</p>
              <div className="payment-logos">
                <span className="payment-logo">Free Returns</span>
                <span className="payment-logo">3-Day Refund</span>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--grey)', fontSize: '.88rem' }}>
            Payment gateway integration coming soon. <Link to="/contact" style={{ color: 'var(--gold)' }}>Contact us</Link> to place a custom order today.
          </p>
        </div>
      </section>
    </>
  );
}
