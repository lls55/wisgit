/**
 * app.js is the client-side configuration of our app, indicating
 * package dependencies, for example. It was scaffolded by yo with
 * our only additions to date being additional dependencies specified.
 * 
 */
(function() {
'use strict';
angular.module('workspaceApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'toaster',
  'ui.grid',
  'ui.grid.selection',
  'ui.grid.resizeColumns',
  'ui.grid.pagination',
  'ngAria',
  'ngMessages',
  'formly', 
  'formlyBootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    //set formly templates if adding , formlyConfigProvider to the list above
    // formlyConfigProvider.setType({
    //   name: 'custom',
    //   templateUrl: 'custom'
    // });
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },
      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })
  
  .run(function ($rootScope, $location, Auth, formlyConfig, 
    formlyValidationMessages) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
    formlyConfig.setWrapper({
      template: '<formly-transclude></formly-transclude><div class="my-messages" ng-messages="fc.$error" ng-if="options.formControl.$touched"><div class="some-message" ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">{{message(fc.$viewValue, fc.$modelValue, this)}}</div></div>',
      types: ['input', 'checkbox', 'select', 'textarea', 'radio']
    });
    formlyValidationMessages.addStringMessage('required', 'This field is required');
  });
}());