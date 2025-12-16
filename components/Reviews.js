'use client'
import { useState, useRef, useEffect } from 'react'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

export default function Reviews() {
  const [ref, isVisible] = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef(null)

  const reviews = [
    {
      reviewer: "Pieter van den Berg",
      role: "Eigenaar",
      initials: "PB",
      rating: 5,
      text: "Bij Zeilmakerij Liva weten ze echt wat ze doen. De nieuwe buiskap zit strak, sluit perfect aan en is precies zoals ik het wilde. Ze kwamen zelf inmeten, dachten mee en werkten snel. Heel prettig contact en vakwerk waar je jaren plezier van hebt."
    },
    {
      reviewer: "Linda Jansen",
      role: "Booteigenaar",
      initials: "LJ",
      rating: 5,
      text: "Voor het eerst in jaren weer nieuwe kussens laten maken, en wat een verschil. Het comfort is echt top en de stoffen zien er na een heel seizoen nog uit als nieuw. De planning klopte precies en ze plaatsten alles netjes zelf. Helemaal tevreden."
    },
    {
      reviewer: "Mark Verhoeven",
      role: "Schipper",
      initials: "MV",
      rating: 4,
      text: "Ik had een versleten afdekzeil dat dringend vervangen moest worden. Zeilmakerij Liva kwam langs, mat alles op en maakte een zeil dat perfect past. Het materiaal voelt stevig aan en de afwerking is netjes. Geen gedoe, gewoon goed werk."
    },
    {
      reviewer: "Sophie de Graaf",
      role: "Eigenaar sloep",
      initials: "SG",
      rating: 5,
      text: "Mijn biminitop was kapot en ze hebben het binnen een week gerepareerd. Snelle service, eerlijk advies en ze namen echt de tijd om uit te leggen hoe ik het zelf beter kan onderhouden. Dat waardeer ik enorm."
    },
    {
      reviewer: "Jan Bakker",
      role: "Zeileigenaar",
      initials: "JB",
      rating: 5,
      text: "Na jaren varen wilde ik mijn cabrioletkap vervangen. Het oude doek was verbleekt en de ramen troebel. Liva heeft alles opnieuw gemaakt met prachtig materiaal. De kap ziet er weer uit als nieuw en werkt perfect. Echt ambachtelijk werk."
    },
    {
      reviewer: "Anneke Scholten",
      role: "Booteigenaar",
      initials: "AS",
      rating: 4,
      text: "Fijne mensen om mee te werken. Ze luisteren goed en denken actief mee over wat het beste bij je boot past. De railingkleden die ze voor ons gemaakt hebben zitten strak en zien er mooi uit. Precies wat we zochten."
    },
    {
      reviewer: "Rob Hendriks",
      role: "Eigenaar motorboot",
      initials: "RH",
      rating: 5,
      text: "Ik twijfelde tussen repareren of nieuw laten maken. Ze hebben eerlijk geadviseerd wat verstandig was en de prijs was heel redelijk. De nieuwe bootkap past millimeterwerk en beschermt alles perfect. Blij dat ik voor Liva gekozen heb."
    },
    {
      reviewer: "Marloes Visser",
      role: "Eigenaar",
      initials: "MV",
      rating: 5,
      text: "Lokaal bedrijf met echt vakmanschap. Ze hebben ons giekkled en enkele kussens vernieuwd. Alles werd keurig op tijd opgeleverd en de kwaliteit is uitstekend. Fijn dat ze ook na de montage nog even checken of alles goed zit."
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
    // Toon 2 kaarten tegelijk op desktop
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
      // Achtergrond transparant (geen bg-gray-50)
      className={`py-16 md:py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header (met wit glas effect voor leesbaarheid) */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-12 max-w-3xl mx-auto text-center border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold font-special mb-4 text-primary">
            Wat klanten zeggen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Kwaliteit en vakmanschap staan bij ons voorop. Lees wat booteigenaren uit Loosdrecht en omgeving over ons werk vertellen.
          </p>
        </div>

        {/* --- DESKTOP VERSIE --- */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-8 mb-10">
            
            {/* Score Kaart (Links) - Navy Blue Gradient */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-sm p-8 text-white flex flex-col justify-between min-h-[420px] shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div>
                <h3 className="text-2xl font-special font-bold mb-1 tracking-wide">Klanttevredenheid</h3>
                <p className="text-accent text-sm font-bold uppercase tracking-wider mb-8">Gemiddelde score</p>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-accent drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-6xl font-special font-bold mb-2 tracking-tight text-white">9.8</div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-lg font-medium">Aanbevolen door 100%</p>
                <p className="text-sm text-gray-300">Gebaseerd op recente reviews</p>
              </div>
            </div>

            {/* Review Kaarten (Rechts) - Glassmorphism */}
            {getVisibleReviews().map((review, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-md rounded-sm p-10 flex flex-col min-h-[420px] shadow-lg border border-white/50 relative group hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-special font-bold text-xl border border-primary/20">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary font-special leading-none mb-1">{review.reviewer}</h4>
                    <p className="text-xs text-accent font-bold uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed flex-1 text-lg italic font-light">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigatie Buttons */}
          <div className="flex justify-center gap-6">
            <button onClick={prevReview} className="group bg-white/80 border border-white/50 rounded-full p-4 hover:bg-primary hover:border-primary transition-all shadow-md backdrop-blur-sm" aria-label="Vorige review">
              <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextReview} className="group bg-white/80 border border-white/50 rounded-full p-4 hover:bg-primary hover:border-primary transition-all shadow-md backdrop-blur-sm" aria-label="Volgende review">
              <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- MOBIELE VERSIE --- */}
        <div className="md:hidden">
          {/* Mobile Score Card */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-sm p-6 text-white mb-6 shadow-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-special font-bold">Excellent</h3>
                <p className="text-accent text-xs font-bold uppercase">Gemiddelde score</p>
              </div>
              <div className="text-4xl font-special font-bold">9.8</div>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm opacity-90 font-light">Aanbevolen door 100% van onze klanten</p>
          </div>

          {/* Swipeable Reviews */}
          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review, index) => (
              <div key={index} className="min-w-[85vw] snap-center bg-white/95 backdrop-blur-md rounded-sm p-6 flex flex-col min-h-[280px] shadow-lg border border-white/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20 shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-special leading-none mb-1">{review.reviewer}</h4>
                    <p className="text-[10px] text-accent font-bold uppercase">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic font-light">"{review.text}"</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <div key={index} className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-accent w-6' : 'bg-white/50 w-1.5'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}