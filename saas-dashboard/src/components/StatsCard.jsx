import React from 'react'
import { motion } from 'framer-motion'

export default function StatsCard({ title, value, delta }){
  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="glass p-4 rounded-lg">
      <div className="text-sm text-muted">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
      {delta && <div className="text-xs text-green-400 mt-1">{delta}</div>}
    </motion.div>
  )
}
