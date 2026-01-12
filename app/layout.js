import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://www.beltechniekbv.nl'), 

  title: {
    default: 'Beltechniek B.V. | Industriële Elektrotechniek & 24/7 Storingsdienst',
    template: '%s | Beltechniek B.V.'
  },
  description: "Beltechniek B.V. waarborgt uw technische continuïteit. Specialist in industriële elektrotechniek, paneelbouw en 24/7 storingsdienst in Den Haag en door heel Nederland.",
  keywords: [
    'industriële elektrotechniek', 
    '24/7 storingsdienst industrie', 
    'paneelbouw Den Haag', 
    'meet- en regeltechniek', 
    'elektrotechnisch onderhoud', 
    'NEN 3140 inspectie',
    'technische continuïteit',
    'Beltechniek Den Haag',
    'inbraaksystemen zakelijk'
  ],
  
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: 'Beltechniek B.V. | Partner in Technische Continuïteit',
    description: 'Landelijke dekking voor industriële elektrotechniek, paneelbouw en 24/7 storingsdiensten. Wij houden uw productie draaiende.',
    url: 'https://www.beltechniekbv.nl',
    siteName: 'Beltechniek B.V.',
    images: [
      {
        url: '/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Beltechniek B.V. Logo',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Beltechniek B.V. | Partner in Technische Continuïteit',
    description: 'Landelijke dekking voor industriële elektrotechniek, paneelbouw en 24/7 storingsdiensten.',
    images: ['/logo.png'], 
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService', 
    'name': 'Beltechniek B.V.',
    'image': 'https://www.beltechniekbv.nl/logo.png',
    'description': 'Specialist in industriële elektrotechniek, paneelbouw en 24/7 storingsdiensten voor de industrie.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Florence Nightingaleweg 5',
      'addressLocality': '’s-Gravenhage',
      'postalCode': '2545 CD',
      'addressCountry': 'NL'
    },
    'telephone': '+31 6 14987347',
    'email': 'info@beltechniek.nl',
    'url': 'https://www.beltechniekbv.nl',
    'priceRange': '$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    }
  }

  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased relative text-gray-900 bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="fixed inset-0 opacity-[0.02] -z-10 pointer-events-none" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             }}>
        </div>

        {children}
      </body>
    </html>
  );
}