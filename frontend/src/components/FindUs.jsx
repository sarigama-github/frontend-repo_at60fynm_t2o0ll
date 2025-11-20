import { useEffect, useState } from 'react'

export default function FindUs() {
  const [hours, setHours] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${base}/hours`).then(r => r.json()).then(setHours).catch(console.error)
  }, [])

  return (
    <section id="findus" className="py-20 bg-[#0c241c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-beige">Find Us</h2>
        <p className="mt-2 text-beige/80 max-w-2xl">Drop by for a pint or a meal. We're right in the heart of the village.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-lg overflow-hidden border border-[#c9a227]/20 min-h-[300px]">
            <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=-3.2%2C53.49%2C-3.18%2C53.51&amp;layer=mapnik" className="w-full h-full min-h-[300px]"></iframe>
          </div>
          <div className="bg-[#0a1d17] p-6 rounded-lg border border-[#c9a227]/20">
            <h3 className="text-2xl font-semibold text-[#c9a227]">Opening Times</h3>
            <ul className="mt-4 space-y-2">
              {hours.map((h, idx) => (
                <li key={idx} className="flex items-center justify-between text-beige/90">
                  <span>{h.day}</span>
                  <span>{h.open} – {h.close} {h.kitchen_close ? `(kitchen ${h.kitchen_close})` : ''}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-beige/80">
              <p className="font-medium text-beige">Address</p>
              <p>The Sycamore Inn, High Street, Village Green, AB1 2CD</p>
              <p className="mt-2">Phone: 01234 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
