'use client'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function WerkenBij() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader 
        title="Werken bij Dienst Expert" 
        description="Word onderdeel van ons professionele team"
      />

      {/* Intro */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Maak het verschil bij Dienst Expert
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bij Dienst Expert Cleaning Services draait het om kwaliteit, betrouwbaarheid en teamwork. 
            Wij zoeken gemotiveerde medewerkers die met ons willen groeien en bijdragen aan een schone 
            en professionele werkomgeving voor onze klanten.
          </p>
        </div>
      </section>

      {/* Wat wij bieden */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Wat wij jou bieden
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#40B9FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Flexibele werktijden</h3>
              <p className="text-gray-600">
                Part-time of full-time mogelijk, afgestemd op jouw beschikbaarheid en voorkeuren.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#40B9FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💶</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Marktconform salaris</h3>
              <p className="text-gray-600">
                Een eerlijk salaris conform de cao-normen met doorgroeimogelijkheden.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#40B9FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Prettige werksfeer</h3>
              <p className="text-gray-600">
                Een hecht team, goede begeleiding en waardering voor je inzet en professionaliteit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#40B9FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Ontwikkelingsmogelijkheden</h3>
              <p className="text-gray-600">
                Training en opleidingen om je vaardigheden te verbeteren en door te groeien.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#40B9FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Reiskostenvergoeding</h3>
              <p className="text-gray-600">
                Vergoeding voor reiskosten volgens geldende regelingen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#40B9FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Vaste locaties</h3>
              <p className="text-gray-600">
                Werk op vaste locaties in de regio, geen constante verandering van werkplek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat wij zoeken */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Wat wij zoeken in een collega
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-[#40B9FF] text-xl mt-1">✓</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Betrouwbaar en zelfstandig</h3>
                <p className="text-gray-600">
                  Je bent punctueel, houdt je aan afspraken en werkt zelfstandig zonder constant toezicht.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#40B9FF] text-xl mt-1">✓</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Oog voor detail</h3>
                <p className="text-gray-600">
                  Je hebt oog voor detail en streeft naar een perfect schoon resultaat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#40B9FF] text-xl mt-1">✓</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Klantgericht</h3>
                <p className="text-gray-600">
                  Je bent vriendelijk, representatief en handelt professioneel naar klanten.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#40B9FF] text-xl mt-1">✓</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Fysiek in staat</h3>
                <p className="text-gray-600">
                  Schoonmaakwerk kan fysiek veeleisend zijn. Je bent fit en gezond genoeg voor dit werk.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#40B9FF] text-xl mt-1">✓</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Goede beheersing van Nederlands of Engels</h3>
                <p className="text-gray-600">
                 Basiskennis van Nederlands of Engels is vereist voor communicatie met collega&apos;s en klanten.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#40B9FF] text-xl mt-1">✓</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Ervaring is een pré, maar geen vereiste</h3>
                <p className="text-gray-600">
                  Heb je ervaring in de schoonmaak? Mooi! Maar ook zonder ervaring ben je welkom als je gemotiveerd bent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacatures */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Open sollicitatie
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Op dit moment hebben wij geen specifieke openstaande vacatures, maar wij zijn altijd 
            geïnteresseerd in gemotiveerd talent dat ons team wil versterken. Stuur gerust een 
            open sollicitatie en wie weet ben jij onze volgende collega!
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Interesse?</h3>
            <p className="text-gray-600 mb-6">
              Stuur je CV en motivatie naar <a href="mailto:info@dienstexpert.nl" className="text-[#40B9FF] font-medium hover:underline">info@dienstexpert.nl</a> of 
              neem telefonisch contact op via <a href="tel:+31201234567" className="text-[#40B9FF] font-medium hover:underline">+31 (0)20 123 4567</a>.
            </p>
            <p className="text-sm text-gray-500 italic">
              Wij nemen binnen 5 werkdagen contact met je op voor een vrijblijvend kennismakingsgesprek.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#40B9FF] to-[#0EA5E9] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Klaar om deel uit te maken van Dienst Expert?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Neem vandaag nog contact op en ontdek de mogelijkheden!
            </p>
            <a 
              href="mailto:info@dienstexpert.nl" 
              className="inline-block bg-white text-[#40B9FF] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
            >
              Solliciteer nu →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
