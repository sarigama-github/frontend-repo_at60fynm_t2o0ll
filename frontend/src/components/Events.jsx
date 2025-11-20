import { useEffect, useState } from 'react'

function EventCard({ ev }) {
  return (
    <div className="bg-[#0c241c] rounded-lg overflow-hidden border border-[#c9a227]/20">
      {ev.image_url && <img src={`${ev.image_url}?auto=format&fit=crop&w=1000&q=60`} alt={ev.title} className="h-44 w-full object-cover" />}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-beige font-semibold">{ev.title}</h4>
          {ev.is_recurring && <span className="text-xs text-[#c9a227] border border-[#c9a227]/40 px-2 py-0.5 rounded">Recurring</span>}
        </div>
        {ev.date && <p className="text-beige/70 text-sm mt-1">{new Date(ev.date).toLocaleString()}</p>}
        {ev.description && <p className="text-beige/80 mt-2 text-sm">{ev.description}</p>}
        {ev.tags?.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {ev.tags.map((t, idx) => (
              <span key={idx} className="text-xs text-beige/80 bg-[#0a1d17] px-2 py-1 rounded border border-[#c9a227]/20">#{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Events() {
  const [events, setEvents] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${base}/events`).then(r => r.json()).then(setEvents).catch(console.error)
  }, [])

  return (
    <section id="events" className="py-20 bg-[#0a1d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-beige">Special Events</h2>
        <p className="mt-2 text-beige/80 max-w-2xl">Live sports, quiz nights, and private bookings. There's always something happening.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {events.map((ev, idx) => <EventCard key={idx} ev={ev} />)}
        </div>
      </div>
    </section>
  )
}
