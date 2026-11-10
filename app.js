/* ===== Data — swap for your own catalogue / API ===== */
const U = id => `https://images.unsplash.com/${id}?w=800&q=80`;
const PRODUCTS = [
  { id:1, name:'Nocturne Wool Overcoat', cat:'outerwear', price:540, rating:4.9, reviews:212, isNew:true, colors:['#1b1b1b','#5a4a3a'], imgs:[U('photo-1539533018447-63fcce2678e3'),U('photo-1544022613-e87ca75a784a')], stock:3 },
  { id:2, name:'Merino Rib Crewneck', cat:'knitwear', price:180, rating:4.8, reviews:140, colors:['#d9d2c5','#2b2b2b','#6b5544'], imgs:[U('photo-1434389677669-e08b4cac3105'),U('photo-1576566588028-4147f3842f27')] },
  { id:3, name:'Heavyweight Tee', cat:'essentials', price:60, rating:4.7, reviews:520, colors:['#f2efe9','#111'], imgs:[U('photo-1521572163474-6864f9cf17ab'),U('photo-1583743814966-8936f5b7be1a')] },
  { id:4, name:'Leather Weekender', cat:'accessories', price:420, was:520, rating:4.9, reviews:88, colors:['#5a3b26','#111'], imgs:[U('photo-1548036328-c9fa89d128fa'),U('photo-1553062407-98eeb64c6a62')], stock:5 },
  { id:5, name:'Shearling Aviator', cat:'outerwear', price:590, rating:4.8, reviews:61, isNew:true, colors:['#3b2a1e'], imgs:[U('photo-1551028719-00167b16eac5'),U('photo-1520975954732-35dd22299614')] },
  { id:6, name:'Cashmere Turtleneck', cat:'knitwear', price:260, was:320, rating:4.9, reviews:97, colors:['#111','#c7b9a5'], imgs:[U('photo-1608234808654-2a8875faa7fd'),U('photo-1620799140408-edc6dcb6d633')] },
  { id:7, name:'Pleated Wide Trouser', cat:'essentials', price:210, rating:4.6, reviews:73, isNew:true, colors:['#2b2b2b','#8a7f6e'], imgs:[U('photo-1594633312681-425c7b97ccd1'),U('photo-1624378439575-d8705ad7ae80')] },
  { id:8, name:'Minimal Steel Watch', cat:'accessories', price:340, rating:4.7, reviews:155, colors:['#c0c0c0','#111'], imgs:[U('photo-1523275335684-37898b6baf30'),U('photo-1524592094714-0f0654e20314')] },
  { id:9, name:'Oxford Button-Down', cat:'essentials', price:120, rating:4.6, reviews:210, colors:['#e8ecf2','#f2efe9'], imgs:[U('photo-1596755094514-f87e34085b2c'),U('photo-1602810318383-e386cc2a3ccf')] },
  { id:10, name:'Quilted Liner Jacket', cat:'outerwear', price:290, was:360, rating:4.5, reviews:44, colors:['#2f3a2a','#111'], imgs:[U('photo-1591047139829-d91aecb6caea'),U('photo-1544441893-675973e31985')] },
  { id:11, name:'Cable Knit Cardigan', cat:'knitwear', price:230, rating:4.8, reviews:66, colors:['#e6dccb'], imgs:[U('photo-1583744946564-b52ac1c389c8'),U('photo-1434389677669-e08b4cac3105')], stock:2 },
  { id:12, name:'Acetate Sunglasses', cat:'accessories', price:150, rating:4.6, reviews:130, isNew:true, colors:['#111','#6b4a2b'], imgs:[U('photo-1511499767150-a48a237f0083'),U('photo-1572635196237-14b3f281503f')] },
];
const SIZES = ['XS','S','M','L','XL'];
const PROMOS = { NOIR10: .10, WELCOME15: .15 };
const FREE_SHIP = 200;

/* ===== Helpers & state ===== */
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const money = n => '$' + n.toLocaleString(undefined,{maximumFractionDigits:2});
const store = { get:(k,d)=>JSON.parse(localStorage.getItem(k)||'null')??d, set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)) };
let cart = store.get('obs_cart', []);
let wish = store.get('obs_wish', []);
let promo = store.get('obs_promo', null);
const state = { filter:'all', sort:'featured', max:600 };
const byId = id => PRODUCTS.find(p => p.id === id);

/* ===== Preloader ===== */
(() => {
  let p = 0; const bar = $('#loaderBar');
  const t = setInterval(() => {
    p = Math.min(100, p + Math.random()*18); bar.style.width = p + '%';
    if (p >= 100) { clearInterval(t); setTimeout(() => { $('#loader').classList.add('done'); document.body.classList.add('ready'); $$('.hero .split, .hero .reveal').forEach(el=>el.classList.add('in')); }, 250); }
  }, 90);
})();

/* ===== Split text into words ===== */
$$('.split').forEach(el => {
  let i = 0;
  el.innerHTML = el.innerHTML.split(/(<br>|<em>.*?<\/em>|\s+)/).map(part => {
    if (!part || /^\s+$/.test(part)) return part ? ' ' : '';
    if (part === '<br>') return part;
    return `<span class="w"><span style="--i:${i++}">${part}</span></span>`;
  }).join('');
});

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in'); io.unobserve(e.target);
  if (e.target.classList.contains('value')) countUp($('.counter', e.target));
}), { threshold:.15 });
$$('.reveal, .split').forEach(el => { if (!el.closest('.hero')) io.observe(el); });

function countUp(el) {
  const to = +el.dataset.to, dec = +(el.dataset.dec||0), start = performance.now();
  const tick = now => { const k = Math.min(1,(now-start)/1600), e = 1-Math.pow(1-k,4);
    el.textContent = (to*e).toFixed(dec); if (k<1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}

/* ===== Cursor ===== */
const cur = $('#cursor'), dot = $('#cursorDot'); let mx=0,my=0,cx=0,cy=0;
addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`; });
(function loop(){ cx+=(mx-cx)*.15; cy+=(my-cy)*.15; cur.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
document.addEventListener('mouseover', e => cur.classList.toggle('hover', !!e.target.closest('a,button,.card-media,.cat-card,select,input')));

/* ===== Magnetic buttons & tilt ===== */
$$('.magnetic').forEach(b => {
  b.addEventListener('mousemove', e => { const r=b.getBoundingClientRect(); b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.4}px)`; });
  b.addEventListener('mouseleave', () => b.style.transform='');
});
$$('.tilt').forEach(c => {
  c.addEventListener('mousemove', e => { const r=c.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    c.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`; });
  c.addEventListener('mouseleave', () => c.style.transform='');
});

/* ===== Scroll-driven effects ===== */
let lastY = 0;
const nav = $('#nav'), heroBg = $('#heroBg'), marquee = $('#marquee'), hs = $('#hscroll'), hTrack = $('#hTrack');
marquee.innerHTML += marquee.innerHTML + marquee.innerHTML;
let mqX = 0, mqV = 0;
function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  $('#scrollProgress').style.transform = `scaleX(${y/h})`;
  nav.classList.toggle('scrolled', y > 40);
  nav.classList.toggle('hide', y > lastY && y > 400 && !document.body.classList.contains('lock'));
  mqV += (y - lastY) * .08; lastY = y;
  if (y < innerHeight) heroBg.style.translate = `0 ${y*.25}px`;
  $$('.parallax').forEach(el => { const r = el.parentElement.getBoundingClientRect(); el.style.transform = `translateY(${r.top * -(+el.dataset.speed)}px)`; });
  if (innerWidth <= 760) return;
  const r = hs.getBoundingClientRect(), total = hs.offsetHeight - innerHeight;
  const prog = Math.min(1, Math.max(0, -r.top / total));
  hTrack.style.transform = `translateX(${-prog * (hTrack.scrollWidth - innerWidth)}px)`;
}
addEventListener('scroll', onScroll, { passive:true });
(function mq(){ mqV *= .92; mqX -= 0.6 + mqV; const w = marquee.scrollWidth/3; if (mqX <= -w) mqX += w; if (mqX > 0) mqX -= w;
  marquee.style.transform = `translateX(${mqX}px)`; requestAnimationFrame(mq); })();

/* ===== Product grid ===== */
const heart = '<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>';
function renderGrid() {
  let list = PRODUCTS.filter(p => (state.filter==='all' || p.cat===state.filter) && p.price <= state.max);
  const s = { low:(a,b)=>a.price-b.price, high:(a,b)=>b.price-a.price, rating:(a,b)=>b.rating-a.rating, new:(a,b)=>(b.isNew|0)-(a.isNew|0) }[state.sort];
  if (s) list = [...list].sort(s);
  $('#resultCount').textContent = list.length;
  $('#empty').hidden = list.length > 0;
  $('#grid').innerHTML = list.map((p,i) => `
    <article class="card" style="--i:${i}" data-id="${p.id}">
      <div class="card-media" data-qv>
        ${p.was ? `<span class="tag sale">−${Math.round((1-p.price/p.was)*100)}%</span>` : p.isNew ? '<span class="tag">New</span>' : ''}
        <button class="wish ${wish.includes(p.id)?'on':''}" data-wish aria-label="Wishlist">${heart}</button>
        <img src="${p.imgs[0]}" alt="${p.name}" loading="lazy"><img class="alt" src="${p.imgs[1]}" alt="" loading="lazy">
        <div class="quick-add">${['S','M','L'].map(s=>`<button data-add="${s}">+ ${s}</button>`).join('')}</div>
      </div>
      <div class="card-info">
        <div><h3>${p.name}</h3><small>${p.cat}</small><div class="swatches">${p.colors.map(c=>`<i style="background:${c}"></i>`).join('')}</div></div>
        <span class="price">${p.was?`<s>${money(p.was)}</s>`:''}${money(p.price)}</span>
      </div>
    </article>`).join('');
}
$('#grid').addEventListener('click', e => {
  const card = e.target.closest('.card'); if (!card) return; const id = +card.dataset.id;
  const w = e.target.closest('[data-wish]'), a = e.target.closest('[data-add]');
  if (w) { e.stopPropagation(); toggleWish(id, w); return; }
  if (a) { e.stopPropagation(); addToCart(id, a.dataset.add, byId(id).colors[0], $('img',card)); return; }
  if (e.target.closest('[data-qv]')) openQuickView(id);
});

function setFilter(f) {
  state.filter = f;
  $$('.chip').forEach(c => c.classList.toggle('active', c.dataset.filter === f));
  renderGrid();
}
$$('[data-filter]').forEach(el => el.addEventListener('click', () => { setFilter(el.dataset.filter); closeMenu(); }));
$('#sortSel').addEventListener('change', e => { state.sort = e.target.value; renderGrid(); });
$('#priceRange').addEventListener('input', e => { state.max = +e.target.value; $('#priceOut').textContent = e.target.value; renderGrid(); });

/* ===== Overlays ===== */
const overlay = $('#overlay');
function openPanel(el) { closeAll(); el.classList.add('open'); overlay.classList.add('on'); document.body.classList.add('lock'); }
function closeAll() { $$('.drawer.open,.modal.open,.search.open').forEach(x=>x.classList.remove('open')); overlay.classList.remove('on'); document.body.classList.remove('lock'); }
overlay.addEventListener('click', closeAll);
$('#quickView').addEventListener('click', e => { if (e.target.id === 'quickView') closeAll(); });
document.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeAll(); });
addEventListener('keydown', e => { if (e.key==='Escape') closeAll(); if (e.key==='/' && document.activeElement.tagName!=='INPUT') { e.preventDefault(); openSearch(); } });

const menuBtn = $('#menuBtn');
function closeMenu(){ menuBtn.classList.remove('open'); $('#mobileMenu').classList.remove('open'); }
menuBtn.addEventListener('click', () => { menuBtn.classList.toggle('open'); $('#mobileMenu').classList.toggle('open'); });
$$('#mobileMenu a').forEach(a => a.addEventListener('click', closeMenu));

/* ===== Theme ===== */
const root = document.documentElement;
root.dataset.theme = store.get('obs_theme', 'dark');
$('#themeBtn').addEventListener('click', () => { root.dataset.theme = root.dataset.theme==='dark'?'light':'dark'; store.set('obs_theme', root.dataset.theme); });

/* ===== Cart ===== */
function addToCart(id, size, color, imgEl) {
  const key = `${id}-${size}-${color}`, line = cart.find(l => l.key === key);
  line ? line.qty++ : cart.push({ key, id, size, color, qty:1 });
  saveCart(); toast(`Added ${byId(id).name} · ${size}`, 'View bag', () => openPanel($('#cartDrawer')));
  if (imgEl) flyToCart(imgEl);
}
function flyToCart(img) {
  const r = img.getBoundingClientRect(), t = $('#cartBtn').getBoundingClientRect(), f = document.createElement('img');
  f.src = img.src; f.className = 'fly'; Object.assign(f.style,{left:r.left+r.width/2-30+'px',top:r.top+r.height/2-37+'px'});
  document.body.appendChild(f);
  requestAnimationFrame(() => requestAnimationFrame(() => Object.assign(f.style,{left:t.left+'px',top:t.top+'px',width:'20px',height:'20px',opacity:.3,borderRadius:'50%'})));
  setTimeout(() => f.remove(), 850);
}
function saveCart() { store.set('obs_cart', cart); renderCart(); }
function renderCart() {
  const count = cart.reduce((s,l)=>s+l.qty,0), sub = cart.reduce((s,l)=>s+byId(l.id).price*l.qty,0);
  const disc = promo ? sub * PROMOS[promo] : 0;
  badge($('#cartCount'), count);
  $('#cartItems').innerHTML = cart.length ? cart.map(l => { const p = byId(l.id); return `
    <div class="line" data-key="${l.key}"><img src="${p.imgs[0]}" alt="">
      <div><h4>${p.name}</h4><small>Size ${l.size} · <i style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${l.color}"></i></small><br>
        <div class="qty"><button data-q="-1">−</button><span>${l.qty}</span><button data-q="1">+</button></div></div>
      <div class="line-right"><span>${money(p.price*l.qty)}</span><button class="rm" data-rm>Remove</button></div></div>`; }).join('')
    : '<p class="drawer-empty">Your bag is empty.</p>';
  const left = Math.max(0, FREE_SHIP - sub);
  $('#shipMsg').innerHTML = left ? `You're <b>${money(left)}</b> away from free shipping` : '✦ You’ve unlocked free shipping';
  $('#shipFill').style.width = Math.min(100, sub/FREE_SHIP*100) + '%';
  $('#subtotal').textContent = money(sub);
  $('#discountRow').hidden = !disc; $('#discount').textContent = '−' + money(disc);
  $('#total').textContent = money(sub - disc);
}
$('#cartItems').addEventListener('click', e => {
  const row = e.target.closest('.line'); if (!row) return; const l = cart.find(x=>x.key===row.dataset.key);
  if (e.target.dataset.q) { l.qty += +e.target.dataset.q; if (l.qty < 1) cart = cart.filter(x=>x!==l); }
  if ('rm' in e.target.dataset) cart = cart.filter(x=>x!==l);
  saveCart();
});
$('#promoForm').addEventListener('submit', e => { e.preventDefault(); const c = $('#promoInput').value.trim().toUpperCase();
  if (PROMOS[c]) { promo = c; store.set('obs_promo', c); toast(`Code ${c} applied`); } else toast('Invalid code');
  renderCart(); });
$('#checkoutBtn').addEventListener('click', () => toast(cart.length ? 'Connect your checkout (Stripe / Shopify) here' : 'Your bag is empty'));
$('#cartBtn').addEventListener('click', () => openPanel($('#cartDrawer')));

/* ===== Wishlist ===== */
function toggleWish(id, btn) {
  wish = wish.includes(id) ? wish.filter(x=>x!==id) : [...wish, id];
  store.set('obs_wish', wish); renderWish();
  if (btn) { btn.classList.toggle('on', wish.includes(id)); btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop'); }
  $$(`.card[data-id="${id}"] .wish`).forEach(b => b.classList.toggle('on', wish.includes(id)));
  toast(wish.includes(id) ? 'Saved to wishlist' : 'Removed from wishlist');
}
function renderWish() {
  badge($('#wishCount'), wish.length);
  $('#wishItems').innerHTML = wish.length ? wish.map(id => { const p = byId(id); return `
    <div class="line" data-id="${id}"><img src="${p.imgs[0]}" alt=""><div><h4>${p.name}</h4><small>${money(p.price)}</small></div>
    <div class="line-right"><button class="btn btn-ghost" style="padding:8px 14px" data-view>View</button><button class="rm" data-unwish>Remove</button></div></div>`; }).join('')
    : '<p class="drawer-empty">Nothing saved yet.</p>';
}
$('#wishItems').addEventListener('click', e => { const row = e.target.closest('.line'); if (!row) return; const id = +row.dataset.id;
  if ('view' in e.target.dataset) openQuickView(id); if ('unwish' in e.target.dataset) toggleWish(id); });
$('#wishBtn').addEventListener('click', () => openPanel($('#wishDrawer')));

function badge(el, n) {
  const mirror = $(`.bottom-bar [data-badge="${el.id==='cartCount'?'cart':'wish'}"]`);
  if (mirror) { mirror.textContent = n; mirror.classList.toggle('on', n>0); } const prev = el.textContent; el.textContent = n; el.classList.toggle('on', n>0);
  if (prev != n && n>0) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); } }

/* ===== Quick view (with size + fit finder + recently viewed) ===== */
function openQuickView(id) {
  const p = byId(id); let size = null, color = p.colors[0];
  const soldOut = SIZES.filter((_,i) => (id+i) % 5 === 0);
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5-Math.round(p.rating));
  $('#qvCard').innerHTML = `
    <div class="qv-gallery"><img id="qvMain" src="${p.imgs[0]}" alt="${p.name}">
      <div class="qv-thumbs">${p.imgs.map((s,i)=>`<img src="${s}" class="${i?'':'on'}" alt="">`).join('')}</div></div>
    <div class="qv-body">
      <button class="icon-btn close" data-close>✕</button>
      <p class="eyebrow">${p.cat}</p><h2>${p.name}</h2>
      <div class="stars">${stars}<span>${p.rating} · ${p.reviews} reviews</span></div>
      <span class="price" style="font-size:20px">${p.was?`<s>${money(p.was)}</s>`:''}${money(p.price)}</span>
      <p>Cut from responsibly sourced fibres and finished by hand in small workshops. Relaxed through the body with a clean, structured line.</p>
      <div><div class="opt-label">Colour</div><div class="colors">${p.colors.map((c,i)=>`<button style="background:${c}" data-c="${c}" class="${i?'':'on'}"></button>`).join('')}</div></div>
      <div><div class="opt-label">Size <a id="fitToggle">Find my fit</a></div>
        <div class="sizes">${SIZES.map(s=>`<button data-s="${s}" ${soldOut.includes(s)?'disabled':''}>${s}</button>`).join('')}</div></div>
      <div class="fit-finder" id="fitFinder">
        <div class="row"><input id="fH" type="number" placeholder="Height (cm)"><input id="fW" type="number" placeholder="Weight (kg)"></div>
        <button class="btn btn-ghost" id="fitGo" style="padding:10px">Recommend size</button><span id="fitOut"></span></div>
      ${p.stock ? `<span class="stock">● Only ${p.stock} left in stock</span>` : ''}
      <button class="btn btn-primary full" id="qvAdd"><span>Select a size</span></button>
    </div>`;
  const card = $('#qvCard');
  $$('.qv-thumbs img', card).forEach(t => t.onclick = () => { $$('.qv-thumbs img',card).forEach(x=>x.classList.remove('on')); t.classList.add('on'); $('#qvMain').src = t.src; });
  const pick = s => { size = s; $$('.sizes button',card).forEach(b=>b.classList.toggle('on', b.dataset.s===s)); $('#qvAdd span').textContent = `Add to bag — ${money(p.price)}`; };
  $$('.sizes button', card).forEach(b => b.onclick = () => pick(b.dataset.s));
  $$('.colors button', card).forEach(b => b.onclick = () => { color = b.dataset.c; $$('.colors button',card).forEach(x=>x.classList.toggle('on', x===b)); });
  $('#fitToggle').onclick = () => $('#fitFinder').classList.toggle('open');
  $('#fitGo').onclick = () => { const h=+$('#fH').value, w=+$('#fW').value; if(!h||!w) return;
    const bmi = w/((h/100)**2), idx = Math.max(0, Math.min(4, Math.round((bmi-18)/2.5) + (h>185?1:h<160?-1:0)));
    let s = SIZES[idx]; if (soldOut.includes(s)) s = SIZES.find(x=>!soldOut.includes(x));
    $('#fitOut').textContent = `We recommend ${s}.`; pick(s); };
  $('#qvAdd').onclick = () => { if (!size) { $('.sizes',card).animate([{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'none'}],{duration:300}); return; }
    addToCart(id, size, color, $('#qvMain')); closeAll(); };
  openPanel($('#quickView'));
}

/* ===== Search ===== */
function openSearch() { openPanel($('#searchPanel')); setTimeout(()=>$('#searchInput').focus(), 300); runSearch(''); }
function runSearch(q) {
  q = q.toLowerCase().trim();
  const res = PRODUCTS.filter(p => !q || (p.name+' '+p.cat).toLowerCase().includes(q)).slice(0, 8);
  $('#searchResults').innerHTML = res.length ? res.map((p,i)=>`<div class="s-item" data-id="${p.id}" style="animation-delay:${i*40}ms"><img src="${p.imgs[0]}" alt=""><p>${p.name} — ${money(p.price)}</p></div>`).join('') : '<p style="color:var(--mute)">No results.</p>';
}
$('#searchBtn').addEventListener('click', openSearch);
$('#searchInput').addEventListener('input', e => runSearch(e.target.value));
$('#searchResults').addEventListener('click', e => { const it = e.target.closest('.s-item'); if (it) openQuickView(+it.dataset.id); });

/* ===== Countdown (next drop = 9 days from first visit) ===== */
const dropAt = store.get('obs_drop', Date.now() + 9*864e5); store.set('obs_drop', dropAt);
setInterval(function cd() {
  let s = Math.max(0, (dropAt - Date.now())/1000)|0;
  const v = { d:s/86400|0, h:s%86400/3600|0, m:s%3600/60|0, s:s%60 };
  $$('#countdown b').forEach(b => b.textContent = String(v[b.dataset.u]).padStart(2,'0'));
  return cd;
}(), 1000);

/* ===== Reviews slider ===== */
const quotes = $$('#reviewSlider blockquote'); let qi = 0;
$('#reviewDots').innerHTML = quotes.map((_,i)=>`<button class="${i?'':'on'}" aria-label="Review ${i+1}"></button>`).join('');
const showQ = i => { qi = i; quotes.forEach((q,j)=>q.classList.toggle('active', j===i)); $$('#reviewDots button').forEach((d,j)=>d.classList.toggle('on', j===i)); };
$$('#reviewDots button').forEach((d,i) => d.onclick = () => showQ(i));
setInterval(() => showQ((qi+1) % quotes.length), 6000);

/* ===== Forms & toast ===== */
['#notifyForm','#newsForm'].forEach(s => $(s).addEventListener('submit', e => { e.preventDefault(); e.target.reset(); toast("You're on the list ✦"); }));
let tt;
function toast(msg, action, fn) {
  const t = $('#toast'); t.innerHTML = msg + (action ? ` <button class="btn btn-primary" style="padding:6px 14px">${action}</button>` : '');
  if (fn) $('button', t).onclick = fn;
  t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 3200);
}

/* ===== Mobile: bottom bar + swipe to close sheets/drawers ===== */
$$('.bottom-bar button').forEach(b => b.addEventListener('click', () => {
  const g = b.dataset.go;
  if (g==='shop') { closeAll(); $('#shop').scrollIntoView(); }
  if (g==='search') openSearch();
  if (g==='wish') openPanel($('#wishDrawer'));
  if (g==='cart') openPanel($('#cartDrawer'));
}));
[['#qvCard','y'],['#cartDrawer','x'],['#wishDrawer','x']].forEach(([sel,axis]) => {
  const el = $(sel); let start = null, d = 0;
  el.addEventListener('touchstart', e => { const t = e.touches[0];
    if (axis==='y' && el.scrollTop > 0) return; start = axis==='y' ? t.clientY : t.clientX; d = 0; el.style.transition = 'none'; }, {passive:true});
  el.addEventListener('touchmove', e => { if (start===null) return; const t = e.touches[0];
    d = Math.max(0, (axis==='y' ? t.clientY : t.clientX) - start);
    el.style.transform = axis==='y' ? `translateY(${d}px)` : `translateX(${d}px)`; }, {passive:true});
  el.addEventListener('touchend', () => { if (start===null) return; el.style.transition = ''; el.style.transform = '';
    if (d > 110) closeAll(); start = null; });
});

renderGrid(); renderCart(); renderWish(); onScroll();
