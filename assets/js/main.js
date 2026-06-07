import { db } from './firebase-config.js'
import { collection, getDocs, query, limit } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const yearEl = document.getElementById('year')
if(yearEl) yearEl.textContent = new Date().getFullYear()

document.getElementById('discord-btn')?.addEventListener('click', ()=>{
  window.open('https://discord.gg/', '_blank')
})

function updateCartCount(){
  const c = JSON.parse(localStorage.getItem('fearless_cart')||'[]').length
  document.getElementById('cart-count') && (document.getElementById('cart-count').textContent = c)
}
updateCartCount()

async function loadFeatured(){
  const container = document.getElementById('products')
  if(!container) return
  try{
    const q = query(collection(db,'products'), limit(8))
    const snap = await getDocs(q)
    const items = snap.docs.map(d=>({id:d.id,...d.data()}))
    if(items.length) return renderProducts(items,container)
  }catch(e){console.warn('Firestore fetch failed',e)}

  // fallback to local products.json
  try{
    const res = await fetch('products.json')
    const data = await res.json()
    renderProducts(data.slice(0,8),container)
  }catch(e){container.innerHTML='<p class="muted">No products available</p>'}
}

function renderProducts(items,container){
  container.innerHTML = ''
  items.forEach(p=>{
    const el = document.createElement('div')
    el.className = 'card'
    el.innerHTML = `
      <a href="product.html?id=${p.id||encodeURIComponent(p.name)}"><img src="${p.image||'assets/img/placeholder.png'}" alt="${p.name}"></a>
      <h3>${p.name}</h3>
      <p>${p.category || ''} — $${(p.price||0).toFixed(2)}</p>
    `
    container.appendChild(el)
  })
}

loadFeatured()
