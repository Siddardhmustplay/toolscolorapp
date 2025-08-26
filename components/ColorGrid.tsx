"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ColorGrid() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#FFD93D",
    "#6C5CE7",
    "#A29BFE",
    "#FD79A8",
    "#FDCB6E",
    "#E17055",
    "#00B894",
    "#00CEC9",
    "#0984E3",
  ]

  return (
    <section className="w-full max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Color Palette
      </motion.h2>

      <motion.div
        className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {colors.map((color, index) => (
          <motion.div
            key={color}
            className="aspect-square rounded-lg cursor-pointer shadow-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
          />
        ))}
      </motion.div>

      {selectedColor && (
        <motion.div
          className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-lg font-medium mb-2">Selected Color</p>
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-12 h-12 rounded-full border-2 border-white/40"
              style={{ backgroundColor: selectedColor }}
            />
            <p className="text-white/90 font-mono text-lg">{selectedColor}</p>
          </div>
        </motion.div>
      )}
    </section>
  )
}
