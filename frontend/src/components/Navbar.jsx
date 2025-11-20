import { useState } from 'react'
import { Menu, Phone, MessageCircle } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Bookings', href: '#bookings' },
  { label: 'Find Us', href: '#findus' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-[#0f2f23]/80 border-b border-[#c9a227]/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="text-[#c9a227] font-semibold tracking-wide text-lg">The Sycamore Inn</a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-beige/90 hover:text-[#c9a227] transition-colors">{item.label}</a>
            ))}
            <a href="#bookings" className="ml-3 inline-flex items-center gap-2 bg-[#c9a227] text-[#0f2f23] px-4 py-2 rounded-md font-medium hover:brightness-105 transition">
              <Phone size={18} /> Book a Table
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-beige" aria-label="Toggle Menu">
            <Menu />
          </button>
        </nav>

        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-[#0f2f23]/95 border-t border-[#c9a227]/20">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-beige/90 hover:text-[#c9a227]">{item.label}</a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="tel:+441234567890" className="inline-flex items-center gap-2 bg-[#c9a227] text-[#0f2f23] px-4 py-2 rounded-md font-medium">
                <Phone size={18} /> Call Us
              </a>
              <a href="https://wa.me/441234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#c9a227] text-beige px-4 py-2 rounded-md">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
