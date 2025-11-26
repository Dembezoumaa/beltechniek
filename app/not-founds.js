import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      
      {/* Groot 404 getal met huisstijl kleur */}
      <h1 className="text-9xl font-extrabold text-[#40B9FF] opacity-20">
        404
      </h1>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Oeps! Pagina niet gevonden
        </h2>
        
        <p className="text-gray-600 text-lg max-w-md mb-8 leading-relaxed">
          Het lijkt erop dat deze pagina grondig is schoongemaakt... of misschien heeft hij nooit bestaan.
        </p>

        <Link 
          href="/" 
          className="bg-[#40B9FF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3AA8E8] transition shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Terug naar Home
        </Link>
      </div>

      {/* Decoratieve achtergrond elementen (behoudt de look van je site) */}
      <div className="fixed inset-0 opacity-5 -z-10 pointer-events-none" 
           style={{ 
             backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #40B9FF 35px, #40B9FF 36px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
    </div>
  )
}