import AppBanner from "./components/app-banner"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Services from "./components/services"
import WhereToBuy from "./components/where-to-buy"

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  )
}

export default App
