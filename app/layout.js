import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // 1. SEO: Een betere titel template
  title: {
    default: 'Zeilmakerij Liva | Maatwerk Bootkappen & Stoffering Loosdrecht',
    template: '%s | Zeilmakerij Liva'
  },
  // 2. SEO: Omschrijving
  description: "Zeilmakerij Liva is uw specialist voor maatwerk bootkappen, biminitops, afdekzeilen en jachtstoffering in Loosdrecht. Premium materialen, ambachtelijk vervaardigd. Vraag vrijblijvend een offerte aan.",
  keywords: ['zeilmakerij Loosdrecht', 
    'buiskap op maat', 
    'bootkappen', 
    'biminitop', 
    'afdekzeil boot', 
    'jachtstoffering', 
    'bootkussens bekleden', 
    'zeilmakerij het Gooi',
    'dekzeil boot',
    'bootkap reparatie'],
  
   // 3. Social Media
  openGraph: {
    title: 'Zeilmakerij Liva | Maatwerk Bootkappen & Stoffering',
    description: 'Ambachtelijk zeildoekwerk en stoffering voor uw boot. 100% maatwerk, premium materialen. Gevestigd in Loosdrecht.',
    url: 'https://www.zeilmakerijliva.nl',
    siteName: 'Zeilmakerij Liva',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  // 4. Structured Data (Voor Google)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness', // Lokaal bedrijf voor zeilmakerij
    name: 'Zeilmakerij Liva',
    image: 'https://www.zeilmakerijliva.nl/logo.png', // Zorg dat deze afbeelding bestaat
    description: 'Ambachtelijke zeilmakerij gespecialiseerd in maatwerk bootkappen, biminitops, afdekzeilen en jachtstoffering in Loosdrecht. Premium materialen en vakmanschap voor uw boot.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Horndijk 24a',
      addressLocality: 'Loosdrecht',
      postalCode: '1231 NK',
      addressCountry: 'NL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.2044,  // Coördinaten Loosdrecht (pas aan naar exacte locatie indien nodig)
      longitude: 5.1311
    },
    telephone: '035 622 8460',
    email: 'info@zeilmakerijliva.nl',
    url: 'https://www.zeilmakerijliva.nl',
    priceRange: '$$$', // Hogere prijsklasse vanwege maatwerk
    areaServed: [
      {
        '@type': 'City',
        name: 'Loosdrecht'
      },
      {
        '@type': 'City',
        name: 'Hilversum'
      },
      {
        '@type': 'City',
        name: 'Het Gooi'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Zeilmakerij Diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buiskappen & Achtertenten',
            description: 'Maatwerk bootkappen op maat voor optimale bescherming'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Biminitops',
            description: 'Zonnekappen voor comfort op het water'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Afdekzeilen',
            description: 'Waterdichte afdekzeilen voor sloepen, zeilboten en motorboten'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jachtstoffering',
            description: 'Bootkussens en interieurstoffering op maat'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparatie & Onderhoud',
            description: 'Vakkundige reparatie van zeildoekwerk, ritsen en naden'
          }
        }
      ]
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:30',
        closes: '17:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '00:00',
        description: 'Op afspraak'
      }
    ]
  }


  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.className} antialiased relative text-gray-900`}>
        
        {/* HIER WORDT DE DATA INGEVOEGD VOOR GOOGLE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />


        {/* JOUW BESTAANDE ACHTERGROND (BEHOUDEN) */}
        <div className="fixed inset-0 opacity-5 -z-10 pointer-events-none" 
             style={{ 
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #1e40af 35px, #1e40af 36px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>


        {children}
        
        {/* JOUW WHATSAPP KNOP (BEHOUDEN) */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
