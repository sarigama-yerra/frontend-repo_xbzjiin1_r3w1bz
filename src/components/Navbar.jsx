import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Results' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 hover:text-white/90 ${
          isActive ? 'text-white' : 'text-slate-200/80'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-blue-500/40 blur-md" />
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-semibold tracking-tight text-white">Clemack AI Solutions</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.45)] transition hover:scale-[1.02]"
            >
              <span className="relative z-10">Book a Demo</span>
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200/80 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 mt-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <NavItem key={l.to} {...l} />
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.45)]"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
