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
          DEFAULT: '#0F4F67', // Navy Blue (Wordt gebruikt bij bg-primary / text-primary)
          dark: '#092E42',    // Deep Navy
          foreground: '#FFFFFF', 
        },
        secondary: '#4A8CA2', // Ocean Blue
        accent: '#A28A77',    // Timber Accent
        
        // Tekstkleuren (optioneel, als je ze gebruikt)
        text: {
          main: '#3C3033',    
          muted: '#676369',   
          light: '#A1AAB8',   
        },
        
        border: '#DDECF9',
      },
      // HIER ZIT DE BELANGRIJKSTE WIJZIGING:
      fontFamily: {
        // We koppelen de variabele uit layout.js aan de class 'font-sans'
        sans: ['var(--font-inter)', 'sans-serif'], 
        
        // We koppelen de variabele uit layout.js aan de class 'font-special'
        special: ['var(--font-special)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}