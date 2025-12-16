'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation()
  
  const reasons = [
    {
      title: "Ambachtelijk maatwerk",
      text: "Geen standaardmaten, maar vakmanschap op maat. Elke boot is anders en verdient een perfecte pasvorm.",
      icon: (
        // Icoon: Liniaal & Potlood
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "9.6 gemiddeld cijfer",
      text: "Booteigenaren waarderen onze kwaliteit, service en betrouwbaarheid. Daar zijn we trots op.",
      icon: (
        // Icoon: Ster
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: "Lokaal in Loosdrecht",
      text: "Wij kennen de lokale wateren en komen graag naar u toe voor een vrijblijvend adviesgesprek.",
      icon: (
        // Icoon: Locatie Pin
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Premium materialen",
      text: "Sunbrella, Markilux en andere topmerken die jarenlang meegaan. Kwaliteit die u kunt zien en voelen.",
      icon: (
        // Icoon: Diamant
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Complete service",
      text: "Van inmeten tot montage regelen wij alles. U hoeft zich nergens zorgen over te maken.",
      icon: (
        // Icoon: Gereedschap
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.816 1.035.816 1.73 0 .695-.32 1.3-.816 1.73m0-3.46a24.347 24.347 0 010 3.46" />
        </svg>
      )
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
        {/* Linker kant - Navy Blue achtergrond met tekst */}
        <div className="w-1/2 bg-primary flex items-center justify-end">
          <div className="w-full max-w-xl px-12 py-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-special text-white mb-10 leading-tight">
              Waarom kiezen voor <br /> Zeilmakerij Liva?
            </h2>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 group">
                  {/* Icoon Cirkel */}
                  <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary text-white transition-colors duration-300">
                    {reason.icon}
                  </div>
                  
                  {/* Tekst Content */}
                  <div>
                    <h3 className="text-lg font-bold font-special text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed max-w-sm">
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
            alt="Vakmanschap in atelier" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtiele gradient overlay voor diepte */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Mobiel versie - Foto met tekst erover */}
      <div className="md:hidden relative min-h-[600px]">
        <img 
          src="/why-choose.jpg" 
          alt="Vakmanschap in atelier" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Navy gradient overlay (Sterk op mobiel voor leesbaarheid) */}
        <div className="absolute inset-0 bg-primary/90" />

        {/* Tekst Content Mobiel */}
        <div className="relative z-10 px-6 py-12 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-bold font-special text-white mb-8 leading-tight">
            Waarom kiezen voor <br /> Zeilmakerij Liva?
          </h2>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                      {reason.icon}
                   </div>
                </div>
                <div>
                  <h3 className="text-base font-bold font-special text-white mb-0.5">
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