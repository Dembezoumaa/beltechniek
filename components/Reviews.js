'use client'
import { useState, useRef, useEffect } from 'react'

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef(null)

  const reviews = [
    {
      reviewer: "Hendrik de Vries",
      role: "Operations Manager",
      initials: "HV",
      rating: 5,
      text: "Toen onze productielijn stilviel door een elektrische storing, was Beltechniek binnen het uur ter plaatse. Dankzij hun snelle handelen was de downtime minimaal. Een betrouwbare partner voor onze industriële storingsdienst."
    },
    {
      reviewer: "Linda van Gastel",
      role: "Facility Manager",
      initials: "LG",
      rating: 5,
      text: "De integratie van het nieuwe inbraaksysteem verliep vlekkeloos. Ze denken mee over veiligheidsnormen en leveren gecertificeerd werk af. Zeer professionele aanpak en duidelijke communicatie gedurende het hele project."
    },
    {
      reviewer: "Mark Verhoeven",
      role: "Hoofd Technische Dienst",
      initials: "MV",
      rating: 5,
      text: "Voor de revisie van onze besturingspanelen zochten we een specialist in meet- & regeltechniek. Beltechniek heeft dit met uiterste precisie uitgevoerd. De installaties draaien efficiënter dan ooit."
    },
    {
      reviewer: "Jeroen Bakker",
      role: "Projectleider Bouw",
      initials: "JB",
      rating: 4,
      text: "Prettig samengewerkt bij de aanleg van de volledige elektrotechnische installatie van ons nieuwe distributiecentrum. Ze werken strikt volgens VCA-normen, wat voor ons een harde eis is."
    },
    {
      reviewer: "Sophie de Graaf",
      role: "Eigenaar MKB",
      initials: "SG",
      rating: 5,
      text: "Beltechniek verzorgt al jaren het onderhoud aan onze elektrische installaties. Altijd eerlijk advies en ze komen hun afspraken na. Een verademing in de technische sector."
    },
    {
      reviewer: "Thomas Meijer",
      role: "Technisch Directeur",
      initials: "TM",
      rating: 5,
      text: "Hun kennis van paneelbouw en complexe regeltechniek is indrukwekkend. Ze hebben een op maat gemaakte oplossing geleverd die exact aansluit op onze specifieke machinevereisten."
    },
    {
      reviewer: "Rob Hendriks",
      role: "Site Manager",
      initials: "RH",
      rating: 4,
      text: "Landelijke dekking die echt werkt. Of we nu hulp nodig hebben in Den Haag of daarbuiten, Beltechniek schakelt snel. De storingsmonteurs zijn kundig en hebben de juiste tools direct bij de hand."
    },
    {
      reviewer: "Marloes Visser",
      role: "Manager Logistiek",
      initials: "MV",
      rating: 5,
      text: "Kwaliteit en veiligheid staan centraal bij deze club. Na de installatie van onze toegangscontrole volgde een uitgebreide uitleg en nazorg. De nazorg is bij hen net zo goed als de montage zelf."
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
  <section className="py-12 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-12 max-w-3xl mx-auto text-center border border-white/50 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary uppercase tracking-tight">
            Referenties & Ervaringen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Continuïteit en betrouwbaarheid zijn de fundamenten van onze dienstverlening. Ontdek hoe wij industriële en zakelijke partners ondersteunen bij hun technische vraagstukken.
          </p>
        </div>

        {/* --- DESKTOP VERSIE --- */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-8 mb-10">
            
            {/* Score Kaart */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-sm p-8 text-white flex flex-col justify-between min-h-[420px] shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div>
                <h3 className="text-2xl font-bold mb-1 tracking-tight uppercase">Performance</h3>
                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-8">Klantbeoordeling</p>
                
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-7xl font-bold mb-2 tracking-tighter text-white">4.9</div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-lg font-bold uppercase tracking-wide">100% Commitment</p>
                <p className="text-sm text-gray-300">Gecertificeerde technische diensten</p>
              </div>
            </div>

            {/* Review Kaarten */}
            {getVisibleReviews().map((review, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-md rounded-sm p-10 flex flex-col min-h-[420px] shadow-lg border border-white/50 relative group hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl border-4 border-accent/20">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary leading-none mb-1">{review.reviewer}</h4>
                    <p className="text-xs text-accent font-bold uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed flex-1 text-lg italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigatie Buttons */}
          <div className="flex justify-center gap-6">
            <button onClick={prevReview} className="bg-primary hover:bg-accent text-white rounded-full p-4 transition-all shadow-md" aria-label="Vorige review">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextReview} className="bg-primary hover:bg-accent text-white rounded-full p-4 transition-all shadow-md" aria-label="Volgende review">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- MOBIELE VERSIE --- */}
        <div className="md:hidden">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-sm p-6 text-white mb-6 shadow-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tighter">Excellent</h3>
                <p className="text-accent text-xs font-bold uppercase tracking-widest">Reviews</p>
              </div>
              <div className="text-4xl font-bold">4.9</div>
            </div>
            <p className="text-sm opacity-90 font-medium">Gecertificeerd vakmanschap door heel Nederland</p>
          </div>

          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review, index) => (
              <div key={index} className="min-w-[85vw] snap-center bg-white/95 backdrop-blur-md rounded-sm p-6 flex flex-col min-h-[300px] shadow-lg border border-white/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0 border-2 border-accent/20">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary leading-none mb-1 uppercase tracking-tight">{review.reviewer}</h4>
                    <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">"{review.text}"</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <div key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-accent w-8' : 'bg-primary/20 w-2'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}