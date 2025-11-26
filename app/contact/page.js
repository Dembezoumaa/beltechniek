'use client'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation' // Pas pad aan indien nodig
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formRef, formVisible] = useScrollAnimation()
  const [infoRef, infoVisible] = useScrollAnimation()
  
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    naam: '',
    achternaam: '',
    email: '',
    adres: '',
    woonplaats: '',
    telefoon: '',
    soortDienst: '',
    bericht: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hier later je API call toevoegen
    alert('Formulier verzonden! (Nog geen backend)')
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Neem contact met ons op" 
        description="Wij helpen u graag verder"
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
              <h3 className="text-xl font-bold text-gray-800 mb-6">Stuur ons een bericht</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Bedrijfsnaam - Nu Verplicht */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bedrijfsnaam *
                  </label>
                  <input
                    type="text"
                    name="bedrijfsnaam"
                    placeholder="Uw bedrijfsnaam"
                    required
                    value={formData.bedrijfsnaam}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-[#40B9FF] outline-none py-2 transition text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="naam"
                      required
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-300 focus:border-[#40B9FF] outline-none py-2 transition text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      name="achternaam"
                      required // Nu verplicht
                      value={formData.achternaam}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-300 focus:border-[#40B9FF] outline-none py-2 transition text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-[#40B9FF] outline-none py-2 transition text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adres
                  </label>
                  <input
                    type="text"
                    name="adres"
                    value={formData.adres}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-[#40B9FF] outline-none py-2 transition text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Woonplaats
                  </label>
                  <input
                    type="text"
                    name="woonplaats"
                    value={formData.woonplaats}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-[#40B9FF] outline-none py-2 transition text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    name="telefoon"
                    required
                    value={formData.telefoon}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-[#40B9FF] outline-none py-2 transition text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Soort dienst
                  </label>
                  <select
                    name="soortDienst"
                    value={formData.soortDienst}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-[#40B9FF] outline-none py-2 bg-white transition text-gray-900"
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="kantoor">Kantoorschoonmaak</option>
                    <option value="horeca">Horecaschoonmaak</option>
                    <option value="oplevering">Opleveringsschoonmaak</option>
                    <option value="glas">Glasbewassing</option>
                    <option value="periodiek">Periodieke schoonmaak</option>
                    <option value="diepte">Dieptereiniging</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                {/* Reden van contact is VERWIJDERD zoals gevraagd */}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Schrijf een bericht
                  </label>
                  <textarea
                    name="bericht"
                    rows="4"
                    value={formData.bericht}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 focus:border-[#40B9FF] outline-none p-3 rounded-lg transition resize-none text-gray-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#40B9FF] hover:bg-[#3AA8E8] text-white font-semibold py-3 px-8 rounded-full transition shadow-md"
                >
                  Verzenden
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
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Bedrijfsgegevens
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">KVK-nummer:</p>
                    <p>90215729</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Adres:</p>
                    <p>Groene Steen 18</p>
                    <p>1628 WN Hoorn</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Tel:</p>
                    <a href="tel:+31640127061" className="text-[#40B9FF] hover:underline">
                      +31 6 40 12 70 61
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 mb-1">E-mail:</p>
                    <a href="mailto:info@dienstexpert.nl" className="text-[#40B9FF] hover:underline">
                      info@dienstexpert.nl
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.6568173459286!2d5.0588433!3d52.6439722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609a130e0596b%3A0x6506060606060606!2sGroene%20Steen%2018%2C%201628%20WN%20Hoorn!5e0!3m2!1snl!2snl!4v1234567890"
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