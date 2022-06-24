// const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './_includes/header.html',
    './_layouts/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        background : {
          'primary': 'var(--bg-background-primary)',
          'secondary': 'var(--bg-background-secondary)',
          'separator': 'var(--bg-background-separator)'
        },
        name : {
          'first' : 'var(--text-name-first)',
          'last' : 'var(--text-name-last)'
        },
        copy : {
          'body' : 'var(--text-copy-body)',
          'title' : 'var(--text-copy-title)',
          'sub' : 'var(--text-copy-sub)',
          'accent' : 'var(--text-copy-accent)',
          'muted' : 'var(--text-copy-muted)',
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
  variants: {
    margin: ['responsive', 'last']
  },
  plugins: []
}