import { useParams, Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import { PRODUCTS, PRODUCT_DESCRIPTIONS } from '~/data/products';
import { ProductCard } from '~/components/ProductCard';

export function loader({ params }: { params: { handle: string } }) {
  const product = PRODUCTS.find(p => p.handle === params.handle);
  if (!product) throw new Response('Not Found', { status: 404 });
  return product;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: 'Product Not Found — LuxeGem' }];
  return [
    { title: `${data.title} — LuxeGem Fine Jewellery` },
    { name: 'description', content: PRODUCT_DESCRIPTIONS[data.handle] ?? `Shop ${data.title} at LuxeGem. Certified authentic, free shipping.` },
  ];
};

export default function ProductDetailPage() {
  const { handle } = useParams();
  const product = PRODUCTS.find(p => p.handle === handle);

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😔</div>
        <h1 style={{ fontFamily: 'Georgia, serif', marginBottom: '1rem' }}>Product Not Found</h1>
        <Link to="/products" className="btn btn-gold">Back to Collections</Link>
      </div>
    );
  }

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const desc = PRODUCT_DESCRIPTIONS[product.handle] ?? 'A premium quality piece crafted with exceptional care.';

  const badgeClass =
    product.badgeType === 'sale' ? 'product-card__badge product-card__badge--sale' :
    product.badgeType === 'new'  ? 'product-card__badge product-card__badge--new' :
    'product-card__badge';

  return (
    <div className="container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb__sep">›</span>
        <Link to="/products">Collections</Link>
        <span className="breadcrumb__sep">›</span>
        <span>{product.title}</span>
      </nav>

      {/* Product Detail */}
      <div className="product-detail">
        {/* Gallery */}
        <div className="product-detail__gallery">
          <div className="product-detail__main-img" aria-label={product.title}>
            {product.emoji}
          </div>
          <div className="product-detail__thumbs">
            {[1,2,3].map(i => (
              <div key={i} className={`product-detail__thumb${i === 1 ? ' active' : ''}`}>
                {product.emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-detail__info">
          <div className="product-detail__category">{product.category}</div>
          {product.badge && <span className={badgeClass} style={{ marginBottom: '.75rem', display: 'inline-block' }}>{product.badge}</span>}
          <h1 className="product-detail__title">{product.title}</h1>

          <div className="product-detail__rating">
            <span className="stars">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
            <span>{product.reviews} reviews</span>
          </div>

          <div className="product-detail__pricing">
            <span className="product-detail__price">{product.price}</span>
            {product.originalPrice && <span className="product-detail__original">{product.originalPrice}</span>}
            {product.discount && <span className="product-detail__discount">{product.discount}</span>}
          </div>

          <p className="product-detail__desc" style={{ marginBottom: '1.5rem' }}>{desc}</p>

          <ul className="product-detail__features">
            <li>18K Gold / Platinum setting</li>
            <li>Certified authentic stone</li>
            <li>Comes with certificate of authenticity</li>
            <li>Free insured shipping</li>
            <li>30-day hassle-free returns</li>
          </ul>

          <div className="trust-pills">
            <span className="trust-pill"><span>🔒</span> Secure Checkout</span>
            <span className="trust-pill"><span>🚚</span> Free Shipping</span>
            <span className="trust-pill"><span>↩️</span> 30-Day Returns</span>
            <span className="trust-pill"><span>🏅</span> Certified</span>
          </div>

          <div className="product-detail__actions">
            <button className="btn btn-gold btn-full">Add to Cart</button>
            <button className="btn btn-outline">🤍 Wishlist</button>
          </div>

          <div style={{ marginTop: '1rem', fontSize: '.85rem', color: 'var(--grey)' }}>
            Payment gateway integration coming soon. <Link to="/contact" style={{ color: 'var(--gold)' }}>Contact us</Link> to purchase.
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section style={{ padding: '3rem 0 5rem' }} aria-labelledby="related-heading">
          <div className="section-header">
            <span className="section-eyebrow">You May Also Like</span>
            <h2 className="section-title" id="related-heading">Related Pieces</h2>
            <div className="divider" />
          </div>
          <div className="product-grid" style={{ marginTop: '2rem' }}>
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
