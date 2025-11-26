'use client'
import Link from 'next/link'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Projects() {
  const [ref, isVisible] = useScrollAnimation()
  
  return (
    <section 
      ref={ref}
      className={`py-16 md:py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Zo ziet schoon eruit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Een greep uit ons werk: van strakke kantoren tot industriële vloeren.
          </p>
        </div>
        
        {/* Grid layout - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-16">
          {/* Linker kolom */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="relative overflow-hidden rounded-xl h-[200px] md:h-[411px] group">
              <img 
                src="/project1.jpg" 
                alt="Schoonmaakproject kantoor" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                style={{border: '1px solid rgba(64, 185, 255, 0.3)'}}
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-[180px] md:h-[360px] group">
              <img 
                src="/project2.jpg" 
                alt="Schoonmaakproject vloeronderhoud" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                style={{border: '1px solid rgba(64, 185, 255, 0.3)'}}
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Midden kolom */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="relative overflow-hidden rounded-xl h-[160px] md:h-[251px] group">
              <img 
                src="/project3.jpg" 
                alt="Schoonmaakproject sanitair" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                style={{border: '1px solid rgba(64, 185, 255, 0.3)'}}
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-[220px] md:h-[300px] group">
              <img 
                src="/project4.jpg" 
                alt="Schoonmaakproject glasbewassing" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                style={{border: '1px solid rgba(64, 185, 255, 0.3)'}}
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Rechter kolom (Op mobiel pakt deze de breedte over 2 kolommen voor variatie) */}
          <div className="flex flex-col gap-3 md:gap-4 col-span-2 md:col-span-1">
            <div className="relative overflow-hidden rounded-xl h-[200px] md:h-[300px] group">
              <img 
                src="/project5.jpg" 
                alt="Schoonmaakproject industrie" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                style={{border: '1px solid rgba(64, 185, 255, 0.3)'}}
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-[220px] md:h-[411px] group">
              <img 
                src="/project6.jpg" 
                alt="Schoonmaakproject horeca" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                style={{border: '1px solid rgba(64, 185, 255, 0.3)'}}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Blauwe Balk (CTA Section) */}
        <div className="bg-gradient-to-r from-[#40B9FF] to-[#0096FF] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
           {/* Decoratieve gloed */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left">
            {/* HIER ZAT DE FOUT: NU GECORRIGEERD NAAR <h3> */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Wilt u ook dit resultaat voor uw pand?
            </h3>
            <p className="text-white/90">
              Wij komen graag langs voor een vrijblijvende opname.
            </p>
          </div>

          <Link 
            href="/contact"
            className="relative z-10 bg-white text-[#40B9FF] px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap"
          >
            Vraag een offerte aan
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