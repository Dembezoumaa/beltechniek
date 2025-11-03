'use client'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Privacy Policy" 
        description="Hoe wij omgaan met uw persoonsgegevens"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="prose prose-lg max-w-none">
            
            {/* Intro */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Dienst Expert Cleaning Services hecht veel waarde aan de bescherming van uw persoonsgegevens. 
                In deze Privacy Policy leggen wij uit welke persoonsgegevens wij verzamelen en gebruiken en met 
                welk doel. Wij raden u aan deze Privacy Policy zorgvuldig te lezen.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Laatst gewijzigd:</strong> 9 oktober 2025
              </p>
            </div>

            {/* 1. Wie zijn wij */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Wie zijn wij?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dienst Expert Cleaning Services is verantwoordelijk voor de verwerking van persoonsgegevens 
                zoals weergegeven in deze Privacy Policy.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700"><strong>Contactgegevens:</strong></p>
                <p className="text-gray-600 mt-2">
                  Dienst Expert Cleaning Services<br />
                  Groene Steen 18<br />
                  1628 WN Hoorn<br />
                  KVK: 90215729<br />
                  Email: info@dienstexpert.nl<br />
                  Telefoon: +31 6 40 12 70 61
                </p>
              </div>
            </div>

            {/* 2. Welke gegevens */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Welke persoonsgegevens verzamelen wij?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dienst Expert kan de volgende persoonsgegevens van u verwerken:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Voor- en achternaam</li>
                <li>Bedrijfsnaam (indien van toepassing)</li>
                <li>Adresgegevens</li>
                <li>Telefoonnummer</li>
                <li>E-mailadres</li>
                <li>Gegevens die u zelf verstrekt via contactformulieren of email</li>
              </ul>
            </div>

            {/* 3. Waarvoor */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dienst Expert verwerkt uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Het afhandelen van uw aanvragen en vragen</li>
                <li>Het versturen van offertes en facturen</li>
                <li>Het leveren van onze diensten</li>
                <li>Contact met u opnemen indien dit nodig is voor onze dienstverlening</li>
                <li>Het nakomen van wettelijke verplichtingen</li>
              </ul>
            </div>

            {/* 4. Bewaartermijn */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Hoe lang bewaren wij uw gegevens?</h2>
              <p className="text-gray-600 leading-relaxed">
                Dienst Expert bewaart uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor 
                deze zijn verstrekt dan wel op grond van de wet is vereist. Wij hanteren de volgende bewaartermijnen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                <li>Contactgegevens van klanten: maximaal 7 jaar na laatste contact</li>
                <li>Facturen en administratie: 7 jaar (wettelijke verplichting)</li>
                <li>Offertes: 2 jaar na versturen</li>
              </ul>
            </div>

            {/* 5. Delen met derden */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Delen wij uw gegevens met derden?</h2>
              <p className="text-gray-600 leading-relaxed">
                Dienst Expert verkoopt uw gegevens niet aan derden en verstrekt deze alleen indien dit nodig is 
                voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. 
                Wij kunnen uw gegevens delen met:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                <li>Onze administrateur of boekhouder voor facturatie</li>
                <li>Overheidsinstanties indien wij hier wettelijk toe verplicht zijn</li>
              </ul>
            </div>

            {/* 6. Beveiliging */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Hoe beveiligen wij uw gegevens?</h2>
              <p className="text-gray-600 leading-relaxed">
                Dienst Expert neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om 
                misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging 
                tegen te gaan. Wij maken gebruik van:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                <li>Beveiligde verbindingen (SSL/HTTPS)</li>
                <li>Regelmatige back-ups van gegevens</li>
                <li>Beperkte toegang tot persoonsgegevens voor medewerkers</li>
              </ul>
            </div>

            {/* 7. Uw rechten */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Wat zijn uw rechten?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                U heeft recht op inzage, rectificatie of verwijdering van uw persoonsgegevens. Daarnaast heeft u 
                het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken 
                tegen de verwerking van uw persoonsgegevens door Dienst Expert.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                U heeft tevens het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij ons een verzoek 
                kunt indienen om de persoonsgegevens die wij van u beschikken in een computerbestand naar u of 
                een ander, door u genoemde organisatie, te sturen.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#40B9FF] p-6 rounded">
                <p className="text-gray-700">
                  <strong>Verzoeken indienen?</strong><br />
                  U kunt een verzoek tot inzage, correctie, verwijdering of gegevensoverdraging van uw 
                  persoonsgegevens sturen naar <a href="mailto:info@dienstexpert.nl" className="text-[#40B9FF] hover:underline">info@dienstexpert.nl</a>.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Wij reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
                </p>
              </div>
            </div>

            {/* 8. Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor het goed functioneren 
                van de website. Deze cookies verzamelen geen persoonsgegevens. Wij gebruiken geen tracking cookies 
                of analytische cookies zonder uw toestemming.
              </p>
            </div>

            {/* 9. Klachten */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Klachten</h2>
              <p className="text-gray-600 leading-relaxed">
                Mocht u een klacht hebben over de verwerking van uw persoonsgegevens, dan vragen wij u hierover 
                direct contact met ons op te nemen. U heeft ook het recht een klacht in te dienen bij de Autoriteit 
                Persoonsgegevens. Dit is de toezichthoudende autoriteit op het gebied van privacybescherming.
              </p>
            </div>

            {/* 10. Wijzigingen */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Wijzigingen in deze Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Dienst Expert behoudt zich het recht voor om wijzigingen aan te brengen in deze Privacy Policy. 
                Wij raden u aan om deze Privacy Policy regelmatig te raadplegen, zodat u van deze wijzigingen 
                op de hoogte bent.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Vragen over deze Privacy Policy?</h3>
              <p className="text-gray-600 mb-4">
                Heeft u na het lezen van deze Privacy Policy nog vragen? Neem dan gerust contact met ons op:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:info@dienstexpert.nl" className="text-[#40B9FF] hover:underline">info@dienstexpert.nl</a></p>
                <p><strong>Telefoon:</strong> <a href="tel:+31640127061" className="text-[#40B9FF] hover:underline">+31 6 40 12 70 61</a></p>
                <p><strong>Adres:</strong> Groene Steen 18, 1628 WN Hoorn</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
