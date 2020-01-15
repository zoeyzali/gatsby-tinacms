const { colors } = require( 'tailwindcss/defaultTheme' )

module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          '800': '#0b32f8'
        }
      }
    }
  },
  variants: {},
  plugins: []
}


