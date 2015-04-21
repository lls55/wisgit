'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menuMechanic', {
        url: '/menuMechanic',
        templateUrl: 'app/menuMechanic/menuMechanic.html',
        controller: 'MenuMechanicCtrl'
      });
  });