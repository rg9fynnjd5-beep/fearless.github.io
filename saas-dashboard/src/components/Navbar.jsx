import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ onToggleSidebar }) {
  return (
    <header className="flex items-center justify-between p-4 glass">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="p-2 rounded-md hover:bg-white/5">☰</button>
        <Link to="/" className="text-lg font-semibold brand">CyberSaaS</Link>
      </div>
      <div className="flex items-center gap-3">
        <input placeholder="Search..." className="bg-transparent border border-white/5 px-3 py-1 rounded-md text-sm" />
        <div className="w-8 h-8 rounded-full glass flex items-center justify-center">U</div>
      </div>
    </header>
  )
}
