/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',      // Blue
        secondary: '#0F172A',    // Dark Navy
        accent: '#0D9488',       // Teal
        surface: '#F8FAFC',      // Surface/slate-50
        textMain: '#1E293B',     // Main text color
        textMuted: '#64748B',    // Muted text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

