import { db } from './firebase-config.js'
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const grid = document.getElementById('grid')
const search = document.getElementById('search')
const category = document.getElementById('category')
let products = []

async function load(){
  try{
    const snap = await getDocs(collection(db,'products'))
    products = snap.docs.map(d=>({id:d.id,...d.data()}))
  }catch(e){
    const res = await fetch('products.json')
    products = await res.json()
  }
  populateCategories()
  render(products)
}

function populateCategories(){
  const cats = Array.from(new Set(products.map(p=>p.category||'Misc')))
  cats.forEach(c=>{
    const opt = document.createElement('option');opt.value=c;opt.textContent=c;category.appendChild(opt)
  })
}

function render(list){
  grid.innerHTML=''
  list.forEach(p=>{
    const el=document.createElement('div');el.className='card'
    el.innerHTML=`<a href="product.html?id=${p.id||encodeURIComponent(p.name)}"><img src="${p.image||'assets/img/placeholder.png'}" alt="${p.name}"></a><h3>${p.name}</h3><p>${p.category||''} — $${(p.price||0).toFixed(2)}</p>`
    grid.appendChild(el)
  })
}

search.addEventListener('input',()=>filter())
category.addEventListener('change',()=>filter())

function filter(){
  const q = search.value.toLowerCase()
  const cat = category.value
  const out = products.filter(p=>(
    (p.name.toLowerCase().includes(q) || (p.description||'').toLowerCase().includes(q)) && (cat? (p.category===cat):true)
  ))
  render(out)
}

load()
