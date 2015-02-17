'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html'
      })
      .when('/form', {
        controller: 'ListFormCtrl',
        templateUrl: 'list-form/list-form.html'
      });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });
