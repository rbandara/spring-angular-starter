'use strict';

var insightsApp = angular.module('insightsApp', ['ngRoute']);

insightsApp.config(function($routeProvider) {

  $routeProvider.
      when('/', {
        controller: 'LiveController',
        templateUrl: 'views/home.html'
      })

});
