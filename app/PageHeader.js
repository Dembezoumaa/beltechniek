'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PageHeader({ title, description, showButtons = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll effect voor de navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || mobileMenuOpen ? 'py-4 bg-primary shadow-2xl border-b border-white/5' : 'py-6 md:py-10 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 relative group">
            <img src="/logo.png" alt="Beltechniek Logo" className="h-9 md:h-12 w-auto drop-shadow-md" />
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-lg md:text-xl tracking-tighter group-hover:text-accent transition-colors uppercase">BELTECHNIEK</span>
              <span className="text-accent text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hidden sm:block">Industrial Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Over ons', 'Diensten', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/70 text-[11px] font-black hover:text-white transition-colors tracking-[0.2em] uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-white hover:text-primary text-white px-7 py-3 rounded-sm text-[11px] font-black transition-all shadow-xl uppercase tracking-widest"
            >
              Service Aanvraag
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- FULLSCREEN MOBILE MENU OVERLAY --- */}
      <div className={`fixed inset-0 z-[90] bg-primary/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
         {['Home', 'Over ons', 'Diensten', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black text-white hover:text-accent uppercase tracking-tighter"
            >
              {item}
            </Link>
         ))}
         <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="mt-6 px-12 py-5 bg-accent text-white font-black rounded-sm text-xl shadow-2xl uppercase tracking-widest"
         >
           Start Project
         </Link>
      </div>

      {/* --- HERO HEADER CONTENT --- */}
      <section className="relative h-[45vh] min-h-[400px] md:h-[55vh] w-full overflow-hidden flex items-center justify-center pt-24">
        
        {/* Achtergrondafbeelding */}
        <div className="absolute inset-0 z-0">
            <img 
              src="/hero-bg.jpg" 
              alt="Industriële achtergrond" 
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Donkere Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-primary/50 to-primary"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-8">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3 py-2 px-5 border border-white/10 rounded-sm bg-white/5 backdrop-blur-md text-accent text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Landelijke Industriële Partner
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] drop-shadow-2xl uppercase tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            {title}
          </h1>
          
          {description && (
            <p className="text-white/60 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              {description}
            </p>
          )}

          {/* Knoppen (alleen tonen als showButtons true is) */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-accent text-white font-black tracking-widest rounded-sm shadow-2xl hover:bg-white hover:text-primary transition-all text-center uppercase text-sm"
              >
                Direct contact
              </Link>
              <Link 
                href="/diensten" 
                className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/20 text-white font-black tracking-widest hover:bg-white/10 transition-all rounded-sm backdrop-blur-sm text-center uppercase text-sm"
              >
                Onze diensten
              </Link>
            </div>
          )}
        </div>

      </section>
    </div>
  )
}