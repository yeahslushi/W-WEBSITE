import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const minecraftPlans = [
  {
    name: "Starter",
    ram: "2GB",
    price: "1.99",
    players: "5-10",
    features: [
      "2GB DDR5 RAM",
      "AMD Ryzen 7600",
      "20GB NVMe Storage",
      "Unmetered Bandwidth",
      "DDoS Protection",
      "Instant Setup",
    ],
    popular: false,
  },
  {
    name: "Creeper",
    ram: "4GB",
    price: "3.99",
    players: "10-20",
    features: [
      "4GB DDR5 RAM",
      "AMD Ryzen 7600",
      "40GB NVMe Storage",
      "Unmetered Bandwidth",
      "DDoS Protection",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enderman",
    ram: "8GB",
    price: "7.99",
    players: "20-50",
    features: [
      "8GB DDR5 RAM",
      "AMD Ryzen 7600",
      "80GB NVMe Storage",
      "Unmetered Bandwidth",
      "DDoS Protection",
      "Premium Support",
    ],
    popular: false,
  },
  {
    name: "Dragon",
    ram: "16GB",
    price: "15.99",
    players: "50-100",
    features: [
      "16GB DDR5 RAM",
      "AMD Ryzen 7600",
      "160GB NVMe Storage",
      "Unmetered Bandwidth",
      "DDoS Protection",
      "24/7 Dedicated Support",
    ],
    popular: false,
  },
]

const vpsPlans = [
  {
    name: "VPS Starter",
    cpu: "2 vCPU",
    ram: "4GB",
    storage: "50GB",
    price: "5.99",
    features: [
      "2 vCPU Cores",
      "4GB DDR5 RAM",
      "50GB NVMe Storage",
      "2TB Bandwidth",
      "Full Root Access",
      "1 IPv4 Address",
    ],
  },
  {
    name: "VPS Pro",
    cpu: "4 vCPU",
    ram: "8GB",
    storage: "100GB",
    price: "11.99",
    features: [
      "4 vCPU Cores",
      "8GB DDR5 RAM",
      "100GB NVMe Storage",
      "4TB Bandwidth",
      "Full Root Access",
      "1 IPv4 Address",
    ],
  },
  {
    name: "VPS Business",
    cpu: "8 vCPU",
    ram: "16GB",
    storage: "200GB",
    price: "23.99",
    features: [
      "8 vCPU Cores",
      "16GB DDR5 RAM",
      "200GB NVMe Storage",
      "8TB Bandwidth",
      "Full Root Access",
      "2 IPv4 Addresses",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Unbeatable <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The most competitive prices in the industry. No hidden fees, no surprises.
          </p>
        </div>

        {/* Minecraft Hosting Plans */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Minecraft Hosting</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minecraftPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-6 bg-card/50 backdrop-blur-sm ${
                  plan.popular ? "border-primary border-2 shadow-lg shadow-primary/20" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                  <div className="text-4xl font-bold text-primary mb-1">${plan.price}</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                  <div className="mt-3 text-sm font-medium">{plan.ram} RAM</div>
                  <div className="text-xs text-muted-foreground">{plan.players} players</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* VPS Hosting Plans */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">VPS Hosting</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {vpsPlans.map((plan, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
              >
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                  <div className="text-4xl font-bold text-primary mb-1">${plan.price}</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                  <div className="mt-3 space-y-1">
                    <div className="text-sm font-medium">{plan.cpu}</div>
                    <div className="text-sm font-medium">{plan.ram} RAM</div>
                    <div className="text-xs text-muted-foreground">{plan.storage} Storage</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Price Comparison */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50">
            <p className="text-lg font-semibold mb-2">
              💰 Save up to <span className="text-primary text-2xl">40%</span> compared to competitors
            </p>
            <p className="text-sm text-muted-foreground">
              Same premium hardware, better prices. That's the VynexComputing difference.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
