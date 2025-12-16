'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PageHeader({ title, description, showButtons = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll effect voor de navbar (net als in Hero.js)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      
      {/* --- NAVBAR --- */}
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

          {/* Mobile Menu Toggle */}
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

      {/* --- HERO HEADER CONTENT --- */}
      <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] w-full overflow-hidden flex items-center justify-center pt-20">
        
        {/* Achtergrondafbeelding */}
        <div className="absolute inset-0 z-0">
            <img 
              src="/hero-bg.jpg" 
              alt="Achtergrond" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay voor leesbaarheid */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/30 to-primary/90 md:to-primary/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          
          {/* Eyebrow Label (Optioneel, staat mooi boven de titel) */}
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-black/20 backdrop-blur-sm text-accent text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">
            Zeilmakerij Liva
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-special text-white mb-6 leading-tight drop-shadow-2xl">
            {title}
          </h1>
          
          {description && (
            <p className="text-white text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg opacity-90">
              {description}
            </p>
          )}

          {/* Knoppen (alleen tonen als showButtons true is) */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
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
                MEER OVER ONS
              </Link>
            </div>
          )}
        </div>

      </section>
    </div>
  )
}