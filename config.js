/* =====================================================================
   STORE CONFIG — choose what kind of shop this template sells.

   1. Set STORE_TYPE below to one of:  fashion | bags | sneakers | jewelry | beauty | tech
   2. Or preview any type with a URL like  index.html?store=bags
   3. To make your own, copy a preset, rename it, and edit the text,
      categories and products. `sizes: null` hides the size picker.
   ===================================================================== */
const STORE_TYPE = 'fashion';

const U = (id, w = 800) => `https://images.unsplash.com/${id}?w=${w}&q=80`;

const PRESETS = {
  fashion: {
    label: 'Fashion & clothing',
    unit: 'pieces',
    sizes: ['XS','S','M','L','XL'],
    tagline: 'Modern essentials, made slowly.',
    eyebrow: 'Autumn / Winter 2026',
    heroTitle: 'Wear the<br><em>quiet</em> hours.',
    heroSub: 'Considered pieces cut from Italian wool, Japanese denim and vegetable-tanned leather. Made to outlast the season.',
    heroImg: U('photo-1445205170230-053b83016050', 2000),
    marquee: ['Nocturne','Ethically made','Limited runs','Lifetime repairs'],
    catSub: 'Four foundations of a modern wardrobe.',
    dropName: 'Nocturne II', dropSub: 'Twelve pieces. Numbered. Never restocked.',
    dropImg: U('photo-1490481651871-ab68de25d43d', 1800),
    lookbook: ['photo-1509631179647-0177331693ae','photo-1515886657613-9f3515b0c78f','photo-1483985988355-763728e1935b','photo-1496747611176-843222e1e57c','photo-1469334031218-e382a71b716b'],
    categories: [
      { key:'outerwear', label:'Outerwear', img:'photo-1539533018447-63fcce2678e3' },
      { key:'knitwear', label:'Knitwear', img:'photo-1434389677669-e08b4cac3105' },
      { key:'essentials', label:'Essentials', img:'photo-1521572163474-6864f9cf17ab' },
      { key:'accessories', label:'Accessories', img:'photo-1548036328-c9fa89d128fa' },
    ],
    products: [
      { id:1, name:'Nocturne Wool Overcoat', cat:'outerwear', price:540, rating:4.9, reviews:212, isNew:true, colors:['#1b1b1b','#5a4a3a'], imgs:['photo-1539533018447-63fcce2678e3','photo-1544022613-e87ca75a784a'], stock:3 },
      { id:2, name:'Merino Rib Crewneck', cat:'knitwear', price:180, rating:4.8, reviews:140, colors:['#d9d2c5','#2b2b2b','#6b5544'], imgs:['photo-1434389677669-e08b4cac3105','photo-1576566588028-4147f3842f27'] },
      { id:3, name:'Heavyweight Tee', cat:'essentials', price:60, rating:4.7, reviews:520, colors:['#f2efe9','#111'], imgs:['photo-1521572163474-6864f9cf17ab','photo-1583743814966-8936f5b7be1a'] },
      { id:4, name:'Leather Weekender', cat:'accessories', price:420, was:520, rating:4.9, reviews:88, colors:['#5a3b26','#111'], imgs:['photo-1548036328-c9fa89d128fa','photo-1553062407-98eeb64c6a62'], stock:5 },
      { id:5, name:'Shearling Aviator', cat:'outerwear', price:590, rating:4.8, reviews:61, isNew:true, colors:['#3b2a1e'], imgs:['photo-1551028719-00167b16eac5','photo-1520975954732-35dd22299614'] },
      { id:6, name:'Cashmere Turtleneck', cat:'knitwear', price:260, was:320, rating:4.9, reviews:97, colors:['#111','#c7b9a5'], imgs:['photo-1608234808654-2a8875faa7fd','photo-1620799140408-edc6dcb6d633'] },
      { id:7, name:'Pleated Wide Trouser', cat:'essentials', price:210, rating:4.6, reviews:73, isNew:true, colors:['#2b2b2b','#8a7f6e'], imgs:['photo-1594633312681-425c7b97ccd1','photo-1624378439575-d8705ad7ae80'] },
      { id:8, name:'Minimal Steel Watch', cat:'accessories', price:340, rating:4.7, reviews:155, colors:['#c0c0c0','#111'], imgs:['photo-1523275335684-37898b6baf30','photo-1524592094714-0f0654e20314'] },
      { id:9, name:'Oxford Button-Down', cat:'essentials', price:120, rating:4.6, reviews:210, colors:['#e8ecf2','#f2efe9'], imgs:['photo-1596755094514-f87e34085b2c','photo-1602810318383-e386cc2a3ccf'] },
      { id:10, name:'Quilted Liner Jacket', cat:'outerwear', price:290, was:360, rating:4.5, reviews:44, colors:['#2f3a2a','#111'], imgs:['photo-1591047139829-d91aecb6caea','photo-1544441893-675973e31985'] },
      { id:11, name:'Cable Knit Cardigan', cat:'knitwear', price:230, rating:4.8, reviews:66, colors:['#e6dccb'], imgs:['photo-1583744946564-b52ac1c389c8','photo-1434389677669-e08b4cac3105'], stock:2 },
      { id:12, name:'Acetate Sunglasses', cat:'accessories', price:150, rating:4.6, reviews:130, isNew:true, colors:['#111','#6b4a2b'], imgs:['photo-1511499767150-a48a237f0083','photo-1572635196237-14b3f281503f'] },
    ],
  },

  bags: {
    label: 'Bags & leather goods',
    unit: 'bags',
    sizes: null,
    tagline: 'Leather goods, built for decades.',
    eyebrow: 'The Carry Edit · 2026',
    heroTitle: 'Carry<br>what <em>matters.</em>',
    heroSub: 'Full-grain leather totes, weekenders and crossbodies — hand-stitched, edge-painted and guaranteed for life.',
    heroImg: U('photo-1548036328-c9fa89d128fa', 2000),
    marquee: ['Full-grain leather','Hand-stitched','Lifetime warranty','Free monogram'],
    catSub: 'From desk to departure gate.',
    dropName: 'Atelier Tote', dropSub: 'Two hundred numbered pieces in oxblood leather.',
    dropImg: U('photo-1590874103328-eac38a683ce7', 1800),
    lookbook: ['photo-1584917865442-de89df76afd3','photo-1566150905458-1bf1fc113f0d','photo-1553062407-98eeb64c6a62','photo-1622560480605-d83c853bc5c3','photo-1590874103328-eac38a683ce7'],
    categories: [
      { key:'totes', label:'Totes', img:'photo-1590874103328-eac38a683ce7' },
      { key:'crossbody', label:'Crossbody', img:'photo-1584917865442-de89df76afd3' },
      { key:'travel', label:'Travel', img:'photo-1553062407-98eeb64c6a62' },
      { key:'small', label:'Small goods', img:'photo-1627123424574-724758594e93' },
    ],
    products: [
      { id:1, name:'Atelier Leather Tote', cat:'totes', price:380, rating:4.9, reviews:184, isNew:true, colors:['#5a3b26','#111','#8b2c2c'], imgs:['photo-1590874103328-eac38a683ce7','photo-1584917865442-de89df76afd3'], stock:4 },
      { id:2, name:'Mini Saddle Crossbody', cat:'crossbody', price:240, rating:4.8, reviews:96, colors:['#c49a6c','#111'], imgs:['photo-1584917865442-de89df76afd3','photo-1566150905458-1bf1fc113f0d'] },
      { id:3, name:'Canvas & Leather Weekender', cat:'travel', price:460, was:540, rating:4.9, reviews:71, colors:['#3b3a2e','#5a3b26'], imgs:['photo-1553062407-98eeb64c6a62','photo-1548036328-c9fa89d128fa'] },
      { id:4, name:'Bifold Card Wallet', cat:'small', price:90, rating:4.7, reviews:310, colors:['#111','#5a3b26'], imgs:['photo-1627123424574-724758594e93','photo-1606503825008-909a67e63c3d'] },
      { id:5, name:'Structured Top-Handle', cat:'crossbody', price:320, rating:4.6, reviews:52, isNew:true, colors:['#e6dccb','#111'], imgs:['photo-1566150905458-1bf1fc113f0d','photo-1622560480605-d83c853bc5c3'] },
      { id:6, name:'Roll-Top Backpack', cat:'travel', price:290, rating:4.8, reviews:140, colors:['#111','#2f3a2a'], imgs:['photo-1622560480605-d83c853bc5c3','photo-1553062407-98eeb64c6a62'] },
      { id:7, name:'Everyday Shopper', cat:'totes', price:210, was:260, rating:4.7, reviews:88, colors:['#c49a6c'], imgs:['photo-1548036328-c9fa89d128fa','photo-1590874103328-eac38a683ce7'] },
      { id:8, name:'Key Pouch', cat:'small', price:55, rating:4.5, reviews:64, colors:['#8b2c2c','#111'], imgs:['photo-1606503825008-909a67e63c3d','photo-1627123424574-724758594e93'] },
    ],
  },

  sneakers: {
    label: 'Sneakers & footwear',
    unit: 'pairs',
    sizes: ['39','40','41','42','43','44','45'],
    tagline: 'Footwear for the long way round.',
    eyebrow: 'Drop 07 · Now live',
    heroTitle: 'Every step,<br><em>considered.</em>',
    heroSub: 'Italian-made sneakers and boots with recycled soles, cushioned footbeds and a lifetime of resoling.',
    heroImg: U('photo-1542291026-7eec264c27ff', 2000),
    marquee: ['Made in Italy','Recycled soles','Free returns','Resoling for life'],
    catSub: 'Built for city miles.',
    dropName: 'Runner 07', dropSub: 'Limited colourways. Members get first access.',
    dropImg: U('photo-1549298916-b41d501d3772', 1800),
    lookbook: ['photo-1460353581641-37baddab0fa2','photo-1549298916-b41d501d3772','photo-1542291026-7eec264c27ff','photo-1525966222134-fcfa99b8ae77','photo-1595950653106-6c9ebd614d3a'],
    categories: [
      { key:'low', label:'Low tops', img:'photo-1525966222134-fcfa99b8ae77' },
      { key:'runners', label:'Runners', img:'photo-1542291026-7eec264c27ff' },
      { key:'high', label:'High tops', img:'photo-1595950653106-6c9ebd614d3a' },
      { key:'boots', label:'Boots', img:'photo-1608256246200-53e635b5b65f' },
    ],
    products: [
      { id:1, name:'Court Low — Bone', cat:'low', price:180, rating:4.8, reviews:420, isNew:true, colors:['#f2efe9','#111'], imgs:['photo-1525966222134-fcfa99b8ae77','photo-1549298916-b41d501d3772'], stock:6 },
      { id:2, name:'Runner 06 — Crimson', cat:'runners', price:160, was:200, rating:4.7, reviews:233, colors:['#c0392b','#111'], imgs:['photo-1542291026-7eec264c27ff','photo-1460353581641-37baddab0fa2'] },
      { id:3, name:'Varsity High', cat:'high', price:210, rating:4.6, reviews:115, colors:['#111','#f2efe9'], imgs:['photo-1595950653106-6c9ebd614d3a','photo-1525966222134-fcfa99b8ae77'] },
      { id:4, name:'Chelsea Boot', cat:'boots', price:290, rating:4.9, reviews:98, colors:['#5a3b26','#111'], imgs:['photo-1608256246200-53e635b5b65f','photo-1549298916-b41d501d3772'] },
      { id:5, name:'Trail Runner', cat:'runners', price:190, rating:4.8, reviews:76, isNew:true, colors:['#2f3a2a','#c49a6c'], imgs:['photo-1460353581641-37baddab0fa2','photo-1542291026-7eec264c27ff'] },
      { id:6, name:'Suede Low — Sand', cat:'low', price:170, rating:4.5, reviews:62, colors:['#c49a6c'], imgs:['photo-1549298916-b41d501d3772','photo-1525966222134-fcfa99b8ae77'] },
    ],
  },

  jewelry: {
    label: 'Jewelry & watches',
    unit: 'pieces',
    sizes: null,
    tagline: 'Fine jewelry, for every day.',
    eyebrow: 'Recycled gold · Ethical stones',
    heroTitle: 'Small things,<br><em>forever.</em>',
    heroSub: '14k recycled gold and conflict-free stones, made to be worn daily and handed down.',
    heroImg: U('photo-1515562141207-7a88fb7ce338', 2000),
    marquee: ['Recycled gold','Lifetime polish','Free engraving','Hypoallergenic'],
    catSub: 'Layer it, stack it, keep it.',
    dropName: 'Lumière', dropSub: 'A capsule of hand-set diamonds. Fifty sets only.',
    dropImg: U('photo-1599643478518-a784e5dc4c8f', 1800),
    lookbook: ['photo-1515562141207-7a88fb7ce338','photo-1599643478518-a784e5dc4c8f','photo-1605100804763-247f67b3557e','photo-1611591437281-460bfbe1220a','photo-1523275335684-37898b6baf30'],
    categories: [
      { key:'rings', label:'Rings', img:'photo-1605100804763-247f67b3557e' },
      { key:'necklaces', label:'Necklaces', img:'photo-1599643478518-a784e5dc4c8f' },
      { key:'earrings', label:'Earrings', img:'photo-1535632066927-ab7c9ab60908' },
      { key:'watches', label:'Watches', img:'photo-1523275335684-37898b6baf30' },
    ],
    products: [
      { id:1, name:'Solitaire Ring', cat:'rings', price:520, rating:4.9, reviews:140, isNew:true, colors:['#d4af37','#c0c0c0'], imgs:['photo-1605100804763-247f67b3557e','photo-1515562141207-7a88fb7ce338'], stock:3 },
      { id:2, name:'Herringbone Chain', cat:'necklaces', price:340, rating:4.8, reviews:98, colors:['#d4af37'], imgs:['photo-1599643478518-a784e5dc4c8f','photo-1611591437281-460bfbe1220a'] },
      { id:3, name:'Pearl Drop Earrings', cat:'earrings', price:180, was:220, rating:4.7, reviews:76, colors:['#f2efe9','#d4af37'], imgs:['photo-1535632066927-ab7c9ab60908','photo-1515562141207-7a88fb7ce338'] },
      { id:4, name:'Classic Steel Watch', cat:'watches', price:450, rating:4.8, reviews:210, colors:['#c0c0c0','#111'], imgs:['photo-1523275335684-37898b6baf30','photo-1524592094714-0f0654e20314'] },
      { id:5, name:'Signet Ring', cat:'rings', price:260, rating:4.6, reviews:54, colors:['#d4af37'], imgs:['photo-1611591437281-460bfbe1220a','photo-1605100804763-247f67b3557e'] },
      { id:6, name:'Tennis Bracelet', cat:'necklaces', price:590, rating:4.9, reviews:41, isNew:true, colors:['#c0c0c0'], imgs:['photo-1515562141207-7a88fb7ce338','photo-1599643478518-a784e5dc4c8f'] },
    ],
  },

  beauty: {
    label: 'Beauty & skincare',
    unit: 'products',
    sizes: ['30ml','50ml','100ml'],
    tagline: 'Skincare that does less, better.',
    eyebrow: 'Clean · Vegan · Refillable',
    heroTitle: 'Skin, but<br><em>calmer.</em>',
    heroSub: 'Short ingredient lists, clinically tested formulas and refillable glass — nothing your skin doesn’t need.',
    heroImg: U('photo-1556228578-8c89e6adf883', 2000),
    marquee: ['Dermatologist tested','Refillable glass','Vegan','Fragrance free'],
    catSub: 'A ritual in four steps.',
    dropName: 'Night Serum', dropSub: 'Our first retinal formula — join the waitlist.',
    dropImg: U('photo-1570194065650-d99fb4bedf0a', 1800),
    lookbook: ['photo-1556228578-8c89e6adf883','photo-1570194065650-d99fb4bedf0a','photo-1608248597279-f99d160bfcbc','photo-1620916566398-39f1143ab7be','photo-1571781926291-c477ebfd024b'],
    categories: [
      { key:'cleanse', label:'Cleanse', img:'photo-1556228578-8c89e6adf883' },
      { key:'treat', label:'Treat', img:'photo-1620916566398-39f1143ab7be' },
      { key:'hydrate', label:'Hydrate', img:'photo-1608248597279-f99d160bfcbc' },
      { key:'body', label:'Body', img:'photo-1571781926291-c477ebfd024b' },
    ],
    products: [
      { id:1, name:'Gentle Gel Cleanser', cat:'cleanse', price:28, rating:4.8, reviews:640, colors:['#e6dccb'], imgs:['photo-1556228578-8c89e6adf883','photo-1608248597279-f99d160bfcbc'] },
      { id:2, name:'Niacinamide Serum', cat:'treat', price:42, rating:4.9, reviews:820, isNew:true, colors:['#c49a6c'], imgs:['photo-1620916566398-39f1143ab7be','photo-1570194065650-d99fb4bedf0a'], stock:8 },
      { id:3, name:'Barrier Cream', cat:'hydrate', price:38, was:46, rating:4.7, reviews:410, colors:['#f2efe9'], imgs:['photo-1608248597279-f99d160bfcbc','photo-1556228578-8c89e6adf883'] },
      { id:4, name:'Body Oil', cat:'body', price:34, rating:4.6, reviews:190, colors:['#d4a056'], imgs:['photo-1571781926291-c477ebfd024b','photo-1620916566398-39f1143ab7be'] },
      { id:5, name:'Retinal Night Serum', cat:'treat', price:58, rating:4.8, reviews:120, isNew:true, colors:['#8b2c2c'], imgs:['photo-1570194065650-d99fb4bedf0a','photo-1620916566398-39f1143ab7be'] },
      { id:6, name:'Daily SPF 50', cat:'hydrate', price:30, rating:4.7, reviews:530, colors:['#f2efe9'], imgs:['photo-1556228578-8c89e6adf883','photo-1571781926291-c477ebfd024b'] },
    ],
  },

  tech: {
    label: 'Tech & gadgets',
    unit: 'products',
    sizes: null,
    tagline: 'Technology, quietly designed.',
    eyebrow: 'New · Studio Series',
    heroTitle: 'Sound,<br><em>sculpted.</em>',
    heroSub: 'Headphones, speakers and desk tools in aluminium and recycled fabric. Designed to disappear into your space.',
    heroImg: U('photo-1505740420928-5e560c06d30e', 2000),
    marquee: ['2-year warranty','Free express shipping','Recycled aluminium','30-day trial'],
    catSub: 'Everything for a calmer desk.',
    dropName: 'Studio Pro', dropSub: 'Next-gen noise cancelling. Pre-orders open soon.',
    dropImg: U('photo-1546435770-a3e426bf472b', 1800),
    lookbook: ['photo-1505740420928-5e560c06d30e','photo-1546435770-a3e426bf472b','photo-1608043152269-423dbba4e7e1','photo-1587829741301-dc798b83add3','photo-1527864550417-7fd91fc51a46'],
    categories: [
      { key:'audio', label:'Audio', img:'photo-1505740420928-5e560c06d30e' },
      { key:'speakers', label:'Speakers', img:'photo-1608043152269-423dbba4e7e1' },
      { key:'desk', label:'Desk', img:'photo-1587829741301-dc798b83add3' },
      { key:'wearables', label:'Wearables', img:'photo-1523275335684-37898b6baf30' },
    ],
    products: [
      { id:1, name:'Studio Headphones', cat:'audio', price:349, rating:4.8, reviews:920, isNew:true, colors:['#111','#e6dccb'], imgs:['photo-1505740420928-5e560c06d30e','photo-1546435770-a3e426bf472b'], stock:7 },
      { id:2, name:'Room Speaker', cat:'speakers', price:249, was:299, rating:4.7, reviews:310, colors:['#2b2b2b','#c7b9a5'], imgs:['photo-1608043152269-423dbba4e7e1','photo-1545454675-3531b543be5d'] },
      { id:3, name:'Low-Profile Keyboard', cat:'desk', price:159, rating:4.8, reviews:450, colors:['#c0c0c0','#111'], imgs:['photo-1587829741301-dc798b83add3','photo-1527864550417-7fd91fc51a46'] },
      { id:4, name:'Precision Mouse', cat:'desk', price:89, rating:4.6, reviews:280, colors:['#111'], imgs:['photo-1527864550417-7fd91fc51a46','photo-1587829741301-dc798b83add3'] },
      { id:5, name:'Smart Watch', cat:'wearables', price:299, rating:4.5, reviews:190, isNew:true, colors:['#111','#c0c0c0'], imgs:['photo-1523275335684-37898b6baf30','photo-1524592094714-0f0654e20314'] },
      { id:6, name:'Wireless Earbuds', cat:'audio', price:179, rating:4.7, reviews:640, colors:['#f2efe9','#111'], imgs:['photo-1546435770-a3e426bf472b','photo-1505740420928-5e560c06d30e'] },
    ],
  },
};

/* Resolve the active store: ?store= in the URL wins, then the last choice in the footer switcher, then STORE_TYPE. */
const STORE_KEY = [new URLSearchParams(location.search).get('store'), localStorage.getItem('obs_store'), STORE_TYPE]
  .find(k => k && PRESETS[k]);
const STORE = PRESETS[STORE_KEY];
