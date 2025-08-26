"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function SpinningCoin() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [currentColor, setCurrentColor] = useState("#FFD700")

  const colors = [
    "#FFD700", // Gold
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#45B7D1", // Blue
    "#96CEB4", // Green
    "#FFEAA7", // Yellow
    "#DDA0DD", // Plum
    "#98D8C8", // Mint
  ]

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)

    // Change color during spin
    const colorInterval = setInterval(() => {
      setCurrentColor(colors[Math.floor(Math.random() * colors.length)])
    }, 100)

    // Stop spinning after 3 seconds
    setTimeout(() => {
      setIsSpinning(false)
      clearInterval(colorInterval)
      setCurrentColor(colors[Math.floor(Math.random() * colors.length)])
    }, 3000)
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        className="relative cursor-pointer"
        onClick={handleSpin}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-32 h-32 rounded-full shadow-2xl border-4 border-white/20 flex items-center justify-center text-4xl font-bold text-white"
          style={{ backgroundColor: currentColor }}
          animate={isSpinning ? { rotateY: 1800 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          ✨
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl opacity-50"
          style={{ backgroundColor: currentColor }}
          animate={isSpinning ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5, repeat: isSpinning ? Number.POSITIVE_INFINITY : 0 }}
        />
      </motion.div>

      <motion.button
        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={handleSpin}
        disabled={isSpinning}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSpinning ? "Spinning..." : "Spin the Coin!"}
      </motion.button>
    </div>
  )
}
