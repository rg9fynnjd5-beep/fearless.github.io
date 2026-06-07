import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Settings(){
  return (
    <div className="min-h-screen relative">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-6">
          <Navbar />
          <div className="glass p-6 rounded-lg max-w-3xl">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Enable two-factor authentication</span>
                <input type="checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span>Enable activity logs</span>
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
