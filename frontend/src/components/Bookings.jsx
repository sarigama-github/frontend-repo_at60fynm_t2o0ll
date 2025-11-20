import { useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

export default function Bookings() {
  const base = import.meta.env.VITE_BACKEND_URL || ''
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', guests: 2, notes: '' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${base}/book`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, guests: Number(form.guests), date: new Date(form.date).toISOString() }) })
      const data = await res.json()
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="bookings" className="py-20 bg-[#0a1d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-beige">Book a Table</h2>
        <p className="mt-2 text-beige/80 max-w-2xl">Reserve your spot for dinner, Sunday roast, or drinks with friends.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="bg-[#0c241c] p-6 rounded-lg border border-[#c9a227]/20 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="bg-[#0a1d17] text-beige px-4 py-3 rounded outline-none border border-transparent focus:border-[#c9a227]" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
              <input required placeholder="Phone" className="bg-[#0a1d17] text-beige px-4 py-3 rounded outline-none border border-transparent focus:border-[#c9a227]" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            </div>
            <input type="email" placeholder="Email (optional)" className="w-full bg-[#0a1d17] text-beige px-4 py-3 rounded outline-none border border-transparent focus:border-[#c9a227]" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <div className="grid sm:grid-cols-3 gap-4">
              <input required type="datetime-local" className="bg-[#0a1d17] text-beige px-4 py-3 rounded outline-none border border-transparent focus:border-[#c9a227]" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
              <input required type="number" min="1" max="20" className="bg-[#0a1d17] text-beige px-4 py-3 rounded outline-none border border-transparent focus:border-[#c9a227]" value={form.guests} onChange={e=>setForm({...form, guests:e.target.value})} />
              <input placeholder="Notes (allergies, requests)" className="bg-[#0a1d17] text-beige px-4 py-3 rounded outline-none border border-transparent focus:border-[#c9a227] col-span-1 sm:col-span-1" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
            </div>
            <button disabled={status==='sending'} className="w-full bg-[#c9a227] text-[#0f2f23] px-6 py-3 rounded-md font-semibold hover:brightness-105 transition">
              {status==='sending' ? 'Booking...' : 'Reserve Table'}
            </button>
            {status==='success' && <p className="text-green-400">Thanks! We received your request.</p>}
            {status==='error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
          </form>

          <div className="bg-[#0c241c] p-6 rounded-lg border border-[#c9a227]/20">
            <h3 className="text-2xl font-semibold text-[#c9a227]">Prefer to chat?</h3>
            <p className="text-beige/80 mt-2">Call us or send a WhatsApp message and we'll sort your table.</p>
            <div className="flex gap-3 mt-4">
              <a href="tel:+441234567890" className="inline-flex items-center gap-2 bg-[#c9a227] text-[#0f2f23] px-4 py-2 rounded-md font-medium">
                <Phone size={18} /> 01234 567 890
              </a>
              <a href="https://wa.me/441234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#c9a227] text-beige px-4 py-2 rounded-md">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
            <p className="text-beige/70 mt-6">Private functions and large bookings welcome.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
