
const path = require('path')
const withSass = require('@zeit/next-sass');
const withImages = require('next-images')
// const withCSS = require('@zeit/next-css')
// const withReactSvg = require('next-react-svg')


module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = withImages({
  exclude: path.resolve(__dirname, '/old-app/Component/asset'),
  webpack(config, options) {
    return config
  }
})
