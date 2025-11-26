import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // 1. SEO: Een betere titel template. Elke pagina krijgt nu automatisch "| Dienst Expert" erachter
  title: {
    default: 'Dienst Expert | Professionele Schoonmaak',
    template: '%s | Dienst Expert'
  },
  // 2. SEO: Een uitgebreidere omschrijving voor Google resultaten
  description: "Dienst Expert Cleaning Services is uw partner voor kantoorschoonmaak, horeca, opleveringen en glasbewassing. Vraag vrijblijvend een offerte aan.",
  keywords: ['schoonmaakbedrijf', 'kantoorschoonmaak', 'horeca schoonmaak', 'glasbewassing', 'Hoorn', 'Dienst Expert'],
  
  // 3. Social Media: Zorgt dat linkjes er mooi uitzien op WhatsApp/LinkedIn
  openGraph: {
    title: 'Dienst Expert | Professionele Schoonmaak',
    description: 'Uw partner voor een representatief en schoon pand.',
    url: 'https://www.dienstexpert.nl',
    siteName: 'Dienst Expert',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    // 'scroll-smooth' zorgt voor het zachte scrollen als je op 'naar boven' klikt
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.className} antialiased relative text-gray-900`}>
        
        {/* JOUW BESTAANDE ACHTERGROND (BEHOUDEN) */}
        <div className="fixed inset-0 opacity-5 -z-10 pointer-events-none" 
             style={{ 
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #40B9FF 35px, #40B9FF 36px)`,
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