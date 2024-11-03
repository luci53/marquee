// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': '#03045e', // Customize as needed
        'header-text': '#FFFFFF',
        'services-bg': '#bc6c25',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
