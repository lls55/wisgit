'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menuDemo', {
        url: '/',
        templateUrl: 'app/menuDemo/menuDemo.html',
        controller: 'MenuDemoCtrl'
      });
  });