'use strict';

app.controller('PracticeCtrl', function($scope, $window){
    console.log('Practice!');

    $scope.functionDef = '';
    $scope.functionCall = '';
    $scope.functionResult = '';
    let fArray = '';
    let fCall = '';

    $scope.execute = () => {
        buildFunction();
    };

    let buildFunction = () => {
        let userFunction = new Function(parseFunction($scope.functionDef));
    };

    let parseFunction = (string) => {
        checkFunctionSpell(string);
    };

    let extractFunctionName = (string) => {
        let f = string;
        fArray = f.split('');
        let fName = fArray.slice(9, fArray.indexOf('('));
        let fCall = fName.join('').trimRight();
        checkParentheses(string);
    };

    let checkFunctionSpell = (string) => {
        let f = string.slice(0, 8);
        if (f === 'function'){
            extractFunctionName(string);
        } else {
            console.log('TOOLTIP: You have spelled function incorrectly');
        }
    };

    let checkParentheses = (string) => {
        if (string.includes('()') || string.includes('( )')) {
            console.log("RUN THE NEXT CHECK");
        } else {
            console.log('TOOLTIP: You have not formatted your function definition correctly. Please check your ()');
        }
    };

    //     f.indexOf('(');
    //     f.indexOf('{');
    //     f.indexOf('}');

});
