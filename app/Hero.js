'use client'
import { useState } from 'react'
import Link from 'next/link'

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-primary">
      
      {/* --- ACHTERGROND --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Industriële techniek installaties" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-primary/40 to-primary"></div>
      </div>

      {/* --- NAVIGATIE --- */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-5 md:py-8 w-full">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Beltechniek Logo" className="h-10 md:h-14 w-auto drop-shadow-md" />
            <div className="flex flex-col leading-none">
              <span className="text-white font-sans font-bold text-xl md:text-2xl tracking-tighter group-hover:text-accent transition-colors uppercase">BELTECHNIEK</span>
              <span className="text-accent text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hidden sm:block">Industrial Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {['Home', 'Over ons', 'Diensten', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/70 text-sm font-bold hover:text-white transition-colors tracking-widest uppercase"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-white hover:text-primary text-white px-8 py-3 rounded-sm text-xs font-black transition-all shadow-xl uppercase tracking-widest"
            >
              Service Aanvraag
            </Link>
          </div>

          {/* Hamburger (Alleen zichtbaar als menu dicht is) */}
          {!mobileMenuOpen && (
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
               <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" /></svg>
            </button>
          )}
        </div>
      </nav>

      {/* --- MODERN MOBILE MENU OVERLAY --- */}
      <div className={`fixed inset-0 z-[100] bg-primary/98 backdrop-blur-2xl flex flex-col transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        
        {/* Sluitknop rechtsboven in overlay */}
        <div className="flex justify-end p-6 pt-8">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-accent transition-colors"
            aria-label="Sluit menu"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow gap-8">
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
            className="mt-4 px-12 py-5 bg-accent text-white font-black rounded-sm text-xl shadow-2xl uppercase tracking-widest"
          >
            Start Project
          </Link>
        </div>

        <div className="p-10 text-center border-t border-white/10">
            <p className="text-accent font-bold text-sm tracking-widest mb-2 uppercase">Direct Support</p>
            <a href="tel:+31614987347" className="text-white text-2xl font-black tracking-tight">+31 6 14987347</a>
        </div>
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 text-center pt-20">
        
        <div className="inline-flex items-center gap-3 py-2 px-5 border border-white/10 rounded-sm bg-white/5 backdrop-blur-md text-accent text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Landelijke Industriële Partner
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-[0.95] drop-shadow-2xl tracking-tighter uppercase">
          Technische <br />
          <span className="text-white/80">continuïteit</span>
        </h1>

        <p className="text-white/60 text-base md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
          Beltechniek B.V. ontzorgt industriële partners met hoogwaardige elektrotechniek en 24/7 storingsdiensten door heel Nederland.
        </p>

        <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-5">
          <Link 
            href="/contact" 
            className="w-full sm:px-14 py-5 bg-accent text-white font-black tracking-widest rounded-sm shadow-2xl hover:bg-white hover:text-primary transition-all text-center uppercase text-sm"
          >
            Direct contact
          </Link>
        </div>
      </div>

      {/* --- GEÏNTEGREERDE STATUS BAR (USP's) --- */}
      <div className="relative z-20 bg-black/40 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* USP 1 */}
            <div className="flex items-center justify-center gap-4 py-5 md:py-10 px-8 group hover:bg-white/5 transition-colors">
                <div className="flex flex-col items-center">
                  <span className="text-accent font-black text-lg md:text-2xl tracking-tighter uppercase leading-none">24/7 Support</span>
                  <p className="text-white/40 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase mt-1">Storingsdienst</p>
                </div>
            </div>

            {/* USP 2 */}
            <div className="flex items-center justify-center gap-4 py-5 md:py-10 px-8 group hover:bg-white/5 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <span className="text-white font-black text-lg md:text-2xl tracking-tighter uppercase leading-none italic">Gecertificeerd</span>
                  <p className="text-white/40 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase mt-1">VCA & NEN Normen</p>
                </div>
            </div>

            {/* USP 3 */}
            <div className="flex items-center justify-center gap-4 py-5 md:py-10 px-8 group hover:bg-white/5 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <span className="text-accent font-black text-lg md:text-2xl tracking-tighter uppercase leading-none">NL Dekking</span>
                  <p className="text-white/40 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase mt-1">Landelijke Service</p>
                </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero