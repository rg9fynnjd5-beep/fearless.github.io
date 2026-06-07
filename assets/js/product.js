import { db } from './firebase-config.js'
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const params = new URLSearchParams(location.search)
const id = params.get('id')
const container = document.getElementById('product')

async function load(){
  let data = null
  try{
    const d = await getDoc(doc(db,'products',id))
    if(d.exists()) data = {id:d.id,...d.data()}
  }catch(e){console.warn('firestore',e)}
  if(!data){
    const res = await fetch('products.json')
    const list = await res.json()
    data = list.find(p=>p.id===id || p.name===id)
  }
  if(!data) return container.innerHTML='<p>Product not found</p>'
  render(data)
}

function render(p){
  container.innerHTML = `
    <div class="card" style="display:flex;gap:18px">
      <img src="${p.image||'assets/img/placeholder.png'}" style="width:360px;height:360px;object-fit:cover">
      <div>
        <h2>${p.name}</h2>
        <p style="color:var(--muted)">${p.description||''}</p>
        <p style="margin-top:12px;font-weight:700">$${(p.price||0).toFixed(2)}</p>
        <p style="color:var(--muted)">Stock: ${p.stock||0}</p>
        <div style="margin-top:12px"><button id="add" class="btn">Add to Cart</button></div>
      </div>
    </div>
  `
  document.getElementById('add').addEventListener('click',()=>{
    const cart = JSON.parse(localStorage.getItem('fearless_cart')||'[]')
    cart.push({id:p.id||p.name,name:p.name,price:p.price||0,image:p.image||'',qty:1})
    localStorage.setItem('fearless_cart',JSON.stringify(cart))
    alert('Added to cart')
    window.location.href='cart.html'
  })
}

load()
