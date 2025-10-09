'use client'
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
        <h2 className="text-3xl font-bold mb-2 text-black">Verken onze schoonmaakprojecten</h2>
        <p className="text-black opacity-55 mb-8">Van kantoor tot industrie</p>
        
        {/* Grid layout - 2 kolommen mobiel, 3 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          {/* Linker kolom */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="relative overflow-hidden rounded-lg h-[250px] md:h-[411px]">
              <img 
                src="/project1.jpg" 
                alt="Schoonmaakproject 1" 
                className="w-full h-full object-cover"
                style={{border: '0.5px solid #40B9FF'}}
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-[220px] md:h-[360px]">
              <img 
                src="/project2.jpg" 
                alt="Schoonmaakproject 2" 
                className="w-full h-full object-cover"
                style={{border: '0.5px solid #40B9FF'}}
              />
            </div>
          </div>
          
          {/* Midden kolom */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="relative overflow-hidden rounded-lg h-[200px] md:h-[251px]">
              <img 
                src="/project3.jpg" 
                alt="Schoonmaakproject 3" 
                className="w-full h-full object-cover"
                style={{border: '0.5px solid #40B9FF'}}
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-[270px] md:h-[300px]">
              <img 
                src="/project4.jpg" 
                alt="Schoonmaakproject 4" 
                className="w-full h-full object-cover"
                style={{border: '0.5px solid #40B9FF'}}
              />
            </div>
          </div>
          
          {/* Rechter kolom */}
          <div className="flex flex-col gap-3 md:gap-4 col-span-2 md:col-span-1">
            <div className="relative overflow-hidden rounded-lg h-[220px] md:h-[300px]">
              <img 
                src="/project5.jpg" 
                alt="Schoonmaakproject 5" 
                className="w-full h-full object-cover"
                style={{border: '0.5px solid #40B9FF'}}
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-[250px] md:h-[411px]">
              <img 
                src="/project6.jpg" 
                alt="Schoonmaakproject 6" 
                className="w-full h-full object-cover"
                style={{border: '0.5px solid #40B9FF'}}
              />
            </div>
          </div>
        </div>
        
        {/* Bottom sectie */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">Overtuigd van onze kwaliteit?</h3>
          </div>
          <a 
            href="/contact"
            className="bg-[#40B9FF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3AA8E8] transition flex items-center gap-2"
          >
            Neem contact op
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
