import SEO from '../components/SEO'
import About from '../components/About'
import FeatureCard from '../components/FeatureCard'
import Statistics from '../components/Statistics'

function AboutPage() {
  return (
    <>
      <SEO
        title="About AK BUILDERS | Construction Company in Chennai & Tiruvallur"
        description="Learn about AK BUILDERS, a construction company serving Chennai and Tiruvallur with residential construction, commercial construction, architecture, renovation, and remodeling services."
        path="/company"
      />
      <About />
      <Statistics />
      <FeatureCard
        title={"Practical Planning &\nReliable Execution"}
        badgeTitle="Client-Centric Approach"
        badgeSubtitle="Clear Guidance & Neat Finishing"
        icons={['drafting', 'sparkles']}
        badgeImage="/images/company-ak-logo.png"
        comment="AK Builders helped us turn our house plan into reality, and we are genuinelyhappy with the result. The team understood our requirements and suggested practical ideas wherever needed. Communication was easy throughout the project, and our questions were answered without unnecessary delays. The finishing work was done neatly, and the overall process was handled professionally."
        author="Priya S"
        location="House Construction, Poonamallee"
      />
    </>
  )
}

export default AboutPage
