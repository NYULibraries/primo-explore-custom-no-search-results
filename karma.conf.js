const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: [
      'spec',
      'junit',
      'coverage-istanbul',
      'coveralls',
    ],
    browsers: ['ChromeHeadless', 'ChromiumHeadless_without_sandbox'],
    basePath: './',
    files: [
      require.resolve('angular/angular.js'),
      require.resolve('angular-mocks/angular-mocks.js'),
      'src/index.js',
      'src/spec/**/*.spec.js',
      'src/spec/**/*.html',
    ],
    preprocessors: {
      'src/index.js': ['webpack', 'sourcemap'],
      'src/spec/**/*.spec.js': ['webpack', 'sourcemap'],
      'src/spec/**/*.html': ['ng-html2js'],
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: "src/spec/",
    },
    webpack: {
      mode: 'development',
      module: {
        rules: webpackConfig.module.rules,
      },
      devtool: 'inline-source-map',
      externals: {
        angular: 'angular',
      },
      plugins: [
        new webpack.DefinePlugin({
          module: 'window.module',
        }),
      ],
    },
    customLaunchers: {
      ChromiumHeadless_without_sandbox: {
        base: 'ChromiumHeadless',
        flags: ['--no-sandbox']
      }
    },
    junitReporter: {
      outputDir: 'test-results'
    },
    coverageIstanbulReporter: {
      reports: [
        'lcov',
      ],
      dir: 'test-results/coverage'
    },
  });
};