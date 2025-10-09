'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation()
  
  const reasons = [
    "Beste prijs / kwaliteit garantie",
    "Klanttevredenheidsscore van 99,6%",
    "Flexibel inzetbaar in en nabij de randstad",
    "Specialisten in dienst voor iedere branche",
    "Resultaatgericht en optimale beleving"
  ]

  return (
    <section 
      ref={ref}
      className={`relative w-full overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Desktop versie */}
      <div className="hidden md:flex flex-row h-[350px]">
        {/* Linker kant - Blauwe achtergrond met tekst */}
        <div className="w-1/2 bg-[#7DD3FC] flex items-center">
          <div className="w-full px-6 py-8 ml-auto" style={{maxWidth: 'calc((100vw - 1280px) / 2 + 640px)'}}>
            <div className="ml-auto" style={{maxWidth: '640px'}}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
                Waarom kiezen voor Dienst Expert Cleaning Services?
              </h2>
              <div className="space-y-2.5">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg 
                      className="w-5 h-5 text-white flex-shrink-0 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-white text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rechter kant - Foto met gradient overlay */}
        <div className="w-1/2 relative h-full">
          <img 
            src="/why-choose.jpg" 
            alt="Dienst Expert medewerker aan het werk" 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(125, 211, 252, 0.7) 0%, rgba(125, 211, 252, 0.3) 30%, transparent 60%)'
            }}
          />
        </div>
      </div>

      {/* Mobiel versie - Foto met tekst erover */}
      <div className="md:hidden relative h-[500px]">
        <img 
          src="/why-choose.jpg" 
          alt="Dienst Expert medewerker aan het werk" 
          className="w-full h-full object-cover"
        />
        {/* Blauwe gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(125, 211, 252, 0.85) 0%, rgba(125, 211, 252, 0.75) 100%)'
          }}
        />
        {/* Tekst over de foto */}
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-5 leading-tight">
              Waarom kiezen voor Dienst Expert Cleaning Services?
            </h2>
            <div className="space-y-3">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-white flex-shrink-0 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-white text-base">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
