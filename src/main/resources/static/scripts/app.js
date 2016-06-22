'use strict';

var insightsApp = angular.module('insightsApp', ['ngRoute']);

insightsApp.config(function($routeProvider) {

  $routeProvider.
      when('/', {
        controller: 'Controller',
        templateUrl: 'views/home.html'
      })

});
