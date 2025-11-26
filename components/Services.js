'use client'
import Link from 'next/link'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Services() {
  const [ref, isVisible] = useScrollAnimation()
  
  const services = [
  {
      focus: "Gastvrijheid",
      title: "Horeca- en hospitality",
      description: "Een vlekkeloze eerste indruk voor uw gasten. Wij zorgen dat uw restaurant, sportschool of publieke ruimte altijd fris, hygiënisch en uitnodigend is.",
      icon: (
        <svg className="w-12 h-12 text-[#40B9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    },
    {
      focus: "Werkplezier",
      title: "Kantoor- en bedrijfsruimtes",
      description: "Een schone werkplek werkt prettiger. Wij zorgen voor frisse bureaus, schoon sanitair en een representatief kantoor waar u klanten met trots ontvangt.",
      icon: (
        <svg className="w-12 h-12 text-[#40B9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      )
    },
    {
      focus: "Direct klaar",
      title: "Opleveringsschoonmaak",
      description: "Verbouwing of verhuizing achter de rug? Wij verwijderen bouwstof en vuil, zodat het pand direct klaar is voor de nieuwe bewoners of gebruikers.",
      icon: (
        // Icoon: Sleutel (Key) - Staat voor sleuteloverdracht / oplevering
        <svg className="w-12 h-12 text-[#40B9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      )
    },
    {
      focus: "Uitstraling",
      title: "Glasbewassing",
      description: "Vies glas doet afbreuk aan uw pand. Wij zorgen voor een heldere blik en een verzorgde uitstraling met streeploze ramen, zowel binnen als buiten.",
      icon: (
         // Icoon: Raam (Window)
        <svg className="w-12 h-12 text-[#40B9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18" />
          {/* Sparkle effectje */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" opacity="0.3" /> 
        </svg>
      )
    },
    {
      focus: "Regelmaat",
      title: "Periodiek onderhoud",
      description: "Altijd verzekerd van een schoon pand. Wij komen op vaste momenten langs. Zo krijgt vuil geen kans en ziet uw bedrijf er elke dag netjes uit.",
      icon: (
        <svg className="w-12 h-12 text-[#40B9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5v3m0-3h2.25" />
        </svg>
      )
    },
    {
      focus: "Grondig / Hygiëne",
      title: "Dieptereiniging",
      description: "Voor als het écht grondig moet. Intensieve reiniging van sanitair, keukens en vloeren. Voor optimale hygiëne en veiligheid tot in de kleinste details.",
      icon: (
        <svg className="w-12 h-12 text-[#40B9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
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
            Onze diensten: schoonmaak die bij u past
          </h2>
          <p className="text-black opacity-70 max-w-3xl leading-relaxed">
            Dienst Expert Cleaning Services regelt het. Van glasbewassing tot dieptereiniging – wij leveren kwaliteit voor kantoren, horeca en evenementen. Geen standaardpakketten, maar een aanpak die is afgestemd op uw pand en wensen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {services.map((service, index) => {
            // Grid border logic voor strakke lijnen
            const isRightBorder = (index + 1) % 2 !== 0 // Mobile: right border on odd items
            const isRightBorderMd = (index + 1) % 3 !== 0 // Desktop: right border on 1st and 2nd col
            const isBottomBorder = index < services.length - 2 // Mobile: bottom border on all except last row
            const isBottomBorderMd = index < services.length - 3 // Desktop: bottom border on all except last row

            return (
              <div 
                key={index}
                className={`
                  relative flex flex-col items-center text-center px-4 py-10 bg-white group hover:bg-gray-50 transition-colors duration-300
                  ${isRightBorder ? 'border-r border-gray-100 md:border-r-0' : ''}
                  ${isRightBorderMd ? 'md:border-r md:border-gray-100' : ''}
                  ${isBottomBorder ? 'border-b border-gray-100 md:border-b-0' : ''}
                  ${isBottomBorderMd ? 'md:border-b md:border-gray-100' : ''}
                `}
              >
                {/* Focus label */}
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#40B9FF] bg-[#40B9FF]/10 px-2 py-1 rounded-full mb-4">
                  {service.focus}
                </span>

                <div className="mb-5 text-gray-400 group-hover:text-[#40B9FF] transition-colors duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-3 px-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed px-2 max-w-xs mx-auto">
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
            className="inline-block bg-[#40B9FF] hover:bg-[#3AA8E8] text-white font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Bekijk al onze diensten →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services