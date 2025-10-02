module.exports = {
  darkMode: 'class',
  content: [
    "./dist/*.html",          // procura pelas classes nos HTML dentro de dist
    "./src/**/*.{js,ts,jsx,tsx,html}", // procura também nos arquivos da pasta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
