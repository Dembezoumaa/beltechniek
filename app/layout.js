import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dienst Expert",
  description: "Professionele schoonmaakdiensten voor bedrijven, horeca en evenementen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${inter.className} antialiased relative`}>
        {/* Diagonal pattern background - ZONDER bg-white */}
        <div className="fixed inset-0 opacity-5 -z-10" 
             style={{ 
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #40B9FF 35px, #40B9FF 36px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
