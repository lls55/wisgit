'use strict';

describe('Controller: MenuDemoReportsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var MenuDemoReportsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuDemoReportsCtrl = $controller('MenuDemoReportsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
