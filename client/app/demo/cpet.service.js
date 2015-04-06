(function() {
'use strict';
angular.module('workspaceApp')
  .factory('CPetService', ['$log', '$resource', 
    function ($log, $resource) {
      return $resource('/api/CPets/:id', {},
      {
        'list': {method: 'GET', isArray: true},
        'create': {method: 'POST'},
        'read': {method: 'GET', params:{id:'@_id'}},
        'update': {method: 'PUT', params:{id:'@_id'}},
        'delete': {method: 'DELETE', params:{id:'@_id'}}
      });
    }]);
}());