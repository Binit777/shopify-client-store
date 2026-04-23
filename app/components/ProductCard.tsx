import { Link } from 'react-router';

export interface Product {
  id: string;
  handle: string;
  title: string;
  price: string;
  image?: string;
  badge?: string;
  emoji?: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      {product.image ? (
        <img src={product.image} alt={product.title} className="product-card__image" />
      ) : (
        <div className="product-card__image-placeholder">{product.emoji ?? '📦'}</div>
      )}
      <div className="product-card__body">
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
        <div className="product-card__title">{product.title}</div>
        <div className="product-card__price">{product.price}</div>
        <Link to={`/products/${product.handle}`} className="btn btn-dark product-card__cta">
          View Product
        </Link>
      </div>
    </div>
  );
}
