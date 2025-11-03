import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Projects from '@/components/Projects'
import WhyChoose from '@/components/WhyChoose'
import Reviews from '@/components/Reviews'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Values from '@/components/Values'
import Hero from './Hero'


export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Services /> 
      <Reviews />
      <Stats />      
      <WhyChoose />
      <Projects />
      <FAQ />
      <Footer />
    </>
  )
}
