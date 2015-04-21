/**
 * menuParts.Controller.js
 */

(function() {
'use strict';
angular.module('workspaceApp')
  .controller('MenuPartsCtrl', function ($scope, $http) {
    $scope.menuItems = [];
    $http.get('/api/AppMUs/menuParts').success(function(menu) {
      $scope.menu = menu;
      $scope.menuItems = menu.menuItems;
    });
  });
}());
