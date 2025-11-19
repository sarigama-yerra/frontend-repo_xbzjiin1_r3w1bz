import { motion } from 'framer-motion'

const results = [
  { stat: '78% ↓', label: 'Missed calls within 30 days' },
  { stat: '2.3x', label: 'More bookings from web chat' },
  { stat: '+126', label: 'New Google reviews in 90 days' },
  { stat: '41% ↑', label: 'Lead-to-job conversion' },
]

const testimonials = [
  {
    quote: 'Our phone used to ring off the hook after hours. The AI picks up, books jobs, and our team wakes up to a full calendar.',
    author: 'Dana R., Plumbing Company Owner'
  },
  {
    quote: 'The reactivation campaign paid for the entire program in week one. We closed jobs we thought were dead.',
    author: 'Miguel S., HVAC Contractor'
  },
  {
    quote: 'We jumped into the map pack and reviews are pouring in. Customers mention the fast responses all the time.',
    author: 'Leah T., Garage Door Services'
  },
]

export default function Results() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Real wins our clients see</h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {results.map((r, i) => (
                <motion.div key={r.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
                  <div className="text-3xl font-extrabold text-white">{r.stat}</div>
                  <div className="mt-2 text-slate-300 text-sm">{r.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.blockquote key={t.author} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-white/90">“{t.quote}”</p>
                <footer className="mt-3 text-sm text-slate-400">— {t.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
