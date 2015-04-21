/**
 * pet.like.service.js is a starter for find like logic on Pets
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
  .factory('PetLikeService', ['$log', '$resource', 'toaster',
    function ($log, $resource, toaster) {
      $log.log('in PetLikeService factory');
      return $resource('/api/Pets/find/:like', {}, {
        'list': {
          method: 'GET', 
          isArray: true
        },
        'findLike': {
          method: 'GET', 
          isArray: true,
          params: {like: '@like'},
        }
      });
    }]);
}());