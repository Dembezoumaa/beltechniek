import { Inter, Special_Elite } from "next/font/google";
import "./globals.css";

// 1. Standaard lettertype (voor leestekst)
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

// 2. Speciaal lettertype (voor koppen/cijfers) - Nautische/Industriële look
const special = Special_Elite({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-special',
});

export const metadata = {
  // Belangrijk voor images in productie:
  metadataBase: new URL('https://www.zeilmakerijliva.nl'), 

  title: {
    default: 'Zeilmakerij Liva | Maatwerk Bootkappen & Stoffering Loosdrecht',
    template: '%s | Zeilmakerij Liva'
  },
  description: "Zeilmakerij Liva is uw specialist voor maatwerk bootkappen, biminitops, afdekzeilen en jachtstoffering in Loosdrecht. Premium materialen, ambachtelijk vervaardigd.",
  keywords: [
    'zeilmakerij Loosdrecht', 
    'buiskap op maat', 
    'bootkappen', 
    'biminitop', 
    'afdekzeil boot', 
    'jachtstoffering', 
    'bootkussens bekleden', 
    'zeilmakerij het Gooi',
    'dekzeil boot',
    'bootkap reparatie'
  ],
  
  // 3. FAVICON TOEVOEGING (Zorg dat logo.png in je 'public' map staat)
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: 'Zeilmakerij Liva | Maatwerk Bootkappen & Stoffering',
    description: 'Ambachtelijk zeildoekwerk en stoffering voor uw boot. 100% maatwerk, premium materialen. Gevestigd in Loosdrecht.',
    url: 'https://www.zeilmakerijliva.nl',
    siteName: 'Zeilmakerij Liva',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/hero-bg.jpg', // Zorg dat deze bestaat in public map
        width: 1200,
        height: 630,
        alt: 'Zeilmakerij Liva Vakmanschap',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  // 4. Structured Data (JSON-LD) voor Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Zeilmakerij Liva',
    image: 'https://www.zeilmakerijliva.nl/logo.png',
    description: 'Ambachtelijke zeilmakerij gespecialiseerd in maatwerk bootkappen en stoffering.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Horndijk 24',
      addressLocality: 'Loosdrecht',
      postalCode: '1231 NK',
      addressCountry: 'NL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.2044,
      longitude: 5.1311
    },
    telephone: '035 622 8460',
    email: 'info@zeilmakerijliva.nl',
    url: 'https://www.zeilmakerijliva.nl',
    priceRange: '$$$',
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
      {/* Fonts en basis styling */}
      <body className={`${inter.variable} ${special.variable} font-sans antialiased relative text-gray-900 bg-white`}>
        
        {/* JSON-LD Script injecteren */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Subtiele achtergrond ruis (Noise) voor premium gevoel */}
        <div className="fixed inset-0 opacity-[0.03] -z-10 pointer-events-none" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             }}>
        </div>

        {children}
        
      </body>
    </html>
  );
}