'use client'
import { useState, useRef, useEffect } from 'react'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

export default function Reviews() {
  const [ref, isVisible] = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef(null)

  const reviews = [
    {
      company: "TeekensKarstens",
      reviewer: "Nando van Gorkum", 
      role: "Facilitair Manager",
      logo: "TK*",
      rating: 10,
      text: "Met Dienst Expert kunnen wij vertrouwen op vakkundige schoonmaak van ons hele pand. Iedere dag werken zij met een vaste ploeg medewerkers, wat zorgt voor vertrouwde gezichten op de werkvloer en vriendelijk contact. Ook heb ik een erg goede relatie met onze accountmanager die, door de korte lijntjes die wij hebben, altijd alles snel weet te regelen."
    },
    {
      company: "Gaastra Nederland",
      reviewer: "Erik Teunissen", 
      role: "Kantoormanager",
      logo: "G",
      rating: 10,
      text: "Wij hebben het getroffen met Dienst Expert als partij voor de schoonmaakwerkzaamheden van ons kantoor. De contacten over de offerte en het contract verliepen soepel en deskundig. De schoonmaakwerkzaamheden worden consciëntieus uitgevoerd en de schoonmaakster is erg prettig in de omgang."
    },
    {
      company: "Amsterdam Medical Center",
      reviewer: "Dr. Linda Jansen",
      role: "Hoofd Facilitaire Zaken", 
      logo: "AM",
      rating: 10,
      text: "In de zorgverlening is hygiëne van het allergrootste belang. Dienst Expert begrijpt dit perfect en levert consequent topkwaliteit. Hun specialistische kennis van cleanrooms en medische omgevingen is ongeëvenaard. Het team werkt volgens strikte protocollen."
    },
    {
      company: "Creative Hub Amsterdam", 
      reviewer: "Emma de Wit",
      role: "Studio Manager",
      logo: "CH",
      rating: 9,
      text: "Gelukkig zijn de schoonmakers van Dienst Expert elke keer weer de onzichtbare kracht die ons kantoor klaarmaakt voor een nieuwe dag. Ze werken discreet, respecteren onze werkruimtes en begrijpen de creatieve sector perfect."
    }
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const getVisibleReviews = () => {
    const visible = []
    for (let i = 0; i < 2; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length])
    }
    return visible
  }

  useEffect(() => {
    if (scrollRef.current) {
      const handleScroll = () => {
        const scrollLeft = scrollRef.current.scrollLeft
        const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16
        const newIndex = Math.round(scrollLeft / cardWidth)
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex % reviews.length)
        }
      }
      scrollRef.current.addEventListener('scroll', handleScroll)
      return () => scrollRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [currentIndex, reviews.length])

  return (
    <section 
      ref={ref}
      className={`py-16 md:py-20 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3 text-black">Beoordelingen</h2>
        <p className="text-center text-black opacity-55 mb-12">Wat onze klanten over ons zeggen</p>

        {/* Desktop versie */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-6 mb-8">
            {/* Zwarte kaart */}
            <div className="bg-black rounded-2xl p-10 text-white flex flex-col justify-between min-h-[400px]">
              <div>
                <h3 className="text-xl font-bold mb-3">Beoordelingen</h3>
                <p className="text-lg mb-6 opacity-90">Dienst Expert</p>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl font-bold mb-3">Wij scoren een 9.6</p>
              </div>
              <p className="text-lg opacity-90">Aanbevolen door 97%</p>
            </div>

            {/* Review kaarten */}
            {getVisibleReviews().map((review, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 flex flex-col min-h-[400px] border border-gray-200/50 shadow-sm">
                <div className="mb-6">
                  <h4 className="font-bold text-lg text-black">{review.reviewer}</h4>
                  <p className="text-sm text-black opacity-60">{review.role}</p>
                </div>
                <div className="flex gap-1 mb-6 items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 font-bold text-black">{review.rating}</span>
                </div>
                <p className="text-black text-sm leading-relaxed flex-1">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Blauwe pijlen onderaan */}
          <div className="flex justify-center gap-4">
            <button onClick={prevReview} className="bg-[#40B9FF] rounded-full p-4 hover:bg-[#3AA8E8] transition shadow-lg" aria-label="Vorige review">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextReview} className="bg-[#40B9FF] rounded-full p-4 hover:bg-[#3AA8E8] transition shadow-lg" aria-label="Volgende review">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobiel versie */}
        <div className="md:hidden">
          <div className="bg-black rounded-2xl p-4 text-white mb-4 min-h-[180px] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Beoordelingen</h3>
              <p className="text-base mb-3 opacity-90">Dienst Expert</p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-1xl font-bold mb-2">Wij scoren een 9.6</p>
            </div>
            <p className="text-base opacity-90">Aanbevolen door 97%</p>
          </div>

          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review, index) => (
              <div key={index} className="min-w-[85vw] snap-center bg-gray-100 rounded-2xl p-6 flex flex-col min-h-[280px]">
                <div className="mb-4">
                  <h4 className="font-bold text-base text-black">{review.reviewer}</h4>
                  <p className="text-xs text-black opacity-60">{review.role}</p>
                </div>
                <div className="flex gap-1 mb-4 items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 font-bold text-black text-sm">{review.rating}</span>
                </div>
                <p className="text-black text-sm leading-relaxed flex-1">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <div key={index} className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#40B9FF] w-8' : 'bg-gray-300 w-2'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
