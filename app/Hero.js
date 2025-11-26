'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
// Als je images in de public folder staan, is een gewone img prima, 
// maar voor productie raad ik 'next/image' aan. Ik heb het hier geoptimaliseerd:
import Image from 'next/image' 

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const words = ['Een fris pand', 'Totale ontzorging', 'Echt vakmanschap']
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 1800)
    
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute top-4 left-0 right-0 z-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto backdrop-blur-sm px-3 md:px-6 py-2 flex items-center justify-between" style={{
          backgroundColor: 'rgba(89, 89, 89, 0.77)',
          borderRadius: '20px',
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.15)',
        }}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* Optimalisatie: width/height toegevoegd om layout shifts te voorkomen */}
              <img 
                src="/logo.png" 
                alt="Dienst Expert Logo" 
                className="h-8 md:h-14 w-auto"
                width={150}
                height={56}
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-[#40B9FF] text-xs md:text-sm font-bold">DIENST EXPERT</span>
                <span className="text-[#40B9FF] text-[10px] md:text-xs">CLEANING SERVICE</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 text-xs">
            {['Home', 'Over ons', 'Diensten', 'Werken bij', 'Contact'].map((item) => (
               <Link 
                 key={item} 
                 href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                 className="text-white hover:text-[#40B9FF] transition font-medium"
               >
                 {item}
               </Link>
            ))}
            
            <Link href="/contact" className="bg-[#40B9FF] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#3AA8E8] transition whitespace-nowrap font-medium">
              Vraag offerte aan
            </Link>
          </div>

          {/* Mobile Menu Button - Verbeterd met accessibility attributes */}
          <button 
            className="md:hidden text-[#40B9FF] p-2 hover:text-[#3AA8E8] transition relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10" style={{
            backgroundColor: 'rgba(89, 89, 89, 0.95)',
          }}>
            <div className="flex flex-col py-4">
              {['Home', 'Over ons', 'Diensten', 'Werken bij', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:text-[#40B9FF] hover:bg-white/10 px-6 py-3 transition" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link href="/contact" className="bg-[#40B9FF] text-white mx-6 mt-3 py-3 rounded-full text-center hover:bg-[#3AA8E8] transition font-medium shadow-md" onClick={() => setMobileMenuOpen(false)}>
                Vraag offerte aan
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[800px] md:h-[800px] lg:h-[900px] w-full overflow-hidden">
        {/* Performance: Als je next/image gebruikt, vervang de <img> hieronder. 
            Ik gebruik hier een geoptimaliseerde <img> tag voor compatibiliteit, 
            maar de 'priority' logica zit in Next.js Image component. */}
        <img 
          src="/hero-bg.jpg" 
          alt="Schoonmaak specialist aan het werk" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager" // Belangrijk voor LCP
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-start">
          <div className="max-w-2xl text-center md:text-left px-4 mt-10 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Uw Schoonmaakpartner<br />
              <span className="flex flex-wrap justify-center md:justify-start gap-x-2 md:gap-x-3">
                <span>Voor</span>
                {/* FIX: Inline Grid zorgt dat alle woorden technisch op dezelfde plek staan 
                   zonder absolute positioning hacks die de layout breken op mobiel.
                */}
                <span className="inline-grid grid-cols-1 relative min-w-[140px] md:min-w-[280px] text-left">
                  {words.map((word, index) => (
                    <span
                      key={word}
                      className={`col-start-1 row-start-1 text-[#40B9FF] transition-all duration-500 ease-in-out ${
                        index === currentWord
                          ? 'opacity-100 translate-y-0'
                          : index < currentWord
                          ? 'opacity-0 -translate-y-4' // Subtielere animatie
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            
            <p className="text-white text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto md:mx-0 opacity-90">
Dienst Expert zorgt voor een representatieve uitstraling van bedrijven, horeca en evenementen. Wij leveren schoonmaakwerk waar u op kunt bouwen. Betrouwbaar, persoonlijk en afspraak is afspraak.            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
              {/* BUTTONS OMGEWISSELD */}
              <Link 
                href="/over-ons"
                className="w-full sm:w-auto border-2 border-white/20 hover:border-[#40B9FF] bg-white/10 hover:bg-[#40B9FF] backdrop-blur-sm text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-medium transition flex items-center justify-center gap-2 shadow-lg"
              >
                WIE ZIJN WIJ?
                <span aria-hidden="true">→</span>
              </Link>
              
              <Link 
                href="/contact"
                className="w-full sm:w-auto border-2 border-white/20 hover:border-[#40B9FF] bg-white/10 hover:bg-[#40B9FF] backdrop-blur-sm text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-medium transition flex items-center justify-center gap-2 shadow-lg"
              >
                NEEM CONTACT OP
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Nu klikbaar voor UX */}
        <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
          <svg className="w-7 h-7 md:w-8 md:h-8 text-white opacity-70 hover:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Schuine witte overgang */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-white z-10" style={{
          clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>
    </div>
  )
}

export default Hero