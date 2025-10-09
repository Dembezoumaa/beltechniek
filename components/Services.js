'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Services() {
  const [ref, isVisible] = useScrollAnimation()
  
  const services = [
    {
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#40B9FF"/>
          <path d="M32 18C24.82 18 19 23.82 19 31C19 40.5 32 52 32 52C32 52 45 40.5 45 31C45 23.82 39.18 18 32 18Z" fill="white"/>
          <circle cx="32" cy="31" r="4" fill="#40B9FF"/>
        </svg>
      ),
      title: "Horeca- en hospitality locaties",
      description: "Professionele schoonmaak voor horecagelegenheden, sportscholen en andere publieke ruimten. Altijd fris en representatief."
    },
    {
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#40B9FF"/>
          <rect x="20" y="22" width="24" height="20" rx="1" fill="white"/>
          <rect x="23" y="25" width="4" height="4" fill="#40B9FF"/>
          <rect x="30" y="25" width="4" height="4" fill="#40B9FF"/>
          <rect x="37" y="25" width="4" height="4" fill="#40B9FF"/>
          <rect x="23" y="32" width="4" height="4" fill="#40B9FF"/>
          <rect x="30" y="32" width="4" height="4" fill="#40B9FF"/>
          <rect x="37" y="32" width="4" height="4" fill="#40B9FF"/>
        </svg>
      ),
      title: "Kantoor- en bedrijf ruimtes",
      description: "Grondige en regelmatige reiniging van kantoren en werkplekken voor een prettige werkomgeving."
    },
    {
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#40B9FF"/>
          <path d="M40 30H36V20H22C20.9 20 20 20.9 20 22V38H24C24 40.21 25.79 42 28 42C30.21 42 32 40.21 32 38H40C40 40.21 41.79 42 44 42C46.21 42 48 40.21 48 38H50V32L46 28L40 30Z" fill="white"/>
          <circle cx="28" cy="38" r="2" fill="#40B9FF"/>
          <circle cx="44" cy="38" r="2" fill="#40B9FF"/>
        </svg>
      ),
      title: "Opleveringsschoonmaak",
      description: "Schoonmaak bij verhuur of verkoop na verbouwing. Wij zorgen voor een frisse en nette oplevering."
    },
    {
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#40B9FF"/>
          <rect x="22" y="20" width="20" height="24" rx="2" fill="white"/>
          <rect x="26" y="24" width="12" height="16" fill="#40B9FF" opacity="0.2"/>
          <path d="M28 32L30 34L36 28" stroke="#40B9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Glasbewassing",
      description: "Streepvrije glasbewassing, zowel aan de binnen- als buitenzijde. Voor een heldere uitstraling van uw gebouw."
    },
    {
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#40B9FF"/>
          <circle cx="32" cy="32" r="12" fill="white"/>
          <path d="M32 20L34 28H42L36 33L38 41L32 36L26 41L28 33L22 28H30L32 20Z" fill="#40B9FF"/>
        </svg>
      ),
      title: "Periodieke onderhoudsschoonmaak",
      description: "Structurele schoonmaak op vaste momenten. Ideaal voor langdurige schone ruimtes en minimale opbouw van vuil."
    },
    {
      icon: (
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#40B9FF"/>
          <path d="M32 22C28 22 25 25 25 29C25 33 32 40 32 40C32 40 39 33 39 29C39 25 36 22 32 22Z" fill="white"/>
          <circle cx="28" cy="34" r="3" fill="white"/>
          <circle cx="36" cy="36" r="2" fill="white"/>
          <path d="M26 38C26 38 28 42 32 42C36 42 38 38 38 38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Dieptereiniging",
      description: "Intensieve reiniging van kantoren, keuken en sanitaire ruimtes. Voor optimale hygiëne en veiligheid."
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
        {/* Header */}
        <div className="text-left mb-12">
          <p className="text-sm text-[#40B9FF] font-semibold mb-2">Dienst Expert</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Onze diensten, afgestemd op uw ruimte
          </h2>
          <p className="text-black opacity-70 max-w-3xl">
            Dienst Expert Cleaning Services biedt professionele en relationele schoonmaak voor kantoren, horeca, evenementen en meer. Van glasbewassing tot dieptereiniging – wij leveren kwaliteit, flexibiliteit en een representatief resultaat. Altijd afgestemd op uw wensen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const isTopRow = index < 3
            const isBottomRow = index >= 3
            const isTopRowMobile = index < 2
            const isMiddleRowMobile = index >= 2 && index < 4
            const isBottomRowMobile = index >= 4
            
            return (
              <div 
                key={index}
                className={`relative flex flex-col items-center text-center px-3 py-8 md:px-4 md:py-12 bg-white min-h-[280px] md:min-h-[380px] ${
                  isTopRowMobile ? 'border-b border-l border-r shadow-[0_2px_4px_-1px_rgba(0,0,0,0.06)] md:shadow-none' : ''
                } ${
                  isMiddleRowMobile ? 'border-l border-r md:shadow-none' : ''
                } ${
                  isBottomRowMobile ? 'border-t border-l border-r shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.06)] md:shadow-none' : ''
                } ${
                  isTopRow ? 'md:border-b md:border-l md:border-r md:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.06)]' : ''
                } ${
                  isBottomRow ? 'md:border-t md:border-l md:border-r md:shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.06)]' : ''
                } border-gray-100 hover:border-[#40B9FF] transition`}
              >
                <div className="mb-4 md:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xs md:text-base font-bold text-black mb-2 md:mb-3 px-1 md:px-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-black opacity-70 leading-relaxed px-1 md:px-2">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="/diensten"
            className="inline-block bg-[#40B9FF] hover:bg-[#3AA8E8] text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg uppercase text-sm"
          >
            Bekijk meer →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
