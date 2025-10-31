"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Server, Cpu, HardDrive, Wifi } from "lucide-react"
import Link from "next/link"

const serverTypes = [
  { id: "vanilla", name: "Vanilla", description: "Pure Minecraft experience without any modifications.", baseRam: 1 },
  { id: "paper", name: "Paper", description: "Optimized server with basic plugin support.", baseRam: 1 },
  { id: "forge", name: "Forge", description: "Run your favorite modpacks and custom mods.", baseRam: 2 },
  { id: "fabric", name: "Fabric", description: "Lightweight mod loader with great performance.", baseRam: 1.5 },
]

export function RamCalculator() {
  const [serverType, setServerType] = useState(serverTypes[0])
  const [players, setPlayers] = useState(10)

  const calculateRam = () => {
    const playerAllocation = (players / 10) * 2
    return serverType.baseRam + playerAllocation
  }

  const totalRam = calculateRam()
  const recommendedPlan = totalRam <= 2 ? "Starter" : totalRam <= 4 ? "Creeper" : totalRam <= 8 ? "Enderman" : "Dragon"
  const recommendedPrice = totalRam <= 2 ? 1.99 : totalRam <= 4 ? 3.99 : totalRam <= 8 ? 7.99 : 15.99

  return (
    <section id="calculator" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-primary">RAM</span> Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Not sure how much RAM you need? Use our calculator to find the perfect plan for your server.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Controls */}
          <div className="space-y-8">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <Label className="text-lg font-semibold mb-4 block">Server Type</Label>
              <div className="grid grid-cols-2 gap-3">
                {serverTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setServerType(type)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      serverType.id === type.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold mb-1">{type.name}</div>
                    <div className="text-xs text-muted-foreground">{type.description}</div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <Label className="text-lg font-semibold mb-4 block">Expected Players</Label>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{players}</span>
                  <span className="text-sm text-muted-foreground">Players</span>
                </div>
                <Slider
                  value={[players]}
                  onValueChange={(value) => setPlayers(value[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50">
              <h3 className="text-xl font-semibold mb-4">RAM Usage Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Base Server</span>
                  <span className="font-semibold">{serverType.baseRam}GB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Player Allocation</span>
                  <span className="font-semibold">+{((players / 10) * 2).toFixed(1)}GB</span>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold">Total Required</span>
                  <span className="font-bold text-primary text-2xl">{totalRam.toFixed(1)}GB</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-xl font-semibold mb-4">Server Specifications</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Processor</div>
                    <div className="text-sm text-muted-foreground">AMD Ryzen 7600 - Up to 5.1 GHz</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Memory</div>
                    <div className="text-sm text-muted-foreground">DDR5 6000-7200MHz</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Storage</div>
                    <div className="text-sm text-muted-foreground">Enterprise NVMe</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Network</div>
                    <div className="text-sm text-muted-foreground">Unmetered Bandwidth</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary to-accent text-white border-0 glow-primary">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Recommended Plan</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Best Value</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">{recommendedPlan}</h3>
              <p className="text-sm opacity-90 mb-4">
                {totalRam.toFixed(1)}GB RAM - Perfect for up to {players} players
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">${recommendedPrice}</span>
                <span className="text-sm opacity-90">/month</span>
              </div>
              <Link href="#pricing">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
