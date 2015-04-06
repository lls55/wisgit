/**
 * Pet.Service.js is a cookie-cutter set of methods for CRUD on Pets
 * @return {$resource}
 * @todo  delete has not been tested. We have not determined good patterns
 * for async work and error handling in code using this service.
 */
(function() {
'use strict';
/**
 * @namespace workspaceApp
 * @param {string} [someThing] [I will have to read up on this]
 */
angular.module('workspaceApp')
  .factory('PetService', ['$log', '$resource', 'toaster',
    function ($log, $resource, toaster) {
      $log.log('in PetService factory');
      //return $resource('/api/Pets/:id', {householdName:'@householdName'},
      return $resource('/api/Pets/:id', {},
      {
        'list': {
          method: 'GET', 
          isArray: true
        },
        'query': {
          method: 'GET', 
          isArray: true
        },
        'create': {
          method: 'POST'
        },
        'read': {
          method: 'GET', 
          params: {id: '@_id'},
          interceptor: {
          //   response: function (data) {
          //       $log.log('all is well');
          //       $log.log('response in interceptor',data);
          //   },
            responseError: function (data) {
              $log.log('pet.service.js', 'error caught in interceptor', data);
              data = {};
              data._id = '0';
            }
          }
        },
        'update': {
          method: 'PUT', 
          params: {id: '@_id'}
        },
        'delete': {
          method: 'DELETE', 
          params: {id: '@_id'}
        }
      });
    }]);
}());