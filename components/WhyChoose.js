'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation()
  
  const reasons = [
    {
      title: "24/7 Storingsdienst",
      text: "Stilstand kost geld. Onze specialisten staan dag en nacht klaar om acute technische problemen direct op te lossen.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "VCA & NEN Gecertificeerd",
      text: "Wij werken strikt volgens de hoogste veiligheidsnormen. Kwaliteit en veiligheid zijn bij ons wettelijk en technisch geborgd.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Landelijke Dekking",
      text: "Met onze mobiele technische dienst opereren wij door heel Nederland, waardoor we altijd snel op locatie kunnen zijn.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Industriële Expertise",
      text: "Ruime ervaring in complexe omgevingen, van paneelbouw en machine-revisie tot uitgebreide meet- en regeltechniek.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Turn-key Oplossingen",
      text: "Wij verzorgen het gehele traject: van technisch ontwerp en installatie tot preventief onderhoud en beheer.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      )
    }
  ]

  return (
    <section 
      ref={ref}
      className={`relative w-full overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Desktop versie: Split Screen */}
      <div className="hidden md:flex flex-row min-h-[700px]">
        {/* Linker kant - Navy Blue achtergrond */}
        <div className="w-1/2 bg-primary flex items-center justify-end">
          <div className="w-full max-w-xl px-12 py-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 leading-tight uppercase tracking-tighter">
              Uw partner in <br /> industriële techniek
            </h2>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-5 group">
                  {/* Icoon Cirkel */}
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-sm bg-accent flex items-center justify-center group-hover:bg-white group-hover:text-primary text-white transition-all duration-300 shadow-lg">
                    {reason.icon}
                  </div>
                  
                  {/* Tekst Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">
                      {reason.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-md">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rechter kant - Foto */}
        <div className="w-1/2 relative min-h-full">
          <img 
            src="/why-choose.jpg" 
            alt="Industriële technische installatie Beltechniek" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Mobiel versie */}
      <div className="md:hidden relative min-h-[650px]">
        <img 
          src="/why-choose.jpg" 
          alt="Technische expertise Beltechniek" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-primary/95" />

        <div className="relative z-10 px-6 py-12 flex flex-col justify-center h-full">
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight uppercase tracking-tighter">
            Waarom kiezen voor <br /> Beltechniek B.V.?
          </h2>
          
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                   <div className="w-10 h-10 rounded-sm bg-accent flex items-center justify-center text-white shadow-md">
                      {reason.icon}
                   </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-snug">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose