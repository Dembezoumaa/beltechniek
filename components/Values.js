'use client'

function Values() {
  
  const values = [
    {
      // Icoon: Wereldbol / Landelijke dekking
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Landelijke dekking",
      description: "Beltechniek B.V. opereert door heel Nederland. Of het nu gaat om een acute storing in de industrie of een grootschalig project: wij zijn snel ter plaatse met de juiste expertise en middelen."
    },
    {
      // Icoon: Schild / Veiligheid & Certificering
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Gecertificeerde kwaliteit",
      description: "Veiligheid staat bij ons voorop. Wij werken strikt volgens de geldende NEN-normen en VCA-richtlijnen. Onze opdrachtgevers vertrouwen op installaties die niet alleen werken, maar ook maximaal veilig zijn."
    },
    {
      // Icoon: Tandwiel / Technische precisie
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Maatwerk in techniek",
      description: "Elke industriële omgeving stelt eigen eisen. Wij vertalen complexe vraagstukken in de meet- & regeltechniek naar praktische, duurzame oplossingen die de continuïteit van uw processen waarborgen."
    }
  ]

  return (
    <section className="py-12 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Titel Sectie */}
        <div className="mb-8 md:mb-12 border-l-4 border-accent pl-4 inline-block bg-white/80 backdrop-blur-sm p-4 rounded-r-lg">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            Onze Kracht
          </h2>
          <p className="text-gray-500 mt-1 md:mt-2 text-xs md:text-base font-medium uppercase tracking-wider">
            Waar Beltechniek B.V. voor staat
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-sm p-6 md:p-8 shadow-lg hover:shadow-2xl transition duration-500 text-center border border-white/50 hover:border-accent group"
            >
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-500 shadow-lg border-4 border-white/50 group-hover:border-accent">
                   {value.icon}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 group-hover:text-accent transition-colors">
                {value.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values