import { auth, db, storage } from './firebase-config.js'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
import { collection, getDocs, addDoc, doc, setDoc, deleteDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js'

const form = document.getElementById('product-form')
const productsList = document.getElementById('products-list')
const ordersEl = document.getElementById('orders')
const dashboard = document.getElementById('dashboard')

async function load(){
  const snap = await getDocs(collection(db,'products'))
  const prods = snap.docs.map(d=>({id:d.id,...d.data()}))
  renderProducts(prods)
  const os = await getDocs(collection(db,'orders'))
  const orders = os.docs.map(d=>({id:d.id,...d.data()}))
  renderOrders(orders)
  dashboard.innerHTML = `<div>Total products: ${prods.length}</div><div>Total orders: ${orders.length}</div>`
}

function renderProducts(list){
  productsList.innerHTML=''
  list.forEach(p=>{
    const el = document.createElement('div');el.className='card'
    el.innerHTML = `<img src="${p.image||'../assets/img/placeholder.png'}"><h3>${p.name}</h3><p>$${(p.price||0).toFixed(2)}</p><button data-id="${p.id}" class="btn edit">Edit</button>`
    productsList.appendChild(el)
  })
  productsList.querySelectorAll('.edit').forEach(b=>b.addEventListener('click',e=>populate(b.dataset.id)))
}

async function populate(id){
  const docRef = doc(db,'products',id)
  const snap = await getDoc(docRef)
  if(snap.exists()){
    const data = {id:snap.id,...snap.data()}
    form.name.value = data.name||''
    form.category.value = data.category||''
    form.price.value = data.price||''
    form.stock.value = data.stock||''
    form.id.value = data.id
  }
}

form.addEventListener('submit', async (e)=>{
  e.preventDefault()
  const fd = new FormData(form)
  const id = fd.get('id')
  const payload = {name:fd.get('name'),category:fd.get('category'),price:parseFloat(fd.get('price')||0),stock:parseInt(fd.get('stock')||0,10)}
  const file = document.getElementById('image-file').files[0]
  if(file){
    const refPath = `products/${Date.now()}_${file.name}`
    const sref = ref(storage,refPath)
    await uploadBytes(sref,file)
    payload.image = await getDownloadURL(sref)
  }
  if(id){
    await setDoc(doc(db,'products',id),payload,{merge:true})
  }else{
    await addDoc(collection(db,'products'),payload)
  }
  await load()
  form.reset()
})

async function renderOrders(list){
  ordersEl.innerHTML=''
  list.forEach(o=>{
    const el = document.createElement('div');el.className='card'
    el.innerHTML = `<h4>Order ${o.id}</h4><p>${o.status}</p><pre style="color:var(--muted)">${JSON.stringify(o.items||o.items, null, 2)}</pre>`
    ordersEl.appendChild(el)
  })
}

load()
