'use strict';

describe('Controller: DemoeditCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var DemoeditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemoeditCtrl = $controller('DemoeditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
