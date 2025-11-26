'use client'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12 md:mt-20">
      {/* Padding flink verkleind op mobiel (pt-10 ipv pt-16) */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6 md:pt-16 md:pb-8">
        
        {/* Gap verkleind voor compacter beeld op mobiel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 md:mb-16">
          
          {/* Kolom 1: Info */}
          <div>
            <div className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              DIENST EXPERT
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-sm">
              De specialist in professionele schoonmaak voor bedrijven, horeca en evenementen.
            </p>
            <div className="text-xs text-gray-400 font-medium">
              KvK: 90215729
            </div>
          </div>

          {/* Kolom 2: Navigatie & Legal (Samengevoegd & Compact) */}
          <div>
            <h4 className="font-bold text-base text-gray-900 mb-3 md:mb-5">Navigatie</h4>
            <nav className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#40B9FF] transition-colors w-fit">Home</Link>
              <Link href="/over-ons" className="hover:text-[#40B9FF] transition-colors w-fit">Over ons</Link>
              <Link href="/diensten" className="hover:text-[#40B9FF] transition-colors w-fit">Diensten</Link>
              <Link href="/werken-bij" className="hover:text-[#40B9FF] transition-colors w-fit">Werken bij</Link>
              <Link href="/contact" className="hover:text-[#40B9FF] transition-colors w-fit">Contact</Link>
              
              {/* Juridische links - Subtieler en direct eronder */}
              <div className="mt-2 pt-2 border-t border-gray-50 flex flex-col gap-2">
                <Link href="/algemene-voorwaarden" className="text-xs text-gray-400 hover:text-[#40B9FF] transition-colors w-fit">Algemene voorwaarden</Link>
                <Link href="/privacy" className="text-xs text-gray-400 hover:text-[#40B9FF] transition-colors w-fit">Privacy Policy</Link>
              </div>
            </nav>
          </div>

          {/* Kolom 3: Contact */}
          <div>
            <h4 className="font-bold text-base text-gray-900 mb-3 md:mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-gray-600">
              
              <div className="flex items-start gap-3 group">
                <div className="w-6 h-6 mt-0.5 rounded-full bg-[#40B9FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#40B9FF] transition-colors duration-300">
                  <svg className="w-3 h-3 text-[#40B9FF] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Groene Steen 18,<br />1628 WN Hoorn</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[#40B9FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#40B9FF] transition-colors duration-300">
                  <svg className="w-3 h-3 text-[#40B9FF] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+31640127061" className="hover:text-[#40B9FF] transition font-medium">
                  +31 6 40 12 70 61
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[#40B9FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#40B9FF] transition-colors duration-300">
                  <svg className="w-3 h-3 text-[#40B9FF] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@dienstexpert.nl" className="hover:text-[#40B9FF] transition">
                  info@dienstexpert.nl
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Dienst Expert Cleaning Services
          </div>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#40B9FF] hover:bg-[#3AA8E8] text-white rounded-full p-2.5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            aria-label="Terug naar boven"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
          
          <a 
            href="https://wa.me/31611125344?text=Hallo%20AbtaCreative%2C%20ik%20heb%20een%20vraag%20over%20webdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-[#40B9FF] transition flex items-center gap-1"
          >
            By <span className="font-semibold text-gray-500 hover:text-[#40B9FF]">AbtaCreative</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer