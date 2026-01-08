'use client'
import Link from 'next/link'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Diensten() {
  const services = [
    {
      id: 'elektrotechniek',
      title: 'Industriële Elektrotechniek',
      subtitle: 'Krachtstroom & Infrastructuur',
      description: [
        "Beltechniek ontwerpt en realiseert complete elektrotechnische installaties voor de zware industrie en logistieke sectoren. Wij zorgen voor een robuuste infrastructuur die bestand is tegen intensief gebruik.",
        "Van hoofdverdeelinrichtingen tot de uiteindelijke aansluiting van uw machinepark: wij garanderen een veilige en efficiënte energieverdeling conform de NEN 1010 normen."
      ],
      points: [
        'Ontwerp & engineering van installaties',
        'Hoofd- en onderverdeelinrichtingen',
        'Kabelberekeningen en tracébeheer',
        'Industriële verlichtingsplannen',
        'Aansluiten van complexe machinelijnen'
      ]
    },
    {
      id: 'storingsdienst',
      title: '24/7 Storingsdienst',
      subtitle: 'Minimale stilstand, maximale continuïteit',
      description: [
        "In de industrie betekent stilstand direct omzetverlies. Onze storingsdienst is daarom 24 uur per dag, 7 dagen per week bereikbaar voor acute technische problemen door heel Nederland.",
        "Onze servicebussen zijn uitgerust met hoogwaardige meetapparatuur en gangbare componenten, waardoor wij de meeste storingen direct bij het eerste bezoek kunnen verhelpen."
      ],
      points: [
        'Landelijke dekking met snelle responstijden',
        'Gespecialiseerd in PLC- en besturingsstoringen',
        'Elektromechanische reparaties',
        'Directe vervanging van defecte componenten',
        'Storingsrapportage en preventief advies'
      ]
    },
    {
      id: 'paneelbouw',
      title: 'Paneelbouw & Modificatie',
      subtitle: 'Besturingen op maat geproduceerd',
      description: [
        "In onze eigen werkplaats assembleren wij hoogwaardige besturingskasten en vermogenspanelen. Elk paneel wordt exact volgens uw specificaties en de geldende normen (NEN-EN-IEC 61439) gebouwd.",
        "Heeft u een bestaande installatie die niet meer voldoet? Wij voeren ook modificaties en retrofits uit op locatie om uw systeem weer up-to-date te brengen."
      ],
      points: [
        'EPLAN engineering en tekenwerk',
        'Assemblage van besturings- en verdeelkasten',
        'FAT (Factory Acceptance Test) protocollen',
        'Modificatie van bestaande kasten op locatie',
        'Gebruik van A-merk componenten (Siemens, Schneider, ABB)'
      ]
    },
    {
      id: 'automatisering',
      title: 'Industriële Automatisering',
      subtitle: 'Slimme procesoptimalisatie',
      description: [
        "Wij helpen u om uw productieprocessen efficiënter, veiliger en transparanter te maken door middel van moderne automatiseringstechnieken.",
        "Onze engineers integreren PLC-systemen, HMI-visualisaties en sensoren om uw installaties optimaal te laten communiceren en presteren."
      ],
      points: [
        'PLC-programmering en software-aanpassingen',
        'HMI en SCADA visualisaties',
        'Integratie van sensoriek en actuatoren',
        'Remote support en monitoring',
        'Data-koppelingen voor procesbeheer'
      ]
    },
    {
      id: 'onderhoud',
      title: 'Inspectie & Onderhoud',
      subtitle: 'Veiligheid en betrouwbaarheid gewaarborgd',
      description: [
        "Preventief onderhoud is de sleutel tot een lange levensduur van uw installatie. Wij voeren periodieke controles uit om zwakke plekken op te sporen voordat ze tot uitval leiden.",
        "Daarnaast verzorgen wij de wettelijk verplichte inspecties (zoals NEN 3140) om aan de eisen van verzekeraars en Arbowetgeving te voldoen."
      ],
      points: [
        'NEN 3140 / NEN 1010 inspecties',
        'Thermografisch onderzoek (warmtebeeld)',
        'Periodiek preventief onderhoud',
        'Nulmetingen en risico-inventarisaties',
        'Gedetailleerde keuringsrapportages'
      ]
    },
    {
      id: 'projectmanagement',
      title: 'Projectmanagement',
      subtitle: 'Van ontwerp tot inbedrijfstelling',
      description: [
        "Bij grote technische projecten nemen wij de volledige regie in handen. Wij ontzorgen u van de eerste calculatie en planning tot de uiteindelijke oplevering.",
        "Met één aanspreekpunt voor het gehele traject garanderen wij een soepele uitvoering binnen de gestelde tijd en budget."
      ],
      points: [
        'Turn-key projectoplevering',
        'Technisch advies en calculatie',
        'Planning en logistieke coördinatie',
        'Inbedrijfstelling en nazorg',
        'Personeelstraining op locatie'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader 
        title="Industriële Diensten" 
        description="Hoogwaardige elektrotechnische oplossingen voor maximale bedrijfscontinuïteit."
      />

      {/* Services Intro Text */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-1.5 bg-accent mx-auto mb-10"></div>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 uppercase tracking-tighter leading-none">
            VAKMANSCHAP IN <span className="text-accent">ELKE VERBINDING</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium italic">
            Beltechniek B.V. is gespecialiseerd in het ontwerpen, installeren en onderhouden van complexe industriële systemen. Wij spreken de taal van de industrie en begrijpen dat elke seconde telt.
          </p>
          <p className="font-black text-primary uppercase tracking-[0.3em] text-xs">
            Ontdek onze specialisaties
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {services.map((service, index) => {
            const number = (index + 1).toString().padStart(2, '0');
            
            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-20 items-center bg-gray-50/30 rounded-sm p-8 md:p-16 border border-gray-100 hover:border-accent/20 transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Number Section */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                  <div className="relative">
                     <span className="text-[10rem] md:text-[14rem] leading-none font-black text-primary/[0.03] group-hover:text-accent/[0.07] transition-colors duration-500 select-none">
                       {number}
                     </span>
                     <div className="absolute top-1/2 left-1/2 md:left-14 transform -translate-x-1/2 -translate-y-1/2 w-16 h-2 bg-accent/20 group-hover:bg-accent transition-all duration-500"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl md:text-5xl font-black text-primary mb-4 uppercase tracking-tighter group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary/40 font-black text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                    <span className="w-8 h-px bg-primary/20"></span>
                    {service.subtitle}
                  </p>
                  
                  <div className="text-gray-600 leading-relaxed space-y-4 mb-10 text-lg">
                    {service.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <h4 className="font-black text-primary mb-6 text-xs uppercase tracking-widest border-b border-gray-100 pb-4">
                      Expertise & Leveringsomvang:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.points.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                          <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decoratieve grid op achtergrond */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', size: '40px 40px' }}></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            EEN TECHNISCHE <br /> <span className="text-accent">UITDAGING?</span>
          </h2>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto font-light">
            Of het nu gaat om een acute storing of een langdurig project: ons team van specialisten staat klaar om uw continuïteit te waarborgen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-accent text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl text-sm"
            >
              Start project aanvraag
            </Link>
            <a 
              href="tel:+31614987347" 
              className="border-2 border-white/20 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white/10 transition-all text-sm"
            >
              📞 Bel +31 6 14987347
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}