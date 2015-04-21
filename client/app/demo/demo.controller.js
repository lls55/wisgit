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
          if (vm.searchText == '') {
            //show all
            $state.go('demo.demolookup', {
              id: '', 
              breed:'', 
              household:'',
              name:''
            });
          } else {
            if (isInt(vm.searchText)) {
              vm.showEditForm(vm.searchText);
            } else {
              toaster.pop({
                type: 'error',
                title: 'We can only look up pets directly by their numeric Id',
                body: 'Perhaps you need to choose another button under the search.',
                closeButton: true,
                showDuration: '10000'
              });
            }
          }
          /*
          $state.go('demo.demolookup', {
            id: vm.searchText, 
            breed:'', 
            household:'',
            name:''
          });
          */
        } else if (searchCriteria === 'breed') {
          $state.go('demo.demolookup', {
            id: '',
            breed: vm.searchText,
            household:'',
            name:''            
          });
        } else if (searchCriteria === 'household') {
          $state.go('demo.demolookup', {
            id: '',
            breed: '',
            household: vm.searchText,
            name:''   
          });
        } else if (searchCriteria === 'name') {
          $state.go('demo.demolookup', {
            id: '',
            breed: '',
            household: '',
            name:vm.searchText   
          });
        }
      };
      vm.showEditForm = function(docId) {
        var lookupId = vm.searchText;
        if (docId == '0') {
          lookupId = docId;
        }
        $state.go('demo.demolookup.demoedit', {
          id: lookupId,
          breed: '',
          household: '',
          name: ''
        });
      };
      vm.search = function(searchCriteria) {
        vm.showLookupTable(searchCriteria);
      };
      $log.log(vm.docname, 'leaving this function');
    }]);
    //lifted from http://www.inventpartners.com/javascript_is_int
    //might need to see if we have this in a library already or else put it in
    //a new custom javascript library document
    function isInt(value) { 
      if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
        return true;
      } else { 
        return false;
      } 
    }
}());