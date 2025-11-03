'use client'
import Image from 'next/image'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Diensten() {
  const services = [
    {
      id: 'horeca',
      title: 'Horeca- en hospitality locaties',
      shortDesc: 'Professionele schoonmaak voor horecagelegenheden, sportscholen en andere publieke ruimten.',
      image: '/dienst1.png',
      fullDesc: `
        Voor horeca en hospitality locaties is een schone en frisse uitstraling essentieel. Gasten en bezoekers vormen hun eerste indruk op basis van hygiëne en netheid. Dienst Expert zorgt ervoor dat uw locatie er altijd representatief uitziet.
        
        Wij bieden schoonmaakdiensten voor restaurants, cafés, hotels, sportscholen, fysiotherapiepraktijken en andere publieke ruimten. Van dagelijks onderhoud tot grondige periodieke reiniging.
      `,
      services: [
        'Dagelijkse schoonmaak van openbare ruimtes',
        'Sanitaire voorzieningen',
        'Keuken en bar reiniging',
        'Glas- en spiegelreiniging',
        'Vloeronderhoud en behandeling'
      ]
    },
    {
      id: 'kantoor',
      title: 'Kantoor- en bedrijf ruimtes',
      shortDesc: 'Grondige en regelmatige reiniging van kantoren en werkplekken voor een prettige werkomgeving.',
      image: '/dienst2.png',
      fullDesc: `
        Een schoon kantoor draagt bij aan productiviteit en werkplezier. Dienst Expert begrijpt het belang van een nette werkomgeving en biedt flexibele schoonmaakoplossingen voor bedrijven van elke omvang.
        
        Of het nu gaat om een klein kantoor of een groot bedrijfspand, wij zorgen voor een professionele aanpak met aandacht voor detail. Onze diensten zijn volledig afgestemd op uw werkritme.
      `,
      services: [
        'Werkplekken en bureaus',
        'Vergaderruimtes',
        'Sanitaire ruimtes',
        'Keuken en pantry',
        'Vloeren en tapijt',
        'Prullenbakken legen'
      ]
    },
    {
      id: 'oplevering',
      title: 'Opleveringsschoonmaak',
      shortDesc: 'Schoonmaak bij verhuur of verkoop na verbouwing. Wij zorgen voor een frisse en nette oplevering.',
      image: '/dienst3.png',
      fullDesc: `
        Na een verbouwing, renovatie of voor oplevering bij verhuur of verkoop is grondige schoonmaak essentieel. Dienst Expert verzorgt opleveringsschoonmaak zodat uw pand er perfect uitziet voor de nieuwe bewoners of eigenaren.
        
        Wij verwijderen bouwstof, verfspetters en ander vuil dat achterblijft na werkzaamheden. Het resultaat: een schone, frisse ruimte die direct inzetbaar is.
      `,
      services: [
        'Verwijdering bouwstof en vuil',
        'Ramen en kozijnen reinigen',
        'Vloeren zuigen en dweilen',
        'Sanitair grondig schoonmaken',
        'Keukenapparatuur reinigen',
        'Spinnenweb en plinten'
      ]
    },
    {
      id: 'glas',
      title: 'Glasbewassing',
      shortDesc: 'Streepvrije glasbewassing, zowel aan de binnen- als buitenzijde. Voor een heldere uitstraling.',
      image: '/dienst4.png',
      fullDesc: `
        Schone ramen zorgen voor een professionele uitstraling en meer daglicht in uw pand. Dienst Expert biedt professionele glasbewassing voor kantoren, winkels en bedrijfspanden.
        
        Wij gebruiken professionele middelen en technieken voor streepvrij resultaat, zowel aan de binnen- als buitenzijde. Ook hoogwerkreiniging behoort tot onze mogelijkheden.
      `,
      services: [
        'Binnen- en buitenzijde',
        'Kozijnen en dorpels',
        'Streepvrij resultaat',
        'Hoogwerkreiniging mogelijk',
        'Regelmatige contracten beschikbaar'
      ]
    },
    {
      id: 'periodiek',
      title: 'Periodieke onderhoudsschoonmaak',
      shortDesc: 'Structurele schoonmaak op vaste momenten. Ideaal voor langdurige schone ruimtes.',
      image: '/dienst5.png',
      fullDesc: `
        Met periodieke schoonmaak zorgt u ervoor dat uw pand structureel schoon blijft. Denk aan wekelijkse, tweewekelijkse of maandelijkse schoonmaakbeurten, volledig afgestemd op uw wensen en budget.
        
        Periodieke schoonmaak voorkomt grote opbouw van vuil en zorgt voor een constante, representatieve uitstraling van uw bedrijf.
      `,
      services: [
        'Wekelijks, tweewekelijks of maandelijks',
        'Vaste contactpersoon',
        'Flexibele planning',
        'Afgestemd op uw budget',
        'Langdurige samenwerking'
      ]
    },
    {
      id: 'diepte',
      title: 'Dieptereiniging',
      shortDesc: 'Intensieve reiniging van kantoren, keuken en sanitaire ruimtes. Voor optimale hygiëne.',
      image: '/dienst6.png',
      fullDesc: `
        Soms is dagelijkse schoonmaak niet genoeg en is een grondige dieptereiniging nodig. Dienst Expert verzorgt intensieve schoonmaak waarbij elk detail wordt aangepakt voor optimale hygiëne en veiligheid.
        
        Ideaal voor jaarlijkse beurten, na evenementen of als voorbereid op speciale gelegenheden.
      `,
      services: [
        'Intensieve vloerbehandeling',
        'Ontkalking sanitair',
        'Professionele keukenreiniging',
        'Hoogwerkstofzuigen',
        'Meubels en inventaris grondig reinigen'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader 
        title="Onze Diensten" 
        description="Professionele schoonmaakoplossingen voor elk type ruimte"
      />

      {/* Services Intro Text */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Dienst Expert Cleaning Services biedt een breed scala aan professionele schoonmaakdiensten. 
            Van dagelijks onderhoud tot specialistische reiniging - wij leveren kwaliteit, flexibiliteit 
            en een representatief resultaat. Altijd afgestemd op uw specifieke wensen en behoeften.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={320}
                  className="rounded-2xl w-full h-auto object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-4 mb-6">
                  {service.fullDesc.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Wat wij bieden:</h4>
                  <ul className="space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-[#40B9FF] mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#40B9FF] to-[#0EA5E9] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-white md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Wilt u meer weten over onze diensten?
              </h2>
              <p className="text-white/90">
                Neem vrijblijvend contact op voor een persoonlijk adviesgesprek.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a 
                href="#contact" 
                className="bg-white text-[#40B9FF] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition text-center shadow-lg whitespace-nowrap"
              >
                Neem contact op →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
