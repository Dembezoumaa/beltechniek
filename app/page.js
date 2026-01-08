import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Projects from '@/components/Projects'
import WhyChoose from '@/components/WhyChoose'
import Reviews from '@/components/Reviews'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Values from '@/components/Values'
import Hero from './Hero'

// Een subtiele, technische divider component
const SectionDivider = ({ accent = false }) => (
  <div className="w-full flex justify-center items-center py-4 bg-white">
    <div className="w-full max-w-7xl px-6 flex items-center gap-4">
      <div className="h-[1px] flex-grow bg-gray-100"></div>
      <div className={`w-2 h-2 rotate-45 ${accent ? 'bg-accent' : 'bg-primary/20'}`}></div>
      <div className="h-[1px] flex-grow bg-gray-100"></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Geen divider direct na Hero, want de Hero eindigt al met de USP-bar */}
      <Values />
      
      <SectionDivider accent />
      
      <Services /> 
      
      {/* Een schuine overgang naar een grijze/donkere sectie werkt goed voor Reviews */}
      <div className="h-24 bg-gradient-to-b from-white to-gray-50 uppercase"></div>
      
      <Reviews />
      
      {/* Stats zijn vaak 'heavy', we scheiden ze met een strakke lijn */}
      <Stats />      
      
      <SectionDivider />

      <WhyChoose />
      
      {/* Projecten zijn visueel druk, dus we geven ze een duidelijke 'break' */}
      <div className="w-full h-1 bg-gray-50"></div>
      
      <Projects />
      
      <SectionDivider accent />

      <FAQ />
      
      {/* De Footer is al donker, dus we laten de FAQ natuurlijk overvloeien */}
      <Footer />
    </>
  )
}