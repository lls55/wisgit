'use strict';

describe('Controller: MenuMechanicCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var MenuMechanicCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuMechanicCtrl = $controller('MenuMechanicCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
