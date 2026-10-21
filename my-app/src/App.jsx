import Hero from './components/Hero'
import Navbar from './components/Navbar'
import "./App.css"
import StatsCard from './components/StatsCard'
import HowItWorks from './components/HowItWork'
import PricingPlan from './components/PricingPlan' 
import Benefits from './components/Benefits'
import ContactSection from './components/ContactSession'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <StatsCard />
        <HowItWorks /> 
        <PricingPlan />
        <Benefits />
        <ContactSection/>
        <GetStarted />
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App