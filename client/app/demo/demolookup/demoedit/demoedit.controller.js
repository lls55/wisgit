/**
 * DemoEdit.Controller
 * @return {Controller} DemoeditCtrl, typically controllerAs vm
 *
 * The "vm" variable here is for "this", naming view-model instance variables
 * 
 * @todo Error handling for CRUD with PetService, a real nextId implementation
 * including concurrency-handling, switch any vm. instance variables, including
 * functions, that are not in the view to local variables. Also, we have all
 * form work to address, including local and async validation, formatters, 
 * parsers, and messages including toaster and individual field messages.
 * 
 * Current issues -- 2 forms here, one is html-based, the second is 
 * based on javascript using angular-formly. That one has at least these issues:
 * messages are not showing, such as for required fields, and the workflow
 * for error messages is not in place. The id shows -- not sure how to hide
 * a field. Tried hidden, hide, and other things, but so far it still shows.
 * 
 */
(function() {
'use strict';
angular.module('workspaceApp')
  .controller('DemoeditCtrl', ['$scope', '$http', '$state', '$log', 
  '$stateParams', 'pet', 'PetService', 'CPetService', 'toaster', 'formlyVersion',
    function ($scope, $http, $state, $log, $stateParams, pet,
      PetService, CPetService, toaster, formlyVersion) {
      var vm = this;
      /**
       * logging the vm.docname is for debugging purposes and 
       * possible information to show in a view
       */
      vm.docname = 'demoedit.controller';
      $log.log(vm.docname, 'entering this function');
      //do not remove these commented out lines unless you have this memorized
      //or documented elsewhere where you can find it
      //$log.log(vm.docname, 'entering this function', $state.current.name,  
      //JSON.stringify($stateParams), $state.$current.url.source);
      /**
       * pet is the variable for the object that is a single document from Pets
       * for example, pet.petType would be 'Dog' in document with pet._id = 1
       * pet is resolved in the router and passed in, see demoedit.js
       * vm.pet is the pet view model object backing the jade view
       * @type {Object}
       */
      if (!pet || pet == undefined) {
        pet = {};
      }
      //we want to create a new record if we pass in a '0' for the id
      if ($stateParams.id == '0') {
        pet._id = '0';
      }
      //logging out the pet from the resolve and the param for debugging
      $log.log('Incoming id is', pet._id, 'with param', $stateParams.id, pet);
      if (pet._id == undefined) {
        $log.log('Record not found, show toaster in demoedit now', pet._id);
        toaster.pop({
          type: 'info',
          title: 'Document not on file',
          body: 'We cannot find document ' + $stateParams.id,
          closeButton: true,
          showDuration: '10000'
        });
        $state.go('demo');
      }
      if (pet.birthDate) {
        pet.birthDate = new Date(pet.birthDate);
      }
      $log.log('birthDate is now', pet.birthDate);
      vm.pet = pet;
      /**
       * When the user clicks submit, we will add a pet using the next
       * sequential id if there is no pet id otherwise we will 
       * update the pet "record"
       */
      vm.addOrUpdatePet = function() {
        if (vm.pet._id != '0') {
          updatePet();
          return;
        }
        //get the next pet id
        var nextId = 0;
        vm.cpetDoc = CPetService.read({id: '1'}, 
          function(cpetDoc) {
            nextId = cpetDoc.nextId;
            vm.pet._id = nextId.toString();
            //we had a success getting the next id so let's add a record
            //PetService.create(vm.pet);
            $stateParams.id = vm.pet._id;
            PetService.create(vm.pet, 
              function(success) {
                $log.log('success writing new record', success);
                vm.pet = {};
                toaster.pop({
                  type: 'success',
                  title: 'Your pet document has been filed',
                  body: 'With an ID of ' + $stateParams.id,
                  closeButton: true,
                  showDuration: '10000'
                });
                $state.go('demo');
              }, 
              function(failure) {
                $log.error('failure writing new record', failure);
              });
            cpetDoc.nextId++;
            CPetService.update(cpetDoc);
          }, function(error) {
            $log.error(vm.docname, 'error reading CPet', error);
          }
        );
      };
      // updatePet is a private, internal function to update the record/document 
      // so we should not document
      // it with the public generated doc approach
      var updatePet = function() {
        PetService.update(vm.pet);
        vm.pet = {};
        $log.log('toaster should pop now, then we should go to demo');
        toaster.pop({
          type: 'success',
          title: 'Your document has been updated',
          body: 'With an ID of ' + $stateParams.id,
          closeButton: true,
          showDuration: '10000'
        });
        $state.go('demo');
      };
      /*
        The form for this state
      */
      //not sure what these options are
      vm.options = {};
      vm.formFields = [
      {
        key: '_id',
        template: '<input ng-model="model[options.key]" ng-hide="true" />'
      },
      {
        key: 'petType',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Pet type',
          focus: true,
          debounce: 150,
          placeholder: 'Enter pet type, such as Cat or Dog'
        }
      },
      {
        key: 'birthDate',
        type: 'input',
        templateOptions: {
          type: 'date',
          required: false,
          label: 'Pet birthdate',
          placeholder: 'Enter pet type, such as Cat or Dog'
        }
      },
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Name of pet',
          placeholder: 'Enter the name of the pet'
        }
      },
      {
        key: 'breed',
        type: 'input',
        templateOptions: {
          required: false,
          label: 'Breed',
          placeholder: 'Enter the breed of the pet'
        }
      },
      {
        key: 'householdName',
        type: 'input',
        templateOptions: {
          required: false,
          label: 'Household name',
          placeholder: 'Enter the last name of the household for this pet'
        }
      },
      {
        key: 'instructions',
        type: 'textarea',
        templateOptions: {
          required: false,
          label: 'Instructions',
          placeholder: 'Are there instructions related to this pet?',
          rows: 10
        }
      }
      ];
      $log.log(vm.docname, 'leaving this function with vm.pet', JSON.stringify(vm.pet));
    }]);
}());