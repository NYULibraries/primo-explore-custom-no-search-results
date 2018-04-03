module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      //libraries
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      //module
      'js/**/*.js',
      //tests
      'spec/**/*.js',
      //external templates
      'spec/**/*.html',
    ],
    preprocessors: {
      'js/**/*.js': ['babel'],
      'spec/**/*.spec.js': ['babel'],
      'spec/**/*.html': ['ng-html2js'],
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: "spec/",
    }
  });
};
