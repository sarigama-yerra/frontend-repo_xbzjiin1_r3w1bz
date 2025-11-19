import Navbar from '../components/Navbar'

const services = [
  {
    title: 'AI Voice Agent',
    bullets: [
      'Answers and qualifies every call 24/7',
      'Real-time booking and CRM updates',
      'Escalation to human team when requested'
    ]
  },
  {
    title: 'AI Chat Widget',
    bullets: [
      'Instant answers and lead capture',
      'Smart prompts that boost engagement',
      'Seamless handoff to SMS or team chat'
    ]
  },
  {
    title: 'SEO Systems',
    bullets: [
      'Local SEO foundations and content engine',
      'Technical fixes for speed and Core Web Vitals',
      'Reporting that tracks rankings and calls'
    ]
  },
  {
    title: 'Data Reactivation',
    bullets: [
      'Revive old leads via compliant sequences',
      'Offer-driven flows that convert fast',
      'Full transparency on replies and bookings'
    ]
  },
  {
    title: 'Google Review Automation',
    bullets: [
      'Automatic review requests post-job',
      'Smart follow-up reminders',
      'More reviews → higher local rankings'
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navbar />
      <section className="pt-32 pb-10 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Services</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">Modular programs you can start with today. We implement, maintain, and optimize so you can focus on delivering great service.</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6 pb-20">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">{s.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white">Which service is right for me?</h3>
          <p className="mt-2 text-slate-300">Tell us your goals and current setup. We’ll map a plan that delivers quick wins first, then compounds over time.</p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Clemack AI Solutions. All rights reserved.
      </footer>
    </div>
  )
}
