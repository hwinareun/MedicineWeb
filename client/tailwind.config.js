/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

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
    },
  },
  plugins: [scrollbarHide],
};
