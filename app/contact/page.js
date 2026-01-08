'use client'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation' 
import PageHeader from '../PageHeader'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formRef, formVisible] = useScrollAnimation()
  const [infoRef, infoVisible] = useScrollAnimation()
  
  const [formData, setFormData] = useState({
    naam: '',
    bedrijfsnaam: '',
    email: '',
    telefoon: '',
    onderwerp: 'Service aanvraag',
    bericht: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Bedankt voor uw bericht! Onze technische dienst neemt zo spoedig mogelijk contact met u op.')
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white text-primary">
      <PageHeader 
        title="Contact & Support" 
        description="Directe ondersteuning bij storingen of een vrijblijvende offerte voor uw project."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Formulier */}
            <div 
              ref={formRef}
              className={`transition-all duration-1000 ${
                formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="mb-10">
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Direct contact</h3>
                <p className="text-gray-500 font-medium">Vul het formulier in voor algemene vragen of projectaanvragen. Bij acute storingen adviseren wij telefonisch contact op te nemen.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">
                      Uw Naam *
                    </label>
                    <input
                      type="text"
                      name="naam"
                      required
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-100 focus:border-accent outline-none py-3 transition text-primary font-bold bg-transparent placeholder-gray-300"
                      placeholder="Volledige naam"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      name="bedrijfsnaam"
                      value={formData.bedrijfsnaam}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-100 focus:border-accent outline-none py-3 transition text-primary font-bold bg-transparent placeholder-gray-300"
                      placeholder="Bedrijfsnaam B.V."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">
                      Email Adres *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-100 focus:border-accent outline-none py-3 transition text-primary font-bold bg-transparent placeholder-gray-300"
                      placeholder="naam@bedrijf.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      name="telefoon"
                      required
                      value={formData.telefoon}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-100 focus:border-accent outline-none py-3 transition text-primary font-bold bg-transparent placeholder-gray-300"
                      placeholder="+31 6 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">
                    Type Aanvraag
                  </label>
                  <select 
                    name="onderwerp"
                    value={formData.onderwerp}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-100 focus:border-accent outline-none py-3 transition text-primary font-bold bg-transparent cursor-pointer"
                  >
                    <option value="Service aanvraag">Service aanvraag</option>
                    <option value="Project calculatie">Project calculatie</option>
                    <option value="Onderhoudscontract">Onderhoudscontract</option>
                    <option value="Storing melden">Storing melden</option>
                    <option value="Overig">Overig</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">
                    Uw Bericht
                  </label>
                  <textarea
                    name="bericht"
                    rows="4"
                    value={formData.bericht}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-100 focus:border-accent outline-none p-4 rounded-sm transition resize-none text-primary font-bold bg-transparent placeholder-gray-300"
                    placeholder="Omschrijf hier uw aanvraag of de aard van de storing..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-white font-black py-5 px-8 rounded-sm transition-all shadow-xl uppercase tracking-widest text-sm"
                >
                  Bericht verzenden
                </button>
              </form>
            </div>

            {/* Bedrijfsgegevens + Map */}
            <div 
              ref={infoRef}
              className={`space-y-12 transition-all duration-1000 delay-200 ${
                infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-primary p-12 rounded-sm text-white shadow-2xl relative overflow-hidden">
                {/* Accent detail */}
                <div className="absolute top-0 right-0 w-32 h-1 bg-accent"></div>
                
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">
                  Bedrijfsinformatie
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-accent font-black uppercase text-[10px] tracking-[0.3em] mb-2">Hoofdkantoor</p>
                    <p className="text-xl font-bold uppercase tracking-tighter">Beltechniek B.V.</p>
                    <p className="text-white/60 font-medium">Industrieweg 12</p>
                    <p className="text-white/60 font-medium">1234 AB, Nederland</p>
                  </div>

                  <div>
                    <p className="text-accent font-black uppercase text-[10px] tracking-[0.3em] mb-2">Direct Contact</p>
                    <p className="text-2xl font-black tracking-tight mb-1">
                      <a href="tel:+31614987347" className="hover:text-accent transition-colors">
                        +31 6 14987347
                      </a>
                    </p>
                    <p className="text-lg font-bold text-white/80">
                      <a href="mailto:info@beltechniek.nl" className="hover:text-accent transition-colors border-b border-white/10">
                        info@beltechniek.nl
                      </a>
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">KVK Nummer</p>
                      <p className="text-sm font-bold">12345678</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">BTW Nummer</p>
                      <p className="text-sm font-bold">NL001234567B01</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-sm overflow-hidden h-96 shadow-xl border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.3178550550087!2d4.263723577003964!3d52.05573577049792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b13e0a730dab%3A0x6f559fe70446feed!2sParking%20lot%2C%20Florence%20Nightingaleweg%205%2C%202545%20CD%20Den%20Haag!5e0!3m2!1sen!2snl!4v1767892941470!5m2!1sen!2snl"
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