import { motion } from 'framer-motion'
import { Phone, MessageCircle, SearchCheck, RefreshCw, Star, Brain } from 'lucide-react'

const sections = [
  {
    icon: Phone,
    title: 'How the AI Voice Agent Works',
    bullets: [
      'Answers calls instantly, qualifies leads, and books appointments',
      'Understands accents and intent with natural language',
      'Escalates to your team when human touch is needed'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Live Chat That Captures More Leads',
    bullets: [
      'Proactive prompts nudge visitors to engage',
      'Collects email/phone, sends to your CRM in real time',
      '24/7 coverage so no prospect slips away'
    ]
  },
  {
    icon: SearchCheck,
    title: 'SEO Systems That Compound',
    bullets: [
      'Local SEO foundations — NAP, citations, on-page structure',
      'Content engine with keyword clusters',
      'Technical tune-ups for speed and Core Web Vitals'
    ]
  },
  {
    icon: RefreshCw,
    title: 'Data Reactivation That Wins Back Revenue',
    bullets: [
      'Re-engage past leads with compliant SMS/email flows',
      'Offer-driven sequences customized to your services',
      'Real-time tracking of responses and bookings'
    ]
  },
  {
    icon: Star,
    title: 'Google Review Automation',
    bullets: [
      'Automated review requests after jobs are completed',
      'Smart follow-up that drives 5-star volume',
      'Increase map pack rankings and trust'
    ]
  },
]

export default function Explainers() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_50%_20%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <s.icon className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-slate-300 text-sm leading-relaxed">• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
