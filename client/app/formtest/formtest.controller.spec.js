'use strict';

describe('Controller: FormtestCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var FormtestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormtestCtrl = $controller('FormtestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
