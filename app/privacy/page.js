'use client'
// Zorg dat het pad naar PageHeader klopt (één mapje omhoog met ..)
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Privacy Policy" 
        description="Hoe wij omgaan met uw persoonsgegevens"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            
            {/* Intro */}
            <div className="mb-10">
              <p className="leading-relaxed">
                Zeilmakerij Liva hecht veel waarde aan de bescherming van uw persoonsgegevens. 
                In deze Privacy Policy leggen wij uit welke persoonsgegevens wij verzamelen en gebruiken en met 
                welk doel. Wij raden u aan deze Privacy Policy zorgvuldig te lezen.
              </p>
              <p className="text-sm text-gray-400 mt-4 italic">
                <strong>Laatst gewijzigd:</strong> {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* 1. Wie zijn wij */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">1. Wie zijn wij?</h2>
              <p className="leading-relaxed mb-4">
                Zeilmakerij Liva is verantwoordelijk voor de verwerking van persoonsgegevens 
                zoals weergegeven in deze Privacy Policy.
              </p>
              <div className="bg-gray-50 rounded-sm p-6 border border-gray-100">
                <p className="text-primary mb-2 font-bold uppercase text-sm tracking-wider">Contactgegevens:</p>
                <div className="text-gray-600 space-y-1">
                  <p>Zeilmakerij Liva</p>
                  <p>Oud-Loosdrechtsedijk</p>
                  <p>1231 AB Loosdrecht</p>
                  <p>KVK: [Uw KVK Nummer]</p>
                  <p>Email: <a href="mailto:info@zeilmakerijliva.nl" className="text-accent hover:underline">info@zeilmakerijliva.nl</a></p>
                  <p>Telefoon: <a href="tel:+31600000000" className="text-accent hover:underline">+31 6 00 00 00 00</a></p>
                </div>
              </div>
            </div>

            {/* 2. Welke gegevens */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">2. Welke persoonsgegevens verzamelen wij?</h2>
              <p className="leading-relaxed mb-4">
                Zeilmakerij Liva kan de volgende persoonsgegevens van u verwerken:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                <li>Voor- en achternaam</li>
                <li>Bedrijfsnaam (indien van toepassing)</li>
                <li>Adresgegevens (voor inmeten en facturatie)</li>
                <li>Telefoonnummer</li>
                <li>E-mailadres</li>
                <li>Gegevens over uw vaartuig (tbv de opdracht)</li>
                <li>Gegevens die u zelf verstrekt via contactformulieren of email</li>
              </ul>
            </div>

            {/* 3. Waarvoor */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <p className="leading-relaxed mb-4">
                Zeilmakerij Liva verwerkt uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                <li>Het afhandelen van uw offerte-aanvragen en vragen</li>
                <li>Het maken van afspraken voor inmeten op locatie</li>
                <li>Het versturen van offertes en facturen</li>
                <li>Het leveren van onze diensten en producten</li>
                <li>Contact met u opnemen indien dit nodig is voor de uitvoering van onze dienstverlening</li>
                <li>Het nakomen van wettelijke verplichtingen (zoals belastingaangifte)</li>
              </ul>
            </div>

            {/* 4. Bewaartermijn */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">4. Hoe lang bewaren wij uw gegevens?</h2>
              <p className="leading-relaxed">
                Zeilmakerij Liva bewaart uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor 
                deze zijn verstrekt dan wel op grond van de wet is vereist. Wij hanteren de volgende bewaartermijnen:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-accent">
                <li>Contactgegevens van klanten: maximaal 7 jaar na laatste contact (tbv eventuele nazorg/garantie)</li>
                <li>Facturen en administratie: 7 jaar (wettelijke verplichting Belastingdienst)</li>
                <li>Offertes: 2 jaar na versturen</li>
              </ul>
            </div>

            {/* 5. Delen met derden */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">5. Delen wij uw gegevens met derden?</h2>
              <p className="leading-relaxed">
                Zeilmakerij Liva verkoopt uw gegevens niet aan derden en verstrekt deze alleen indien dit nodig is 
                voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. 
                Wij kunnen uw gegevens delen met:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-accent">
                <li>Onze boekhouder voor administratieve verwerking</li>
                <li>Overheidsinstanties indien wij hier wettelijk toe verplicht zijn</li>
              </ul>
            </div>

            {/* 6. Beveiliging */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">6. Hoe beveiligen wij uw gegevens?</h2>
              <p className="leading-relaxed">
                Zeilmakerij Liva neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om 
                misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging 
                tegen te gaan. Wij maken gebruik van:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-accent">
                <li>Beveiligde verbindingen (SSL/HTTPS) op onze website</li>
                <li>Beveiligde opslag van klantgegevens</li>
                <li>Beperkte toegang tot persoonsgegevens alleen voor bevoegde personen</li>
              </ul>
            </div>

            {/* 7. Uw rechten */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">7. Wat zijn uw rechten?</h2>
              <p className="leading-relaxed mb-4">
                U heeft recht op inzage, rectificatie of verwijdering van uw persoonsgegevens. Daarnaast heeft u 
                het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken 
                tegen de verwerking van uw persoonsgegevens door Zeilmakerij Liva.
              </p>
              <p className="leading-relaxed mb-4">
                U heeft tevens het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij ons een verzoek 
                kunt indienen om de persoonsgegevens die wij van u beschikken in een computerbestand naar u of 
                een ander, door u genoemde organisatie, te sturen.
              </p>
              <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-sm">
                <p className="text-gray-700 font-medium mb-2">
                  <strong>Verzoek indienen?</strong>
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  U kunt een verzoek tot inzage, correctie, verwijdering of gegevensoverdraging van uw 
                  persoonsgegevens sturen naar <a href="mailto:info@zeilmakerijliva.nl" className="text-accent hover:underline">info@zeilmakerijliva.nl</a>.
                </p>
                <p className="text-gray-500 text-xs italic">
                  Wij reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
                </p>
              </div>
            </div>

            {/* 8. Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">8. Cookies</h2>
              <p className="leading-relaxed">
                Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor het goed functioneren 
                van de website. Deze cookies verzamelen geen persoonsgegevens. Wij gebruiken geen tracking cookies 
                of analytische cookies zonder uw expliciete toestemming.
              </p>
            </div>

            {/* 9. Klachten */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">9. Klachten</h2>
              <p className="leading-relaxed">
                Mocht u een klacht hebben over de verwerking van uw persoonsgegevens, dan vragen wij u hierover 
                direct contact met ons op te nemen. U heeft ook het recht een klacht in te dienen bij de Autoriteit 
                Persoonsgegevens. Dit is de toezichthoudende autoriteit op het gebied van privacybescherming.
              </p>
            </div>

            {/* 10. Wijzigingen */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">10. Wijzigingen in deze Privacy Policy</h2>
              <p className="leading-relaxed">
                Zeilmakerij Liva behoudt zich het recht voor om wijzigingen aan te brengen in deze Privacy Policy. 
                Wij raden u aan om deze Privacy Policy regelmatig te raadplegen, zodat u van deze wijzigingen 
                op de hoogte bent.
              </p>
            </div>

            {/* Contact Blok */}
            <div className="bg-gray-50 rounded-sm p-8 mt-12 border-l-4 border-accent">
              <h3 className="text-xl font-bold font-special text-primary mb-4">Vragen over deze Privacy Policy?</h3>
              <p className="text-gray-600 mb-6">
                Heeft u na het lezen van deze Privacy Policy nog vragen? Neem dan gerust contact met ons op:
              </p>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="font-bold text-primary w-20">Email:</span> 
                  <a href="mailto:info@zeilmakerijliva.nl" className="text-accent hover:underline">info@zeilmakerijliva.nl</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold text-primary w-20">Telefoon:</span> 
                  <a href="tel:0356228460" className="text-accent hover:underline">035 622 8460</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold text-primary w-20">Adres:</span> 
                  <span>Horndijk 24, 1231 NK Loosdrecht</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}