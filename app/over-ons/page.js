'use client'
import { useState } from 'react'
import Link from 'next/link'
import PageHeader from '../PageHeader' 
import Footer from '@/components/Footer'

export default function OverOns() {
  const [activeTab, setActiveTab] = useState('over-ons')

  const tabs = [
    { id: 'over-ons', label: 'Over Beltechniek' },
    { id: 'expertise', label: 'Onze Expertise' },
    { id: 'werkwijze', label: 'Werkwijze' },
    { id: 'kwaliteit', label: 'Kwaliteit & Normen' },
    { id: 'waarom-beltechniek', label: 'Waarom Beltechniek' },
  ]

  const content = {
    'over-ons': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 uppercase tracking-tighter">
          Technische continuïteit. <span className="text-accent">Onze missie.</span>
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Beltechniek B.V. is de strategische partner voor de industrie als het gaat om elektrotechniek en procesoptimalisatie. In een wereld waar stilstand direct gepaard gaat met hoge kosten, zorgen wij voor installaties die altijd blijven draaien.
          </p>
          <p>
            Vanuit onze passie voor techniek ondersteunen wij industriële partners door heel Nederland. We zijn niet alleen een uitvoerende partij, maar een verlengstuk van uw technische dienst. Korte lijnen, diepgaande kennis en een 24/7 mentaliteit vormen de basis van ons bedrijf.
          </p>
          
          <h3 className="text-xl font-bold text-primary pt-4 uppercase tracking-tight">Landelijke dekking, lokale betrokkenheid</h3>
          <p>
            Hoewel wij projecten door heel Nederland uitvoeren, behouden we de snelheid en betrokkenheid van een lokale partner. Onze monteurs en engineers begrijpen de urgentie van industriële processen en staan paraat wanneer elke minuut telt.
          </p>

          <h3 className="text-xl font-bold text-primary pt-4 uppercase tracking-tight">Direct schakelen?</h3>
          <p className="italic font-medium text-gray-700 border-l-4 border-accent pl-4">
            Zoekt u een partner die niet alleen installeert, maar ook proactief meedenkt over de betrouwbaarheid van uw machinepark? Beltechniek staat voor u klaar.
          </p>
        </div>
      </div>
    ),
    'expertise': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 uppercase tracking-tighter">
          Gespecialiseerd in <span className="text-accent">Industriële Oplossingen</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "Elektrotechniek",
              text: "Ontwerp en realisatie van complete industriële laagspanningsinstallaties, verdeelinrichtingen en kabelberekeningen."
            },
            {
              title: "24/7 Storingsdienst",
              text: "Onze storingsdienst is dag en nacht bereikbaar voor spoedeisende reparaties aan uw productieomgeving."
            },
            {
              title: "Paneelbouw",
              text: "In eigen beheer bouwen en modificeren wij besturingskasten en vermogenspanelen conform de geldende NEN-normen."
            },
            {
              title: "Onderhoud & Inspectie",
              text: "Periodiek onderhoud en NEN 3140 inspecties om de veiligheid en continuïteit van uw installaties te waarborgen."
            },
            {
              title: "Industriële Automatisering",
              text: "Optimalisatie van processen door slimme aansturing en integratie van moderne componenten."
            },
            {
              title: "Projectmanagement",
              text: "Van de eerste engineering tot de uiteindelijke inbedrijfstelling: wij regelen het volledige technische traject."
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center text-primary font-black text-lg group-hover:bg-accent group-hover:text-white transition-all duration-300 border border-primary/10">
                {index + 1}
              </div>
              <div>
                <h3 className="font-black text-primary mb-2 text-lg uppercase tracking-tight">{item.title}</h3>
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
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 uppercase tracking-tighter">Onze Werkwijze</h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
          <p>
            Een industrieel project vraagt om precisie en een strakke planning. Bij Beltechniek hanteren we een transparant proces waarbij communicatie centraal staat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {[
            { id: 1, title: "Analyse & Advies", text: "We inventariseren de huidige situatie en uw specifieke wensen. We adviseren op basis van efficiëntie, veiligheid en toekomstbestendigheid." },
            { id: 2, title: "Engineering op maat", text: "Onze engineers vertalen de vraag naar een technisch ontwerp, inclusief de benodigde schema's en componentselecties." },
            { id: 3, title: "Realisatie & Montage", text: "Gecertificeerde monteurs voeren de werkzaamheden uit. We werken volgens de hoogste veiligheidsnormen en met minimale verstoring van uw proces." },
            { id: 4, title: "Service & Support", text: "Na oplevering blijven we betrokken. Met periodiek onderhoud en onze 24/7 storingsdienst garanderen we de lange termijn continuïteit." }
          ].map(item => (
            <div key={item.id} className="bg-white p-6 rounded-sm border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-accent font-black text-xs tracking-widest uppercase mb-2">Fase {item.id}</div>
              <h3 className="font-black text-primary text-xl mb-2 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'kwaliteit': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 uppercase tracking-tighter">Kwaliteit & Normen</h2>
        
        <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
          <p>
            Binnen de industriële sector is veiligheid geen optie, maar een vereiste. Beltechniek werkt strikt volgens de geldende wet- en regelgeving om de veiligheid van mens en machine te garanderen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "NEN 1010 & NEN 3140", text: "Onze installaties voldoen aan de strengste normen voor veiligheid bij laagspanningsinstallaties en het veilig werken aan elektrotechnische objecten." },
            { title: "VCA Gecertificeerd", text: "Veiligheid, Gezondheid en Milieu staan voorop. Onze monteurs zijn VCA-gecertificeerd en werken volgens strikte veiligheidsprotocollen." },
            { title: "Hoogwaardige Componenten", text: "Wij maken uitsluitend gebruik van A-merken zoals Siemens, Schneider Electric en ABB voor maximale betrouwbaarheid." },
            { title: "Gedetailleerde Documentatie", text: "Bij elk project leveren wij revisie-bescheiden en keuringsrapporten, zodat uw technische administratie altijd op orde is." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-sm border border-gray-100 hover:border-accent transition-colors duration-300">
              <h3 className="font-black text-primary text-lg mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'waarom-beltechniek': (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 uppercase tracking-tighter">Wat ons onderscheidt</h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            In een markt vol aanbieders kiest u voor Beltechniek vanwege onze diepgaande specialisatie in de industriële sector. Wij spreken de taal van de fabriek en begrijpen de belangen van de productiechef.
          </p>
          
          <h3 className="text-xl font-bold text-primary pt-2 uppercase tracking-tight">Onze visie</h3>
          <p>
            Wij geloven dat techniek de motor is van de economie. Door deze motor optimaal te onderhouden en te innoveren, dragen wij bij aan de groei van onze partners.
          </p>

          <div className="bg-primary p-8 rounded-sm text-white my-6 shadow-xl">
            <p className="italic text-white/90 text-lg leading-relaxed">
              "Onze kracht ligt in het combineren van jarenlange ervaring met de nieuwste technologische ontwikkelingen. Wij lossen niet alleen problemen op, we voorkomen ze."
            </p>
          </div>

          <p>
            Of het nu gaat om een kleine modificatie aan een besturingskast of een compleet nieuwbouwproject: de focus op kwaliteit blijft ongewijzigd.
          </p>
        </div>
      </div>
    ),
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader 
        title="Over Beltechniek" 
        description="Uw partner in industriële elektrotechniek en technische continuïteit door heel Nederland."
      />

      {/* Content sectie */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Desktop: Sidebar + Content */}
          <div className="hidden md:flex gap-16 items-start">
            {/* Sidebar Navigation */}
            <aside className="w-80 flex-shrink-0 sticky top-32">
              <nav className="flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-5 transition-all duration-300 text-xs font-black uppercase tracking-[0.2em] border-l-2 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white border-accent shadow-lg translate-x-2'
                        : 'border-gray-100 text-gray-400 hover:border-accent hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-1 min-h-[600px]">
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
                  className={`w-full text-left px-5 py-5 font-black uppercase tracking-widest text-xs flex justify-between items-center transition-colors ${
                    activeTab === tab.id ? 'text-white bg-primary' : 'text-gray-700'
                  }`}
                  aria-expanded={activeTab === tab.id}
                >
                  {tab.label}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={3} 
                    stroke="currentColor" 
                    className={`w-4 h-4 transition-transform duration-300 ${activeTab === tab.id ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeTab === tab.id ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 border-t border-gray-100">
                    {content[tab.id]}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
            
            <div className="text-white md:max-w-2xl relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
                Direct ondersteuning <br className="hidden md:block" />
                <span className="text-accent">nodig op locatie?</span>
              </h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed">
                Onze storingsdienst staat 24/7 paraat voor industriële spoedgevallen. Voor nieuwe projecten maken we graag een afspraak voor een technische opname.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
              <Link 
                href="/contact" 
                className="bg-accent text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all text-center text-sm shadow-xl"
              >
                Service Aanvraag
              </Link>
              <a 
                href="tel:+31614987347"
                className="border border-white/20 bg-white/5 text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center text-sm"
              >
                📞 Direct bellen
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}