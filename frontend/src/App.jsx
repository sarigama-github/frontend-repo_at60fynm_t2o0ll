import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Bookings from './components/Bookings'
import FindUs from './components/FindUs'

function Footer() {
  return (
    <footer className="bg-[#091813] border-t border-[#c9a227]/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-beige/70">
        <p>&copy; {new Date().getFullYear()} The Sycamore Inn. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1d17] font-['Inter',system-ui,sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Events />
      <Gallery />
      <Bookings />
      <FindUs />
      <Footer />
    </div>
  )
}
