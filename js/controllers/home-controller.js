"use strict";

app.controller("HomeController", function($scope, $window) {

    $scope.example = {
        function: `function getSong() = {
      return totalEclipse;
    }`
    };

    $scope.chorus = "Turnaround bright eyes, every now and then I fall apart Turnaround bright eyes, every now and then I fall apart";



    $scope.changeLyric = (parameterz, number) => {
        // 	$scope.singsong = "(que 80s pop ballad intro)";
        // $scope.parameters = ["lonely", "tired", "terrified", "scared"]; 
        //  	$scope.parameters.push(parameterz);
        //  	let lyric = " Turnaround, every now and then I get a little bit ";

        //  	for (var i = 0; i < $scope.parameters.length; i++)
        //   	{
        //   		$scope.singsong += `${lyric} ${$scope.parameters[i]}`;
        //   	}

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