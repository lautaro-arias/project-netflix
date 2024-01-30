/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',
  'node_modules/flowbite-react/lib/esm/**/*.css', 
  ],"darkMode":"class",
  theme: {
    extend: {
      backgroundImage: {
        'bgLoginNetflix':"url('/src/modules/assets/bgLoginNetflix2.jpg)",
        'bgLogin': "url('/src/modules/assets/bgLogin.jpg')",
        'bgSelectAcount': "url('/src/modules/assets/SelectAcount1.jpeg')",
        'bguser1':"url('/src/modules/assets/user1.png')",
        'bguser2':"url('/src/modules/assets/user2.png')",
        'bguser3':"url('/src/modules/assets/user3.png')",
        'bguser4':"url('/src/modules/assets/user4.png')",
        'bguser5':"url('/src/modules/assets/user5.png')",
        'bgHome':"url('/src/modules/assets/bgHome.jpg')",
        'bgTrailer':"url('/src/modules/assets/bgTrailer.jpg')",
        'bgTestimonial':"url('/src/modules/assets/bgTestimonial.jpg')",
      }
    },
  },
  plugins: [
    
  require("daisyui"),
  require('flowbite/plugin'),
  ],
}

