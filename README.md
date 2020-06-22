Excel on Native JavaScript

Webpack  
* module/rules
   * Babel ()
      * [babel-loader](https://github.com/babel/babel-loader) (transpiling JavaScript)
      * [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#how-does-it-work) (allows to use latest JavaScript without needing to micromanage which syntax transforms)
   * Scss (CSS preprocessor)
      * sass
      * [sass-loader](https://webpack.js.org/loaders/sass-loader/) (load sass/scss files and compiles it to CSS)
      * [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) (creates a CSS file per JS file which contains CSS)
      * [css-loader](https://webpack.js.org/loaders/css-loader/) (interprets @import and url() like import/require())
* Eslint (linter)
* 2 Modes
    * dev
        * dev server (live reloading)
        * source maps (source map generation)
        * eslint
        * not minified JS & CSS
    * prod
        * minified Code
* plugins
   * [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) (plugin will remove all files inside webpack's output.path directory)
   * [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) (simplifies creation of HTML files to serve webpack bundles)
   * [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) (copies individual files or entire directories, which already exist, to the build directory)

Git
* production 1.0.0
    * development 1.0.
