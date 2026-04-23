import type { Product } from '~/components/ProductCard';

export const PRODUCTS: Product[] = [
  { id:'1', handle:'eternal-diamond-solitaire-ring', title:'Eternal Diamond Solitaire Ring', price:'$1,299', originalPrice:'$1,599', discount:'19% off', category:'Rings', emoji:'💍', badge:'Best Seller', badgeType:'default', rating:5, reviews:248 },
  { id:'2', handle:'royal-emerald-pendant-necklace', title:'Royal Emerald Pendant Necklace', price:'$849', originalPrice:'$1,050', discount:'19% off', category:'Necklaces', emoji:'📿', badge:'New', badgeType:'new', rating:5, reviews:134 },
  { id:'3', handle:'celestial-diamond-drop-earrings', title:'Celestial Diamond Drop Earrings', price:'$699', originalPrice:'$899', discount:'22% off', category:'Earrings', emoji:'✨', badge:'Sale', badgeType:'sale', rating:4, reviews:89 },
  { id:'4', handle:'infinity-gold-bangle', title:'Infinity 18K Gold Bangle', price:'$549', category:'Bracelets', emoji:'🔗', badge:'New', badgeType:'new', rating:5, reviews:67 },
  { id:'5', handle:'sapphire-halo-engagement-ring', title:'Sapphire Halo Engagement Ring', price:'$2,199', originalPrice:'$2,799', discount:'21% off', category:'Rings', emoji:'💎', badge:'Best Seller', badgeType:'default', rating:5, reviews:312 },
  { id:'6', handle:'pearl-strand-necklace', title:'Classic Pearl Strand Necklace', price:'$399', originalPrice:'$499', discount:'20% off', category:'Necklaces', emoji:'🦪', rating:4, reviews:156 },
  { id:'7', handle:'rose-gold-heart-locket', title:'Rose Gold Heart Locket', price:'$299', originalPrice:'$379', discount:'21% off', category:'Necklaces', emoji:'💛', badge:'New', badgeType:'new', rating:4, reviews:98 },
  { id:'8', handle:'diamond-tennis-bracelet', title:'Diamond Tennis Bracelet', price:'$1,899', originalPrice:'$2,299', discount:'17% off', category:'Bracelets', emoji:'🌟', badge:'Best Seller', badgeType:'default', rating:5, reviews:201 },
  { id:'9', handle:'vintage-ruby-cocktail-ring', title:'Vintage Ruby Cocktail Ring', price:'$979', originalPrice:'$1,249', discount:'22% off', category:'Rings', emoji:'🔴', badge:'Sale', badgeType:'sale', rating:4, reviews:73 },
  { id:'10', handle:'gold-huggie-hoops', title:'18K Gold Huggie Hoop Earrings', price:'$249', category:'Earrings', emoji:'🌙', rating:5, reviews:184 },
  { id:'11', handle:'aquamarine-pendant', title:'Aquamarine & Diamond Pendant', price:'$689', originalPrice:'$849', discount:'19% off', category:'Necklaces', emoji:'🔵', badge:'New', badgeType:'new', rating:4, reviews:52 },
  { id:'12', handle:'eternity-band-ring', title:'Diamond Eternity Band', price:'$1,599', originalPrice:'$1,999', discount:'20% off', category:'Rings', emoji:'⭕', badge:'Best Seller', badgeType:'default', rating:5, reviews:276 },
  { id:'13', handle:'charm-bracelet-gold', title:'Gold Charm Bracelet — 7 Charms', price:'$449', originalPrice:'$579', discount:'22% off', category:'Bracelets', emoji:'🌸', badge:'Sale', badgeType:'sale', rating:4, reviews:118 },
  { id:'14', handle:'opal-stud-earrings', title:'Ethiopian Opal Stud Earrings', price:'$329', category:'Earrings', emoji:'🟣', badge:'New', badgeType:'new', rating:4, reviews:44 },
  { id:'15', handle:'three-stone-diamond-ring', title:'Three-Stone Diamond Ring', price:'$3,499', originalPrice:'$4,299', discount:'19% off', category:'Rings', emoji:'🏆', badge:'Best Seller', badgeType:'default', rating:5, reviews:391 },
];

export const CATEGORIES = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];

export const PRODUCT_DESCRIPTIONS: Record<string, string> = {
  'eternal-diamond-solitaire-ring': 'A timeless classic featuring a brilliant-cut diamond set in lustrous 18K white gold. The four-prong setting allows maximum light to enter the stone, creating unparalleled brilliance and fire. Includes certificate of authenticity.',
  'royal-emerald-pendant-necklace': 'A vivid natural emerald surrounded by a halo of white diamonds on an 18K yellow gold chain. This piece radiates sophistication and brings a touch of royalty to any ensemble.',
  'celestial-diamond-drop-earrings': 'Inspired by the night sky, these drop earrings feature cascading diamonds in a pavé setting. Crafted in 14K white gold, they move gracefully with every gesture.',
  'infinity-gold-bangle': 'A sleek 18K gold bangle engraved with the infinity symbol — a beautiful reminder that some bonds are eternal. Polished to perfection, comfortable for daily wear.',
  'sapphire-halo-engagement-ring': 'A cushion-cut blue sapphire at its heart, surrounded by a glittering halo of round diamonds. Set in platinum for a look that captures the essence of royalty.',
  'pearl-strand-necklace': 'Hand-knotted Akoya pearls, each individually selected for their lustre and perfect roundness. Finished with a 14K gold clasp for classic elegance.',
  'rose-gold-heart-locket': 'A romantic rose-gold locket with a delicate heart motif, perfect for holding a photo of someone special. Chain adjustable to 16 or 18 inches.',
  'diamond-tennis-bracelet': 'Forty-two round brilliant diamonds, channel-set in 14K white gold. This iconic bracelet is the epitome of timeless luxury and everyday sophistication.',
  'vintage-ruby-cocktail-ring': 'An oval-cut Burmese ruby flanked by side diamonds in a vintage-inspired milgrain setting. The deep red of the ruby is truly breathtaking.',
  'gold-huggie-hoops': 'Classic 18K yellow gold huggie hoops — lightweight yet substantial, perfect for everyday wear or dressed-up occasions.',
  'aquamarine-pendant': 'A serene sea-blue aquamarine framed by sparkling diamonds in 14K white gold. The colour of calm tropical waters, captured in a jewel.',
  'eternity-band-ring': 'A full eternity band featuring hand-set round diamonds in a prong setting that encircles the entire ring — symbolising never-ending love.',
  'charm-bracelet-gold': 'Seven 14K gold charms representing love, luck, travel, courage, happiness, family, and friendship — a meaningful gift for life milestones.',
  'opal-stud-earrings': 'Ethiopian opals known for their vivid play-of-colour, set in 14K white gold. Each pair is unique — no two opals display exactly the same fire.',
  'three-stone-diamond-ring': 'Past, present, and future — three brilliant-cut diamonds, progressively sized, set in a sculpted platinum band. The ultimate symbol of a love story.',
};
