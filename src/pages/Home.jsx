import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Explainers from '../components/Explainers'
import Results from '../components/Results'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-cyan-300/40 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Explainers />
      <Results />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Clemack AI Solutions. All rights reserved.
      </footer>
    </div>
  )
}
