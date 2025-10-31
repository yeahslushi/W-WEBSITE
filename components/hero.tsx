"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated orbs in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl float-animation" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            <div className="relative bg-gradient-to-br from-primary to-accent p-4 rounded-2xl glow-primary">
              <Cpu className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            VynexComputing
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 text-balance">
          The Most Affordable Cloud Hosting
        </p>

        <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto text-pretty">
          Premium Minecraft, VPS, and Web Hosting at unbeatable prices. Experience enterprise-grade performance without
          the enterprise price tag.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Instant Setup</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">DDoS Protected</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full">
            <Cpu className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">99.9% Uptime</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#pricing">
            <Button size="lg" className="text-lg px-8 py-6 glow-primary group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#calculator">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              Calculate RAM Needs
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Active Servers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$1.99</div>
            <div className="text-sm text-muted-foreground">Starting Price</div>
          </div>
        </div>
      </div>
    </section>
  )
}
