'use client'
import { useState } from 'react'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

function FAQ() {
  const [ref, isVisible] = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Kan ik een vaste schoonmaakmedewerker/ster verwachten?",
      answer: "Ja, wij werken altijd met vaste medewerkers die passen bij onze opdrachtgevers. Daarnaast werken we met vaste vervangers voor het geval onze vaste medewerker ziek of met vakantie is."
    },
    {
      question: "Maken de schoonmaakmedewerkers tijdens kantooruren schoon?",
      answer: "Samen met onze opdrachtgevers stemmen wij de juiste tijd af waarop het werk het beste uitgevoerd kan worden."
    },
    {
      question: "Wat kost het uitbesteden van de schoonmaak?",
      answer: "Dienstexpert neemt de zorg voor schoonmaak uit handen tegen de beste prijs-kwaliteit verhouding. Aan de hand van jouw opdracht en de frequentie daarvan stemmen wij de beste prijs met je af."
    },
    {
      question: "Moeten er schoonmaakmiddelen op locatie aanwezig zijn of nemen jullie dat mee?",
      answer: "Wij zorgen altijd voor juiste middelen en materialen. In sommige gevallen zoals de schoonmaak van cleanrooms zorgen onze opdrachtgevers voor de juiste middelen en materialen."
    },
    {
      question: "Kan ik goed opgeleide schoonmaakmedewerkers verwachten?",
      answer: "Wij werken al onze medewerkers in op de locatie van onze opdrachtgevers. Zo kunnen we direct de bijzonderheden van de locatie doornemen."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      ref={ref}
      className={`relative py-16 md:py-24 z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3 text-black">Veelgestelde vragen</h2>
        <p className="text-center text-black opacity-55 mb-8">
          We snappen best als je nog vragen hebt. Dienst Expert geeft antwoord.
        </p>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition"
              >
                <span className="font-bold text-black pr-6 leading-relaxed text-base md:text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 text-[#40B9FF] flex-shrink-0 transition-transform mt-1 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-black leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
