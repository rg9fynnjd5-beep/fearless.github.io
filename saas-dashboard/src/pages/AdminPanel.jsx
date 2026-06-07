import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function AdminPanel(){
  const users = [
    { id: 'u1', email: 'admin@example.com', role: 'admin' },
    { id: 'u2', email: 'john@example.com', role: 'user' }
  ]

  return (
    <div className="min-h-screen relative">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-6">
          <Navbar />
          <div className="glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted text-xs"><th>Email</th><th>Role</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {users.map(u=> (
                  <tr key={u.id} className="border-t border-white/5">
                    <td className="py-2">{u.email}</td>
                    <td>{u.role}</td>
                    <td><button className="px-3 py-1 rounded bg-white/5">Manage</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
