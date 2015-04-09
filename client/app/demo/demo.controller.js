/**
 * Demo.Controller.js backs the Demo Pet SPA view which serves as the parent
 * view for the Pet SPA menu item.
 * @return {Controller}
 * @todo  Search needs to be implemented in a big way
 */
(function() {
'use strict';
angular.module('workspaceApp')
  .controller('DemoCtrl', ['$state', '$log', 'toaster',
    function ($state, $log, toaster) {
      var vm = this;
      vm.docname = 'demo.controller';
      $log.log(vm.docname, 'entering this function');
      vm.radioModel = 'Id';
      vm.searchText = '';
      vm.showLookupTable = function(searchCriteria) {
        //this is not elegant, simply testing out multiple state params
        searchCriteria = searchCriteria.toLowerCase();
        if (searchCriteria === 'id') {
          //vm.showEditForm();
          $state.go('demo.demolookup', {id: vm.searchText});
        } else if (searchCriteria === 'breed') {
          $state.go('demo.demolookup', {breed: vm.searchText});
        } else if (searchCriteria === 'household') {
          $state.go('demo.demolookup', {household: vm.searchText});
        } else if (searchCriteria === 'name') {
          $state.go('demo.demolookup', {name: vm.searchText});
        }
      };
      vm.showEditForm = function(docId) {
        if (docId == '0') {
          vm.searchText = docId;
        }
        $state.go('demo.demolookup.demoedit', {id: vm.searchText});
      };
      vm.search = function(searchCriteria) {
        vm.showLookupTable(searchCriteria);
      };
      $log.log(vm.docname, 'leaving this function');
    }]);
}());