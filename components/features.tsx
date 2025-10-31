import { Zap, Shield, Cpu, HardDrive, Globe, Headphones } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Your server is ready in seconds. No waiting, no hassle.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade security keeps your server safe 24/7.",
  },
  {
    icon: Cpu,
    title: "AMD Ryzen 7600",
    description: "Latest generation processors up to 5.1 GHz for maximum performance.",
  },
  {
    icon: HardDrive,
    title: "NVMe Storage",
    description: "Lightning-fast enterprise NVMe drives for instant load times.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Multiple datacenter locations for optimal latency worldwide.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert support team ready to help whenever you need us.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why Choose <span className="text-primary">VynexComputing</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine cutting-edge technology with unbeatable prices to deliver the best hosting experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
