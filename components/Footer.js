'use client'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 md:pt-20 md:pb-10">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 md:mb-20">
          
          {/* Kolom 1: Bedrijfsprofiel */}
          <div>
            <div className="font-bold text-xl text-primary mb-5 flex items-center gap-2 tracking-tighter uppercase">
              BELTECHNIEK B.V.
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm font-medium">
              Uw partner in elektrotechniek, inbraakbeveiliging en industriële storingsdiensten. Wij waarborgen de continuïteit van uw technische installaties door heel Nederland.
            </p>
            <div className="space-y-1">
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                KVK: 95930043
              </div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                VCA Gecertificeerd
              </div>
            </div>
          </div>

          {/* Kolom 2: Navigatie */}
          <div className="md:pl-10">
            <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Navigatie</h4>
            <nav className="flex flex-col gap-3 text-sm text-gray-600 font-semibold">
              <Link href="/" className="hover:text-accent transition-colors w-fit">Home</Link>
              <Link href="/over-ons" className="hover:text-accent transition-colors w-fit">Over ons</Link>
              <Link href="/diensten" className="hover:text-accent transition-colors w-fit">Diensten</Link>
              <Link href="/contact" className="hover:text-accent transition-colors w-fit">Contact</Link>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link href="/algemene-voorwaarden" className="text-xs text-gray-400 hover:text-accent transition-colors w-fit uppercase tracking-tighter">Algemene voorwaarden</Link>
                <Link href="/privacy" className="text-xs text-gray-400 hover:text-accent transition-colors w-fit uppercase tracking-tighter">Privacy Policy</Link>
              </div>
            </nav>
          </div>

          {/* Kolom 3: Contactgegevens */}
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Direct Contact</h4>
            <div className="space-y-5 text-sm text-gray-600">
              
              {/* Adres */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 border border-primary/10">
                  <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="mt-1 font-medium leading-tight text-gray-700">
                  Florence Nightingaleweg 5,<br />2545 CD ’s-Gravenhage
                </span>
              </div>

              {/* Telefoon */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 border border-primary/10">
                  <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+31614987347" className="hover:text-accent transition font-bold text-primary">
                  +31 6 14987347
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 border border-primary/10">
                  <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@beltechniek.nl" className="hover:text-accent transition font-medium">
                  info@beltechniek.nl
                </a>
              </div>

              {/* Openingstijden */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="mt-1 leading-snug font-bold text-gray-700">
                  Storingsdienst: 24/7 bereikbaar<br />
                  <span className="font-medium text-gray-500 text-xs text-uppercase">Kantoor: Ma t/m Vr 08:30 - 17:30</span>
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar - MET ABTACREATIVE CREDITS */}
        <div className="border-t border-gray-100 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Beltechniek B.V. — Alle rechten voorbehouden
          </div>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary hover:bg-accent text-white rounded-sm p-3 shadow-lg hover:-translate-y-1 transition-all duration-300"
            aria-label="Terug naar boven"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
          
          <a 
            href="https://wa.me/31611125344?text=Hallo%20AbtaCreative%2C%20ik%20heb%20een%20vraag%20over%20webdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-accent transition flex items-center gap-1"
          >
            By <span className="font-semibold text-gray-500 hover:text-accent">AbtaCreative</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer