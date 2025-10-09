'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Values() {
  const [ref, isVisible] = useScrollAnimation()
  
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <path d="M18 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.33 0-4 .67-4 2v1h8v-1c0-1.33-2.67-2-4-2zM6 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.33 0-4 .67-4 2v1h8v-1c0-1.33-2.67-2-4-2z"/>
        </svg>
      ),
      title: "Onze mensen",
      description: "Bij Dienst Expert ervaren we naar een samenwerking, niet alleen tussen medewerkers, zij zijn ons grootste goed. Wij respecteren, waarderen en motiveren onze medewerkers."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "WOW-momenten",
      description: "Onze klanten staan centraal in alles wat we doen en hun tevredenheid is van het grootste belang. Wij creëren wow-momenten voor de verwachtingen van de klant te overtreffen."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
        </svg>
      ),
      title: "Succesvol samenwerken",
      description: "Wij geloven in de kracht van samenwerking. Door samen te werken met onszelf en daaron werken we schouder aan schouder samen binnen onze eigen teams. Tevens streven we naar langdurige relaties met klanten en partners."
    }
  ]

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Titel links uitgelijnd boven eerste kaart */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#40B9FF]">
            Dienst Expert
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition text-center"
            >
              {/* Blauwe cirkel met wit icoon - gecentreerd */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#40B9FF] rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-black mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-black opacity-70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
