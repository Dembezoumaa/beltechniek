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
      initials: "TK",
      rating: 10,
      text: "Met Dienst Expert kunnen wij vertrouwen op vakkundige schoonmaak van ons hele pand. Iedere dag werken zij met een vaste ploeg medewerkers, wat zorgt voor vertrouwde gezichten op de werkvloer en vriendelijk contact."
    },
    {
      company: "Gaastra Nederland",
      reviewer: "Erik Teunissen", 
      role: "Kantoormanager",
      initials: "GN",
      rating: 10,
      text: "Wij hebben het getroffen met Dienst Expert. De contacten over de offerte en het contract verliepen soepel en deskundig. De schoonmaakwerkzaamheden worden consciëntieus uitgevoerd en de schoonmaakster is erg prettig in de omgang."
    },
    {
      company: "Amsterdam Medical Center",
      reviewer: "Dr. Linda Jansen",
      role: "Hoofd Facilitaire Zaken", 
      initials: "AMC",
      rating: 10,
      text: "In de zorgverlening is hygiëne van het allergrootste belang. Dienst Expert begrijpt dit perfect en levert consequent topkwaliteit. Hun specialistische kennis van cleanrooms en medische omgevingen is ongeëvenaard."
    },
    {
      company: "Creative Hub Amsterdam", 
      reviewer: "Emma de Wit",
      role: "Studio Manager",
      initials: "CH",
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
      className={`py-16 md:py-24 bg-gray-50 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Beoordelingen</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Wij zijn pas tevreden als u dat bent. Lees hier wat onze klanten zeggen over onze samenwerking.
        </p>

        {/* Desktop versie */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-8 mb-10">
            
            {/* Score Kaart (Links) - Nu in Brand Gradient */}
            <div className="bg-gradient-to-br from-[#40B9FF] to-[#0EA5E9] rounded-3xl p-8 text-white flex flex-col justify-between min-h-[420px] shadow-xl relative overflow-hidden">
              {/* Decoratieve cirkel */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Klanttevredenheid</h3>
                <p className="text-white/80 mb-8">Gemiddelde score</p>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-5xl font-extrabold mb-2 tracking-tight">9.6</div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-lg font-medium">Aanbevolen door 97%</p>
                <p className="text-sm text-white/70">Gebaseerd op 120+ reviews</p>
              </div>
            </div>

            {/* Review Kaarten (Rechts) */}
            {getVisibleReviews().map((review, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 flex flex-col min-h-[420px] shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300">
  

                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar Initials */}
                  <div className="w-12 h-12 rounded-full bg-[#40B9FF]/10 flex items-center justify-center text-[#40B9FF] font-bold text-lg">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 leading-tight">{review.reviewer}</h4>
                    <p className="text-sm text-gray-500">{review.role} bij {review.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed flex-1 relative z-10 italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigatie Buttons */}
          <div className="flex justify-center gap-4">
            <button onClick={prevReview} className="group bg-white border border-gray-200 rounded-full p-4 hover:border-[#40B9FF] hover:bg-[#40B9FF] transition-all shadow-md" aria-label="Vorige review">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextReview} className="group bg-white border border-gray-200 rounded-full p-4 hover:border-[#40B9FF] hover:bg-[#40B9FF] transition-all shadow-md" aria-label="Volgende review">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobiele versie */}
        <div className="md:hidden">
          {/* Mobile Score Card */}
          <div className="bg-gradient-to-br from-[#40B9FF] to-[#0EA5E9] rounded-2xl p-6 text-white mb-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Excellent</h3>
                <p className="text-white/80 text-sm">Gemiddelde score</p>
              </div>
              <div className="text-4xl font-bold">9.6</div>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm opacity-90">Aanbevolen door 97% van onze klanten</p>
          </div>

          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review, index) => (
              <div key={index} className="min-w-[85vw] snap-center bg-white rounded-2xl p-6 flex flex-col min-h-[300px] shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#40B9FF]/10 flex items-center justify-center text-[#40B9FF] font-bold text-sm shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.reviewer}</h4>
                    <p className="text-xs text-gray-500">{review.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{review.text}"</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <div key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#40B9FF] w-6' : 'bg-gray-200 w-1.5'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}