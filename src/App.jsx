import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Download />
      <Footer />
    </div>
  )
}
