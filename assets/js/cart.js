import { db, auth } from './firebase-config.js'
import { addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'

const cartEl = document.getElementById('cart')
const form = document.getElementById('checkout')
const message = document.getElementById('message')

function loadCart(){
  const cart = JSON.parse(localStorage.getItem('fearless_cart')||'[]')
  if(!cart.length) return cartEl.innerHTML='<p class="muted">Cart is empty</p>'
  let html = '<div class="grid">'
  cart.forEach(i=> html += `<div class="card"><img src="${i.image||'assets/img/placeholder.png'}"><h3>${i.name}</h3><p>$${i.price.toFixed(2)}</p><p>Qty: ${i.qty}</p></div>`)
  html += '</div>'
  cartEl.innerHTML = html
}

form.addEventListener('submit', async (e)=>{
  e.preventDefault()
  const cart = JSON.parse(localStorage.getItem('fearless_cart')||'[]')
  if(!cart.length) return message.textContent='Cart empty'
  const data = Object.fromEntries(new FormData(form).entries())
  try{
    await addDoc(collection(db,'orders'),{customer:data,items:cart,created:serverTimestamp(),status:'pending'})
    localStorage.removeItem('fearless_cart')
    loadCart()
    message.textContent='Order placed — check admin panel to view it.'
  }catch(e){console.error(e);message.textContent='Order failed — check console.'}
})

loadCart()
onAuthStateChanged(auth,user=>{
  if(user) form.email.value = user.email
})
