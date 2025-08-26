"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Palette, Waves, Zap, Sprout, Volume2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ToolsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="relative z-10 min-h-screen p-6">
        <section className="mx-auto max-w-4xl">
          {/* Header with back button */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/20 backdrop-blur border-white/30 text-white hover:bg-white/30"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">Creative Tools</h1>
              <p className="text-white/80 drop-shadow">Choose your digital painting adventure</p>
            </div>
          </motion.div>

          {/* Tools List */}
          <div className="grid gap-4">
            <ToolLink
              href="/tools/flow-field-brush"
              icon={<Waves className="w-6 h-6" />}
              title="Flow-Field Brush"
              description="Paint with dynamic flow fields controlled by Perlin noise"
              color="text-blue-400"
              delay={0.1}
            />

            <ToolLink
              href="/tools/palette-generator"
              icon={<Palette className="w-6 h-6" />}
              title="Palette Generator + Picker"
              description="Generate and manage harmonious color palettes"
              color="text-purple-400"
              delay={0.2}
            />

            <ToolLink
              href="/tools/symmetry-painter"
              icon={<Zap className="w-6 h-6" />}
              title="Symmetry & Tiling Painter"
              description="Create symmetric patterns with real-time mirroring"
              color="text-green-400"
              delay={0.3}
            />

            <ToolLink
              href="/tools/living-organism-brush"
              icon={<Sprout className="w-6 h-6" />}
              title="Living Organism Brush"
              description="Plant seeds that grow into organic fractal structures"
              color="text-orange-400"
              delay={0.4}
            />

            <ToolLink
              href="/tools/audio-reactive"
              icon={<Volume2 className="w-6 h-6" />}
              title="Audio-Reactive Painting"
              description="Let sound control your brush dynamics and colors"
              color="text-indigo-400"
              delay={0.5}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

function ToolLink({
  href,
  icon,
  title,
  description,
  color,
  delay,
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
  delay: number
}) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay }}>
      <Link href={href}>
        <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer border-2 hover:border-white/40 bg-white/10 backdrop-blur border-white/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <motion.div
                className={`${color} p-2 rounded-lg bg-white/20 backdrop-blur`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.div>
              <div>
                <CardTitle className="text-lg text-white hover:text-white/80 transition-colors drop-shadow">
                  {title}
                </CardTitle>
                <CardDescription className="text-sm text-white/70 drop-shadow">{description}</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  )
}
