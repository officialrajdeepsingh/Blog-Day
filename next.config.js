
const path = require('path')
const withSass = require('@zeit/next-sass');
const withImages = require('next-images')
const withFonts = require('nextjs-fonts');
module.exports = withFonts({
  exclude: path.resolve(__dirname, '/old-app/Component/fonts'),
  webpack(config, options) {
    return config
  }}
);

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
