import React from 'react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/profile', label: 'Profile' },
  { to: '/settings', label: 'Settings' },
  { to: '/admin', label: 'Admin Panel' }
]

export default function Sidebar({ collapsed }) {
  return (
    <aside className={`flex-shrink-0 w-64 ${collapsed ? 'hidden md:block' : 'block'} h-full glass p-4`}>
      <div className="text-sm text-muted mb-4">Navigation</div>
      <nav className="flex flex-col gap-2">
        {items.map(i => (
          <NavLink key={i.to} to={i.to} className={({isActive}) => `px-3 py-2 rounded-md hover:bg-white/5 ${isActive ? 'bg-white/5' : ''}`}>
            {i.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
