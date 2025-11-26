'use client'
import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

const Counter = ({ end, suffix = "", duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      const ease = 1 - Math.pow(1 - percentage, 4)
      
      setCount(Math.floor(ease * end))

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return <span>{count}{suffix}</span>
}

function Stats() {
  const [ref, isVisible] = useScrollAnimation()
  
  const stats = [
    {
      value: 5,
      suffix: "+",
      label: "Jaar ervaring",
      description: "Kennis van zaken in elke branche."
    },
    {
      value: 120,
      suffix: "+",
      label: "Tevreden klanten",
      description: "Van lokale horeca tot grote kantoren."
    },
    {
      value: 25,
      suffix: "+",
      label: "Medewerkers",
      description: "Gedreven vakmensen in vaste dienst."
    },
    {
      value: 99,
      suffix: "%",
      label: "Klanttevredenheid",
      description: "Daar doen we het uiteindelijk voor."
    }
  ]

  return (
    <section 
      ref={ref}
      className="py-12 md:py-24 relative z-10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro tekst */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Meer dan alleen <br className="md:hidden" /> schoonmaken
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Elke locatie is anders. Daarom leveren wij geen standaardwerk, maar oplossingen die precies bij uw bedrijf passen.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`
                relative px-3 py-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center flex flex-col justify-center items-center h-full
                transition-all duration-500 hover:shadow-lg
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Cijfer: Iets kleiner op mobiel (text-4xl) voor betere verhouding */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#40B9FF] to-[#0096FF] mb-2 md:mb-4">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </div>
              
              {/* Label: Iets compacter */}
              <div className="text-sm md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                {stat.label}
              </div>
              
              {/* Beschrijving: Kleinere tekst en lichtere kleur voor hiërarchie */}
              <div className="text-xs md:text-sm text-gray-500 leading-snug max-w-[150px] mx-auto">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats