'use strict';

describe('Controller: MenuPartsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var MenuPartsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuPartsCtrl = $controller('MenuPartsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
