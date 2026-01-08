'use client'
import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Zijn jullie gecertificeerd voor werken in industriële omgevingen?",
      answer: "Ja, Beltechniek B.V. werkt strikt volgens de VCA-richtlijnen en NEN-normen (zoals NEN 1010 en NEN 3140). Onze monteurs zijn volledig gecertificeerd om veilig en vakkundig te opereren binnen complexe industriële installaties en op bouwlocaties."
    },
    {
      question: "Hoe snel kunnen jullie ter plaatse zijn bij een acute storing?",
      answer: "Voor klanten met een servicecontract bieden wij een 24/7 storingsdienst. Dankzij onze landelijke dekking streven wij ernaar om bij kritieke calamiteiten zo snel mogelijk op locatie te zijn om de stilstand van uw productieproces tot een minimum te beperken."
    },
    {
      question: "Voeren jullie ook periodiek preventief onderhoud uit?",
      answer: "Absoluut. Wij geloven dat voorkomen beter is dan genezen. Wij stellen onderhoudsplannen op maat op voor uw elektrische en mechanische installaties, inclusief de nodige keuringen en rapportages om de bedrijfszekerheid te garanderen."
    },
    {
      question: "Kunnen jullie inbraaksystemen integreren met bestaande systemen?",
      answer: "Ja, wij zijn gespecialiseerd in het koppelen van moderne inbraak- en beveiligingssystemen aan uw huidige infrastructuur of gebouwbeheersysteem. We kijken altijd naar een toekomstbestendige oplossing die naadloos aansluit op uw behoeften."
    },
    {
      question: "Werken jullie alleen in de regio Den Haag of door heel Nederland?",
      answer: "Hoewel onze basis in 's-Gravenhage ligt, opereren wij door heel Nederland. Onze mobiele technische teams zijn ingericht om projecten en storingen op elke locatie landelijk efficiënt af te handelen."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
  <section className="py-12 md:py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header Blok */}
        <div className="bg-white/95 backdrop-blur-md rounded-sm p-8 text-center mb-12 shadow-lg border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 uppercase tracking-tighter">
            Veelgestelde vragen
          </h2>
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
            Expertise en service toegelicht
          </p>
          <p className="text-gray-600 text-base md:text-lg font-medium">
            Heeft u een specifieke technische vraag of een acuut probleem? Neem direct contact op met onze specialisten.
          </p>
        </div>
        
        {/* Vragen Lijst */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-sm overflow-hidden transition-all duration-300 border
                ${openIndex === index 
                  ? 'border-accent shadow-lg ring-1 ring-accent/10' 
                  : 'border-gray-200 shadow-sm hover:border-gray-300' 
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-5 md:p-6 text-left transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold pr-6 leading-tight text-base md:text-lg uppercase tracking-tight ${
                  openIndex === index ? 'text-primary' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                
                {/* Icoon Cirkel */}
                <div className={`w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors mt-[-2px] ${
                   openIndex === index ? 'bg-accent text-white shadow-md' : 'bg-gray-100 text-gray-400'
                }`}>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Antwoord sectie */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50/50 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-6 pt-2 text-gray-700 leading-relaxed text-sm md:text-base font-medium border-t border-gray-100 italic">
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