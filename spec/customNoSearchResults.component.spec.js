describe('prmNoSearchResultAfter component', () => {

  beforeEach(module('customNoSearchResults', $provide => {
    $provide.value('customNoSearchResultsTemplateUrl', 'template.html');
  }));

  beforeEach(module('template.html'));

  let element;
  beforeEach(inject(function(_$compile_, _$rootScope_){
    const $compile = _$compile_;
    const $rootScope = _$rootScope_;
    const $scope = $rootScope.$new();

    const parentCtrl = {
      term: "test-search-term"
    };

    $scope.parentCtrl = parentCtrl;

    element = angular.element(`<prm-no-search-result-after parent-ctrl="parentCtrl" />`);
    element = $compile(element)($scope);
    $scope.$digest();
  }));

  it('should render a template', () => {
    expect(element.html()).toBeTruthy();
  });

  it('should render bindings values', () => {
    const html = element.html();
    expect(html).toContain('test-search-term');
  });

});
