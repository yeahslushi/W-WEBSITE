import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Server Owner",
    content:
      "Best hosting I've ever used. The performance is incredible and the price is unbeatable. My players love the zero lag experience!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Developer",
    content:
      "VynexComputing VPS is perfect for my projects. Full control, great performance, and the support team is always helpful.",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    role: "Community Manager",
    content:
      "Switched from another host and never looked back. Setup was instant and I'm saving $30/month for the same specs!",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Content Creator",
    content:
      "Running multiple modded servers with no issues. The RAM calculator helped me choose the perfect plan. Highly recommend!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what our customers have to say about their experience with VynexComputing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 text-pretty">{testimonial.content}</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
