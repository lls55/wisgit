'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menuLifeCycle', {
        url: '/menuLifeCycle',
        templateUrl: 'app/menuLifeCycle/menuLifeCycle.html',
        controller: 'MenuLifeCycleCtrl'
      });
  });