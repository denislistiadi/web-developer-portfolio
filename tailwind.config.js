module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Prata': ['"Prata"', 'serif'],
        'Inter': ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}