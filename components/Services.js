'use client'
import Link from 'next/link'

function Services() {

  const services = [
    {
      focus: "Krachtstroom",
      title: "Elektrotechniek",
      description: "Ontwerp en installatie van complete elektrische installaties voor utiliteit en industrie."
    },
    {
      focus: "Beveiliging",
      title: "Inbraaksystemen",
      description: "Gecertificeerde beveiligingsoplossingen om uw bedrijfspand en activa 24/7 te beschermen."
    },
    {
      focus: "24/7 Uptime",
      title: "Industriële Storingsdienst",
      description: "Directe hulp bij technische calamiteiten om stilstand van uw productieproces te minimaliseren."
    },
    {
      focus: "Procescontrole",
      title: "Meet- & Regeltechniek",
      description: "Optimalisatie en automatisering van systemen voor nauwkeurige monitoring en besturing."
    },
    {
      focus: "Installatie",
      title: "Elektrisch Werk",
      description: "Van groepenkasten tot complexe bekabeling; wij verzorgen het volledige elektrische traject."
    },
    {
      focus: "Revisie",
      title: "Mechanisch Werk",
      description: "Onderhoud en reparatie van mechanische componenten binnen uw machinepark of installatie."
    },
    {
      focus: "Maatwerk",
      title: "Paneelbouw",
      description: "Assemblage van besturingskasten en verdeelinrichtingen, volledig gebouwd volgens uw specificaties."
    },
    {
      focus: "Totaaloplossing",
      title: "Allround Techniek",
      description: "Brede technische ondersteuning en multidisciplinaire projecten voor de zakelijke markt."
    }
  ]

  return (
  <section className="py-12 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Blok (Industrieel Wit Glas) */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 md:p-10 text-center mb-12 shadow-lg max-w-4xl mx-auto border border-white/50">
          <p className="text-sm text-accent font-bold uppercase tracking-widest mb-3">
            Onze Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Technische Diensten
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg font-medium">
            Beltechniek B.V. levert hoogwaardige technische oplossingen voor de industrie en B2B-sector. 
            Van preventief onderhoud tot complexe systeemintegratie; wij waarborgen de continuïteit 
            van uw bedrijfsvoering met gecertificeerd vakmanschap en landelijke dekking.
          </p>
        </div>

        {/* Services Grid (8 items) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/30 rounded-lg overflow-hidden shadow-2xl bg-white/90 backdrop-blur-md">
          {services.map((service, index) => {
            const number = (index + 1).toString().padStart(2, '0');

            return (
              <div 
                key={index}
                className={`
                  relative flex flex-col items-center justify-start text-center px-3 py-8 md:px-6 md:py-12 
                  group hover:bg-white transition-colors duration-300
                  border-gray-200/50
                  
                  /* --- MOBIEL BORDER LOGIC (2 kolommen) --- */
                  ${(index + 1) % 2 !== 0 ? 'border-r' : ''} 
                  ${index < services.length - 2 ? 'border-b' : ''} 

                  /* --- DESKTOP BORDER LOGIC (4 kolommen) --- */
                  md:border-r ${(index + 1) % 4 === 0 ? 'md:border-r-0' : 'md:border-r'} 
                  md:border-b ${index < services.length - 4 ? 'md:border-b' : 'md:border-b-0'}
                `}
              >
                {/* Focus label */}
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-3 group-hover:text-accent transition-colors">
                  {service.focus}
                </span>

                {/* HET NUMMER */}
                <div className="mb-2 font-bold text-3xl md:text-4xl text-accent/80 group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform">
                  {number}
                </div>
                
                {/* Titel */}
                <h3 className="text-sm md:text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                
                {/* Beschrijving */}
                <p className="text-[10px] md:text-sm text-gray-500 leading-snug max-w-[140px] md:max-w-xs mx-auto">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-block bg-accent hover:bg-primary text-white font-bold px-8 py-3 md:px-10 md:py-4 rounded-sm transition all shadow-lg hover:shadow-xl hover:-translate-y-1 tracking-wide text-sm md:text-base uppercase"
          >
            Vraag een technische audit aan →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services