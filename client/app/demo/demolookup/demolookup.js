/**
 * DemoLookup.js is the ui-router config for this state
 * @return {$stateProvider}
 */
(function() {
'use strict';
angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('demo.demolookup', {
        url: '.demolookup',
        parent: 'demo',
        params: {id: '', 
          breed: '', 
          name: '', 
          household: ''},
        templateUrl: 'app/demo/demolookup/demolookup.html',
        controller: 'DemolookupCtrl',
        controllerAs: 'vm'
      });
  });
})();

