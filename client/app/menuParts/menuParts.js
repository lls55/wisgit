'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menuParts', {
        url: '/menuParts',
        templateUrl: 'app/menuParts/menuParts.html',
        controller: 'MenuPartsCtrl'
      });
  });