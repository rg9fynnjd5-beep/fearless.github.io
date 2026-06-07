import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ParticleBackground from '../components/ParticleBackground'
import StatsCard from '../components/StatsCard'
import ActivityLog from '../components/ActivityLog'

export default function Dashboard(){
  const [collapsed, setCollapsed] = useState(false)
  const activity = [
    { text: 'User john created an account', time: '2m' },
    { text: 'New subscription: Acme Corp', time: '1h' }
  ]

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="flex h-full">
        <Sidebar collapsed={collapsed} />
        <div className="flex-1 p-6 space-y-6">
          <Navbar onToggleSidebar={() => setCollapsed(s => !s)} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatsCard title="Active Users" value="8,412" delta="+3.2%" />
            <StatsCard title="Revenue" value="$92,341" delta="+1.1%" />
            <StatsCard title="New Signups" value="312" delta="+5.8%" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 glass p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Overview</h3>
              <p className="text-sm text-muted">Secure overview and real-time telemetry placeholder.</p>
            </div>
            <ActivityLog items={activity} />
          </div>
        </div>
      </div>
    </div>
  )
}
