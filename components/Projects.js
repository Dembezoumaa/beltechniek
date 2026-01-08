import Link from 'next/link'

function Projects() {
  return (
    <section className="py-16 md:py-24 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-accent font-bold uppercase tracking-widest mb-3 italic">Referentieprojecten</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-tighter">
            Expertise in de praktijk
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Van complexe elektrotechnische installaties tot geavanceerde inbraakbeveiliging. Wij leveren hoogwaardige oplossingen voor de meest veeleisende industriële omgevingen.
          </p>
        </div>
        
        {/* Grid layout - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-16">
          
          {/* Linker kolom */}
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="relative overflow-hidden rounded-sm h-[200px] md:h-[400px] group cursor-pointer shadow-md border border-gray-100">
              <img 
                src="/project1.jpg" 
                alt="Elektrotechnische installatie" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-sm h-[180px] md:h-[300px] group cursor-pointer shadow-md border border-gray-100">
              <img 
                src="/project2.jpg" 
                alt="Meet- en regeltechniek systeem" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Midden kolom */}
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="relative overflow-hidden rounded-sm h-[160px] md:h-[250px] group cursor-pointer shadow-md border border-gray-100">
              <img 
                src="/project3.jpg" 
                alt="Inbraakbeveiliging industrie" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm h-[220px] md:h-[350px] group cursor-pointer shadow-md border border-gray-100">
              <img 
                src="/project4.jpg" 
                alt="Besturingspaneel montage" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Rechter kolom */}
          <div className="flex flex-col gap-3 md:gap-6 col-span-2 md:col-span-1">
            <div className="relative overflow-hidden rounded-sm h-[200px] md:h-[300px] group cursor-pointer shadow-md border border-gray-100">
              <img 
                src="/project5.jpg" 
                alt="Industriële automatisering" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm h-[220px] md:h-[400px] group cursor-pointer shadow-md border border-gray-100">
              <img 
                src="/project6.jpg" 
                alt="Onderhoud technische installatie" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Navy Blue Balk (CTA Section) */}
        <div className="bg-primary rounded-sm p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden border-b-4 border-accent">
           {/* Decoratieve gloed */}
           <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">
              Uw technische uitdaging, <br /> onze expertise.
            </h3>
            <p className="text-white/70 text-base md:text-lg max-w-xl font-medium">
              Bent u op zoek naar een betrouwbare partner voor installatie, beheer of onderhoud? Neem direct contact op voor een vrijblijvend adviesgesprek.
            </p>
          </div>

          {/* KNOP */}
          <Link 
            href="/contact"
            className="relative z-10 bg-accent text-white px-10 py-5 rounded-sm font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap tracking-widest uppercase text-sm"
          >
            Project starten
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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