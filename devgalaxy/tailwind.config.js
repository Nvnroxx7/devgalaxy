module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        rocket: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-40px)', opacity: 0 },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        rocket: 'rocket 1.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
