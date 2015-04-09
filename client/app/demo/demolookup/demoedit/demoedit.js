
/**
 * DemoEdit.js is the ui-router config for this state
 * @return {$stateProvider}
 */
(function() {
'use strict';
angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('demo.demolookup.demoedit', {
        url: '.demoedit/:id',
        parent: 'demo.demolookup',
        templateUrl: 'app/demo/demolookup/demoedit/demoedit.html',
        controller: 'DemoeditCtrl',
        controllerAs: 'vm',
        resolve: {
          pet: function ($stateParams, $log, PetService) {
            var docId = $stateParams.id;
            if (docId == undefined || docId == '0' || docId == '') {
              $stateParams.id = '0';
              $log.log('in demoedit.js no document id');
              return {};
            } else {
              // PetService.setQueryParams({householdName:'Wolthuis'});
              // $log.log('demoedit.js queryParams is now', PetService.queryParams);
              // console.dir(PetService.queryParams);
              return PetService.read({id: docId}).$promise;
            }
          }
        }
      });
  });
})();