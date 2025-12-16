'use client'
import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is maatwerk niet veel duurder dan standaard kappen?",
      answer: "Maatwerk kost wat meer dan confectie, dat klopt. Maar een kap die niet goed past, lekt sneller, slijt harder en moet eerder vervangen worden. Met maatwerk investeert u één keer goed en heeft u jarenlang profijt. Dat betaalt zich terug in waardebehoud en gebruiksplezier."
    },
    {
      question: "Hoe lang duurt het voor mijn bestelling klaar is?",
      answer: "Dat hangt af van het type product en de drukte in ons atelier. Gemiddeld rekenen we 2 tot 4 weken voor standaardproducten zoals buiskappen of afdekzeilen. Bij grotere opdrachten zoals complete stoffering kan het iets langer duren. We geven altijd van tevoren een duidelijke planning door."
    },
    {
      question: "Komen jullie de maten zelf opmeten?",
      answer: "Ja, altijd. Wij komen naar uw boot toe in Loosdrecht of omgeving om alles handmatig in te meten. Zo weten we zeker dat het perfect past. Inmeten kost geen extra tijd en zorgt voor millimeterprecisie."
    },
    {
      question: "Welke materialen gebruiken jullie?",
      answer: "We werken met topmerken zoals Sunbrella en Markilux. Dit zijn premium doeksoorten die kleurvast, waterafstotend en schimmelwerend zijn. De stoffen zijn bestand tegen UV-straling en zout water, en gaan jaren mee zonder te verkleuren of te verslijten."
    },
    {
      question: "Kunnen jullie ook reparaties uitvoeren?",
      answer: "Zeker. Van kapotte ritsen tot versleten naden of doeken die vervangen moeten worden. We kijken altijd eerst of reparatie mogelijk is voordat we adviseren om iets nieuws te laten maken. Eerlijk advies staat bij ons voorop."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
  <section
    className="py-12 md:py-24 relative z-10" // Gewoon alleen de className
  >
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header Blok - Wit met lichte transparantie en blur voor luxe uitstraling */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 text-center mb-12 shadow-xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold font-special text-primary mb-3">
            Veelgestelde vragen
          </h2>
          <p className="text-accent text-sm font-bold uppercase tracking-wider mb-4">
            Alles wat u moet weten over maatwerk
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            Staat uw vraag er niet tussen? Neem gerust contact op, we denken graag met u mee.
          </p>
        </div>
        
        {/* Vragen Lijst */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              // AANPASSING: bg-white (massief) en duidelijkere border
              className={`
                bg-white rounded-sm overflow-hidden transition-all duration-300 border
                ${openIndex === index 
                  ? 'border-accent shadow-lg ring-1 ring-accent/20' // Actief: Accent kleur rand
                  : 'border-gray-200 shadow-md hover:border-gray-300' // Inactief: Grijze rand
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-5 md:p-6 text-left transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold pr-6 leading-relaxed text-base md:text-lg font-special ${
                  openIndex === index ? 'text-primary' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                
                {/* Icoon Cirkel */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors mt-[-2px] ${
                   openIndex === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Antwoord sectie */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50/50 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-6 pt-2 text-gray-700 leading-relaxed text-sm md:text-base font-light border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ