/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1F4393', // seechange brand blue
        'custom-violet': '#7C60EF', // augmented seechange brand violet
        'custom-lightviolet': '#A28EF4' // light violet
      },
    },
  },
  plugins: [],
}