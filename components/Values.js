'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Values() {
  const [ref, isVisible] = useScrollAnimation()
  
  const values = [
    {
      // Icoon: Locatie / Anker
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Lokaal vakmanschap",
      description: "Ons atelier is gevestigd in het hart van Loosdrecht. Wij kennen de lokale wateren en weten wat vaartuigen hier nodig hebben. Persoonlijk contact, korte lijnen en vakmanschap dat u kunt vertrouwen – daar staan wij voor."
    },
    {
      // Icoon: Diamant / Kwaliteit
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Premium materialen",
      description: "Kwaliteit begint bij de juiste stoffen. Wij werken uitsluitend met topmerken zoals Sunbrella en Markilux: kleurvast, waterafstotend en schimmelwerend. Materialen die jarenlang meegaan en uw boot beschermen zoals het hoort."
    },
    {
      // Icoon: Maatwerk
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Maatwerk & precisie",
      description: "Elke boot is uniek. Daarom werken wij nooit met standaardmaten. Wij meten zelf in op locatie en vervaardigen alles in eigen atelier. Het resultaat? Zeildoekwerk dat perfect past, strak zit en de esthetiek van uw boot versterkt."
    }
  ]

  return (
    <section 
      ref={ref}
      // AANPASSING: bg-white verwijderd (is nu transparant). 
      // Zorg dat deze sectie over je achtergrondafbeelding ligt.
      className={`py-12 md:py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Titel Sectie */}
        {/* AANPASSING: Achtergrondje achter de tekst toegevoegd voor leesbaarheid op foto */}
        <div className="mb-8 md:mb-12 border-l-4 border-accent pl-4 inline-block bg-white/80 backdrop-blur-sm p-4 rounded-r-lg">
          <h2 className="text-2xl md:text-4xl font-special text-primary">
            Waar wij voor staan
          </h2>
          <p className="text-gray-500 mt-1 md:mt-2 text-xs md:text-base font-medium uppercase tracking-wider">
            Onze kernwaarden
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              // AANPASSING: bg-white/90 + backdrop-blur-sm (Frosted Glass effect)
              // Hierdoor blijft de tekst leesbaar, maar zie je wel dat er een foto achter zit.
              className="bg-white/90 backdrop-blur-sm rounded-sm p-6 md:p-8 shadow-lg hover:shadow-2xl transition duration-500 text-center border border-white/50 hover:border-accent group"
            >
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-500 shadow-lg border-4 border-white/50 group-hover:border-accent">
                   {value.icon}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold font-special text-primary mb-3 md:mb-4 group-hover:text-accent transition-colors">
                {value.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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