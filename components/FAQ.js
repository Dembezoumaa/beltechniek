'use client'
import { useState } from 'react'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function FAQ() {
  const [ref, isVisible] = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Krijg ik een vaste schoonmaker?",
      answer: "Ja, zeker. Wij geloven in vaste gezichten. U krijgt een vaste medewerker die uw pand en uw wensen kent. Is uw vaste schoonmaker ziek of met vakantie? Dan regelen wij direct een vervanger die goed is geïnstrueerd. Zo gaat het werk altijd door."
    },
    {
      question: "Werken jullie tijdens of na kantooruren?",
      answer: "Dat bepaalt u. Sommige klanten vinden het prettig als we overdag zichtbaar aanwezig zijn, anderen hebben liever dat we 's avonds of in het weekend komen als het pand leeg is. Wij passen ons rooster volledig aan op uw werkritme."
    },
    {
      question: "Wat zijn de kosten?",
      answer: "Elk pand is anders, dus we hebben geen standaard 'menukaart'. De prijs hangt af van het aantal vierkante meters en hoe vaak we langskomen. Omdat we efficiënt werken, kunnen we u een scherpe prijs bieden. Vraag een offerte aan, dan weet u vaak binnen 24 uur waar u aan toe bent."
    },
    {
      question: "Moet ik zelf schoonmaakspullen regelen?",
      answer: "Nee, wij nemen alles mee. Van professionele schoonmaakmiddelen tot machines en materialen. U hoeft nergens naar om te kijken. Heeft u specifieke eisen (bijvoorbeeld voor cleanrooms of speciale vloeren)? Dan stemmen we samen af welke middelen we gebruiken."
    },
    {
      question: "Hoe weten de schoonmakers wat ze moeten doen?",
      answer: "Vakbekwaamheid is bij ons de basis, maar elk pand heeft zijn eigen bijzonderheden. Daarom werken we onze mensen altijd persoonlijk in op uw locatie. We lopen alles na en bespreken uw specifieke wensen, zodat de schoonmaker precies weet waar de focus moet liggen."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      ref={ref}
      // AANPASSING: bg-gray-50 is hier verwijderd
      className={`relative py-16 md:py-24 z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Veelgestelde vragen
        </h2>
        <p className="text-center text-gray-600 mb-2 text-lg font-medium">
          Alles wat u moet weten voordat we beginnen
        </p>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Heeft u een vraag die hier niet tussen staat? Bel of app ons gerust, we helpen u graag verder.
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-200 rounded-xl overflow-hidden bg-white transition-shadow duration-300 ${
                openIndex === index ? 'shadow-md ring-1 ring-[#40B9FF]/20' : 'hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold pr-6 leading-relaxed text-base md:text-lg transition-colors ${
                  openIndex === index ? 'text-[#40B9FF]' : 'text-gray-900'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors mt-[-2px] ${
                   openIndex === index ? 'bg-[#40B9FF]/10' : 'bg-gray-100'
                }`}>
                  <svg
                    className={`w-5 h-5 text-[#40B9FF] transition-transform duration-300 ${
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
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
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