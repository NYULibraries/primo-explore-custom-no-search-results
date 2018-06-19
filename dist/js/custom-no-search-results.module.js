'use strict';

angular.module('customNoSearchResults', []).component('prmNoSearchResultAfter', {
  bindings: {
    parentCtrl: '<'
  },
  templateUrl: ['customNoSearchResultsTemplateUrl', function (customNoSearchResultsTemplateUrl) {
    return customNoSearchResultsTemplateUrl;
  }]
});