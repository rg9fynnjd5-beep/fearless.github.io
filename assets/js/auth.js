import { auth } from './firebase-config.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'

const form = document.getElementById('auth')
const btnIn = document.getElementById('signin')
const btnReg = document.getElementById('register')

btnIn.addEventListener('click', async ()=>{
  const data = Object.fromEntries(new FormData(form).entries())
  try{ await signInWithEmailAndPassword(auth,data.email,data.password); window.location.href='index.html' }catch(e){alert(e.message)}
})

btnReg.addEventListener('click', async ()=>{
  const data = Object.fromEntries(new FormData(form).entries())
  try{ await createUserWithEmailAndPassword(auth,data.email,data.password); window.location.href='index.html' }catch(e){alert(e.message)}
})
