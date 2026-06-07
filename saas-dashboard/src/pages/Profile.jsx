import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Profile(){
  return (
    <div className="min-h-screen relative">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-6">
          <Navbar />
          <div className="glass p-6 rounded-lg max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center">U</div>
                <div>
                  <div className="font-medium">Your Name</div>
                  <div className="text-sm text-muted">you@example.com</div>
                </div>
              </div>
              <div className="mt-4">
                <button className="px-4 py-2 bg-primary rounded">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
