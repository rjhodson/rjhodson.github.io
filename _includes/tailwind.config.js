// const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        background : {
          'primary': 'var(--bg-background-primary)',
          'secondary': 'var(--bg-background-secondary)'
        },
        name : {
          'first' : 'var(--text-name-first)',
          'last' : 'var(--text-name-last)'
        },
        copy : {
          'body' : 'var(--text-copy-body)',
          'title' : 'var(--text-copy-title)',
          'sub' : 'var(--text-copy-sub)',
          'accent' : 'var(--text-copy-accent)'
        }
      },
      fontSize: {
        '12xl': '7rem'
      },
      height: {
        '96': '24rem'
      },
      width: {
        '96': '24rem'
      }
    },
  },
  variants: {},
  plugins: []
}