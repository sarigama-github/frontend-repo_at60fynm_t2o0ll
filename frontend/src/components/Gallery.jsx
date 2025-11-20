import { useEffect, useState } from 'react'

export default function Gallery() {
  const [items, setItems] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${base}/gallery`).then(r => r.json()).then(setItems).catch(console.error)
  }, [])

  return (
    <section id="gallery" className="py-20 bg-[#0c241c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-beige">Gallery</h2>
        <p className="mt-2 text-beige/80 max-w-2xl">A glimpse of our food, drinks, and cosy corners.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg border border-[#c9a227]/20">
              <img src={`${it.image_url}?auto=format&fit=crop&w=800&q=60`} alt={it.title || 'Gallery'} className="h-44 w-full object-cover group-hover:scale-105 transition-transform" />
              {it.title && <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-sm text-beige">{it.title}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
