# Excel on Native JavaScript v1.0.0

## Description
Web app with stripped down functionality of original [Google spreadsheets](https://docs.google.com/spreadsheets).

## Overview and Motivation
The main idea is to create full web application from scratch.

Tasks:
- set project structure
- learn Webpack
- learn Node.js
- learn SASS/SCSS
- create framework on native JavaScript
- practice OOP principles

## Technical task  
~.~

## Packages
* Webpack
  * [webpack](https://www.npmjs.com/package/webpack) (module bundler)
  * [webpack-cli](https://www.npmjs.com/package/webpack-cli) (provides a flexible set of commands for developers)
  * [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) (create local server)
  * [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) (plugin will remove all files inside webpack's output.path directory)
  * [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) (copies individual files or entire directories, which already exist, to the build directory)
  * [cross-env](https://www.npmjs.com/package/cross-env) (run scripts that set and use environment variables across platforms)
* JavaScript
  * Babel
    * [@babel/core](https://babeljs.io/docs/en/babel-core) (JavaScript transpilling)
    * [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#how-does-it-work) (Babel preset for each environment)
    * [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)(polyfill that includes a custom regenerator runtime and core-js.)
    * [babel-eslint](https://github.com/babel/eslint-plugin-babel) (allows you to lint all valid Babel code with the fantastic ESLint)
    * [babel-loader](https://github.com/babel/babel-loader) (transpiling JavaScript)
  * ESLint
    * [eslint](https://github.com/eslint/eslint) (tool for identifying and reporting on patterns found in ECMAScript/JavaScript code)
    * [eslint-config-google](https://github.com/google/eslint-config-google) (some rules for ESLint)
    * [eslint-loader](https://webpack.js.org/loaders/eslint-loader/) (ESLint loader)
* HTML
  * [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) (simplifies creation of HTML files to serve webpack bundles)
* CSS
  * [css-loader](https://webpack.js.org/loaders/css-loader/) (interprets @import and url() like import/require())
  * [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) (creates a CSS file per JS file which contains CSS)
  * [sass](https://github.com/sass/dart-sass) (a Dart implementation of Sass, CSS preprocessing)
  * [sass-loader](https://webpack.js.org/loaders/sass-loader/) (load sass/scss files and compiles it to CSS)
  * [normalize.css](https://necolas.github.io/normalize.css/) (makes browsers render all elements more consistently)
