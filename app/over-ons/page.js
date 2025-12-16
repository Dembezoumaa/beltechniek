'use client'
import { useState } from 'react'
import Link from 'next/link'
// AANGEPAST: We gaan één mapje omhoog (..) om de PageHeader in de app map te vinden
import PageHeader from '../PageHeader' 
import Footer from '@/components/Footer'

export default function OverOns() {
  const [activeTab, setActiveTab] = useState('over-ons')

  const tabs = [
    { id: 'over-ons', label: 'Over ons' },
    { id: 'vakmanschap', label: 'Vakmanschap' },
    { id: 'werkwijze', label: 'Werkwijze' },
    { id: 'materialen', label: 'Materialen' },
    { id: 'waarom-liva', label: 'Waarom Liva' },
  ]

  const content = {
    'over-ons': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold font-special text-primary mb-6">
          Maatwerk zeildoekwerk. <span className="text-accent">Daar zijn we goed in.</span>
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Bij Zeilmakerij Liva doen we niet moeilijk over bootkappen en stoffering. U wilt gewoon dat het perfect past, lang meegaat en er goed uitziet. En dat is precies wat wij maken.
          </p>
          <p>
            Wij werken vanuit ons atelier in Loosdrecht voor booteigenaren in het Gooi en daarbuiten, maar blijven bewust persoonlijk. Dat betekent: korte lijnen, direct contact en elk project met dezelfde aandacht. Geen massaproductie of standaardmaten, maar gewoon vakwerk.
          </p>
          
          <h3 className="text-xl font-bold font-special text-primary pt-4">Waar u op kunt rekenen</h3>
          <p>
            Zeildoekwerk uitbesteden is een kwestie van vertrouwen. U geeft ons toegang tot uw boot en verwacht kwaliteit. Daarom staat vakmanschap bij ons op één. We meten zelf in, verwerken alles in eigen atelier en zorgen dat het eindresultaat precies is zoals afgesproken.
          </p>
          <p>
            Of u nu zoekt naar een nieuwe buiskap, complete kussenstoffering of een reparatie: wij zorgen dat uw boot er representatief bij ligt.
          </p>

          <h3 className="text-xl font-bold font-special text-primary pt-4">Kennismaken?</h3>
          <p className="italic font-medium text-gray-700">
            Zoekt u een zeilmakerij die meedenkt en afspraken nakomt? Wij komen graag langs om uw boot te bekijken en vrijblijvend advies te geven.
          </p>
        </div>
      </div>
    ),
    'vakmanschap': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold font-special text-primary mb-8">
          Waarom kiezen voor <span className="text-accent">Zeilmakerij Liva?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "Lokaal in Loosdrecht",
              text: "U bent bij ons geen nummer in een systeem. Wij kennen de lokale wateren, begrijpen wat boten hier nodig hebben en zijn snel ter plaatse."
            },
            {
              title: "Alles op maat",
              text: "Geen enkele boot is hetzelfde. Daarom werken wij uitsluitend op maat. We meten handmatig in en vervaardigen alles precies passend bij uw vaartuig."
            },
            {
              title: "Eigen atelier",
              text: "Alles wordt in ons eigen atelier gemaakt. Geen tussenpersonen, geen uitbesteding. Zo houden we volledige controle over de kwaliteit."
            },
            {
              title: "Premium materialen",
              text: "Wij werken met topmerken zoals Sunbrella en Markilux. Doeken die kleurvast blijven, waterdicht zijn en jarenlang meegaan zonder te verslijten."
            },
            {
              title: "Complete service",
              text: "Van vrijblijvend advies tot inmeten, productie en montage. U hoeft nergens naar om te kijken, wij regelen alles van A tot Z."
            },
            {
              title: "Eerlijke communicatie",
              text: "Geen vage beloftes of onduidelijke prijzen. Wij vertellen vooraf precies wat we gaan maken, wanneer het klaar is en wat het kost. Afspraak is afspraak."
            },
            {
              title: "Reparatie mogelijk",
              text: "Kapot doek of versleten rits? We kijken altijd eerst of reparatie mogelijk is voordat we adviseren om iets nieuws te laten maken. Eerlijk advies staat voorop."
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-special font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-primary/10">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold font-special text-primary mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    'werkwijze': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold font-special text-primary mb-6">Hoe wij werken</h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
          <p>
            Bij Zeilmakerij Liva houden we het graag overzichtelijk. Geen lange processen of onduidelijke stappen, maar een heldere werkwijze van begin tot eind. Zo weet u precies wat u kunt verwachten.
          </p>
          <p className="font-medium text-primary">
            Ons proces bestaat uit vier stappen die zorgen voor het beste resultaat:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {[
            { id: 1, title: "Vrijblijvend gesprek", text: "U vertelt wat u nodig heeft. Wij luisteren, adviseren over materialen en mogelijkheden, en bespreken de planning." },
            { id: 2, title: "Inmeten op locatie", text: "Wij komen naar uw boot in Loosdrecht of omgeving. Handmatig inmeten zorgt voor millimeterprecisie en een perfecte pasvorm." },
            { id: 3, title: "Productie in eigen atelier", text: "Alles wordt door ons team vervaardigd in Loosdrecht. Geen tussenpersonen, volledige controle over materiaal en afwerking." },
            { id: 4, title: "Montage & controle", text: "Wij plaatsen het eindproduct en zorgen dat alles perfect zit. Geen losse eindjes, geen compromissen. Pas tevreden als u dat bent." }
          ].map(item => (
            <div key={item.id} className="bg-white p-6 rounded-sm border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-accent font-bold text-xs tracking-wide uppercase mb-2">Stap {item.id}</div>
              <h3 className="font-bold font-special text-primary text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'materialen': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold font-special text-primary mb-6">Materialen die het verschil maken</h2>
        
        <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
          <p>
            Een goede pasvorm is één ding, maar zonder kwaliteitsmaterialen heeft u er weinig aan. Daarom werken wij uitsluitend met premium doeksoorten die bewezen hebben dat ze jarenlang meegaan - ook onder Nederlandse weersomstandigheden.
          </p>
          
          <h3 className="text-xl font-bold font-special text-primary pt-4 mb-2">Wat wij gebruiken</h3>
          <p>
            Wij selecteren onze materialen op drie criteria: duurzaamheid, esthetiek en functionaliteit. Het resultaat? Zeildoekwerk dat niet alleen beschermt, maar er ook jaren mooi uitziet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Sunbrella & Markilux", text: "Topmerken die wereldwijd bekend staan om hun kwaliteit. Kleurvast, waterafstotend en bestand tegen UV-straling zonder te verkleuren." },
            { title: "Waterdicht en schimmelwerend", text: "Onze doeken zijn speciaal behandeld om vocht te weren en schimmelvorming te voorkomen. Ideaal voor het Nederlandse klimaat." },
            { title: "Slijtvast en sterk", text: "Zeildoek wordt intensief belast door wind, regen en zon. De materialen die wij gebruiken zijn daar tegen bestand en behouden hun vorm." },
            { title: "Onderhoudsvriendelijk", text: "Kwaliteitsdoek vraagt weinig onderhoud. Een spoeling met water is vaak genoeg om het er weer fris uit te laten zien." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-sm border border-gray-100 hover:border-accent transition-colors duration-300">
              <h3 className="font-bold font-special text-primary text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'waarom-liva': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-bold font-special text-primary mb-6">Wat ons onderscheidt</h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Er zijn meerdere zeilmakerijen in de regio. Waarom dan voor Liva? Omdat wij geloven dat vakmanschap draait om oog voor detail, eerlijke communicatie en een eindresultaat waar u echt trots op bent.
          </p>
          
          <h3 className="text-xl font-bold font-special text-primary pt-2">Onze aanpak</h3>
          <p>
            Wij zijn geen productiebedrijf dat zeildoekwerk van de lopende band haalt. Elk project krijgt de aandacht die het verdient. We nemen de tijd om het goed te doen, niet om het snel te doen.
          </p>

          <div className="bg-primary/5 p-6 rounded-sm border-l-4 border-primary my-6">
            <p className="italic text-gray-700">
              "Wat begon als passie voor ambachtelijk werk, is uitgegroeid tot een gevestigde naam in Loosdrecht en omgeving. Daar zijn we trots op, maar we zijn niet vergeten waar we vandaan komen."
            </p>
          </div>

          <p>
             Ondanks onze ervaring hanteren we nog steeds dezelfde waarden als in het begin: persoonlijk contact, vakmanschap en eerlijk advies.
          </p>
          <p>
            Vandaag de dag combineren we traditionele technieken met moderne materialen. Dat geeft u het beste van twee werelden: tijdloos vakmanschap met de voordelen van hedendaagse innovatie.
          </p>
        </div>
      </div>
    ),
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader 
        title="Over ons" 
        description="Leer Zeilmakerij Liva kennen - ambachtelijk vakmanschap sinds meer dan 20 jaar"
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
                    className={`w-full text-left px-5 py-4 rounded-sm transition-all duration-200 text-sm font-medium border-l-4 ${
                      activeTab === tab.id
                        ? 'bg-primary/5 border-primary text-primary shadow-sm font-bold'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-primary'
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
              <div key={tab.id} className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                  className={`w-full text-left px-5 py-4 font-medium flex justify-between items-center transition-colors ${
                    activeTab === tab.id ? 'text-primary bg-primary/5' : 'text-gray-700'
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
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            
            {/* Decoratieve gloed */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="text-white md:max-w-xl relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold font-special mb-4">
                Wilt u weten wat Zeilmakerij Liva voor u kan maken?
              </h2>
              <p className="text-white/90 text-lg font-light">
                Vraag een vrijblijvende offerte aan of plan een afspraak voor inmeten. We denken graag met u mee.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
              <Link 
                href="/contact" 
                className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-all text-center shadow-lg whitespace-nowrap transform hover:-translate-y-1 duration-200"
              >
                Offerte aanvragen →
              </Link>
              <a 
                href="tel:+31600000000" // Pas aan naar je eigen nummer
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all text-center whitespace-nowrap"
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