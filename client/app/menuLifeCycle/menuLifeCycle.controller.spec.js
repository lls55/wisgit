'use strict';

describe('Controller: MenuLifeCycleCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var MenuLifeCycleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuLifeCycleCtrl = $controller('MenuLifeCycleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
