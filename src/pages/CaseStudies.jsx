import Navbar from '../components/Navbar'

const items = [
  {
    title: 'Plumbing Company — AI Voice + Reviews',
    stats: ['78% reduction in missed calls', '3.1x more bookings after hours', '+92 reviews in 60 days'],
  },
  {
    title: 'HVAC — Chat + Reactivation',
    stats: ['2.4x site leads from chat', '18% of dormant leads reactivated', '34% increase in close rate'],
  },
  {
    title: 'Garage Doors — SEO System',
    stats: ['From page 3 to map pack', '+126 reviews in 90 days', '41% increase in booked jobs'],
  },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navbar />
      <section className="pt-32 pb-10 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Results</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">A look at outcomes across different services. Every engagement is aligned to measurable metrics — calls, bookings, revenue.</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6 pb-20">
        {items.map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">{c.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {c.stats.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Clemack AI Solutions. All rights reserved.
      </footer>
    </div>
  )
}
