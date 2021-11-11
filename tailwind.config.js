const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      teal: colors.teal,
      gray: colors.gray,
      purple: colors.purple,
      white: '#fff',
      black: '#000',
      blue: colors.sky,
      red: colors.red,
      yellow: colors.amber,
      // teal: {
      //   100: '#00cdcd',
      //   200: '#00b3b3',
      //   300: '#009a9a',
      //   400: '#008080',
      //   500: '#006767',
      //   600: '#004d4d',
      //   700: '#003434',
      // },
    }
  },
  variants: {
    extend: {
      display: ['hover'],
      animation: ['hover'],
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }),
  ],
}
