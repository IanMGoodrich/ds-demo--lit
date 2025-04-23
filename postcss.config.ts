module.exports = {
  plugins: {
    'postcss-nesting': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': false, // disable preset-env nesting in favor of postcss-nesting
      },
    },
    autoprefixer: {},
  },
  
};