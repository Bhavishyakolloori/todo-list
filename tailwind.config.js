/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme)=>({
        'custom-background' : "url('../public/pexels-tirachard-kumtanom-112571-733852.jpg')"
      })
    },
  },
  plugins: [],
}