'use client'
import Image from 'next/image'
import Link from 'next/link' // Belangrijk voor interne navigatie
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Diensten() {
  const services = [
    {
      id: 'horeca',
      title: 'Horeca & Hospitality',
      subtitle: 'Gastvrijheid begint bij een schone zaak',
      image: '/dienst1.png',
      description: [
        "In de horeca zijn uw gasten uw strengste inspecteurs. Een vieze vloer of onfris toilet kan direct invloed hebben op uw reviews. Wij zorgen ervoor dat uw zaak elke dag weer fris en uitnodigend is, nog voordat de eerste gast binnenkomt.",
        "Wij werken voor restaurants, hotels, cafés en sportscholen en snappen dat uw openingstijden heilig zijn."
      ],
      points: [
        'Grondige reiniging van keuken en bar',
        'Sanitair blinkend schoon en fris',
        'Vloeronderhoud (ook voor intensief gebruik)',
        'Glas- en spiegelreiniging',
        'Dagelijks onderhoud van de publieke ruimtes'
      ]
    },
    {
      id: 'kantoor',
      title: 'Kantoor & Bedrijfsruimtes',
      subtitle: 'Een frisse start van de werkdag',
      image: '/dienst2.png',
      description: [
        "Niemand werkt lekker in een rommelig kantoor. Een schone werkplek zorgt voor meer werkplezier, minder ziekteverzuim en een professionele indruk als u klanten ontvangt.",
        "Of u nu een klein kantoor heeft of een groot bedrijfspand: wij werken flexibel om uw medewerkers heen. U ziet ons niet, maar u ziet wél het resultaat."
      ],
      points: [
        'Schoonmaken van werkplekken en bureaus',
        'Sanitair hygiënisch reinigen',
        'Vergaderruimtes representatief maken',
        'Vloeren stofzuigen en dweilen',
        'Afval afvoeren en prullenbakken legen'
      ]
    },
    {
      id: 'oplevering',
      title: 'Opleveringsschoonmaak',
      subtitle: 'De aannemer is klaar, nu wij nog',
      image: '/dienst3.png',
      description: [
        "Een verbouwing of renovatie laat altijd sporen na: bouwstof, verfspetters en cementsluier. Voordat u het pand kunt gebruiken (of verhuren), moet het écht schoon zijn.",
        "Dienst Expert pakt dit grondig aan. Wij maken het pand gebruiksklaar, zodat u of de nieuwe bewoners er direct in kunnen. Geen stress, gewoon de sleutel omdraaien en intrekken."
      ],
      points: [
        'Verwijderen van al het bouwstof en grof vuil',
        'Ramen, kozijnen en stickers verwijderen',
        'Vloeren reinigen (bouwklaar of gebruiksklaar)',
        'Sanitair en keukens gebruiksklaar maken',
        'Verwijderen van spinnenwebben en stof op plinten'
      ]
    },
    {
      id: 'glas',
      title: 'Glasbewassing',
      subtitle: 'Een heldere blik naar buiten',
      image: '/dienst4.png',
      description: [
        "Vies glaswerk doet afbreuk aan uw hele pand. Schone ramen zorgen voor een verzorgde uitstraling en laten meer daglicht binnen.",
        "Wij wassen uw ramen streeploos schoon, zowel binnen als buiten. Ook voor lastig bereikbare ramen op hoogte draaien wij onze hand niet om."
      ],
      points: [
        'Glasbewassing binnen en buiten',
        'Reinigen van kozijnen en dorpels',
        'Streeploos resultaat',
        'Hoogwerkers inzetbaar voor lastige plekken',
        'Ook op contractbasis (periodiek)'
      ]
    },
    {
      id: 'periodiek',
      title: 'Periodiek Onderhoud',
      subtitle: 'Structureel goed geregeld',
      image: '/dienst5.png',
      description: [
        "Schoonmaak is geen eenmalige actie, het is bijhouden. Wilt u zeker weten dat uw pand het hele jaar door representatief blijft? Dan maken we samen een plan dat past bij uw budget en wensen.",
        "Wekelijks, tweewekelijks of maandelijks: wij zorgen voor regelmaat en vaste gezichten."
      ],
      points: [
        'Vaste frequentie (wekelijks/maandelijks)',
        'Altijd een vaste contactpersoon',
        'Planning die past in uw agenda',
        'Duidelijke prijsafspraken',
        'Ideaal voor VvE’s en bedrijfspanden'
      ]
    },
    {
      id: 'diepte',
      title: 'Dieptereiniging',
      subtitle: 'De grote reset voor uw hygiëne',
      image: '/dienst6.png',
      description: [
        "Soms is de dagelijkse schoonmaak niet genoeg. Vuil hoopt zich op plekken op die u niet direct ziet. Met een dieptereiniging gaan we een stap verder.",
        "We reinigen machines, vloeren of sanitair tot in de kleinste naden. Perfect als jaarlijkse grote beurt of na een evenement. Alles voelt weer als nieuw."
      ],
      points: [
        'Intensieve vloerbehandeling (schrobben/polymeren)',
        'Dieptereiniging van sanitair (ontkalken)',
        'Professionele keukenreiniging (HACCP-proof)',
        'Stofzuigen op hoogte (lampen, buizen)',
        'Meubilair en stoffering reinigen'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader 
        title="Onze Diensten" 
        description="Professionele schoonmaakoplossingen voor elk type ruimte"
      />

      {/* Services Intro Text */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Alles schoon, van vloer tot plafond
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            U zoekt geen schoonmaakbedrijf dat alleen even een doekje over de tafels haalt. U zoekt een partner die snapt dat een schone omgeving uw visitekaartje is. Of het nu gaat om een druk restaurant, een kantoor vol medewerkers of een oplevering na de bouw: Dienst Expert zorgt dat het geregeld is.
          </p>
          <p className="font-medium text-[#40B9FF]">
            Hieronder vindt u waar wij goed in zijn.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-[#40B9FF] font-semibold text-lg mb-6">
                  {service.subtitle}
                </p>
                
                <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
                  {service.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#40B9FF] rounded-full"></span>
                    Wat we doen:
                  </h4>
                  <ul className="space-y-3">
                    {service.points.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-[#40B9FF] font-bold mt-0.5">✓</span>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversie Knaller */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#40B9FF] to-[#0EA5E9] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
             
            {/* Achtergrond decoratie */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="text-white md:max-w-xl relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Zoekt u een specifieke schoonmaakoplossing?
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Staat uw klus er niet tussen of twijfelt u wat u nodig heeft? Wij denken graag mee.
              </p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto">
              <Link 
                href="/contact" 
                className="block w-full md:w-auto bg-white text-[#40B9FF] px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center whitespace-nowrap"
              >
                Vraag vrijblijvend advies aan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}