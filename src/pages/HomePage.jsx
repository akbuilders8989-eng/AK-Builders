import SEO from '../components/SEO'
import About from '../components/About'
import FounderSection from '../components/FounderSection'
import Hero from '../components/Hero'

function HomePage() {
  return (
    <>
      <SEO
        title="AK BUILDERS | Premium Construction & Architecture in Chennai & Tiruvallur"
        description="AK BUILDERS provides residential and commercial construction, architecture, renovation, and remodeling services across Chennai and Tiruvallur, Tamil Nadu."
        path="/"
      />
      <Hero />
      <About />
      <FounderSection />
    </>
  )
}

export default HomePage
