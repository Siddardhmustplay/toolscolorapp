import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            LivingBrush
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unleash your creativity with our collection of innovative digital painting tools. Each tool offers a unique
            way to express your artistic vision.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ToolCard
            title="Flow-Field Brush"
            description="Paint with strokes that follow dynamic Perlin noise flow fields. Control chaos with cursor speed and customize particle behavior."
            href="/tools/flow-field-brush"
            gradient="from-blue-500 to-cyan-400"
          />

          <ToolCard
            title="Palette Generator"
            description="Generate harmonious color palettes with complementary, analogous, and triadic schemes. Lock favorites and export your creations."
            href="/tools/palette-generator"
            gradient="from-purple-500 to-pink-400"
          />

          <ToolCard
            title="Symmetry Painter"
            description="Create stunning symmetric patterns with real-time mirroring and radial symmetry modes. Perfect for mandala-style artwork."
            href="/tools/symmetry-painter"
            gradient="from-green-500 to-emerald-400"
          />

          <ToolCard
            title="Living Organism Brush"
            description="Plant seeds that grow into organic, fractal structures over time. Control DNA parameters and watch your art evolve."
            href="/tools/living-organism-brush"
            gradient="from-orange-500 to-red-400"
          />

          <ToolCard
            title="Audio-Reactive Painter"
            description="Let sound guide your brush. Microphone input controls size, color saturation, and mutation rates for dynamic audio-visual art."
            href="/tools/audio-reactive"
            gradient="from-indigo-500 to-purple-400"
          />
        </div>

        {/* Get Started Button */}
        <div className="text-center">
          <Link href="/tools">
            <Button size="lg" className="text-lg px-8 py-6">
              Explore All Tools
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

function ToolCard({
  title,
  description,
  href,
  gradient,
}: {
  title: string
  description: string
  href: string
  gradient: string
}) {
  return (
    <Link href={href}>
      <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 hover:border-primary/20 group cursor-pointer">
        <CardHeader>
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
          />
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
