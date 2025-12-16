'use client'
import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../app/hooks/useScrollAnimation'

// De teller logica blijft hetzelfde
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
      value: 20,
      suffix: "+",
      label: "Jaar ervaring",
      description: "Vakmanschap uit het hart van Loosdrecht."
    },
    {
      // Aangepast naar 999+
      value: 999,
      suffix: "+",
      label: "Tevreden klanten",
      description: "Van sloepen tot zeiljachten."
    },
    {
      value: 100,
      suffix: "%",
      label: "Maatwerk",
      description: "Geen confectie, alleen precisie."
    },
    {
      // Trucje voor decimalen (9 -> 9.8)
      value: 9, 
      suffix: ".8",
      label: "Gemiddeld cijfer",
      description: "Kwaliteit die wordt gewaardeerd."
    }
  ]

  return (
    <section 
      ref={ref}
      // Achtergrond transparant, ligt op de foto (relative z-10)
      className="py-16 md:py-24 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro tekst (in een wit vlak voor leesbaarheid op foto) */}
        <div className={`bg-white/90 backdrop-blur-md rounded-xl p-6 md:p-8 text-center mb-12 md:mb-16 shadow-md max-w-3xl mx-auto border border-white/50 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold font-special text-primary mb-4 leading-tight">
            Ambacht met jarenlange ervaring
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Elke boot is uniek. Daarom werken wij uitsluitend op maat, met materialen en technieken waar booteigenaren op kunnen vertrouwen.
          </p>
        </div>

        {/* Stats grid - De Blokjes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-">
          {stats.map((stat, index) => (
            <div 
              key={index}
              // Glassmorphism blokken: half-transparant wit met blur en rand
              className={`
                relative px-4 py-8 md:p-10
                bg-white/80 backdrop-blur-md rounded-xl border border-white/50 shadow-sm
                text-center flex flex-col justify-center items-center h-full
                transition-all duration-500 hover:shadow-xl hover:bg-white/95 hover:-translate-y-1
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Cijfer: Groot, Accent kleur, Special Font */}
              <div className="text-5xl md:text-6xl font-special text-accent mb-3 drop-shadow-sm">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </div>
              
              {/* Label */}
              <div className="text-sm md:text-lg font-bold text-primary uppercase tracking-wider mb-3 leading-tight whitespace-nowrap">
  {stat.label}
</div>
              
              {/* Beschrijving */}
              <div className="text-xs md:text-sm text-gray-600 font-medium leading-snug max-w-[160px] mx-auto">
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