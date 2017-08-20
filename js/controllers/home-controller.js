"use strict";

app.controller("HomeController", function($scope, $window) {

    $scope.example = {
        function: `function getSong() = {
      return totalEclipse;
    }`
    };

    $scope.chorus = "Turnaround Every now and then";



    $scope.changeLyric = (parameterz, number) => {

        if (number === 1) {
            $scope.version1 = parameterz;
        } else if (number === 2) {
            $scope.version2 = parameterz;
        } else if (number === 3) {
            $scope.version3 = parameterz;
        } else if (number ===4) {
            $scope.version4 = parameterz;
        }


    };

});
