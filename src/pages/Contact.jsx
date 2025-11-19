import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission for demo
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navbar />

      <section className="pt-32 pb-10 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Book a Demo</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">Tell us about your business and goals. We’ll show you where automation creates instant wins and how to implement fast.</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-24">
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-slate-300">Full name</label>
            <input required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Phone</label>
            <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="(555) 123-4567" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Company</label>
            <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="ABC Services" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-300">What are you looking to improve?</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Fewer missed calls, more reviews, better SEO, faster responses..." />
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-3">
            <button type="submit" disabled={status==='submitting'} className="inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-semibold shadow-[0_0_30px_rgba(56,189,248,0.5)] disabled:opacity-60">
              {status==='submitting' ? 'Submitting...' : 'Send Request'}
            </button>
            {status==='success' && <span className="text-green-300">Thanks — we’ll be in touch shortly!</span>}
          </div>
        </form>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Clemack AI Solutions. All rights reserved.
      </footer>
    </div>
  )
}
