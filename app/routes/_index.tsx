import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import { ProductCard } from '~/components/ProductCard';
import { PRODUCTS } from '~/data/products';

export const meta: MetaFunction = () => [
  { title: 'LuxeGem Fine Jewellery — Timeless Luxury' },
  { name: 'description', content: 'Discover handcrafted fine jewellery — diamond rings, gold necklaces, sapphire earrings and more. Free shipping, certified authentic.' },
  { name: 'keywords', content: 'fine jewellery, diamond rings, gold necklaces, luxury jewelry, engagement rings' },
];

const CATEGORIES = [
  { name: 'Rings',     emoji: '💍', href: '/products' },
  { name: 'Necklaces', emoji: '📿', href: '/products' },
  { name: 'Earrings',  emoji: '✨', href: '/products' },
  { name: 'Bracelets', emoji: '🔗', href: '/products' },
  { name: 'Solitaires',emoji: '💎', href: '/products' },
  { name: 'Gifting',   emoji: '🎁', href: '/products' },
];

const TESTIMONIALS = [
  { name: 'Priya M.', location: 'Mumbai', stars: 5, text: 'The diamond solitaire I bought for my anniversary was absolutely stunning. The quality exceeded my expectations and delivery was faster than promised.' },
  { name: 'Rohan S.', location: 'Delhi', stars: 5, text: 'Bought the sapphire engagement ring — she said yes! The ring was even more beautiful in person. Packaging was luxurious and the certificate of authenticity was a great touch.' },
  { name: 'Ananya K.', location: 'Bangalore', stars: 5, text: 'I have ordered three times from LuxeGem and every piece has been perfect. The pearl necklace is my absolute favourite. Will keep coming back!' },
];

export default function HomePage() {
  const featured = PRODUCTS.filter(p => p.badge === 'Best Seller').slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.badge === 'New').slice(0, 4);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero banner">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-eyebrow">✦ New Collection 2025</span>
            <h1 className="hero-title">
              Jewels That Tell<br />
              <em>Your Story</em>
            </h1>
            <p className="hero-desc">
              Handcrafted fine jewellery in 18K gold, platinum and sterling silver.
              Each piece certified authentic — made to be treasured for generations.
            </p>
            <div className="hero-ctas">
              <Link to="/products" className="btn btn-gold btn-lg">Shop Collections</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Book Consultation</Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat__num">15+</div>
                <div className="hero-stat__label">Curated Pieces</div>
              </div>
              <div>
                <div className="hero-stat__num">2,400+</div>
                <div className="hero-stat__label">Happy Customers</div>
              </div>
              <div>
                <div className="hero-stat__num">100%</div>
                <div className="hero-stat__label">Certified Authentic</div>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            {[
              { emoji: '💍', label: 'Solitaire Rings' },
              { emoji: '📿', label: 'Necklaces' },
              { emoji: '✨', label: 'Earrings' },
              { emoji: '🔗', label: 'Bracelets' },
            ].map(item => (
              <div key={item.label} className="hero-visual__card">
                <span className="hero-visual__emoji">{item.emoji}</span>
                <span className="hero-visual__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────── */}
      <div className="trust-bar" role="complementary" aria-label="Trust indicators">
        <div className="trust-bar-inner">
          {[
            { icon: '🚚', title: 'Free Shipping', desc: 'On orders above $99' },
            { icon: '🔒', title: 'Secure Payment', desc: 'SSL encrypted checkout' },
            { icon: '🏅', title: 'Certified Authentic', desc: 'Every piece verified' },
            { icon: '↩️', title: '30-Day Returns', desc: 'Hassle-free exchanges' },
          ].map(t => (
            <div key={t.title}>
              <div className="trust-item__icon">{t.icon}</div>
              <div className="trust-item__title">{t.title}</div>
              <div className="trust-item__desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Category Strip ───────────────────────────────── */}
      <div className="section--cream">
        <div className="container">
          <div className="section-header" style={{ paddingTop: '3rem' }}>
            <span className="section-eyebrow">Browse By Category</span>
            <h2 className="section-title">Shop Our Collections</h2>
            <div className="divider" />
          </div>
          <div className="category-strip">
            {CATEGORIES.map(cat => (
              <Link to={cat.href} key={cat.name} className="category-card" aria-label={`Shop ${cat.name}`}>
                <div className="category-card__icon">{cat.emoji}</div>
                <span className="category-card__name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Best Sellers ─────────────────────────────────── */}
      <section className="section" aria-labelledby="bestsellers-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Most Loved</span>
            <h2 className="section-title" id="bestsellers-heading">Best Sellers</h2>
            <div className="divider" />
            <p className="section-sub">Our most coveted pieces — chosen by thousands of happy customers.</p>
          </div>
          <div className="product-grid">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/products" className="btn btn-outline">View All Collections</Link>
          </div>
        </div>
      </section>

      {/* ── Promo Banner ─────────────────────────────────── */}
      <div className="promo-banner">
        <div className="promo-banner__content">
          <p className="promo-banner__eyebrow">✦ Limited Time Offer</p>
          <h2 className="promo-banner__title">Up to 22% Off<br />Sitewide Sale</h2>
          <p className="promo-banner__sub">On select pieces. Free shipping included. Ends soon.</p>
          <Link to="/products" className="btn btn-gold btn-lg">Claim Your Offer</Link>
        </div>
      </div>

      {/* ── New Arrivals ─────────────────────────────────── */}
      <section className="section section--cream" aria-labelledby="new-arrivals-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Just Arrived</span>
            <h2 className="section-title" id="new-arrivals-heading">New Arrivals</h2>
            <div className="divider" />
          </div>
          <div className="product-grid">
            {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Customer Love</span>
            <h2 className="section-title" id="testimonials-heading">What Our Customers Say</h2>
            <div className="divider" />
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">{'★'.repeat(t.stars)}</div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">{t.name}</div>
                <div className="testimonial-card__location">{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────── */}
      <div className="promo-banner">
        <div className="promo-banner__content">
          <p className="promo-banner__eyebrow">✦ Personalised Service</p>
          <h2 className="promo-banner__title">Need Help Choosing<br />the Perfect Piece?</h2>
          <p className="promo-banner__sub">Our jewellery consultants are here for you. Book a free consultation.</p>
          <Link to="/contact" className="btn btn-gold btn-lg">Talk to an Expert</Link>
        </div>
      </div>
    </>
  );
}
