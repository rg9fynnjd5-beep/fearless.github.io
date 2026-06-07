import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import ParticleBackground from '../components/ParticleBackground'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'users', userCred.user.uid), { email })
      nav('/dashboard')
    }catch(err){
      alert('Registration failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <ParticleBackground />
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 glass rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Create account</h2>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-3 bg-transparent border border-white/5 rounded" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 mb-3 bg-transparent border border-white/5 rounded" />
        <button className="w-full py-3 bg-primary rounded">Register</button>
      </form>
    </div>
  )
}
