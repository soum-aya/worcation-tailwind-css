module.exports = {
  purge: ["./src/**/*.jsx", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light:"#c6ffc1",
          DEFAULT: "#9fe6a0",
          dark: "#4aa96c",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
