(function() {
'use strict';
angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('formtest', {
        url: '/formtest',
        templateUrl: 'app/formtest/formtest.html',
        controller: 'FormtestCtrl',
        controllerAs: 'vm'
      });
  });
})();