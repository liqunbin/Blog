// module.exports = {
//   plugins: [
//     require('postcss-smart-import')({ /* ...options */ }),
//     require('precss')({ /* ...options */ }),
//     require('autoprefixer')({ /* ...options */ }),
//   ]
// }
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {}
  }
}
