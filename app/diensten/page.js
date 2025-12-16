'use client'
import Link from 'next/link'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Diensten() {
  const services = [
    {
      id: 'buiskappen',
      title: 'Buiskappen & Achtertenten',
      subtitle: 'Bescherming tegen weer en wind',
      description: [
        "Een buiskap is het visitekaartje van uw boot en biedt essentiële bescherming tegen wind en buiswater. Maar het moet ook mooi zijn. Een strakke lijn die de vorm van uw schip volgt, is voor ons de standaard.",
        "Wij maken buiskappen en achtertenten volledig op maat. We meten in op locatie, maken een mal en zorgen voor een perfecte pasvorm. U kiest zelf de kleur, de ramen en de afwerking."
      ],
      points: [
        'Strak design dat de lijnen van de boot volgt',
        'Hoogwaardig doek (Sunbrella/Markilux)',
        'Ramen van helder en UV-bestendig materiaal',
        'Stevige RVS-beugels en beslag',
        'Mogelijkheid tot aanritsbare achtertent'
      ]
    },
    {
      id: 'biminitops',
      title: 'Biminitops',
      subtitle: 'Comfort en schaduw op zonnige dagen',
      description: [
        "Op warme dagen is een biminitop onmisbaar. Het biedt verkoeling en beschermt u en uw passagiers tegen schadelijke UV-straling. Maar een bimini moet ook praktisch zijn: stevig tijdens het varen en makkelijk in te klappen.",
        "Onze biminitops worden gemaakt van robuuste RVS-frames en doek dat niet verkleurt. Of u nu een sloep of een snelvarende motorboot heeft, wij maken een zonnetent die staat als een huis."
      ],
      points: [
        'Op maat gemaakt RVS-frame (2, 3 of 4-boogs)',
        'Eenvoudig in en uit te klappen',
        'Inclusief bijpassende opberghoes',
        'Bestand tegen hoge snelheden (indien gewenst)',
        'Keuze uit diverse kleuren en doeksoorten'
      ]
    },
    {
      id: 'afdekzeilen',
      title: 'Afdekzeilen & Winterkleden',
      subtitle: 'Optimale bescherming bij stilstand',
      description: [
        "Wanneer u niet vaart, wilt u dat uw boot droog en schoon blijft. Een goed passend afdekzeil voorkomt inregenen, groene aanslag en verkleuring van uw interieur.",
        "Wij maken vlakke kleden voor de zomer en zware winterkleden voor de stalling. Dankzij slimme bevestigingen en ventilatiegaten blijft uw boot in topconditie, seizoen na seizoen."
      ],
      points: [
        'Ademend materiaal voorkomt schimmel',
        'Verstevigingen op kwetsbare punten',
        'Gemakkelijk zelf te bevestigen',
        'Waterdicht en UV-bestendig',
        'Voor sloepen, open zeilboten en cruisers'
      ]
    },
    {
      id: 'stoffering',
      title: 'Bootstoffering & Kussens',
      subtitle: 'Comfort en luxe aan boord',
      description: [
        "Versleten of verouderde kussens doen afbreuk aan uw vaarplezier. Met nieuwe stoffering geeft u uw boot direct een frisse, moderne uitstraling en zit u weer vorstelijk.",
        "Wij bekleden alles: van kuipkussens en zonnedekken tot complete kajuitinterieurs. We gebruiken speciale outdoor-stoffen die bestand zijn tegen vocht, vlekken en zonlicht, maar toch zacht aanvoelen."
      ],
      points: [
        'Vochtregulerende vulling (koudschuim)',
        'Grote collectie stoffen en kleuren',
        'Afwerking met sierstiksels of biezen',
        'Zowel binnen- als buitenkussens',
        'Herstoffering van bestaande kussens mogelijk'
      ]
    },
    {
      id: 'reparatie',
      title: 'Reparatie & Onderhoud',
      subtitle: 'Verleng de levensduur van uw zeilwerk',
      description: [
        "Een kapotte rits of een scheur in het doek hoeft niet direct te betekenen dat u alles nieuw moet kopen. Vaak is een vakkundige reparatie voldoende om weer jaren vooruit te kunnen.",
        "Wij vervangen ritsen, stikken naden door, vervangen ramen en repareren scheuren. Ook kunnen we uw kap reinigen en impregneren zodat deze weer waterafstotend is."
      ],
      points: [
        'Ritsen en ramen vervangen',
        'Naden doorstikken (UV-bestendig garen)',
        'Scheuren en gaten herstellen',
        'Vervangen van drukknopen en draaiers',
        'Snel klaar zodat u weer kunt varen'
      ]
    },
    {
      id: 'cabriolet',
      title: 'Cabrioletkappen',
      subtitle: 'Flexibel varen in alle omstandigheden',
      description: [
        "Een cabrioletkap biedt het beste van twee werelden: beschutting bij slecht weer en een open kuip zodra de zon schijnt. Het is een complex stukje maatwerk dat perfect moet functioneren.",
        "Onze cabrioletkappen zijn zo ontworpen dat u ze in een handomdraai kunt openen of sluiten. Strak gespannen, waterdicht en met maximaal zicht rondom."
      ],
      points: [
        'Eenvoudig bedienbaar mechanisme',
        'Afritsbare delen voor ventilatie',
        'Perfecte aansluiting op de romp',
        'Verlengt het vaarseizoen aanzienlijk',
        'Maatwerk voor elk type kruiser of sloep'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader 
        title="Onze Diensten" 
        description="Maatwerk oplossingen voor uw vaartuig"
      />

      {/* Services Intro Text */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-special text-primary mb-4">
            Vakwerk, tot in detail
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
            U zoekt geen standaard oplossing, maar vakmanschap dat past bij uw boot. Of het nu gaat om een nieuwe buiskap, comfortabele kussens of een reparatie: bij Zeilmakerij Liva krijgt uw vaartuig de aandacht die het verdient.
          </p>
          <p className="font-bold text-accent uppercase tracking-wider text-sm">
            Ontdek hieronder wat wij voor u kunnen betekenen
          </p>
        </div>
      </section>

      {/* Detailed Services - NU MET EDITORIAL NUMMERS (GEEN ICONEN) */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {services.map((service, index) => {
            // Genereer nummer (01, 02, etc.)
            const number = (index + 1).toString().padStart(2, '0');
            
            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-start bg-gray-50/50 rounded-sm p-8 md:p-12 border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-500 group`}
              >
                {/* Number Section (Vervanging voor icoon/foto) */}
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="relative">
                     {/* Groot nummer op de achtergrond */}
                     <span className="text-[8rem] md:text-[10rem] leading-none font-special font-bold text-primary/5 group-hover:text-accent/10 transition-colors duration-500 select-none">
                       {number}
                     </span>
                     {/* Klein accent lijntje of detail */}
                     <div className="absolute top-1/2 left-1/2 md:left-10 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-accent/20 group-hover:bg-accent transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/4 pt-4 md:pt-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                     <h3 className="text-2xl md:text-4xl font-bold font-special text-primary group-hover:text-primary/90 transition-colors">
                       {service.title}
                     </h3>
                  </div>
                  
                  <p className="text-accent font-bold text-sm uppercase tracking-wide mb-6 border-l-2 border-accent pl-3">
                    {service.subtitle}
                  </p>
                  
                  <div className="text-gray-600 leading-relaxed space-y-4 mb-8 text-base">
                    {service.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm group-hover:border-accent/30 transition-colors duration-300">
                    <h4 className="font-bold text-primary mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                      Specificaties & Opties:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.points.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                          <span className="text-accent font-bold mt-0.5">•</span>
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

      {/* Conversie Knaller */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
              
            {/* Achtergrond decoratie */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="text-white md:max-w-xl relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold font-special mb-4">
                Zoekt u een specifieke oplossing?
              </h2>
              <p className="text-white/90 text-lg leading-relaxed font-light">
                Staat uw wens er niet tussen of twijfelt u wat u nodig heeft? Wij denken graag mee en geven eerlijk advies.
              </p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto flex flex-col gap-4">
              <Link 
                href="/contact" 
                className="block w-full md:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center whitespace-nowrap"
              >
                Vraag vrijblijvend advies aan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}