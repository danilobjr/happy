const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        complements: '#8fa7b2',
      },
      backgroundColor: {
        blue: '#15c3d6',
      },
      borderRadius: {
        20: '1.25rem',
      },
      zIndex: {
        top: '9999',
      },
    },
  },
  plugins: [],
}
