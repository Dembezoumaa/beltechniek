'use client'
import Link from 'next/link'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Projects() {
  const [ref, isVisible] = useScrollAnimation()
  
  return (
    <section 
      ref={ref}
      className={`py-16 md:py-24 relative z-10 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-accent font-bold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold font-special text-primary mb-4">
            Vakmanschap in beeld
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Van strak gespannen buiskappen tot perfect afgewerkte stoffering. Elk project wordt met zorg en precisie uitgevoerd.
          </p>
        </div>
        
        {/* Grid layout - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-16">
          {/* Linker kolom */}
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="relative overflow-hidden rounded-sm h-[200px] md:h-[400px] group cursor-pointer shadow-md">
              <img 
                src="/project1.jpg" 
                alt="Buiskap op maat" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay met titel (optioneel, verschijnt bij hover) */}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-sm h-[180px] md:h-[300px] group cursor-pointer shadow-md">
              <img 
                src="/project2.jpg" 
                alt="Bootstoffering detail" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Midden kolom */}
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="relative overflow-hidden rounded-sm h-[160px] md:h-[250px] group cursor-pointer shadow-md">
              <img 
                src="/project3.jpg" 
                alt="Afdekzeil strak gespannen" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm h-[220px] md:h-[350px] group cursor-pointer shadow-md">
              <img 
                src="/project4.jpg" 
                alt="Biminitop montage" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Rechter kolom */}
          <div className="flex flex-col gap-3 md:gap-6 col-span-2 md:col-span-1">
            <div className="relative overflow-hidden rounded-sm h-[200px] md:h-[300px] group cursor-pointer shadow-md">
              <img 
                src="/project5.jpg" 
                alt="Interieur kussens" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm h-[220px] md:h-[400px] group cursor-pointer shadow-md">
              <img 
                src="/project6.jpg" 
                alt="Reparatie zeildoek" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Navy Blue Balk (CTA Section) - NU MET RONDE HOEKEN (rounded-3xl) */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
           {/* Decoratieve gloed */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-bold font-special text-white mb-3">
              Klaar om uw boot te laten beschermen?
            </h3>
            <p className="text-white/80 text-base md:text-lg max-w-xl font-light">
              Neem vrijblijvend contact op voor advies, een offerte of een afspraak voor inmeten.
            </p>
          </div>

          {/* KNOP - NU MET RONDE HOEKEN (rounded-full) */}
          <Link 
            href="/contact"
            className="relative z-10 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap tracking-wide"
          >
            OFFERTE AANVRAGEN
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Projects