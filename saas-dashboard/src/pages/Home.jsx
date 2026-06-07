import React from 'react'
import { Link } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground'

export default function Home(){
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-4xl mx-auto p-8 glass rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4 brand">CyberSaaS Dashboard</h1>
        <p className="text-muted mb-6">Secure, modern, and performance-focused admin dashboard for your SaaS.</p>
        <div className="flex justify-center gap-4">
          <Link to="/login" className="px-4 py-2 rounded-md bg-primary">Login</Link>
          <Link to="/register" className="px-4 py-2 rounded-md border border-white/5">Register</Link>
        </div>
      </div>
    </div>
  )
}
