const { colors } = require( 'tailwindcss/defaultTheme' )

module.exports = {
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '500px',
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        { 'min': '668px', 'max': '767px' },
        { 'min': '868px' }
      ],
      'lg': '1100px',
      'xl': '1400px',
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "800": "#0b32f8"
        },
        yellow: {
          ...colors.yellow,
          "700": "#ffd101",
          "800": "#fbff48",
          "900": "#f4c20b"
        },
        pink: {
          ...colors.pink,
          "800": "#f22196"
        }
      }
    }
  },
  variants: {
    margin: ['responsive', 'hover', 'focus']
  },
  plugins: []
}


