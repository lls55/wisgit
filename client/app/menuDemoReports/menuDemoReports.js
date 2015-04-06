'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menuDemoReports', {
        url: '/menuDemoReports',
        templateUrl: 'app/menuDemoReports/menuDemoReports.html',
        controller: 'MenuDemoReportsCtrl'
      });
  });