'use strict';

app.controller('PracticeCtrl', function($scope, $window){
    console.log('Practice!');

    $scope.functionDef = '';
    $scope.functionCall = '';
    $scope.functionResult = '';

    $scope.execute = () => {
        console.log($scope.functionDef);
    }

});
