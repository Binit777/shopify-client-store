import { Link } from 'react-router';

export interface Product {
  id: string;
  handle: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  category: string;
  emoji: string;
  badge?: string;
  badgeType?: 'sale' | 'new' | 'default';
  rating: number;
  reviews: number;
}

export function ProductCard({ product }: { product: Product }) {
  const badgeClass =
    product.badgeType === 'sale' ? 'product-card__badge product-card__badge--sale' :
    product.badgeType === 'new'  ? 'product-card__badge product-card__badge--new' :
    'product-card__badge';

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <span className="product-card__emoji" aria-hidden="true">{product.emoji}</span>
        {product.badge && <span className={badgeClass}>{product.badge}</span>}
        <button className="product-card__wishlist" aria-label={`Add ${product.title} to wishlist`}>🤍</button>
      </div>
      <div className="product-card__body">
        <div className="product-card__category">{product.category}</div>
        <h3 className="product-card__title">{product.title}</h3>
        <div className="product-card__rating">
          <span className="stars">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="product-card__pricing">
          <span className="product-card__price">{product.price}</span>
          {product.originalPrice && (
            <span className="product-card__original">{product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="product-card__discount">{product.discount}</span>
          )}
        </div>
        <Link to={`/products/${product.handle}`} className="product-card__cta" aria-label={`View ${product.title}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}
