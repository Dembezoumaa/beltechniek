import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative bg-white overflow-hidden">
      
      {/* Groot 404 getal op de achtergrond (Watermerk) */}
      <h1 className="text-[12rem] md:text-[22rem] font-black text-primary/[0.03] absolute z-0 select-none leading-none tracking-tighter">
        404
      </h1>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 py-1 px-3 border border-primary/10 rounded-sm bg-gray-50 text-accent text-[10px] font-black tracking-[0.2em] uppercase mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Verbinding verbroken
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tighter leading-none">
          Technische <br />
          <span className="text-primary/40">Storing</span>
        </h2>
        
        <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed font-medium">
          Er lijkt een kortsluiting te zijn ontstaan. De pagina die u zoekt is buiten bereik, verplaatst of bestaat niet meer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/" 
            className="bg-primary hover:bg-accent text-white px-10 py-4 rounded-sm font-black transition-all shadow-xl hover:-translate-y-1 tracking-widest text-xs uppercase"
          >
            Terug naar home
          </Link>
          <Link 
            href="/contact" 
            className="border border-primary/10 bg-gray-50 hover:bg-gray-100 text-primary px-10 py-4 rounded-sm font-black transition-all tracking-widest text-xs uppercase"
          >
            Meld een defect
          </Link>
        </div>
      </div>

      {/* Decoratieve grid op de achtergrond */}
      <div className="absolute inset-0 opacity-[0.015] -z-10 pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}>
      </div>
    </div>
  )
}