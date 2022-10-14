/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      creative: ["Fraunces"],
      Barlow: ["Barlow"],
    },
    extend: {},
    backgroundImage: {
      "phone-image": "url('/src/images/mobile/image-header.jpg') ",
      "desktop-image": " url('/src/images/desktop/image-header.jpg ' ) ",
      ceurise: " url('/src/images/mobile/image-graphic-design.jpg ' ) ",
      ceuriseDesk: " url('/src/images/desktop/image-graphic-design.jpg ' ) ",
      photography: "url('/src/images/mobile/image-photography.jpg ' ) ",
      photographyDesk: "url('/src/images/desktop/image-photography.jpg ' ) ",
    },
    colors: {
      Verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
      grayishblue: "hsl(213, 9%, 39%)",
      gray: "hsl(210, 4%, 67%)",
      Yellow: "hsl(51, 100%, 49%)",
      Softred: "hsl(7, 99%, 70%)",
      darkGren: "hsl(167, 40%, 24%)",
    },
  },
  plugins: [],
};
