import { motion } from 'framer-motion'
import { Bot, MessageSquare, Search, Rocket, Repeat, Star, PhoneCall } from 'lucide-react'

const features = [
  {
    icon: PhoneCall,
    title: '24/7 AI Voice Agent',
    desc: 'Answers, qualifies, and books calls automatically — no missed opportunities.'
  },
  {
    icon: MessageSquare,
    title: 'AI Chat Widget',
    desc: 'Instant responses on your site that capture leads and hand off to your team.'
  },
  { icon: Search, title: 'SEO Systems', desc: 'Climb rankings with a proven framework and technical tuning.' },
  { icon: Repeat, title: 'Data Reactivation', desc: 'Revive old leads with smart, compliant campaigns that convert.' },
  { icon: Star, title: 'Review Automation', desc: 'Drive more 5-star reviews with frictionless follow-ups.' },
  { icon: Rocket, title: 'Revenue Acceleration', desc: 'Turn every touchpoint into a conversion with AI-driven flows.' },
]

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for service businesses</h2>
          <p className="mt-3 text-slate-300">Clear wins without the technical headache.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.3),rgba(34,211,238,0.3),transparent_60%)] blur-xl" />
              <div className="relative">
                <f.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
