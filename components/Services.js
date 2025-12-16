'use client'
import Link from 'next/link'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Services() {
  const [ref, isVisible] = useScrollAnimation()
  
  // Ik heb de iconen uit de data verwijderd. We gebruiken nu de index voor de nummers.
  const services = [
    {
      focus: "Bescherming",
      title: "Dekzeilen",
      description: "Houdt het dek droog en voorkomt schade in de haven of winterstalling."
    },
    {
      focus: "Privacy",
      title: "Railingkleden",
      description: "Extra beschutting tegen wind, spatten en laagstaande zon."
    },
    {
      focus: "Verkoeling",
      title: "Biminitops",
      description: "Schaduw op warme dagen. Eenvoudig op te zetten en kleurvast."
    },
    {
      focus: "Strak",
      title: "Bootkappen",
      description: "Sluit de kuip netjes af. Volgt precies de lijnen van uw boot."
    },
    {
      focus: "Comfort",
      title: "Stoelen & Kussens",
      description: "Bestand tegen zon, vocht en zout water. Zorgeloos zitten en liggen."
    },
    {
      focus: "Zeilbehoud",
      title: "Giekkleden",
      description: "Voorkomt verwering en slijtage van het grootzeil wanneer u niet vaart."
    },
    {
      focus: "Flexibel",
      title: "Cabrioletkappen",
      description: "Beschutte ruimte in één beweging. Eenvoudig openritsen op mooie dagen."
    },
    {
      focus: "Zicht",
      title: "Buiskappen",
      description: "Beschutting tegen buiswater met behoud van goed zicht."
    }
  ]

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Blok (Wit Glas) */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 md:p-10 text-center mb-12 shadow-lg max-w-4xl mx-auto border border-white/50">
          <p className="text-sm text-accent font-bold uppercase tracking-widest mb-3">
            Zeilmakerij Liva
          </p>
          <h2 className="text-3xl md:text-5xl font-special text-primary mb-4">
            Wat wij voor u maken
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg font-medium">
            Zeilmakerij Liva vervaardigt alles op maat. Van beschermende kappen tot comfortabele stoffering, wij leveren vakmanschap dat past bij uw boot en uw wensen. Elk product wordt handmatig ingemeten en in ons atelier in Loosdrecht geproduceerd.
          </p>
        </div>

        {/* Services Grid (8 items) - Zonder Iconen */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/30 rounded-lg overflow-hidden shadow-2xl bg-white/90 backdrop-blur-md">
          {services.map((service, index) => {
            // Maak een mooi nummer, bijv: "01", "02"
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
                {/* Focus label (klein bovenin) */}
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-3">
                  {service.focus}
                </span>

                {/* HET NUMMER (Vervanging van icoon) */}
                <div className="mb-2 font-special text-3xl md:text-4xl text-accent/80 group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform">
                  {number}
                </div>
                
                {/* Titel */}
                <h3 className="text-sm md:text-lg font-bold font-special text-primary mb-2">
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
            href="/diensten"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-bold px-8 py-3 md:px-10 md:py-4 rounded-sm transition shadow-lg hover:shadow-xl hover:-translate-y-1 tracking-wide text-sm md:text-base"
          >
            BEKIJK AL ONZE DIENSTEN →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services