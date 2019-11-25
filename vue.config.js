module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        ident: 'postcss',
        plugins: () => [
          // includes autoprefixer
          require('postcss-preset-env')(),
          // includes sanitize.css & normalize.css, use @import "sanitize.css"
          require('postcss-import')(
            require('postcss-normalize')().postcssImport(),
          ),
        ],
      },
    },
  },
};
