'use client'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation' // Check of dit pad klopt
// AANGEPAST: Relatief pad (..) om bij PageHeader te komen
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formRef, formVisible] = useScrollAnimation()
  const [infoRef, infoVisible] = useScrollAnimation()
  
  const [formData, setFormData] = useState({
    naam: '',
    achternaam: '',
    email: '',
    adres: '',
    woonplaats: '',
    telefoon: '',
    bericht: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hier later je API call toevoegen (bijv. Formspree of eigen backend)
    alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact op.')
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Neem contact met ons op" 
        description="Wij helpen u graag verder met advies op maat"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Formulier */}
            <div 
              ref={formRef}
              className={`transition-all duration-1000 ${
                formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold font-special text-primary mb-6">Stuur ons een bericht</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="naam"
                      required
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-200 focus:border-accent outline-none py-2 transition text-gray-900 bg-transparent placeholder-gray-400"
                      placeholder="Voornaam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      name="achternaam"
                      required 
                      value={formData.achternaam}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-200 focus:border-accent outline-none py-2 transition text-gray-900 bg-transparent placeholder-gray-400"
                      placeholder="Achternaam"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-200 focus:border-accent outline-none py-2 transition text-gray-900 bg-transparent placeholder-gray-400"
                    placeholder="uw@email.nl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        Adres
                      </label>
                      <input
                        type="text"
                        name="adres"
                        value={formData.adres}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-200 focus:border-accent outline-none py-2 transition text-gray-900 bg-transparent placeholder-gray-400"
                        placeholder="Straat en huisnummer"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        Woonplaats
                      </label>
                      <input
                        type="text"
                        name="woonplaats"
                        value={formData.woonplaats}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-200 focus:border-accent outline-none py-2 transition text-gray-900 bg-transparent placeholder-gray-400"
                        placeholder="Plaats"
                      />
                    </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    name="telefoon"
                    required
                    value={formData.telefoon}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-200 focus:border-accent outline-none py-2 transition text-gray-900 bg-transparent placeholder-gray-400"
                    placeholder="06 12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Uw vraag of opmerking
                  </label>
                  <textarea
                    name="bericht"
                    rows="4"
                    value={formData.bericht}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 focus:border-accent outline-none p-3 rounded-sm transition resize-none text-gray-900 bg-transparent placeholder-gray-400"
                    placeholder="Waar kunnen we u mee helpen?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-full transition shadow-lg transform hover:-translate-y-1 duration-200"
                >
                  VERZENDEN
                </button>
              </form>
            </div>

            {/* Bedrijfsgegevens + Map */}
            <div 
              ref={infoRef}
              className={`space-y-8 transition-all duration-1000 ${
                infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-gray-50 rounded-sm p-8 border border-gray-100 shadow-md">
                <h3 className="text-xl font-bold font-special text-primary mb-6">
                  Bedrijfsgegevens
                </h3>
                
                <div className="space-y-5 text-gray-700">
                  <div>
                    <p className="font-bold text-primary mb-1 uppercase text-xs tracking-wider">Bedrijf</p>
                    <p className="text-lg font-special">Zeilmakerij Liva</p>
                  </div>

                  <div>
                    <p className="font-bold text-primary mb-1 uppercase text-xs tracking-wider">KVK-nummer</p>
                    <p>[78366380]</p>
                  </div>

                  <div>
                    <p className="font-bold text-primary mb-1 uppercase text-xs tracking-wider">Bezoekadres</p>
                    <p>Horndijk 24</p>
                    <p>1231NK Loosdrecht</p>
                    
                  </div>
                  
                  <div>
                    <p className="font-bold text-primary mb-1 uppercase text-xs tracking-wider">Contact</p>
                    <p>
                        <a href="tel:0356228460" className="text-accent hover:underline font-medium">
                        035 622 8460
                        </a>
                    </p>
                    <p>
                        <a href="mailto:info@zeilmakerijliva.nl" className="text-accent hover:underline font-medium">
                        info@zeilmakerijliva.nl
                        </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-sm overflow-hidden h-80 shadow-lg border border-gray-200">
                {/* Google Maps Embed - Loosdrecht */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.712965317284!2d5.065483076059344!3d52.21226345896867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66d77a4e2a685%3A0x8cea5ecc4186b845!2sHorndijk%2024%2C%201231%20NX%20Loosdrecht!5e0!3m2!1sen!2snl!4v1765922644344!5m2!1sen!2snl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}