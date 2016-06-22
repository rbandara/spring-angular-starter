'use strict';

insightsApp.controller('Controller',
    function LiveController($scope, service) {
        service.loadData()
            .success(function (data) {
                $scope.data = data;
            })
            .error(function (message) {
                $scope.error = message;
            });
});
