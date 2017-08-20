'use strict';

var x;
var name;

app.controller('PracticeCtrl', function($scope, $window){
    console.log('Practice!');

    $scope.functionDef = '';
    $scope.functionCall = '';
    $scope.functionResult = '';
    $scope.functionVariable = 'Hello ';
    $scope.functionParameter = '';
    let functionName = '';
    let userReturn = '';

    $scope.execute = () => {
        buildFunction();
    };
    

    $scope.reset = () => {
        $scope.functionDef = '';
        $scope.functionCall = '';
        $scope.functionResult = '';
        $scope.functionVariable = 'Hello ';
        $scope.functionParameter = '';
    };

    let buildFunction = () => {
        parseFunction($scope.functionDef);
    };

    let parseFunction = (string) => {
        checkFunctionSpell(string);
    };

    let extractFunctionName = (string) => {
        let f = string;
        let fArray = f.split('');
        let fName = fArray.slice(9, fArray.indexOf('('));
        let fCall = fName.join('').trimRight();
        functionName = fCall;
        checkParentheses(string);
    };

    let checkFunctionSpell = (string) => {
        let f = string.slice(0, 8);
        if (f === 'function'){
            extractFunctionName(string);
        } else {
            Materialize.toast('You have spelled function incorrectly', 5000);
            console.log('TOOLTIP: You have spelled function incorrectly');
        }
    };

    let checkParentheses = (string) => {
        if (string.includes('()') || string.includes('( )') || string.includes('(name)') || string.includes('( name )')) {
            checkCurlies(string);
        } else {
            Materialize.toast('You have not formatted your function definition correctly. Please check your ()', 5000);
            console.log('TOOLTIP: You have not formatted your function definition correctly. Please check your ()');
        }
    };

    let checkCurlies = (string) => {
        if (string.includes('{') && string.includes('}')) {
            getReturn(string);
        } else {
            Materialize.toast('You are missing an opening or closing curly brace.', 5000);
            console.log('You are missing an opening or closing curly brace.');
        }
    };

    let getReturn = (string) => {

      let stringArray = string.split('');

      let withReturns = stringArray.slice(stringArray.indexOf('{') + 1, stringArray.indexOf('}'));
      withReturns.splice(withReturns.indexOf("\n"), 1);

      if (withReturns[(withReturns.indexOf("\n"))-1] !== ";") {
        Materialize.toast("Don't forget your ';' at the end of your return statement!", 5000);
        console.log("TOOL TIP: Don't forget your ';' at the end of your return statement!");
      } else {
        withReturns = withReturns.join('');
        let returnStatement = withReturns.slice(withReturns.indexOf('return'), withReturns.indexOf(';') + 1);
        userReturn = returnStatement;
        checkFunctionCall();
      }

    };

    

    let checkFunctionCall = () => {
        if ($scope.functionCall === `${functionName}();`){
            runUserFunction();
        } else if ($scope.functionCall === `${functionName}(name);`){
            runUserFunctionWithParams();
        } else {
            Materialize.toast('You have called the function incorrectly.', 5000)
            console.log("TOOLTIP: You have called the function incorrectly.");
        }
    };

    let runUserFunction = () => {
        x = $scope.functionVariable;
        let definition = new Function(userReturn);
        $scope.functionResult = definition();
    };


    let runUserFunctionWithParams = () => {
        x = $scope.functionVariable;
        name = $scope.functionParameter;
        let definition = new Function(name, userReturn);
        $scope.functionResult = definition();
    };


});
