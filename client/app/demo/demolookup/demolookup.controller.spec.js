'use strict';

describe('Controller: DemolookupCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var DemolookupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemolookupCtrl = $controller('DemolookupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
