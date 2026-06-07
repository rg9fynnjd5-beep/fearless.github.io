import React from 'react'
import Particles from 'react-tsparticles'

export default function ParticleBackground(){
  return (
    <Particles options={{
      background: { color: { value: 'transparent' } },
      particles: {
        number: { value: 60 },
        color: { value: '#7c3aed' },
        links: { enable: true, color: '#0ea5a6', distance: 150 },
        move: { speed: 1 }
      }
    }} className="pointer-events-none absolute inset-0 -z-10"/>
  )
}
