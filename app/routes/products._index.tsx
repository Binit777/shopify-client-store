import type { MetaFunction } from 'react-router';
import { ProductCard, type Product } from '~/components/ProductCard';

export const meta: MetaFunction = () => [
  { title: 'ShopClient — Shop All Products' },
  { name: 'description', content: 'Browse our full collection of premium products.' },
];

export const PRODUCTS: Product[] = [
  { id: '1',  handle: 'wireless-headphones',       title: 'Wireless Headphones Pro',       price: '$89.99',  badge: 'Best Seller', emoji: '🎧' },
  { id: '2',  handle: 'leather-wallet',             title: 'Genuine Leather Wallet',        price: '$39.99',  badge: 'New',         emoji: '👜' },
  { id: '3',  handle: 'stainless-water-bottle',     title: 'Stainless Steel Water Bottle',  price: '$24.99',  emoji: '🥤' },
  { id: '4',  handle: 'mechanical-keyboard',        title: 'Mechanical Keyboard TKL',       price: '$129.99', badge: 'Hot',         emoji: '⌨️' },
  { id: '5',  handle: 'yoga-mat',                   title: 'Premium Yoga Mat',              price: '$45.99',  emoji: '🧘' },
  { id: '6',  handle: 'scented-candle-set',         title: 'Scented Candle Gift Set',       price: '$32.00',  badge: 'New',         emoji: '🕯️' },
  { id: '7',  handle: 'running-shoes',              title: 'Lightweight Running Shoes',     price: '$99.99',  badge: 'Sale',        emoji: '💪' },
  { id: '8',  handle: 'ceramic-coffee-mug',         title: 'Ceramic Coffee Mug 16oz',       price: '$18.99',  emoji: '☕' },
  { id: '9',  handle: 'smart-watch',                title: 'Smart Watch Fitness Tracker',   price: '$149.99', badge: 'Best Seller', emoji: '⌚' },
  { id: '10', handle: 'linen-tote-bag',             title: 'Organic Linen Tote Bag',        price: '$22.50',  emoji: '🛋️' },
  { id: '11', handle: 'bamboo-sunglasses',          title: 'Bamboo Frame Sunglasses',       price: '$55.00',  badge: 'Eco',         emoji: '🕶️' },
  { id: '12', handle: 'portable-charger',           title: 'Portable Charger 20000mAh',     price: '$49.99',  emoji: '🔋' },
  { id: '13', handle: 'silk-pillowcase',            title: 'Silk Pillowcase Set',           price: '$37.00',  badge: 'New',         emoji: '🛏️' },
  { id: '14', handle: 'resistance-bands',           title: 'Resistance Band Kit (5 pcs)',   price: '$28.99',  emoji: '🏋️' },
  { id: '15', handle: 'wooden-desk-organizer',      title: 'Wooden Desk Organizer',         price: '$34.99',  badge: 'Sale',        emoji: '💼' },
];

export default function ProductsIndex() {
  return (
    <div className="section">
      <h1 className="section-title">All Products</h1>
      <div className="product-grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
