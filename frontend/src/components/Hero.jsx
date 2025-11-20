import { motion } from 'framer-motion'

export default function Hero() {
  const backend = import.meta.env.VITE_BACKEND_URL
  const heroImage = 'https://images.unsplash.com/photo-1541534401786-2077eed87a72'

  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroImage+"?auto=format&fit=crop&w=1600&q=60"} alt="Pub interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0f2f23]/70 mix-blend-multiply" />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6">
        <p className="text-[#c9a227] tracking-widest uppercase text-sm mb-3">Welcome to</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-beige drop-shadow-lg">The Sycamore Inn</h1>
        <p className="mt-4 text-beige/90 max-w-2xl mx-auto">Your local English pub & restaurant. Warm fires, great ales, and hearty classics — all under one roof.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#bookings" className="bg-[#c9a227] text-[#0f2f23] px-6 py-3 rounded-md font-semibold hover:brightness-105 transition">Book a Table</a>
          <a href="#menu" className="border border-[#c9a227] text-beige px-6 py-3 rounded-md font-semibold hover:bg-[#c9a227]/10 transition">View Menu</a>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-beige/80 text-sm">Open daily • Traditional British hospitality</div>
    </section>
  )
}
