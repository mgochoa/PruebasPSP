'use strict';
angular.module('myApp').controller('myCtrl', myCtrl);

myCtrl.$inject = ['$scope', '$http'];

function myCtrl($scope, $http) {
    $scope.info = {};
    $scope.data = [];

    angular.element(document).ready(function() {
        $http({method: 'GET', url: './data.json'}).then(function successCallback(response) {
            console.log('response ', response);
            $scope.data = response.data.sizes;
            $scope.info = response.data;
        }, function errorCallback(response) {
            console.error("Error en el json");
        });
    });
    $scope.labels = ["Very Small", "Small", "Medium", "Large", "Very Large"];

    //$scope.data = [4.395269124478685, 8.508138249389225, 16.469620953940062, 31.881053929269868, 61.713721431934815];

};
