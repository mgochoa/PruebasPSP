'use strict';
angular.module('myApp').controller('myCtrl', myCtrl);

myCtrl.$inject = ['$scope', '$http'];

function myCtrl($scope, $http) {
    var resultados = null;
    $scope.info = {};
    $scope.data = [];
    $scope.answer = {
        visible: false,
        data: null,
        error: false
    }

    angular.element(document).ready(function() {
        $http({method: 'GET', url: './data.json'}).then(function successCallback(response) {
            console.log('response ', response);
            $scope.data = response.data.points;
            $scope.info = response.data;
        }, function errorCallback(response) {
            console.error("Error en el json");
        });
    });

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ["Scatter Dataset"];
    $scope.series = ["Serie A"];

    $scope.onClick = function(points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [
        {
            yAxisID: 'y-axis-1'
        }, {
            xAxisID: 'x-axis-1'
        }
    ];
    $scope.options = {
        fill: false,
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ],
            xAxes: [
                {
                    id: 'x-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'bottom'

                }
            ]
        }
    };

    $scope.submitForm = function(form) {
        $scope.answer.visible = false;
        $scope.error = false;

        try {
            $scope.answer.data = $scope.info.equation[0] * form.xB.$modelValue + $scope.info.equation[1];
            $scope.answer.visible = true;
        } catch (e) {
            $scope.answer.error = true;

        }

        // check to make sure the form is completely vali

    };

};
