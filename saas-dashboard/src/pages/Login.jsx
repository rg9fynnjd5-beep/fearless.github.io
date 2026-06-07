import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import ParticleBackground from '../components/ParticleBackground'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try{
      await signInWithEmailAndPassword(auth, email, password)
      nav('/dashboard')
    }catch(err){
      alert('Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <ParticleBackground />
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 glass rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-3 bg-transparent border border-white/5 rounded" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 mb-3 bg-transparent border border-white/5 rounded" />
        <button className="w-full py-3 bg-primary rounded">Sign in</button>
        <div className="mt-3 text-sm">New? <Link to="/register" className="text-accent">Create account</Link></div>
      </form>
    </div>
  )
}
