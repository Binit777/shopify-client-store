import { useParams, Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import { PRODUCTS } from './products._index';

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: data ? `ShopClient — ${data.title}` : 'Product Not Found' },
];

export function loader({ params }: { params: { handle: string } }) {
  const product = PRODUCTS.find((p) => p.handle === params.handle);
  if (!product) throw new Response('Not Found', { status: 404 });
  return product;
}

export default function ProductDetail() {
  const { handle } = useParams();
  const product = PRODUCTS.find((p) => p.handle === handle);

  if (!product) {
    return (
      <div className="section" style={{ textAlign: 'center' }}>
        <h1>Product not found</h1>
        <Link to="/products" className="btn btn-dark" style={{ marginTop: '1rem' }}>Back to Shop</Link>
      </div>
    );
  }

  const descriptions: Record<string, string> = {
    'wireless-headphones':    'Crystal-clear sound with active noise cancellation and 30-hour battery life. Lightweight over-ear design perfect for work or travel.',
    'leather-wallet':         'Hand-stitched genuine leather with 8 card slots, 2 bill compartments, and an RFID-blocking layer for security.',
    'stainless-water-bottle': 'Double-wall vacuum insulation keeps drinks cold 24 hrs and hot 12 hrs. BPA-free, leak-proof lid.',
    'mechanical-keyboard':    'Compact TKL layout with tactile brown switches, per-key RGB backlighting, and USB-C connection.',
    'yoga-mat':               'Extra-thick 6mm non-slip surface with alignment lines. Eco-friendly TPE material, includes carrying strap.',
    'scented-candle-set':     'Set of 4 hand-poured soy wax candles in calming scents: Lavender, Vanilla, Sandalwood & Citrus.',
    'running-shoes':          'Breathable mesh upper with responsive foam midsole. Lightweight at just 8oz. Available in 6 colors.',
    'ceramic-coffee-mug':     'Microwave & dishwasher-safe ceramic mug with a comfortable wide handle. Holds 16oz of your favourite brew.',
    'smart-watch':            'Track steps, heart rate, sleep, and workouts. 7-day battery, IP68 waterproof, syncs with iOS & Android.',
    'linen-tote-bag':         '100% organic linen with reinforced handles and an interior zip pocket. Folds flat for easy storage.',
    'bamboo-sunglasses':      'Handcrafted bamboo frames with polarized UV400 lenses. Comes with a bamboo case.',
    'portable-charger':       '20000mAh capacity with dual USB-A + USB-C output. Fast-charge compatible. LED power indicator.',
    'silk-pillowcase':        'Pure mulberry silk (22 momme) for reduced hair frizz and skin creasing. Set of 2, standard size.',
    'resistance-bands':       'Set of 5 latex-free bands (5–50 lbs resistance). Includes door anchor and exercise guide.',
    'wooden-desk-organizer':  'Solid bamboo organizer with 6 compartments for pens, cables, and accessories. Natural finish.',
  };

  return (
    <div className="product-detail">
      <div className="product-detail__image-placeholder">{product.emoji ?? '📦'}</div>
      <div>
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
        <h1 className="product-detail__title">{product.title}</h1>
        <div className="product-detail__price">{product.price}</div>
        <p className="product-detail__desc">
          {descriptions[product.handle] ?? 'A premium quality product you will love.'}
        </p>
        <button className="btn btn-dark" style={{ width: '100%', cursor: 'pointer', border: 'none', fontSize: '1rem', padding: '1rem' }}>
          Add to Cart
        </button>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/products">&larr; Back to Shop</Link>
        </div>
      </div>
    </div>
  );
}
