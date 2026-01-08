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
      value: 15,
      suffix: "+",
      label: "Jaar Ervaring",
      description: "Specialistisch vakmanschap in de elektrotechniek."
    },
    {
      value: 24,
      suffix: "/7",
      label: "Storingsdienst",
      description: "Altijd bereikbaar voor industriële calamiteiten."
    },
    {
      value: 100,
      suffix: "%",
      label: "Gecertificeerd",
      description: "Veiligheid en kwaliteit volgens VCA & NEN normen."
    },
    {
      value: 750, 
      suffix: "+",
      label: "Projecten",
      description: "Succesvolle opleveringen door heel Nederland."
    }
  ]

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro tekst */}
        <div className={`bg-white/95 backdrop-blur-md rounded-xl p-6 md:p-10 text-center mb-12 md:mb-16 shadow-lg max-w-4xl mx-auto border border-white/50 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 leading-tight uppercase tracking-tighter">
            Technische Expertise & Betrouwbaarheid
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">
            Beltechniek B.V. staat voor continuïteit. Wij combineren jarenlange ervaring met moderne technieken om uw installaties in topconditie te houden.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`
                relative px-4 py-8 md:p-10
                bg-white/90 backdrop-blur-md rounded-sm border border-white/50 shadow-md
                text-center flex flex-col justify-center items-center h-full
                transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Cijfer */}
              <div className="text-5xl md:text-6xl font-bold text-accent mb-3 drop-shadow-sm tracking-tighter">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </div>
              
              {/* Label */}
              <div className="text-sm md:text-lg font-black text-primary uppercase tracking-widest mb-3 leading-tight">
                {stat.label}
              </div>
              
              {/* Beschrijving */}
              <div className="text-xs md:text-sm text-gray-500 font-bold leading-snug max-w-[180px] mx-auto uppercase opacity-80">
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