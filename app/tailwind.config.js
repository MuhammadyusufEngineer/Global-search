module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#30838A',
        lightgreen: '#c8ece1',
        light: '#ecfaf5',
        dark: '#242731'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}