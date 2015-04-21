/**
 * menuDemo.Controller.js was written prior to using the vm = this approach
 * of using the instantiated controller to back a view. So, it uses $scope.
 * It also uses $http instead of a factory with $resource as those
 * are more recent in the demo app. 
 */

(function() {
'use strict';
angular.module('workspaceApp')
  .controller('MenuDemoCtrl', function ($scope, $http) {
    $scope.menuItems = [];
    $http.get('/api/AppMUs/menuDemo').success(function(menu) {
      $scope.menu = menu;
      $scope.menuItems = menu.menuItems;
    });
  });
}());
