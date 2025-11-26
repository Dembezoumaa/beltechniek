'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation()
  
  const reasons = [
    {
      title: "Topkwaliteit voor een eerlijke prijs",
      text: "Wij bewijzen dat goed schoonmaakwerk niet duur hoeft te zijn."
    },
    {
      title: "99,6% tevreden klanten",
      text: "Bijna al onze klanten blijven bij ons. Daar zijn we trots op."
    },
    {
      title: "Flexibel in de Randstad",
      text: "Wij werken in de hele regio en passen ons aan uw agenda aan."
    },
    {
      title: "Specialisten in huis",
      text: "Of het nu horeca of kantoor is: wij hebben de juiste mensen voor uw klus."
    },
    {
      title: "Gewoon goed resultaat",
      text: "Geen mooie praatjes, maar een schoon pand en een fijne samenwerking."
    }
  ]

  return (
    <section 
      ref={ref}
      className={`relative w-full overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Desktop versie: Split Screen */}
      <div className="hidden md:flex flex-row min-h-[600px]">
        {/* Linker kant - Blauwe achtergrond met tekst */}
        <div className="w-1/2 bg-[#40B9FF] flex items-center justify-end">
          <div className="w-full max-w-xl px-12 py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 leading-tight">
              Waarom kiezen voor <br /> Dienst Expert?
            </h2>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 group">
                  {/* Icoon Checkmark */}
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#40B9FF] text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  {/* Tekst Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rechter kant - Foto */}
        <div className="w-1/2 relative min-h-full">
          <img 
            src="/why-choose.jpg" 
            alt="Schoonmaak specialisten aan het werk" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtiele gradient overlay voor diepte */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#40B9FF]/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Mobiel versie - Foto met tekst erover */}
      <div className="md:hidden relative min-h-[600px]">
        <img 
          src="/why-choose.jpg" 
          alt="Schoonmaak specialisten aan het werk" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Blauwe gradient overlay (Sterker op mobiel voor leesbaarheid) */}
        <div className="absolute inset-0 bg-[#40B9FF]/90" />

        {/* Tekst Content Mobiel */}
        <div className="relative z-10 px-6 py-12 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-bold text-white mb-8 leading-tight">
            Waarom kiezen voor <br /> Dienst Expert?
          </h2>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                   <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">
                    {reason.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-snug">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose