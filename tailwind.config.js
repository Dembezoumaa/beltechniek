/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Jouw Zeilmakerij Liva palet
        primary: {
          DEFAULT: '#0F4F67', // Navy Blue
          dark: '#092E42',    // Deep Navy
          foreground: '#FFFFFF', 
        },
        secondary: '#4A8CA2', // Ocean Blue
        accent: '#A28A77',    // Timber Accent
        
        // Tekstkleuren
        text: {
          main: '#3C3033',    
          muted: '#676369',   
          light: '#A1AAB8',   
        },
        
        border: '#DDECF9',
      },
      fontFamily: {
        // Standaard tekst
        sans: ['var(--font-inter)', 'sans-serif'], 
        
        // HIER IS DE AANPASSING:
        // We laten 'font-special' nu OOK naar 'Inter' wijzen.
        // Zo blijven je pagina's werken, maar ziet het er weer strak uit.
        special: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}