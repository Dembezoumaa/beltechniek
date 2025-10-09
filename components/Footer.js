'use client'

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        
        <div className="flex-1 max-w-xl">
          <h4 className="font-bold text-lg mb-2 text-black">Bedrijfsgegevens</h4>
          <p className="text-black opacity-55 text-sm leading-relaxed mb-4">
            Dienst Expert Cleaning Services levert professionele en representatieve 
            schoonmaakdiensten voor bedrijven, horeca en evenementen.
          </p>
          <div className="text-sm text-black opacity-70 space-y-1">
            <div><strong>KvK:</strong> 90215729</div>
            <div><strong>Adres:</strong> Groene Steen 18, 1628 WN Hoorn</div>
            <div><strong>Telefoon:</strong> <a href="tel:+31640127061" className="hover:text-[#40B9FF] transition">+31 6 40 12 70 61</a></div>
            <div><strong>Email:</strong> <a href="mailto:info@dienstexpert.nl" className="hover:text-[#40B9FF] transition">info@dienstexpert.nl</a></div>
          </div>
        </div>
        
        <div className="min-w-[200px]">
          <div className="font-bold text-lg mb-3 text-black">Dienst Expert</div>
          <nav className="flex flex-col gap-2 text-sm text-black opacity-55">
            <a href="/" className="hover:opacity-100 hover:text-[#40B9FF] transition">Home</a>
            <a href="/over-ons" className="hover:opacity-100 hover:text-[#40B9FF] transition">Over ons</a>
            <a href="/diensten" className="hover:opacity-100 hover:text-[#40B9FF] transition">Diensten</a>
            <a href="/werken-bij" className="hover:opacity-100 hover:text-[#40B9FF] transition">Werken bij</a>
            <a href="/contact" className="hover:opacity-100 hover:text-[#40B9FF] transition">Contact</a>
            <a href="/algemene-voorwaarden" className="hover:opacity-100 hover:text-[#40B9FF] transition">Algemene voorwaarden</a>
            <a href="/privacy" className="hover:opacity-100 hover:text-[#40B9FF] transition">Privacy Policy</a>
          </nav>
        </div>
      </div>

      {/* Blauwe onderbalk */}
      <div className="bg-[#40B9FF] text-white py-2 relative">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          
          {/* Links: copyright */}
          <div className="text-sm">
            © {new Date().getFullYear()} Dienst Expert
          </div>
          
          {/* Midden: scroll-to-top knop */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Terug naar boven"
            className="absolute left-1/2 -translate-x-1/2 bg-transparent border-2 border-white text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
              <path 
                d="M11 16V6M11 6L6 11M11 6l5 5" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          {/* Rechts: AbraCreative */}
          <a 
  href="https://wa.me/31611125344?text=Hallo%20AbtaCreative%2C%20ik%20heb%20een%20vraag%20over%20webdesign"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-bold hover:underline transition cursor-pointer"
>
  AbtaCreative
</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
