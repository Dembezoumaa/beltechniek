'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const words = ['Kwaliteit', 'Efficiëntie', 'Flexibiliteit']
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
          height: 'auto'
        }}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Dienst Expert Logo" 
                className="h-8 md:h-14 w-auto"
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-[#40B9FF] text-xs md:text-sm font-bold">DIENST EXPERT</span>
                <span className="text-[#40B9FF] text-[10px] md:text-xs">CLEANING SERVICE</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 text-xs">
            <Link href="/" className="text-white hover:text-[#40B9FF] transition">Home</Link>
            <Link href="/over-ons" className="text-white hover:text-[#40B9FF] transition">Over ons</Link>
            <Link href="/diensten" className="text-white hover:text-[#40B9FF] transition">Diensten</Link>
            <Link href="/werken-bij" className="text-white hover:text-[#40B9FF] transition">Werken bij</Link>
            <Link href="/contact" className="text-white hover:text-[#40B9FF] transition">Contact</Link>
            
            <Link href="/contact" className="bg-[#40B9FF] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#3AA8E8] transition whitespace-nowrap">
              Vraag offerte aan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#40B9FF] p-2 hover:text-[#3AA8E8] transition relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="md:hidden mt-2 backdrop-blur-sm rounded-2xl overflow-hidden" style={{
            backgroundColor: 'rgba(89, 89, 89, 0.95)',
          }}>
            <div className="flex flex-col py-4">
              <Link href="/" className="text-white hover:text-[#40B9FF] hover:bg-white/10 px-6 py-3 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/over-ons" className="text-white hover:text-[#40B9FF] hover:bg-white/10 px-6 py-3 transition" onClick={() => setMobileMenuOpen(false)}>Over ons</Link>
              <Link href="/diensten" className="text-white hover:text-[#40B9FF] hover:bg-white/10 px-6 py-3 transition" onClick={() => setMobileMenuOpen(false)}>Diensten</Link>
              <Link href="/werken-bij" className="text-white hover:text-[#40B9FF] hover:bg-white/10 px-6 py-3 transition" onClick={() => setMobileMenuOpen(false)}>Werken bij</Link>
              <Link href="/contact" className="text-white hover:text-[#40B9FF] hover:bg-white/10 px-6 py-3 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/contact" className="bg-[#40B9FF] text-white mx-6 mt-3 py-3 rounded-full text-center hover:bg-[#3AA8E8] transition" onClick={() => setMobileMenuOpen(false)}>Vraag offerte aan</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[800px] md:h-[800px] lg:h-[900px] w-full overflow-hidden">
        <img 
          src="/hero-bg.jpg" 
          alt="Dienst Expert medewerker" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-start">
          <div className="max-w-2xl text-center md:text-left px-4">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Uw Schoonmaakpartner<br />
              Voor{' '}
              <span className="relative inline-block text-[#40B9FF] min-w-[200px] md:min-w-[300px]">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className={`absolute left-0 top-[-20px] md:top-[-42px] transition-all duration-500 ${
                      index === currentWord
                        ? 'opacity-100 translate-y-0'
                        : index < currentWord
                        ? 'opacity-0 -translate-y-full'
                        : 'opacity-0 translate-y-full'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>
            
            <p className="text-white text-xs md:text-lg mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              Dienst Expert Cleaning Services levert professionele en representatieve schoonmaakdiensten voor bedrijven, horeca en evenementen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center md:justify-start">
              <Link 
                href="/contact"
                className="bg-[#40B9FF] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-[#3AA8E8] transition flex items-center gap-2 shadow-lg"
              >
                NEEM CONTACT OP
                <span>→</span>
              </Link>
              <Link 
                href="/over-ons"
                className="bg-[#40B9FF] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-[#3AA8E8] transition flex items-center gap-2 shadow-lg"
              >
                WIE ZIJN WIJ?
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Schuine witte overgang onderkant */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-white" style={{
          clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>
    </div>
  )
}

export default Hero
