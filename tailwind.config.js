// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: { 
    fontFamily: {
      'gurbani': [ 'OpenGurbaniAkhar' ],
      'appPrimary': [ 'DancingScript' ],
    },
    colors: {
      akaliBlue: '#16378C',
      fatehYellow: '#D9A202',
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [ require( "@tailwindcss/custom-forms" ) ],
}
