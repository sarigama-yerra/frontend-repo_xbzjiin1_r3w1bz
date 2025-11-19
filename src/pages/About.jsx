import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navbar />
      <section className="pt-32 pb-16 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">About Clemack AI Solutions</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">We help local service businesses automate operations and capture more revenue. Our team blends AI engineering, growth strategy, and local SEO expertise to deliver systems that pay for themselves.</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6 pb-20">
        {[{
          title: 'Mission', text: 'Equip service businesses with AI that drives real outcomes: more bookings, faster response times, and higher customer satisfaction.'
        },{
          title: 'Approach', text: 'Done-for-you implementation with clear KPIs. We integrate with your existing tools and handle the heavy lifting.'
        },{
          title: 'Edge', text: 'Futuristic UX, rigorous testing, and systems thinking. We combine automation with brand experience.'
        }].map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">{c.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{c.text}</p>
          </div>
        ))}
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Clemack AI Solutions. All rights reserved.
      </footer>
    </div>
  )
}
