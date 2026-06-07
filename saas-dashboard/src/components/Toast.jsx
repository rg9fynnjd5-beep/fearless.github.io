import React from 'react'

export default function Toast({ message }){
  if(!message) return null
  return (
    <div className="fixed bottom-6 right-6 bg-white/6 text-white p-3 rounded-md glass">{message}</div>
  )
}
