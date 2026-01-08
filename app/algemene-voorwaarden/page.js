'use client'
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function AlgemeneVoorwaarden() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Algemene Voorwaarden" 
        description="Duidelijke en transparante afspraken voor industriële continuïteit"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            
            {/* Intro */}
            <div className="mb-16 border-b border-gray-100 pb-10">
              <p className="leading-relaxed text-xl font-medium text-primary/80">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van **Beltechniek B.V.**, 
                specialist in industriële elektrotechniek en paneelbouw. Door gebruik te maken van onze diensten, gaat u akkoord met deze voorwaarden.
              </p>
              <p className="text-xs font-black uppercase tracking-widest text-accent mt-6">
                Laatst gewijzigd: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Artikel 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">Artikel 1 - Definities</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>1.1 Beltechniek B.V.:</strong> De gebruiker van deze algemene voorwaarden, ingeschreven bij de KVK onder nummer [12345678].</p>
                <p><strong>1.2 Opdrachtgever:</strong> De rechtspersoon of natuurlijke persoon die handelt in de uitoefening van beroep of bedrijf en een overeenkomst aangaat met Beltechniek B.V.</p>
                <p><strong>1.3 Overeenkomst:</strong> Elke afspraak tussen Beltechniek B.V. en opdrachtgever met betrekking tot het leveren van industriële diensten, paneelbouw of storingsondersteuning.</p>
                <p><strong>1.4 Installatie:</strong> Het geheel aan elektrotechnische componenten, besturingskasten of machinale infrastructuren waarop de werkzaamheden betrekking hebben.</p>
              </div>
            </div>

            {/* Artikel 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">Artikel 2 - Toepasselijkheid</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>2.1</strong> Deze voorwaarden zijn van toepassing op alle offertes en overeenkomsten tussen Beltechniek B.V. en opdrachtgever.</p>
                <p><strong>2.2</strong> Afwijkingen zijn alleen geldig indien deze expliciet en schriftelijk door de directie van Beltechniek B.V. zijn bevestigd.</p>
                <p><strong>2.3</strong> De toepasselijkheid van algemene (inkoop)voorwaarden van de opdrachtgever wordt uitdrukkelijk van de hand gewezen.</p>
              </div>
            </div>

            {/* Artikel 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">Artikel 3 - Offertes en Tarieven</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>3.1</strong> Alle offertes van Beltechniek B.V. zijn vrijblijvend en 30 dagen geldig, tenzij anders aangegeven.</p>
                <p><strong>3.2</strong> Tarieven voor storingsdiensten worden berekend op basis van het op dat moment geldende uurtarief, inclusief eventuele toeslagen voor avond-, nacht- of weekenduren.</p>
                <p><strong>3.3</strong> Alle genoemde prijzen zijn exclusief BTW, voorrijkosten en materiaalkosten, tenzij schriftelijk anders overeengekomen.</p>
              </div>
            </div>

            {/* Artikel 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">Artikel 4 - Uitvoering van Werkzaamheden</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>4.1</strong> Beltechniek B.V. voert werkzaamheden uit volgens de geldende normen, waaronder NEN 1010 en NEN 3140.</p>
                <p><strong>4.2</strong> Opdrachtgever draagt zorg voor een veilige werkomgeving conform de Arbowetgeving en zorgt dat installaties op het afgesproken tijdstip toegankelijk zijn.</p>
                <p><strong>4.3</strong> Indien Beltechniek B.V. door oorzaken buiten haar schuld (wachttijden, onveilige situatie) niet kan starten, worden de gemaakte uren volledig in rekening gebracht.</p>
              </div>
            </div>

            {/* Artikel 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">Artikel 5 - Paneelbouw en Maatwerk</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>5.1</strong> Voor paneelbouwprojecten vindt de levering plaats na een succesvolle Factory Acceptance Test (FAT), tenzij anders afgesproken.</p>
                <p><strong>5.2</strong> Wijzigingen in het ontwerp na goedkeuring van de engineering worden als meerwerk gefactureerd.</p>
              </div>
            </div>

            {/* Artikel 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">Artikel 6 - Betaling en Verzuim</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>6.1</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum.</p>
                <p><strong>6.2</strong> Bij overschrijding van de termijn is de opdrachtgever direct in verzuim en is de wettelijke handelsrente verschuldigd.</p>
                <p><strong>6.3</strong> Beltechniek B.V. behoudt zich het recht voor om werkzaamheden op te schorten indien facturen niet tijdig worden voldaan.</p>
              </div>
            </div>

            {/* Artikel 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">Artikel 7 - Garantie</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>7.1</strong> Beltechniek B.V. verleent een garantie van 12 maanden op verrichte installatiewerkzaamheden.</p>
                <p><strong>7.2</strong> Op geleverde componenten (zoals PLC's, sensoren en schakelmateriaal) geldt uitsluitend de fabrieksgarantie van de betreffende leverancier.</p>
                <p><strong>7.3</strong> Garantie vervalt indien derden wijzigingen aan de installatie hebben aangebracht zonder schriftelijke toestemming van Beltechniek B.V.</p>
              </div>
            </div>

            {/* Artikel 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">Artikel 8 - Aansprakelijkheid</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>8.1</strong> Beltechniek B.V. is nimmer aansprakelijk voor indirecte schade, waaronder begrepen bedrijfsschade, gederfde winst of schade door productiestilstand.</p>
                <p><strong>8.2</strong> De totale aansprakelijkheid is te allen tijde beperkt tot het bedrag dat door de aansprakelijkheidsverzekering wordt uitgekeerd.</p>
              </div>
            </div>

            {/* Contact Blok */}
            <div className="bg-primary p-10 mt-20 rounded-sm border-l-8 border-accent shadow-2xl">
              <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-4">Vragen over onze voorwaarden?</h3>
              <p className="text-white/70 mb-8 font-medium">
                Wilt u een fysiek exemplaar ontvangen of heeft u vragen over een specifiek artikel? Onze administratie helpt u graag verder.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-accent font-black uppercase tracking-widest text-[10px] mb-1">Organisatie</p>
                  <p className="text-white font-bold">Beltechniek B.V.</p>
                  <p className="text-white/60">Industrieweg 12, 1234 AB</p>
                </div>
                <div>
                  <p className="text-accent font-black uppercase tracking-widest text-[10px] mb-1">Direct Contact</p>
                  <p className="text-white font-bold">info@beltechniek.nl</p>
                  <p className="text-white font-bold">+31 6 14987347</p>
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