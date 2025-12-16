'use client'
// Zorg dat het pad naar PageHeader klopt (één mapje omhoog met ..)
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function AlgemeneVoorwaarden() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Algemene Voorwaarden" 
        description="Duidelijke afspraken voor onze dienstverlening"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            
            {/* Intro */}
            <div className="mb-10">
              <p className="leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van Zeilmakerij Liva, 
                gevestigd te Loosdrecht. Door gebruik te maken van onze diensten en producten, gaat u akkoord met deze voorwaarden.
                Wij geloven in transparantie en duidelijke afspraken, zodat u precies weet waar u aan toe bent.
              </p>
              <p className="text-sm text-gray-400 mt-4 italic">
                <strong>Laatst gewijzigd:</strong> {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Artikel 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 1 - Definities</h2>
              <div className="space-y-3">
                <p><strong>1.1</strong> Zeilmakerij Liva: de gebruiker van deze algemene voorwaarden, gevestigd te Oud-Loosdrechtsedijk, 1231 AB Loosdrecht.</p>
                <p><strong>1.2</strong> Opdrachtgever: de natuurlijke of rechtspersoon die met Zeilmakerij Liva een overeenkomst aangaat.</p>
                <p><strong>1.3</strong> Overeenkomst: elke afspraak tussen Zeilmakerij Liva en opdrachtgever met betrekking tot het leveren van producten en/of diensten.</p>
                <p><strong>1.4</strong> Maatwerk: producten die specifiek voor de opdrachtgever op maat zijn vervaardigd (zoals buiskappen, dekkleden, stoffering).</p>
              </div>
            </div>

            {/* Artikel 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 2 - Toepasselijkheid</h2>
              <div className="space-y-3">
                <p><strong>2.1</strong> Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Zeilmakerij Liva en opdrachtgever.</p>
                <p><strong>2.2</strong> Afwijkingen op deze voorwaarden zijn alleen geldig indien deze schriftelijk en uitdrukkelijk zijn overeengekomen.</p>
                <p><strong>2.3</strong> De toepasselijkheid van eventuele inkoop- of andere voorwaarden van opdrachtgever wordt uitdrukkelijk van de hand gewezen.</p>
              </div>
            </div>

            {/* Artikel 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 3 - Aanbiedingen en offertes</h2>
              <div className="space-y-3">
                <p><strong>3.1</strong> Alle aanbiedingen en offertes zijn vrijblijvend, tenzij in het aanbod een termijn voor aanvaarding is genoemd.</p>
                <p><strong>3.2</strong> Een offerte is geldig gedurende 30 dagen na dagtekening, tenzij anders aangegeven. Na deze termijn kunnen prijswijzigingen worden doorgevoerd.</p>
                <p><strong>3.3</strong> Zeilmakerij Liva kan niet aan zijn offertes of aanbiedingen worden gehouden indien de opdrachtgever redelijkerwijs kan begrijpen dat de offertes of aanbiedingen, dan wel een onderdeel daarvan, een kennelijke vergissing of verschrijving bevat.</p>
                <p><strong>3.4</strong> De in een offerte of aanbieding vermelde prijzen zijn exclusief BTW en andere heffingen van overheidswege, tenzij anders aangegeven.</p>
              </div>
            </div>

            {/* Artikel 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 4 - Totstandkoming overeenkomst</h2>
              <div className="space-y-3">
                <p><strong>4.1</strong> Een overeenkomst komt tot stand op het moment dat de opdrachtgever een offerte schriftelijk (per e-mail of fysiek ondertekend) accordeert, of wanneer Zeilmakerij Liva met de uitvoering van de opdracht is begonnen.</p>
                <p><strong>4.2</strong> Voor meerwerk dat tijdens de uitvoering van de opdracht wordt verlangd, zullen aparte afspraken worden gemaakt die als aanvulling op de overeenkomst gelden.</p>
              </div>
            </div>

            {/* Artikel 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 5 - Uitvoering en inmeten</h2>
              <div className="space-y-3">
                <p><strong>5.1</strong> Zeilmakerij Liva zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren.</p>
                <p><strong>5.2</strong> Indien de opdracht het vervaardigen van maatwerk betreft, is de opdrachtgever verantwoordelijk voor het beschikbaar stellen van het object (boot/meubilair) voor het inmeten.</p>
                <p><strong>5.3</strong> Geringe afwijkingen in kleur, kwaliteit, hardheid, dikte enz. geven geen reden tot afkeuring. Bij natuurproducten en textiel zijn kleine variaties inherent aan het materiaal.</p>
                <p><strong>5.4</strong> Zeilmakerij Liva heeft het recht bepaalde werkzaamheden te laten verrichten door derden, indien dit voor een goede uitvoering van de overeenkomst wenselijk is.</p>
              </div>
            </div>

            {/* Artikel 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 6 - Levering en levertijd</h2>
              <div className="space-y-3">
                <p><strong>6.1</strong> De opgegeven levertijden zijn indicatief en nimmer fatale termijnen, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.</p>
                <p><strong>6.2</strong> Bij overschrijding van een termijn dient de opdrachtgever Zeilmakerij Liva schriftelijk in gebreke te stellen. Zeilmakerij Liva dient daarbij een redelijke termijn te worden geboden om alsnog uitvoering te geven aan de overeenkomst.</p>
              </div>
            </div>

            {/* Artikel 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 7 - Prijzen en betaling</h2>
              <div className="space-y-3">
                <p><strong>7.1</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum, op een door Zeilmakerij Liva aan te geven wijze.</p>
                <p><strong>7.2</strong> Voor grotere opdrachten kan Zeilmakerij Liva een aanbetaling verlangen alvorens met de werkzaamheden wordt gestart (bijvoorbeeld voor de inkoop van materialen).</p>
                <p><strong>7.3</strong> Bij overschrijding van de betalingstermijn is de opdrachtgever van rechtswege in verzuim. De opdrachtgever is alsdan de wettelijke rente verschuldigd.</p>
                <p><strong>7.4</strong> Bezwaren tegen de hoogte van een factuur schorten de betalingsverplichting niet op.</p>
              </div>
            </div>

            {/* Artikel 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 8 - Garantie en reclames</h2>
              <div className="space-y-3">
                <p><strong>8.1</strong> Zeilmakerij Liva staat in voor de deugdelijkheid van de geleverde zaken en de kwaliteit van de gebruikte materialen.</p>
                <p><strong>8.2</strong> De garantie op stikwerk en constructie bedraagt standaard 12 maanden na levering, tenzij anders overeengekomen. Op materialen geldt de fabrieksgarantie van de toeleverancier.</p>
                <p><strong>8.3</strong> Reclames dienen binnen 14 dagen na levering schriftelijk aan Zeilmakerij Liva kenbaar te worden gemaakt. Na het verstrijken van deze termijn wordt de opdrachtgever geacht het geleverde te hebben goedgekeurd.</p>
                <p><strong>8.4</strong> Normale slijtage, verkleuring door weersinvloeden en schade door onjuist gebruik vallen niet onder de garantie.</p>
              </div>
            </div>

            {/* Artikel 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 9 - Aansprakelijkheid</h2>
              <div className="space-y-3">
                <p><strong>9.1</strong> Zeilmakerij Liva is niet aansprakelijk voor schade, van welke aard ook, ontstaan doordat is uitgegaan van door of namens de opdrachtgever verstrekte onjuiste en/of onvolledige gegevens.</p>
                <p><strong>9.2</strong> De aansprakelijkheid van Zeilmakerij Liva is in ieder geval steeds beperkt tot het bedrag der uitkering van zijn verzekeraar in voorkomend geval.</p>
                <p><strong>9.3</strong> Indien de verzekeraar in enig geval niet tot uitkering overgaat of de schade niet door de verzekering wordt gedekt, is de aansprakelijkheid van Zeilmakerij Liva beperkt tot het factuurbedrag van de opdracht, althans dat gedeelte van de opdracht waarop de aansprakelijkheid betrekking heeft.</p>
              </div>
            </div>

            {/* Artikel 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 10 - Eigendomsvoorbehoud</h2>
              <div className="space-y-3">
                <p><strong>10.1</strong> Alle door Zeilmakerij Liva geleverde zaken blijven eigendom van Zeilmakerij Liva totdat de opdrachtgever alle navolgende verplichtingen uit alle met Zeilmakerij Liva gesloten overeenkomsten is nagekomen.</p>
              </div>
            </div>

            {/* Artikel 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold font-special text-primary mb-4">Artikel 11 - Toepasselijk recht</h2>
              <div className="space-y-3">
                <p><strong>11.1</strong> Op alle rechtsbetrekkingen waarbij Zeilmakerij Liva partij is, is uitsluitend het Nederlands recht van toepassing.</p>
                <p><strong>11.2</strong> Partijen zullen eerst een beroep op de rechter doen nadat zij zich tot het uiterste hebben ingespannen een geschil in onderling overleg te beslechten.</p>
              </div>
            </div>

            {/* Contact Blok */}
            <div className="bg-gray-50 rounded-sm p-8 mt-12 border-l-4 border-accent">
              <h3 className="text-xl font-bold font-special text-primary mb-4">Vragen over deze voorwaarden?</h3>
              <p className="text-gray-600 mb-6">
                Heeft u vragen over deze algemene voorwaarden of wilt u meer informatie? Neem gerust contact met ons op.
              </p>
              <div className="space-y-3 text-gray-700">
                <p className="font-bold text-primary">Zeilmakerij Liva</p>
                <p>Horndijk 24, 1231 NK Loosdrecht</p>
                <p>KVK: [78366380]</p>
                <p className="flex items-center gap-2">
                  <span className="font-bold text-primary w-20">Email:</span> 
                  <a href="mailto:info@zeilmakerijliva.nl" className="text-accent hover:underline">info@zeilmakerijliva.nl</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold text-primary w-20">Telefoon:</span> 
                  <a href="tel:0356228460" className="text-accent hover:underline">035 622 8460</a>
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