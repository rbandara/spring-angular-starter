'use strict';

myApp.service('service', function insightsService($http) {

        var baseUrl = '/myapp';

        this.loadData = function () {
            return $http(getHttpGetRequest('/data'));
        }

        var httpGetRequest = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
              };

        var getHttpGetRequest = function(endPoint){
              return angular.extend({},httpGetRequest,{
                url: baseUrl + endPoint
              });
            };



    }
);
