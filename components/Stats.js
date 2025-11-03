'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Stats() {
  const [ref, isVisible] = useScrollAnimation()
  
  const stats = [
    {
      number: "5+",
      label: "Jaar ervaring",
      description: "Gespecialiseerd in professionele schoonmaakdiensten"
    },
    {
      number: "120+",
      label: "Tevreden klanten",
      description: "Van kantoor tot industrie en zorg"
    },
    {
      number: "25+",
      label: "Medewerkers in dienst",
      description: "Vakbekwaam en betrouwbaar team"
    },
    {
      number: "99%",
      label: "Klanttevredenheid",
      description: "Aanbevolen door onze klanten"
    }
  ]

  return (
    <section 
      ref={ref}
      className={`py-16 md:py-20 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro tekst */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[#40B9FF] font-semibold mb-2">
            Meer dan schoonmaak alleen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Wij leveren maatwerkoplossingen
          </h2>
          <p className="text-black opacity-70 max-w-2xl mx-auto">
            Bij uw locatie en context passen. Getrainde medewerkers en oog voor detail zorgen we voor een betrouwbare dienstverlening – elke dag opnieuw.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#40B9FF] mb-3">
                {stat.number}
              </div>
              <div className="text-base md:text-lg font-semibold text-black mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-black opacity-60 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
