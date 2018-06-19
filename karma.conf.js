module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage', 'coveralls'],
    browsers: ['PhantomJS'],
    basePath: 'src/',
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'spec/**/*.spec.js',
    ],
    preprocessors: {
      'js/**/*.js': ['webpack', 'sourcemap'],
      'spec/**/*.spec.js': ['babel', 'sourcemap'],
    },
    coverageReporter: {
      type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
      dir: 'coverage/'
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      devtool: 'inline-source-map'
    }
  });
};
