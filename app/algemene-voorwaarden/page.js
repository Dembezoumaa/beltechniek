'use client'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function AlgemeneVoorwaarden() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Algemene Voorwaarden" 
        description="Voorwaarden voor onze dienstverlening"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="prose prose-lg max-w-none">
            
            {/* Intro */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten van Dienst Expert 
                Cleaning Services, gevestigd te Hoorn. Door gebruik te maken van onze diensten, gaat u akkoord met 
                deze voorwaarden.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Laatst gewijzigd:</strong> 9 oktober 2025
              </p>
            </div>

            {/* Artikel 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 1 - Definities</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>1.1</strong> Dienst Expert: Dienst Expert Cleaning Services, gevestigd te Groene Steen 18, 1628 WN Hoorn, KVK-nummer 90215729.</p>
                <p><strong>1.2</strong> Opdrachtgever: de natuurlijke of rechtspersoon die met Dienst Expert een overeenkomst aangaat.</p>
                <p><strong>1.3</strong> Overeenkomst: elke afspraak tussen Dienst Expert en opdrachtgever met betrekking tot het leveren van diensten.</p>
              </div>
            </div>

            {/* Artikel 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 2 - Toepasselijkheid</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>2.1</strong> Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Dienst Expert en opdrachtgever.</p>
                <p><strong>2.2</strong> Afwijkingen op deze voorwaarden zijn alleen geldig indien deze schriftelijk zijn overeengekomen.</p>
                <p><strong>2.3</strong> De toepasselijkheid van eventuele inkoop- of andere voorwaarden van opdrachtgever wordt uitdrukkelijk van de hand gewezen.</p>
              </div>
            </div>

            {/* Artikel 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 3 - Aanbiedingen en offertes</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>3.1</strong> Alle aanbiedingen en offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.</p>
                <p><strong>3.2</strong> Een offerte is geldig gedurende 30 dagen na dagtekening, tenzij anders aangegeven.</p>
                <p><strong>3.3</strong> Indien de opdrachtgever een offerte niet binnen de geldigheidstermijn accepteert, vervalt de offerte.</p>
                <p><strong>3.4</strong> Prijzen in offertes zijn exclusief BTW, tenzij anders vermeld.</p>
              </div>
            </div>

            {/* Artikel 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 4 - Totstandkoming overeenkomst</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>4.1</strong> Een overeenkomst komt tot stand op het moment dat opdrachtgever een offerte schriftelijk (digitaal of fysiek) accepteert.</p>
                <p><strong>4.2</strong> Dienst Expert behoudt zich het recht voor een opdracht te weigeren zonder opgave van redenen.</p>
              </div>
            </div>

            {/* Artikel 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 5 - Uitvoering van de overeenkomst</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>5.1</strong> Dienst Expert zal de overeenkomst naar beste inzicht en vermogen uitvoeren.</p>
                <p><strong>5.2</strong> De uitvoering geschiedt op basis van de door opdrachtgever verstrekte informatie.</p>
                <p><strong>5.3</strong> Opdrachtgever draagt er zorg voor dat alle gegevens die nodig zijn voor het uitvoeren van de werkzaamheden tijdig worden verstrekt.</p>
                <p><strong>5.4</strong> Opdrachtgever zorgt voor vrije en veilige toegang tot de te reinigen ruimtes.</p>
              </div>
            </div>

            {/* Artikel 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 6 - Wijziging van de overeenkomst</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>6.1</strong> Indien tijdens de uitvoering blijkt dat voor een behoorlijke uitvoering het nodig is om de werkzaamheden te wijzigen of aan te vullen, zullen partijen tijdig en in overleg de overeenkomst dienovereenkomstig aanpassen.</p>
                <p><strong>6.2</strong> Meerwerk wordt apart gefactureerd, tenzij schriftelijk anders is overeengekomen.</p>
              </div>
            </div>

            {/* Artikel 7 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 7 - Prijzen en betaling</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>7.1</strong> Alle prijzen zijn exclusief BTW, tenzij anders vermeld.</p>
                <p><strong>7.2</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders is overeengekomen.</p>
                <p><strong>7.3</strong> Bij overschrijding van de betalingstermijn is opdrachtgever van rechtswege in verzuim en is Dienst Expert gerechtigd wettelijke rente in rekening te brengen.</p>
                <p><strong>7.4</strong> Bij niet-tijdige betaling zijn alle buitengerechtelijke incassokosten voor rekening van opdrachtgever.</p>
              </div>
            </div>

            {/* Artikel 8 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 8 - Annulering</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>8.1</strong> Annulering door opdrachtgever dient minimaal 24 uur van tevoren schriftelijk of telefonisch te worden doorgegeven.</p>
                <p><strong>8.2</strong> Bij annulering binnen 24 uur voor de geplande werkzaamheden behoudt Dienst Expert zich het recht voor 50% van het afgesproken bedrag in rekening te brengen.</p>
                <p><strong>8.3</strong> Bij annulering op de dag zelf of bij geen toegang tot de locatie, wordt 100% van het afgesproken bedrag in rekening gebracht.</p>
              </div>
            </div>

            {/* Artikel 9 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 9 - Aansprakelijkheid</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>9.1</strong> Dienst Expert is alleen aansprakelijk voor schade die het directe gevolg is van een toerekenbare tekortkoming in de nakoming van de overeenkomst.</p>
                <p><strong>9.2</strong> Dienst Expert is niet aansprakelijk voor schade aan reeds beschadigde objecten, tenzij de schade is ontstaan door grove schuld of opzet van Dienst Expert.</p>
                <p><strong>9.3</strong> De aansprakelijkheid van Dienst Expert is beperkt tot het bedrag van de opdracht, met een maximum van € 2.500,-.</p>
                <p><strong>9.4</strong> Opdrachtgever dient eventuele schade binnen 24 uur na constatering schriftelijk te melden.</p>
                <p><strong>9.5</strong> Dienst Expert is verzekerd voor bedrijfsaansprakelijkheid.</p>
              </div>
            </div>

            {/* Artikel 10 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 10 - Overmacht</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>10.1</strong> In geval van overmacht is Dienst Expert niet gehouden tot nakoming van enige verplichting jegens opdrachtgever.</p>
                <p><strong>10.2</strong> Onder overmacht wordt verstaan: ziekte van personeel, extreme weersomstandigheden, overheidsmaatregelen, of andere omstandigheden buiten de macht van Dienst Expert.</p>
                <p><strong>10.3</strong> Bij overmacht zal in overleg een nieuwe datum worden vastgesteld.</p>
              </div>
            </div>

            {/* Artikel 11 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 11 - Klachten</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>11.1</strong> Klachten over de verrichte werkzaamheden dienen binnen 24 uur na voltooiing schriftelijk of telefonisch te worden gemeld.</p>
                <p><strong>11.2</strong> Dienst Expert zal klachten zo spoedig mogelijk behandelen en indien gerechtvaardigd kosteloos herstellen.</p>
                <p><strong>11.3</strong> Na het verstrijken van de klachtentermijn worden geen klachten meer in behandeling genomen.</p>
              </div>
            </div>

            {/* Artikel 12 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Artikel 12 - Toepasselijk recht</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>12.1</strong> Op alle overeenkomsten tussen Dienst Expert en opdrachtgever is uitsluitend Nederlands recht van toepassing.</p>
                <p><strong>12.2</strong> Geschillen zullen bij voorkeur in onderling overleg worden opgelost.</p>
                <p><strong>12.3</strong> Indien een geschil niet in onderling overleg kan worden opgelost, is uitsluitend de bevoegde rechter in het arrondissement van de vestigingsplaats van Dienst Expert bevoegd.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Vragen over deze voorwaarden?</h3>
              <p className="text-gray-600 mb-4">
                Heeft u vragen over deze algemene voorwaarden? Neem dan contact met ons op:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Dienst Expert Cleaning Services</strong></p>
                <p>Groene Steen 18, 1628 WN Hoorn</p>
                <p>KVK: 90215729</p>
                <p><strong>Email:</strong> <a href="mailto:info@dienstexpert.nl" className="text-[#40B9FF] hover:underline">info@dienstexpert.nl</a></p>
                <p><strong>Telefoon:</strong> <a href="tel:+31640127061" className="text-[#40B9FF] hover:underline">+31 6 40 12 70 61</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
