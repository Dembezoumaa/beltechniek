'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function PageHeader({ title, description }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      {/* Kleine Hero */}
      <section className="relative h-[400px] md:h-[450px] w-full overflow-hidden">
        <img 
          src="/hero-bg.jpg" 
          alt="Dienst Expert" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-white text-sm md:text-lg max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-white" style={{
          clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>
    </div>
  )
}
