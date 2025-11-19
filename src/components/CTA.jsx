import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_30%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 backdrop-blur-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to automate and scale?</h3>
              <p className="mt-2 text-slate-300">See exactly how Clemack AI Solutions can plug into your business.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-semibold shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                Book a Demo
              </Link>
              <Link to="/contact" className="inline-flex justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur-xl">
                Try AI Voice Agent Free for 7 Days
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
