/**
 * Demo.js is the ui-router config for this state
 * @return {$stateProvider}
 * The state name, url, template (generated from demo.jade) and controller
 * names all line in a standard pattern.
 * controllerAs 'vm' permits us to refer to objects in the view model as
 * attributes of the vm object, the controller, when in the view. Only in 
 * extreme cases where there is confusion between multiple controllers would
 * we use a name other than vm for the controllerAs.
 */
(function() {
'use strict';
angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('demo', {
        url: '/demo',
        templateUrl: 'app/demo/demo.html',
        controller: 'DemoCtrl',
        controllerAs: 'vm',
        resolve: {
          PetService: 'PetService',
          CPetService: 'CPetService',
          toaster: 'toaster'
        }
      });
  });
})();