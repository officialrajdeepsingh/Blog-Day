// import withSass from '@zeit/next-sass';
const path = require('path')
const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css')
// const withReactSvg = require('next-react-svg')


// module.exports = withSass({
//   cssModules: true
// })
 



module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// module.exports = withCSS()

// add config

// module.exports = (nextConfig = {}) => {
//   return Object.assign({}, nextConfig, {
//     webpack(config, options) {
//       const { include } = nextConfig

//       if (!include) {
//         throw new Error('You need to define an include folder to make this plugin work')
//       }

//       if (!options.defaultLoaders) {
//         throw new Error(
//           'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
//         )
//       }

//       config.module.rules.push({
//         test: /\.(svg)$/,
//         include,
//         loader: 'svg-react-loader',
//       });

//       if (typeof nextConfig.webpack === 'function') {
//         return nextConfig.webpack(config, options)
//       }

//       return config
//     }
//   })

// }

// module.exports = withReactSvg({
//   include: path.resolve(__dirname, 'Component/asset/'),
//   webpack(config, options) {
//     return config
//   }
// })

