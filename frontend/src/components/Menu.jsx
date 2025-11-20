import { useEffect, useState } from 'react'

function MenuGrid({ items, title }) {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-[#c9a227] mb-4">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-[#0c241c] rounded-lg overflow-hidden border border-[#c9a227]/20">
            {item.image_url && (
              <img src={`${item.image_url}?auto=format&fit=crop&w=800&q=60`} alt={item.name} className="h-40 w-full object-cover" />
            )}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-beige font-semibold">{item.name}</h4>
                <span className="text-[#c9a227] font-medium">£{item.price.toFixed(2)}</span>
              </div>
              {item.description && <p className="text-beige/70 text-sm mt-2">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Menu() {
  const [food, setFood] = useState([])
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    async function load() {
      try {
        const [m1, m2] = await Promise.all([
          fetch(`${base}/menu?category=Food`).then(r => r.json()),
          fetch(`${base}/menu?category=Drinks`).then(r => r.json()),
        ])
        setFood(m1)
        setDrinks(m2)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="menu" className="py-20 bg-[#0a1d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-beige">Our Menu</h2>
        <p className="mt-2 text-beige/80 max-w-2xl">Classic English dishes and a curated selection of ales, wines, and spirits.
        </p>

        {loading ? (
          <p className="text-beige/70 mt-6">Loading menu...</p>
        ) : (
          <>
            <MenuGrid items={food} title="Food" />
            <MenuGrid items={drinks} title="Drinks" />
          </>
        )}
      </div>
    </section>
  )
}
