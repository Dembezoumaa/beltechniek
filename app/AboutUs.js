'use client'
import { useState } from 'react'

function AboutUs() {
  const [activeTab, setActiveTab] = useState('over-ons')

  const tabs = [
    { id: 'over-ons', label: 'Over ons' },
    { id: 'zeven-redenen', label: 'Zeven redenen' },
    { id: 'visie-historie', label: 'Visie en Historie' },
    { id: 'organisatie', label: 'Organisatie en structuur' },
    { id: 'mvo', label: 'MVO' },
    { id: 'jantje-beton', label: 'Jantje Beton' },
    { id: 'kwaliteit', label: 'Kwaliteit' },
  ]

  const content = {
    'over-ons': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Over ons</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Persoonlijke en betrouwbare dienstverlening, dat is waar wij voor staan. Met meer dan 15 jaar ervaring zijn wij uitgegroeid tot een middelgroot regionaal schoonmaakbedrijf. We stellen uw vragen centraal en koppelen dit aan duurzame oplossingen, flexibiliteit en continuïteit. Onze visie is gericht op het opbouwen en onderhouden van langdurige relaties met onze opdrachtgevers. Ons kantoorpand is gevestigd aan de Vrijewade 10 in Nieuwegein. Vanuit deze locatie worden onze medewerkers aangestuurd en de schoonmaakmiddelen en -materialen gedistribueerd.
          </p>
          <p>
            Heldere communicatie betekent voor u meer dan alleen duidelijke afspraken. Ook optimale bereikbaarheid en een juiste vertaling van uw wensen en eisen naar een uitgekiend werkprogramma zijn voor u een must. Bij Allure schoonmaak vindt u dit allemaal. Jarenlange ervaring vormt onze brug tussen de theorie en de praktijk. Dit staat garant voor het juiste advies en de juiste uitvoering.
          </p>
          <p>
            Onze regionale organisatie kent korte hierarchische lijnen. Dit betekent dat wij snel actie ondernemen. Onze flexibele houding komt u ten goede. Geen ambtelijke procedures maar actie daar waar het moet.
          </p>
          <p>
            Ook als u het schoonmaakonderhoud in eigen beheer heeft ondergebracht kan het interessant zijn om voor een professioneel schoonmaakbedrijf te kiezen. Het uitbesteden van het schoonmaakonderhoud kan voordeliger voor u zijn, naast de zekerheid van continuïteit, kwaliteit en opgeleid personeel die vervangen wordt tijdens ziekte en/of vakantie.
          </p>
          <p className="italic font-medium text-gray-700">
            Wilt u graag prettig werken in een schone en opgeruimde omgeving? Maak dan kennis met Allure schoonmaak!
          </p>
        </div>
      </div>
    ),
    'zeven-redenen': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Zeven redenen</h2>
        <p className="text-gray-600">Content voor Zeven redenen komt hier...</p>
      </div>
    ),
    'visie-historie': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Visie en Historie</h2>
        <p className="text-gray-600">Content voor Visie en Historie komt hier...</p>
      </div>
    ),
    'organisatie': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Organisatie en structuur</h2>
        <p className="text-gray-600">Content voor Organisatie en structuur komt hier...</p>
      </div>
    ),
    'mvo': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">MVO</h2>
        <p className="text-gray-600">Content voor MVO komt hier...</p>
      </div>
    ),
    'jantje-beton': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Jantje Beton</h2>
        <p className="text-gray-600">Content voor Jantje Beton komt hier...</p>
      </div>
    ),
    'kwaliteit': (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Kwaliteit</h2>
        <p className="text-gray-600">Content voor Kwaliteit komt hier...</p>
      </div>
    ),
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Desktop: Sidebar + Content */}
        <div className="hidden md:flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    activeTab === tab.id
                      ? 'bg-[#40B9FF] text-white font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            {content[activeTab]}
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {tabs.map((tab) => (
            <div key={tab.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                className="w-full text-left px-4 py-3 bg-gray-50 font-medium text-gray-700 flex justify-between items-center"
              >
                {tab.label}
                <span className={`transform transition ${activeTab === tab.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {activeTab === tab.id && (
                <div className="p-4 bg-white">
                  {content[tab.id]}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutUs
