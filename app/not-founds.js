import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative bg-white overflow-hidden">
      
      {/* Groot 404 getal op de achtergrond (Watermerk) */}
      <h1 className="text-[12rem] md:text-[20rem] font-special font-bold text-primary/5 absolute z-0 select-none leading-none">
        404
      </h1>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold font-special text-primary mb-4">
          Koers gewijzigd?
        </h2>
        
        <p className="text-gray-600 text-lg max-w-md mb-10 leading-relaxed font-light">
          Het lijkt erop dat u bent afgedreven. De pagina die u zoekt bestaat niet (meer) of is verplaatst.
        </p>

        <Link 
          href="/" 
          className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 tracking-widest text-sm"
        >
          TERUG NAAR DE HAVEN
        </Link>
      </div>
    </div>
  )
}