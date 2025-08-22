import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Palette, Waves, Zap, Sprout, Volume2 } from "lucide-react"

export default function ToolsPage() {
  return (
    <main className="min-h-screen p-6">
      <section className="mx-auto max-w-4xl rounded-2xl bg-white/85 backdrop-blur p-6 shadow-xl">
        {/* Header with back button */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Creative Tools</h1>
            <p className="text-muted-foreground">Choose your digital painting adventure</p>
          </div>
        </div>

        {/* Tools List */}
        <div className="grid gap-4">
          <ToolLink
            href="/tools/flow-field-brush"
            icon={<Waves className="w-6 h-6" />}
            title="Flow-Field Brush"
            description="Paint with dynamic flow fields controlled by Perlin noise"
            color="text-blue-600"
          />

          <ToolLink
            href="/tools/palette-generator"
            icon={<Palette className="w-6 h-6" />}
            title="Palette Generator + Picker"
            description="Generate and manage harmonious color palettes"
            color="text-purple-600"
          />

          <ToolLink
            href="/tools/symmetry-painter"
            icon={<Zap className="w-6 h-6" />}
            title="Symmetry & Tiling Painter"
            description="Create symmetric patterns with real-time mirroring"
            color="text-green-600"
          />

          <ToolLink
            href="/tools/living-organism-brush"
            icon={<Sprout className="w-6 h-6" />}
            title="Living Organism Brush"
            description="Plant seeds that grow into organic fractal structures"
            color="text-orange-600"
          />

          <ToolLink
            href="/tools/audio-reactive"
            icon={<Volume2 className="w-6 h-6" />}
            title="Audio-Reactive Painting"
            description="Let sound control your brush dynamics and colors"
            color="text-indigo-600"
          />
        </div>
      </section>
    </main>
  )
}

function ToolLink({
  href,
  icon,
  title,
  description,
  color,
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <Link href={href}>
      <Card className="transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer border-2 hover:border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className={`${color} p-2 rounded-lg bg-secondary`}>{icon}</div>
            <div>
              <CardTitle className="text-lg hover:text-primary transition-colors">{title}</CardTitle>
              <CardDescription className="text-sm">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}
