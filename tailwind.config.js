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
          "800": "#0b32f8"
        },
        yellow: {
          ...colors.yellow,
          "800": "#fbff48"
        },
        pink: {
          ...colors.pink,
          "800": "#f22196"
        }
      }
    }
  },
  variants: {
    margin: ['responsive', 'hover']
  },
  plugins: []
}


