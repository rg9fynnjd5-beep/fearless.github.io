import React from 'react'

export default function ActivityLog({ items = [] }){
  return (
    <div className="glass p-4 rounded-lg">
      <h3 className="font-semibold mb-2">Activity</h3>
      <ul className="text-sm space-y-2">
        {items.map((it, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{it.text}</span>
            <span className="text-muted text-xs">{it.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
