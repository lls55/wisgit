/**
 * DemoLookup.Controller backs a jade view with a lookup table
 * @return {Controller} DemolookupCtrl, typically controllerAs vm
 * 
 * The "vm" variable here is for "this", naming view-model instance variables
 * While we have a standard of not passing in $scope, we have verified with
 * ui-grid developers that we must pass it in
 */
(function() {
'use strict';
angular.module('workspaceApp')
  .controller('DemolookupCtrl', 
    ['$scope', '$http', '$state', '$log', '$stateParams', 'PetService',
    function ($scope, $http, $state, $log, $stateParams, PetService) {
      var vm = this;
      vm.docname = 'demolookup.controller';
      $log.log(vm.docname, 'entering this function');
      vm.show = $state.is('demo.demolookup');
      //$log.log('vm.show is', vm.show);
      $log.log($stateParams);
      vm.id = $stateParams.id || '';
      vm.breed = $stateParams.breed || '';
      vm.name = $stateParams.name || '';
      vm.householdName = $stateParams.household || '';
      $log.log('householdName is', vm.householdName, 'name is', vm.name, 'breed is', vm.breed);
      vm.Pets = [];
      vm.showEditForm = function(petId) {
        petId = petId || 'pet1';
        $state.go('demo.demolookup.demoedit', {id:petId});
      };
      //next thing to test is dealing with promises with the services
      vm.getPets = function() {
        //need to figure out error handling and async design pattern
        //and move this to the resolve, or maybe not, only if showing
        if (vm.householdName !== '') {
          vm.Pets = PetService.list({"householdName":vm.householdName});
        } else {
          vm.Pets = PetService.list();
        }
        $log.log('vm.Pets filtered is');
        $log.log(vm.Pets);
        //this returns a promise
        //vm.Pets = PetService.list();
        return;
      };
      if (vm.show === true) {
        vm.getPets();
      }
      vm.gridOptions = { 
        data: 'vm.Pets',
        enableCellSelection: false,
        enableRowSelection: true,
        enableCellEditOnFocus: false,
        showSelectionCheckbox: true,
        multiSelect: false,
        enableScrollbars: false,
        rowsPerPage: 8,
        minRowsToShow: 8,
        paginationPageSizes: [8, 20, 30],
        paginationPageSize: 8,
        selectedItems: vm.selectedRows,
        columnDefs: [
          {field: '_id', displayName: 'Id'},
          {field: 'name', displayName: 'Name'},
          {field: 'householdName', displayName: 'Household'},
          {field: 'petType', displayName: 'Type'},
          {field: 'breed', displayName: 'Breed'}
        ]
      };
      vm.gridOptions.onRegisterApi = function(gridApi) {
        vm.gridApi = gridApi;   // keep around
        gridApi.selection.on.rowSelectionChanged($scope, function(row) {
          vm.showEditForm(row.entity._id);
        });
      };
      $log.log(vm.docname, 'leaving this function');
    }]);
}());