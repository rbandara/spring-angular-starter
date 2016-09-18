'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

  $routeProvider.
      when('/', {
        controller: 'Controller',
        templateUrl: 'views/home.html'
      })

});
