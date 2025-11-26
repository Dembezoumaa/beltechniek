'use client'
import { useState } from 'react'
import Link from 'next/link' // <--- Toegevoegd
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function OverOns() {
  const [activeTab, setActiveTab] = useState('over-ons')

  const tabs = [
    { id: 'over-ons', label: 'Over ons' },
    { id: 'zeven-redenen', label: 'Zeven redenen' },
    { id: 'visie-historie', label: 'Visie en Historie' },
    { id: 'organisatie', label: 'Organisatie en structuur' },
    { id: 'kwaliteit', label: 'Kwaliteit' },
  ]

  const content = {
    'over-ons': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Schoonmaak is mensenwerk. <span className="text-[#40B9FF]">Daar zijn we goed in.</span>
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Bij Dienst Expert Cleaning Services doen we niet moeilijk over schoonmaak. U wilt gewoon een schoon pand, frisse werkplekken en geen gedoe. En dat is precies wat wij regelen.
          </p>
          <p>
            Wij werken door heel Nederland voor bedrijven, horeca en evenementen, maar blijven bewust persoonlijk. Dat betekent: korte lijnen, vaste gezichten op de vloer en direct iemand aan de lijn als u belt. Geen logge procedures of kleine lettertjes, maar gewoon aanpakken.
          </p>
          
          <h3 className="text-xl font-bold text-gray-800 pt-2">Waar u op kunt rekenen</h3>
          <p>
            Schoonmaak uitbesteden is een kwestie van vertrouwen. U geeft ons immers de sleutel. Daarom staat betrouwbaarheid bij ons op één. Is uw vaste schoonmaker een keer ziek of met vakantie? Dan regelen wij direct vervanging. Uw werk moet immers gewoon doorgaan.
          </p>
          <p>
            Of u nu zoekt naar dagelijks onderhoud of een eenmalige grote beurt: wij zorgen dat uw pand er representatief bij staat.
          </p>

          <h3 className="text-xl font-bold text-gray-800 pt-2">Kennismaken?</h3>
          <p className="italic font-medium text-gray-700">
            Zoekt u een partner die meedenkt en afspraken nakomt? Wij komen graag langs om te kijken wat we voor u kunnen doen.
          </p>
        </div>
      </div>
    ),
    'zeven-redenen': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Zeven redenen om voor <span className="text-[#40B9FF]">Dienst Expert</span> te kiezen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "Persoonlijk contact",
              text: "U bent bij ons geen nummer in een Excel-sheet. Wij weten wie u bent, kennen uw pand en snappen precies wat u nodig heeft."
            },
            {
              title: "Flexibel als het moet",
              text: "Heeft u onverwacht extra schoonmaak nodig? Omdat we korte lijnen hebben, kunnen we snel schakelen. Eén belletje is vaak genoeg."
            },
            {
              title: "Vaste, getrainde gezichten",
              text: "Schoonmaken is een vak. Onze mensen zijn goed opgeleid, spreken de taal en zijn bovenal betrouwbaar. Wel zo fijn, want u geeft ons toch toegang tot uw bedrijf."
            },
            {
              title: "Wij controleren onszelf",
              text: "U hoeft ons niet te controleren, dat doen wij zelf. Met regelmatige kwaliteitschecks zorgen we dat het niveau hoog blijft, zonder dat u erom hoeft te vragen."
            },
            {
              title: "Schoon en duurzaam",
              text: "Wij werken standaard met milieuvriendelijke middelen en methoden. Dat is beter voor uw binnenklimaat én voor de planeet."
            },
            {
              title: "Duidelijke taal",
              text: "Geen kleine lettertjes of vage beloftes. Wij houden van open communicatie: u weet vooraf precies wat we doen en wanneer. Afspraak is afspraak."
            },
            {
              title: "Eerlijke prijs",
              text: "Professionele schoonmaak hoeft niet duur te zijn. Wij bieden uitstekende kwaliteit tegen een eerlijk, transparant tarief. Geen verrassingen achteraf."
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#40B9FF]/10 flex items-center justify-center text-[#40B9FF] font-bold text-lg group-hover:bg-[#40B9FF] group-hover:text-white transition-colors duration-300">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    'visie-historie': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Visie en Historie</h2>
        
        <div className="space-y-10">
          <div>
            <h3 className="font-bold text-gray-800 text-2xl mb-1">Onze visie</h3>
            <p className="text-[#40B9FF] font-semibold text-lg mb-4">Meer dan alleen schoonmaken</p>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Wij geloven dat een schone werkplek rust geeft. Het draagt bij aan de sfeer, de gezondheid en het werkplezier van uw mensen. Daarom zien wij onszelf niet als 'de schoonmakers die ’s avonds even langskomen', maar als een betrokken partner die u werk uit handen neemt.
              </p>
              <p>
                Ons doel is simpel: wij zorgen dat alles op facilitair gebied geregeld is, zodat u zich daar nooit druk over hoeft te maken. Dat doen we met oog voor de toekomst: we gebruiken duurzame middelen, werken efficiënt en investeren in mensen die hun vak verstaan.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 md:border-none md:pt-0">
            <h3 className="font-bold text-gray-800 text-2xl mb-1">Onze historie</h3>
            <p className="text-[#40B9FF] font-semibold text-lg mb-4">Groot geworden door klein te blijven</p>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dienst Expert is ooit begonnen met een duidelijk idee: schoonmaak moet beter, persoonlijker en betrouwbaarder kunnen. Geen gedoe, gewoon afspraken nakomen. Die mentaliteit sloeg aan.
              </p>
              <p>
                Wat startte als een klein bedrijf met een handjevol klanten, is uitgegroeid tot een landelijke organisatie. Daar zijn we trots op, maar we zijn onze afkomst niet vergeten. Ondanks onze groei hanteren we nog steeds dezelfde waarden als in het begin: korte lijnen, direct contact en een no-nonsense aanpak.
              </p>
              <p>
                Vandaag de dag staat er een sterk team van vakmensen klaar. We combineren de slagkracht van een groot bedrijf met de persoonlijke aandacht van een lokale ondernemer.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    'organisatie': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Hoe wij werken</h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
          <p>
            Bij Dienst Expert houden we het graag overzichtelijk. Geen logge lagen of managers die u nooit spreekt, maar korte lijnen. Heeft u een vraag of verzoek? Dan krijgt u direct de juiste persoon te spreken. Zo kunnen we snel schakelen zonder onnodig gedoe.
          </p>
          <p>
            Ons team bestaat uit drie pijlers die nauw samenwerken voor het beste resultaat:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, type: "Management", title: "Uw vaste aanspreekpunt", text: "U krijgt bij ons een vaste contactpersoon. Die regelt de planning, stuurt het team aan en zorgt dat de juiste middelen aanwezig zijn." },
            { id: 2, type: "Schoonmaak", title: "Vakmensen op de vloer", text: "Onze schoonmakers zijn het visitekaartje van Dienst Expert. Ze zijn vakkundig, betrouwbaar en werken netjes." },
            { id: 3, type: "Controle", title: "Kwaliteit bewaken", text: "Wij wachten niet tot u belt met een opmerking; wij controleren ons werk zelf. Met regelmatige checks zorgen we dat de kwaliteit hoog blijft." }
          ].map(item => (
            <div key={item.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-[#40B9FF] font-bold text-sm tracking-wide uppercase mb-2">{item.id}. {item.type}</div>
              <h3 className="font-bold text-gray-800 text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'kwaliteit': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Hoe wij kwaliteit bewaken</h2>
        
        <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
          <p>
            Schoon is bij ons ook écht schoon. Wij doen geen loze beloftes, maar leveren gewoon goed werk. Om dat elke dag waar te maken, combineren we vakmanschap met de beste materialen en duidelijke afspraken.
          </p>
          <p className="font-medium text-gray-800">
            Zo zorgen we dat de kwaliteit altijd hoog blijft:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: 1, type: "NEN-normen", title: "Zekerheid door standaarden", text: "Wij werken volgens de officiële NEN-normen. Dat betekent zekerheid: onze werkwijze en resultaten voldoen aan de hoogste eisen." },
            { id: 2, type: "Materiaal", title: "Het beste gereedschap", text: "Goed werk vraagt om goed materiaal. Wij werken uitsluitend met professionele, milieuvriendelijke apparatuur en middelen." },
            { id: 3, type: "Controle", title: "Vinger aan de pols", text: "Vertrouwen is goed, controleren is beter. Wij voeren regelmatig kwaliteitschecks uit. Zo zien we direct of alles nog naar wens is." },
            { id: 4, type: "Opleiding", title: "Blijven leren", text: "De schoonmaakwereld staat niet stil. Wij investeren continu in training zodat onze mensen slimmer, sneller en beter werken." }
          ].map(item => (
            <div key={item.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-[#40B9FF] font-bold text-sm tracking-wide uppercase mb-2">{item.id}. {item.type}</div>
              <h3 className="font-bold text-gray-800 text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader 
        title="Over ons" 
        description="Leer Dienst Expert kennen - uw betrouwbare partner in schoonmaak"
      />

      {/* Content sectie */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Desktop: Sidebar + Content */}
          <div className="hidden md:flex gap-12 items-start">
            {/* Sidebar Navigation */}
            <aside className="w-72 flex-shrink-0 sticky top-24">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-200 text-sm font-medium border-l-4 ${
                      activeTab === tab.id
                        ? 'bg-[#40B9FF]/5 border-[#40B9FF] text-[#40B9FF] shadow-sm'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-1 min-h-[500px]">
              <div key={activeTab}>
                {content[activeTab]}
              </div>
            </div>
          </div>

          {/* Mobile: Accordion */}
          <div className="md:hidden space-y-4">
            {tabs.map((tab) => (
              <div key={tab.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                  className={`w-full text-left px-5 py-4 font-medium flex justify-between items-center transition-colors ${
                    activeTab === tab.id ? 'text-[#40B9FF] bg-gray-50' : 'text-gray-700'
                  }`}
                  aria-expanded={activeTab === tab.id}
                >
                  {tab.label}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-5 h-5 transition-transform duration-300 ${activeTab === tab.id ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeTab === tab.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 border-t border-gray-100">
                    {content[tab.id]}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#40B9FF] to-[#0EA5E9] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            
            {/* Decoratieve cirkel voor diepte */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="text-white md:max-w-xl relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Wilt u weten wat Dienst Expert voor u kan betekenen?
              </h2>
              <p className="text-white/90 text-lg">
                Vraag een vrijblijvende offerte aan en ontdek onze professionele schoonmaakdiensten.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
              {/* FIX: Link component ipv <a> tag voor interne routing */}
              <Link 
                href="/contact" 
                className="bg-white text-[#40B9FF] px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors text-center shadow-lg whitespace-nowrap transform hover:-translate-y-1 duration-200"
              >
                Vraag offerte aan →
              </Link>
              {/* Voor telefoonnummer is <a> tag wel correct */}
              <a 
                href="tel:+31201234567" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#40B9FF] transition-all text-center whitespace-nowrap"
              >
                📞 Bel direct
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}