'use strict';
angular.module('myApp').controller('myCtrl', myCtrl);

myCtrl.$inject = ['$scope'];

function myCtrl($scope) {
    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
    ];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [
          130,
      650,
      99,
      150,
      128,
      302,
      95,
      945,
      368,
      961
        ],
        [
          186,
      699,
      132,
      272,
      291,
      331,
      199,
      1890,
      788,
      1601
        ]
    ];
  
    $scope.onClick = function(points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [
        {
            yAxisID: 'y-axis-1'
        }, {
            yAxisID: 'y-axis-2'
        }
    ];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }, {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };
};
