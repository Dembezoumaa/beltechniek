'use client'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function WerkenBij() {

  const benefits = [
    {
      title: "Flexibel",
      text: "Part-time of full-time, afgestemd op jou.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Goed salaris",
      text: "Marktconform salaris volgens cao-normen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      )
    },
    {
      title: "Fijne sfeer",
      text: "Een hecht team en goede begeleiding.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      )
    },
    {
      title: "Groei mee",
      text: "Training en opleidingen beschikbaar.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      )
    },
    {
      title: "Reiskosten",
      text: "Nette vergoeding voor je kilometers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      )
    },
    {
      title: "Vaste locaties",
      text: "Geen constante wisselingen van werkplek.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    }
  ]

  const requirements = [
    { title: "Betrouwbaar", text: "Je bent punctueel, houdt je aan afspraken en werkt zelfstandig zonder constant toezicht." },
    { title: "Oog voor detail", text: "Je hebt oog voor detail en streeft naar een perfect schoon resultaat bij elke klus." },
    { title: "Klantgericht", text: "Je bent vriendelijk, representatief en handelt altijd professioneel naar onze klanten." },
    { title: "Fysiek in staat", text: "Schoonmaakwerk kan fysiek veeleisend zijn. Je bent fit en gezond genoeg voor dit werk." },
    { title: "Taalbeheersing", text: "Basiskennis van Nederlands of Engels is vereist voor communicatie met collega's en klanten." },
    { title: "Motivatie", text: "Heb je ervaring? Mooi! Maar ook zonder ervaring ben je van harte welkom als je gemotiveerd bent." },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Werken bij Dienst Expert" 
        description="Word onderdeel van ons team"
      />

      {/* Intro */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            {/* HIERONDER: br md:hidden zorgt voor de enter op mobiel */}
            Maak het verschil bij <br className="md:hidden" /> 
            <span className="text-[#40B9FF]">Dienst Expert</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Wij zoeken gemotiveerde medewerkers die met ons willen groeien en bijdragen aan een professionele werkomgeving voor onze klanten.
          </p>
        </div>
      </section>

      {/* Wat wij bieden - Compact (2 kolommen op mobiel) */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
            Wat wij jou bieden
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-[#40B9FF]/10 text-[#40B9FF] rounded-lg md:rounded-2xl flex items-center justify-center mb-3 md:mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-sm md:text-xl text-gray-800 mb-1 md:mb-3">{benefit.title}</h3>
                <p className="text-xs md:text-base text-gray-600 leading-snug">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat wij zoeken - Originele lengte teksten */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
            Wat wij zoeken
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {requirements.map((req, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#40B9FF] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base md:text-lg mb-1">{req.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-snug">
                    {req.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Sollicitatie Card */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
              Open sollicitatie
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Geen vacatures? Wij zijn altijd op zoek naar talent. Stuur een open sollicitatie!
            </p>
            
            <div className="inline-block bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 w-full max-w-lg">
              <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">
                Stuur je CV en motivatie naar:
              </p>
              <a href="mailto:info@dienstexpert.nl" className="text-[#40B9FF] font-bold text-lg md:text-xl hover:text-[#3AA8E8] transition block mb-2 md:mb-4">
                info@dienstexpert.nl
              </a>
              <p className="text-xs md:text-sm text-gray-500 italic">
                Of bel: <a href="tel:+31640127061" className="hover:text-[#40B9FF]">+31 6 40 12 70 61</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#40B9FF] to-[#0EA5E9] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
             {/* Decoratie */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <h2 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-6 relative z-10">
              Klaar om te starten?
            </h2>
            <a 
              href="mailto:info@dienstexpert.nl" 
              className="inline-block bg-white text-[#40B9FF] px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg relative z-10"
            >
              Solliciteer direct →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}