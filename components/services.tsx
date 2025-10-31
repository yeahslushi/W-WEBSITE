import { Server, Cloud, Globe, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Server,
    title: "Minecraft Hosting",
    description: "Optimized for all modpacks and plugins. Vanilla, Paper, Forge, Fabric - we support them all.",
    status: "Available Now",
    statusColor: "text-green-500",
    features: ["Instant Setup", "Full FTP Access", "Mod Support", "Automatic Backups"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/50",
  },
  {
    icon: Cloud,
    title: "VPS Hosting",
    description: "Full root access with dedicated resources. Perfect for developers and businesses.",
    status: "Available Now",
    statusColor: "text-green-500",
    features: ["Root Access", "Custom OS", "Dedicated IP", "Scalable Resources"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/50",
  },
  {
    icon: Globe,
    title: "Website Hosting",
    description: "Fast, reliable web hosting with cPanel. Host unlimited websites with ease.",
    status: "Available Now",
    statusColor: "text-green-500",
    features: ["cPanel Included", "SSL Certificates", "Email Hosting", "One-Click Install"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/50",
  },
  {
    icon: Gamepad2,
    title: "Game Server Hosting",
    description: "Host your favorite games with optimized performance and low latency.",
    status: "Coming Soon",
    statusColor: "text-yellow-500",
    features: ["Multiple Games", "Easy Management", "Mod Support", "Auto Updates"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/50",
  },
]

export function Services() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From Minecraft servers to enterprise VPS solutions, we have everything you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card/50 backdrop-blur-sm border ${service.borderColor} rounded-xl p-8 hover:shadow-xl transition-all duration-300`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span
                    className={`text-sm font-medium ${service.statusColor} px-3 py-1 bg-background/50 rounded-full`}
                  >
                    {service.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="#pricing">
                  <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10 bg-transparent">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
