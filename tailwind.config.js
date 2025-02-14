/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1a202c',
            p: {
              color: '#1a202c',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: '#1a202c',
            },
          },
        },
        invert: {
          css: {
            color: '#f3f4f6',
            p: {
              color: '#f3f4f6',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: '#f3f4f6',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};