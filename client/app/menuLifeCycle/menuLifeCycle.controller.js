/**
 * menuLifeCycle.Controller.js
 */

(function() {
'use strict';
angular.module('workspaceApp')
  .controller('MenuLifeCycleCtrl', function ($scope, $http) {
    $scope.menuItems = [];
    $http.get('/api/AppMUs/menuLifeCycle').success(function(menu) {
      $scope.menu = menu;
      $scope.menuItems = menu.menuItems;
    });
  });
}());
