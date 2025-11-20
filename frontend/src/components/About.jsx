import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0c241c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-beige">A Classic English Pub with a Modern Heart</h2>
          <p className="mt-4 text-beige/80">Nestled beneath the old sycamore tree, our inn has welcomed locals and travellers for generations. Today, we blend timeless British pub charm with a refined dining experience—think crackling fires, polished brass, and hearty comfort.</p>
          <p className="mt-4 text-beige/80">Whether you're joining us for a Sunday roast, a perfectly-poured pint, or a cosy evening with friends, you'll always find a warm welcome.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
          <img className="rounded-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60" alt="Interior" />
          <img className="rounded-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=60" alt="Exterior" />
          <img className="rounded-lg object-cover h-48 w-full col-span-2" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=60" alt="Dining" />
        </motion.div>
      </div>
    </section>
  )
}
