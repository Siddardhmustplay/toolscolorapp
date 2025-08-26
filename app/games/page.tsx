"use client"
import Link from "next/link"

const games = [
  { title: "Color Swap", slug: "color-swap" },
  { title: "Color Arithmetic", slug: "color-arithmetic" },
  { title: "Color Rush", slug: "color-rush" },
  { title: "Color Memory", slug: "color-memory" },
  { title: "Color Count", slug: "color-count" },
  { title: "Color Command", slug: "color-command" },
  { title: "Color Cleaner", slug: "color-cleaner" },
  { title: "Color Duplicator", slug: "color-duplicator" },
  { title: "Color Catcher", slug: "color-catcher" },
  { title: "Color Frequency", slug: "color-frequency" },
]

export default function GameHomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white p-6 space-y-10 text-center">
      <h1 className="text-4xl font-bold text-[#FFED66] drop-shadow-[0_0_18px_rgba(255,237,102,0.6)]">
        🎮 Color Games Arcade
      </h1>
      <p className="text-lg text-white/90">Choose a game to begin</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {games.map((g) => (
          <GameCard key={g.slug} title={g.title} href={`/games/${g.slug}`} />
        ))}
      </div>
    </main>
  )
}

function GameCard({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="block p-6 rounded-xl bg-black/40 hover:bg-black/55 border border-white/20 shadow-xl text-xl font-semibold transition text-white hover:scale-[1.02] backdrop-blur-sm"
    >
      {title}
    </Link>
  )
}
