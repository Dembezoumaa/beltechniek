'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Verander de waarde 20 naar iets hogers als de navbar te snel verspringt
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // Gebruik min-h-screen als fallback, 100dvh voor mobiele browsers
    <div className="relative min-h-screen md:min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-primary">
      
      {/* --- ACHTERGROND --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Luxe zeilmakerij werkplaats" 
          // 'object-center' zorgt dat het midden van de foto altijd zichtbaar is
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay voor beter contrast. 
            Als de tekst nog steeds slecht leesbaar is, verander 'via-primary/30' naar 'via-primary/50' */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/30 to-primary/90 md:to-primary/80"></div>
      </div>

      {/* --- NAVIGATIE --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'py-3 bg-primary/95 shadow-xl backdrop-blur-md' : 'py-4 md:py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 relative">
            <img src="/logo.png" alt="Logo Liva" className="h-8 md:h-12 w-auto drop-shadow-md" />
            <div className="flex flex-col leading-none">
              <span className="text-white font-special text-base md:text-lg tracking-widest">ZEILMAKERIJ LIVA</span>
              <span className="text-accent text-[10px] md:text-xs font-bold uppercase hidden sm:block">Loosdrecht</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Over ons', 'Diensten', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/90 text-sm font-medium hover:text-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-white/10 hover:bg-accent border border-white/20 hover:border-accent text-white px-5 py-2 rounded-sm text-sm font-bold transition-all backdrop-blur-sm"
            >
              OFFERTE
            </Link>
          </div>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button 
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
               <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
               <svg className="w-7 h-7 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- FULLSCREEN MOBILE MENU --- */}
      <div className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {['Home', 'Over ons', 'Diensten', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-special text-white hover:text-accent"
            >
              {item}
            </Link>
         ))}
         <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-10 py-4 bg-accent text-white font-bold rounded-sm shadow-lg text-lg">
           OFFERTE AANVRAGEN
         </Link>
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-12 text-center md:pt-0">
        
        {/* Eyebrow Label */}
        <span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-black/20 backdrop-blur-sm text-accent text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">
          Ambacht & Kwaliteit
        </span>

        {/* Hoofdtitel */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-special text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl">
          Vakmanschap voor <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            uw vaartuig
          </span>
        </h1>

        {/* Subtekst - AANGEPAST VOOR LEESBAARHEID */}
        {/* Veranderingen: text-white (ipv gray), font-medium (dikker), drop-shadow-lg (meer contrast) */}
        <p className="text-white text-base md:text-xl font-medium max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed drop-shadow-lg px-2">
          Zeilmakerij Liva realiseert high-end bootkappen en stoffering.
          <span className="hidden sm:inline"> Traditioneel ambacht met de modernste materialen.</span>
        </p>

        {/* Knoppen */}
        <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-3 md:gap-4 px-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-3.5 bg-accent text-white font-bold tracking-wide rounded-sm shadow-lg hover:bg-accent/90 transition text-center"
          >
            OFFERTE AANVRAGEN
          </Link>
          
          <Link 
            href="/over-ons" 
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/30 text-white font-medium hover:bg-white hover:text-primary transition rounded-sm backdrop-blur-sm text-center"
          >
            ONZE WERKWIJZE
          </Link>
        </div>
      </div>

      {/* --- USP STRIP (Responsive) --- */}
      <div className="relative z-20 md:absolute md:bottom-0 md:left-0 md:right-0 bg-black/30 md:bg-primary/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="grid grid-cols-3 gap-2 md:gap-6 divide-x divide-white/10 text-center">
            
            <div className="flex flex-col items-center justify-center">
               <span className="text-accent text-xs md:text-2xl mb-1">★★★★★</span>
               <p className="text-white text-[10px] md:text-sm font-medium tracking-wide uppercase">Top Kwaliteit</p>
            </div>

            <div className="flex flex-col items-center justify-center">
               <span className="text-accent text-xs md:text-base font-bold mb-1">100% MAATWERK</span>
               <p className="text-white text-[10px] md:text-sm font-medium tracking-wide uppercase">Eigen atelier</p>
            </div>

            <div className="flex flex-col items-center justify-center">
               <span className="text-accent text-xs md:text-base font-bold mb-1">LOOSDRECHT</span>
               <p className="text-white text-[10px] md:text-sm font-medium tracking-wide uppercase">Centraal</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero