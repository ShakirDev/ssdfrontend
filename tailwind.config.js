/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      colors: {
        'p-yellow': '#FCD980',
        'p-blue': '#1C1E53',
      },
      fontFamily: {
        serif: ['Poppins', 'serif'],
        sans: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
