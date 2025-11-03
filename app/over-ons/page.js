'use client'
import { useState } from 'react'
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
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Over ons</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Dienst Expert Cleaning Services is een professioneel schoonmaakbedrijf dat zich richt op persoonlijke dienstverlening en kwaliteit. Met jarenlange ervaring in de schoonmaakbranche bedienen wij bedrijven, horecagelegenheden en evenementen door heel Nederland. Onze filosofie is simpel: betrouwbaarheid, flexibiliteit en continuïteit staan bij ons centraal.
          </p>
          <p>
            Wij geloven in langdurige relaties met onze opdrachtgevers. Door uw wensen en eisen te vertalen naar een perfect afgestemd werkprogramma, zorgen we ervoor dat uw pand er altijd representatief uitziet. Of het nu gaat om dagelijks onderhoud, periodieke dieptereiniging of specialistische schoonmaakdiensten - Dienst Expert staat voor u klaar.
          </p>
          <p>
            Onze regionale aanpak betekent korte lijnen en snelle actie. Geen ingewikkelde procedures, maar directe communicatie en hands-on aanpak. Dit maakt ons flexibel en in staat om snel in te spelen op uw specifieke behoeften en wensen.
          </p>
          <p>
            Het uitbesteden van schoonmaakwerkzaamheden aan Dienst Expert biedt vele voordelen: gegarandeerde continuïteit, professioneel opgeleid personeel, vervanging bij ziekte en vakantie, en de zekerheid dat uw pand altijd in optimale staat verkeert. Zo kunt u zich volledig focussen op uw core business.
          </p>
          <p className="italic font-medium text-gray-700">
            Wilt u werken in een schone, opgeruimde en representatieve omgeving? Maak dan kennis met Dienst Expert Cleaning Services!
          </p>
        </div>
      </div>
    ),
    'zeven-redenen': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Zeven redenen om voor Dienst Expert te kiezen</h2>
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">1. Persoonlijke aandacht</h3>
            <p>Bij Dienst Expert bent u geen nummer. Wij kennen onze klanten persoonlijk en stemmen onze dienstverlening volledig af op uw specifieke wensen en behoeften.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">2. Flexibiliteit</h3>
            <p>Korte lijnen en snelle besluitvorming maken ons flexibel. Heeft u plotseling extra ondersteuning nodig? Wij schakelen snel en efficiënt.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">3. Professioneel team</h3>
            <p>Onze medewerkers zijn vakbekwaam, betrouwbaar en gedreven. Door continue training blijven zij op de hoogte van de nieuwste technieken en methoden.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">4. Kwaliteitsgarantie</h3>
            <p>Wij werken volgens vaste kwaliteitsnormen en voeren regelmatig controles uit om te garanderen dat uw pand er altijd perfect uitziet.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">5. Duurzame oplossingen</h3>
            <p>Milieuvriendelijke producten en duurzame werkmethoden zijn standaard bij Dienst Expert. Goed voor uw pand én voor het milieu.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">6. Transparante communicatie</h3>
            <p>Heldere afspraken en open communicatie zorgen ervoor dat u altijd weet waar u aan toe bent. Geen verrassingen, alleen betrouwbaarheid.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">7. Concurrerende prijzen</h3>
            <p>Professionele schoonmaak hoeft niet duur te zijn. Wij bieden uitstekende kwaliteit tegen een eerlijke en transparante prijs.</p>
          </div>
        </div>
      </div>
    ),
    'visie-historie': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Visie en Historie</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <h3 className="font-bold text-gray-800 text-xl">Onze visie</h3>
          <p>
            Dienst Expert streeft naar langdurige partnerships met onze klanten. Wij geloven dat een schone werkomgeving essentieel is voor productiviteit, welzijn en een positieve uitstraling. Onze visie is om niet alleen schoon te maken, maar om een betrouwbare partner te zijn die u volledig ontlast op het gebied van facilitaire dienstverlening.
          </p>
          <p>
            Duurzaamheid, innovatie en persoonlijke service vormen de kern van onze bedrijfsvoering. Wij investeren continu in onze medewerkers, materialen en methoden om de beste resultaten te garanderen.
          </p>
          
          <h3 className="font-bold text-gray-800 text-xl mt-6">Onze historie</h3>
          <p>
            Dienst Expert is opgericht vanuit de passie voor schoonmaak en dienstverlening. Wat begon als een klein bedrijf met een handjevol klanten, is door de jaren heen uitgegroeid tot een betrouwbare partner voor bedrijven door heel Nederland.
          </p>
          <p>
            Door onze focus op kwaliteit, betrouwbaarheid en persoonlijke aandacht hebben wij een solide reputatie opgebouwd. Onze klanten waarderen onze no-nonsense aanpak en de consistente kwaliteit die wij leveren.
          </p>
          <p>
            Vandaag de dag zijn wij trots op ons team van gedreven professionals die dagelijks het verschil maken voor onze klanten. Met een combinatie van ervaring en innovatie blijven wij groeien en onze diensten verder ontwikkelen.
          </p>
        </div>
      </div>
    ),
    'organisatie': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Organisatie en structuur</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Dienst Expert hanteert een platte organisatiestructuur met korte lijnen. Dit betekent snelle besluitvorming en directe communicatie tussen alle niveaus. Uw vragen en wensen komen direct bij de juiste persoon terecht, zonder onnodige bureaucratie.
          </p>
          <p>
            Ons team bestaat uit drie hoofdonderdelen: operationeel management, uitvoerende medewerkers en kwaliteitscontrole. Elk team heeft zijn eigen expertise en verantwoordelijkheden, maar werkt nauw samen om optimale resultaten te garanderen.
          </p>
          
          <h3 className="font-bold text-gray-800 text-lg mt-6">Operationeel management</h3>
          <p>
            Onze managers zijn uw vaste aanspreekpunt. Zij coördineren de planning, zorgen voor optimale inzet van personeel en materiaal, en staan in nauw contact met u om uw wensen te bespreken en te realiseren.
          </p>
          
          <h3 className="font-bold text-gray-800 text-lg mt-6">Uitvoerende medewerkers</h3>
          <p>
            Onze schoonmaakspecialisten zijn het gezicht van Dienst Expert. Vakbekwaam, betrouwbaar en gedreven zorgen zij dagelijks voor een perfect schoon resultaat. Door continue training blijven zij up-to-date met de nieuwste technieken.
          </p>
          
          <h3 className="font-bold text-gray-800 text-lg mt-6">Kwaliteitscontrole</h3>
          <p>
            Regelmatige controles en kwaliteitsmetingen zorgen ervoor dat wij onze hoge standaard blijven handhaven. Uw feedback is daarbij essentieel en wordt direct opgepakt om onze dienstverlening verder te verbeteren.
          </p>
        </div>
      </div>
    ),
    'kwaliteit': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Kwaliteit</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Kwaliteit staat bij Dienst Expert voorop. Wij hanteren strikte kwaliteitsnormen en werken volgens vastgestelde protocollen om consistent hoogwaardige resultaten te leveren. Onze aanpak combineert vakmanschap met moderne technieken en duurzame producten.
          </p>
          
          <h3 className="font-bold text-gray-800 text-lg mt-6">Kwaliteitsnormen</h3>
          <p>
            Wij werken volgens de branchebrede NEN-normen voor professionele schoonmaakdienstverlening. Deze normen garanderen dat onze werkprocessen, veiligheid en resultaten voldoen aan de hoogste eisen.
          </p>
          
          <h3 className="font-bold text-gray-800 text-lg mt-6">Professionele materialen</h3>
          <p>
            Wij gebruiken uitsluitend hoogwaardige schoonmaakmiddelen en professionele apparatuur. Onze producten zijn milieuvriendelijk, effectief en veilig voor mens en materiaal. Dit zorgt voor optimale resultaten zonder schadelijke bijeffecten.
          </p>
          
          <h3 className="font-bold text-gray-800 text-lg mt-6">Controle en feedback</h3>
          <p>
            Regelmatige kwaliteitscontroles en directe feedbackmomenten met onze klanten zorgen ervoor dat wij continu kunnen verbeteren. Uw tevredenheid is onze graadmeter voor succes.
          </p>
          
          <h3 className="font-bold text-gray-800 text-lg mt-6">Continue verbetering</h3>
          <p>
            Door scholing, training en innovatie blijven wij onze diensten verder ontwikkelen. Wij investeren in onze medewerkers en processen om altijd voorop te blijven lopen in de schoonmaakbranche.
          </p>
        </div>
      </div>
    ),
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header met navbar en hero */}
      <PageHeader 
        title="Over ons" 
        description="Leer Dienst Expert kennen - uw betrouwbare partner in schoonmaak"
      />

      {/* Content sectie */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Desktop: Sidebar + Content */}
          <div className="hidden md:flex gap-8">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0">
              <nav className="space-y-2 sticky top-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeTab === tab.id
                        ? 'bg-[#40B9FF] text-white font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="flex-1">
              {content[activeTab]}
            </div>
          </div>

          {/* Mobile: Accordion */}
          <div className="md:hidden space-y-3">
            {tabs.map((tab) => (
              <div key={tab.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                  className="w-full text-left px-4 py-3 bg-gray-50 font-medium text-gray-700 flex justify-between items-center"
                >
                  {tab.label}
                  <span className={`transform transition ${activeTab === tab.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeTab === tab.id && (
                  <div className="p-4 bg-white">
                    {content[tab.id]}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#40B9FF] to-[#0EA5E9] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-white md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Wilt u weten wat Dienst Expert voor u kan betekenen?
              </h2>
              <p className="text-white/90">
                Vraag een vrijblijvende offerte aan en ontdek onze professionele schoonmaakdiensten.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a 
                href="#contact" 
                className="bg-white text-[#40B9FF] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition text-center shadow-lg whitespace-nowrap"
              >
                Vraag offerte aan →
              </a>
              <a 
                href="tel:+31201234567" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition text-center whitespace-nowrap"
              >
                📞 Bel direct
              </a>
            </div>
          </div>
        </div>
      </section>
  <Footer />
    </div>
  )
}
