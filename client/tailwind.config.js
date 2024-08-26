/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        medicineNeutral: '#F5F8FF',
        medicinePrimary: '#E6EDFC',
        medicineSecondary: '#C2D6FF',
        medicinePositive: '#94C2FF',
        medicinePoint: '#2b3da1',
        medicineNegative: '#ECECEC',
        medicineFontBlue: '#60A5FA',
      },
      keyframes: {
        crawlOut1: {
          '0%': { transform: 'translate(0px,0px)', opacity: '0' },
          '100%': {
            transform: 'translate(0px,-27px)',
            opacity: '1',
          },
        },
        crawlOut2: {
          '0%': { transform: 'translate(0px,0px)', opacity: '0' },
          '100%': {
            transform: 'translate(-15px,-10px) rotate(-40deg)',
            opacity: '1',
          },
        },
        crawlOut3: {
          '0%': { transform: 'translate(0px,0px)', opacity: '0' },
          '100%': {
            transform: 'translate(15px,-10px) rotate(40deg)',
            opacity: '1',
          },
        },
      },
      animation: {
        crawlOut1: 'crawlOut1 0.3s forwards',
        crawlOut2: 'crawlOut2 0.3s forwards',
        crawlOut3: 'crawlOut3 0.3s forwards',
      },
    },
  },
  plugins: [],
};
