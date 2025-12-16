/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Jouw nieuwe palet
        primary: {
          DEFAULT: '#0F4F67', // Navy Blue
          dark: '#092E42',    // Deep Navy (Donkere variant)
          foreground: '#FFFFFF', // Wit (voor tekst op buttons)
        },
        secondary: '#4A8CA2', // Ocean Blue
        accent: '#A28A77',    // Timber Accent
        
        // Tekstkleuren
        text: {
          main: '#3C3033',    // Primary text
          muted: '#676369',   // Secondary text
          light: '#A1AAB8',   // Light gray
        },
        
        // Randen
        border: '#DDECF9',
      },
      fontFamily: {
        // Hiermee kun je 'font-special' gebruiken in je classes
        special: ['"Special Gothic"', 'sans-serif'],
        'special-condensed': ['"Special Gothic Condensed"', 'sans-serif'],
        'special-expanded': ['"Special Gothic Expanded"', 'sans-serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'], // Default fallback
      },
    },
  },
  plugins: [],
}