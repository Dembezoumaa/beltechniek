'use client'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Privacy Policy" 
        description="Transparantie over de verwerking van uw zakelijke gegevens"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            
            {/* Intro */}
            <div className="mb-16 border-b border-gray-100 pb-10">
              <p className="leading-relaxed text-xl font-medium text-primary/80">
                Beltechniek B.V. hecht grote waarde aan de privacy van haar opdrachtgevers en websitebezoekers. 
                In dit document leggen wij uit hoe wij omgaan met persoonsgegevens binnen onze industriële dienstverlening.
              </p>
              <p className="text-xs font-black uppercase tracking-widest text-accent mt-6">
                Laatst gewijzigd: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* 1. Wie zijn wij */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">1. Wie zijn wij?</h2>
              <p className="leading-relaxed mb-6">
                Beltechniek B.V. is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze verklaring.
              </p>
              <div className="bg-primary p-8 rounded-sm text-white shadow-xl">
                <p className="text-accent mb-4 font-black uppercase text-[10px] tracking-[0.3em]">Contactgegevens:</p>
                <div className="text-white/80 space-y-1 font-medium">
                  <p className="text-white font-bold uppercase tracking-tight">Beltechniek B.V.</p>
                  <p>Industrieweg 12</p>
                  <p>1234 AB, Nederland</p>
                  <p>KVK: 12345678</p>
                  <p className="pt-4">
                    Email: <a href="mailto:info@beltechniek.nl" className="text-accent hover:text-white transition-colors">info@beltechniek.nl</a>
                  </p>
                  <p>
                    Telefoon: <a href="tel:+31614987347" className="text-accent hover:text-white transition-colors">+31 6 14987347</a>
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Welke gegevens */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">2. Welke persoonsgegevens verzamelen wij?</h2>
              <p className="leading-relaxed mb-4">
                Beltechniek B.V. verwerkt uw persoonsgegevens omdat u gebruikmaakt van onze diensten en/of omdat u deze gegevens zelf aan ons verstrekt:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                {[
                  'Voor- en achternaam',
                  'Bedrijfsnaam en afdeling',
                  'Adresgegevens (locatie van installaties)',
                  'Telefoonnummer (direct/zakelijk)',
                  'E-mailadres',
                  'Technische specificaties van uw machinepark',
                  'Gegevens over uw activiteiten op onze website'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-sm border border-gray-100 text-sm font-bold">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Waarvoor */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">3. Doeleinden van verwerking</h2>
              <p className="leading-relaxed mb-4">
                Wij verwerken uw gegevens voor de volgende zakelijke doeleinden:
              </p>
              <ul className="space-y-3 list-none p-0">
                {[
                  'Het plannen van storingsbezoeken en onderhoud',
                  'Het uitbrengen van technische offertes en calculaties',
                  'Het factureren van verrichte werkzaamheden en materialen',
                  'Het leveren van support op afstand (PLC/Software)',
                  'Wettelijke verplichtingen (administratie en belastingen)',
                  'Optimalisatie van onze dienstverlening'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600 border-l-2 border-accent/20 pl-4 py-1">
                    <span className="font-black text-accent">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Bewaartermijn */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">4. Bewaartermijnen</h2>
              <p className="leading-relaxed">
                Beltechniek B.V. bewaart uw persoonsgegevens niet langer dan strikt nodig is. Wij hanteren de volgende termijnen:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center">
                <div className="bg-gray-50 p-6 border-b-4 border-primary">
                  <p className="text-primary font-black text-2xl mb-1">7 Jaar</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Administratie</p>
                </div>
                <div className="bg-gray-50 p-6 border-b-4 border-primary">
                  <p className="text-primary font-black text-2xl mb-1">2 Jaar</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Offertes</p>
                </div>
                <div className="bg-gray-50 p-6 border-b-4 border-primary">
                  <p className="text-primary font-black text-2xl mb-1">Duur Project</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Technische Data</p>
                </div>
              </div>
            </div>

            {/* 5. Delen met derden */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">5. Delen met derden</h2>
              <p className="leading-relaxed">
                Wij verkopen uw gegevens nooit. Wij delen gegevens uitsluitend met derden als dit noodzakelijk is voor de uitvoering van onze overeenkomst (bijv. toeleveranciers van componenten of gespecialiseerde onderaannemers) of om te voldoen aan een wettelijke verplichting.
              </p>
            </div>

            {/* 6. Beveiliging */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">6. Beveiliging</h2>
              <p className="leading-relaxed mb-6">
                Beltechniek B.V. neemt de bescherming van uw gegevens serieus. Wij maken gebruik van SSL-encryptie op onze website, beveiligde servers voor onze ERP-systemen en strikte toegangscontrole voor onze medewerkers.
              </p>
            </div>

            {/* 7. Uw rechten */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">7. Uw rechten</h2>
              <p className="leading-relaxed mb-8">
                U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Tevens kunt u een verzoek indienen voor gegevensoverdracht.
              </p>
              <div className="bg-accent p-8 rounded-sm text-white">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Recht uitoefenen?</h3>
                <p className="mb-4 text-white/90 font-medium text-sm">
                  Stuur een gespecificeerd verzoek naar onderstaand emailadres. Wij reageren uiterlijk binnen 4 weken.
                </p>
                <a href="mailto:info@beltechniek.nl" className="inline-block border-2 border-white px-6 py-2 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-accent transition-colors">
                  Contact Privacy Officer
                </a>
              </div>
            </div>

            {/* 8. Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">8. Cookies</h2>
              <p className="leading-relaxed">
                Onze website maakt gebruik van functionele en geanonimiseerde analytische cookies om de gebruikerservaring te verbeteren. Deze cookies hebben geen impact op uw privacy en bevatten geen persoonsgegevens.
              </p>
            </div>

            {/* Contact Blok */}
            <div className="bg-gray-50 rounded-sm p-10 mt-20 border-l-8 border-primary relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-xl font-black uppercase tracking-tighter text-primary mb-4">Vragen over uw privacy?</h3>
              <p className="text-gray-600 mb-8 font-medium">
                Voor vragen over ons privacybeleid kunt u contact opnemen met:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-2">
                  <p className="text-accent font-black uppercase tracking-widest text-[9px]">Email Support</p>
                  <a href="mailto:info@beltechniek.nl" className="text-lg font-bold text-primary hover:text-accent transition-colors">info@beltechniek.nl</a>
                </div>
                <div className="space-y-2">
                  <p className="text-accent font-black uppercase tracking-widest text-[9px]">Telefonische Support</p>
                  <a href="tel:+31614987347" className="text-lg font-bold text-primary hover:text-accent transition-colors">+31 6 14987347</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}