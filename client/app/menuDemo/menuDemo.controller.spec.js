'use strict';

describe('Controller: MenuDemoCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var MenuDemoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuDemoCtrl = $controller('MenuDemoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
