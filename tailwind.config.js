/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f8',
          100: '#eceef0',
          200: '#d5d9dc',
          300: '#b1b8be',
          400: '#86909a',
          500: '#67727d',
          600: '#525b65',
          700: '#434a52',
          800: '#3a3f45',
          900: '#1a1d21',
          950: '#0e1013',
        },
        brand: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc070',
          400: '#ff9a37',
          500: '#ff7c0a',
          600: '#f06104',
          700: '#c74904',
          800: '#9e3a0c',
          900: '#7f320e',
          950: '#451904',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
