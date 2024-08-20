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
        medicinePoint: '#0000E3',
        medicineNegative: '#ECECEC',
      },
    },
  },
  plugins: [],
};
