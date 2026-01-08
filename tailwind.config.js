/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Beltechniek B.V. - Industrieel & Zakelijk palet
        primary: {
          DEFAULT: '#1B263B', // Deep Industrial Navy
          dark: '#0D1B2A',    // Dark Slate
          foreground: '#FFFFFF', 
        },
        secondary: '#415A77', // Steel Blue/Grey
        accent: '#3A86FF',    // Electric Blue accent
        
        // Tekstkleuren voor B2B leesbaarheid
        text: {
          main: '#1B263B',    
          muted: '#5A6169',   
          light: '#8D99AE',   
        },
        
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
        special: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}