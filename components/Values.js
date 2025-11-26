'use client'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function Values() {
  const [ref, isVisible] = useScrollAnimation()
  
  const values = [
    {
      // Icoon: Team / Mensen
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      title: "Onze mensen",
      description: "Onze medewerkers zijn het hart van ons bedrijf. Wij investeren in hun ontwikkeling en werkgeluk. Wij geloven namelijk dat een gewaardeerde medewerker zorgt voor de beste kwaliteit bij onze klanten."
    },
    {
      // Icoon: Sparkles / WOW-factor
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
        </svg>
      ),
      title: "WOW-momenten",
      description: "Goed is voor ons niet goed genoeg. Wij willen u verrassen. Door proactief mee te denken en net iets meer te doen dan u vraagt, creëren we die 'wow-ervaring'. Een brandschoon pand waar u blij van wordt, elke dag weer."
    },
   {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: "Succesvol samenwerken",
      description: "Samen bereiken we meer. Binnen onze teams werken we nauw samen om de kwaliteit hoog te houden. Maar we werken vooral sámen met u. Wij gaan voor partnerschap, vertrouwen en een relatie die jarenlang standhoudt."
    }
  ]

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Titel links uitgelijnd boven eerste kaart */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#40B9FF]">
            Waar wij voor staan
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-100"
            >
              {/* Blauwe cirkel met wit icoon - gecentreerd */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#40B9FF] rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition duration-300 shadow-md">
                  {/* Icoon iets teruggedraaid zodat het recht staat */}
                  <div className="transform -rotate-3">
                    {value.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
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