'use strict';

app.controller('PracticeCtrl', function($scope, $window){
    console.log('Practice!');

    $scope.functionDef = '';
    $scope.functionCall = '';
    $scope.functionResult = '';
    let fArray = '';

    $scope.execute = () => {
        console.log($scope.functionDef);
        buildFunction();
    };

    let buildFunction = () => {
        let userFunction = new Function(parseFunction($scope.functionDef));
    };

    let parseFunction = (string) => {
        checkFunctionSpell(string);
        extractFunctionName(string);
        getReturn(string);
    };

    let extractFunctionName = (string) => {
        let f = string;
        fArray = f.split('');
        let fName = fArray.slice(9, fArray.indexOf('('));
        let fCall = fName.join('').trimRight();
        console.log(fCall);
        return fCall;
    };

    let checkFunctionSpell = (string) => {
        let f = string.slice(0, 8);
        console.log(f);
        if (f === 'function'){
            return;
        } else {
            console.log('You have spelled function incorrectly');
        }
    };

    //     f.indexOf('(');
    //     f.indexOf('{');
    //     f.indexOf('}');

    let getReturn = (string) => {

      let stringArray = string.split('');

      let withReturns = stringArray.slice(stringArray.indexOf('{') + 1, stringArray.indexOf('}'));
      withReturns.splice(withReturns.indexOf("\n"), 1);
    
      if (withReturns[(withReturns.indexOf("\n"))-1] !== ";") {
        console.log("TOOL TIP: Don't forget your ';' at the end of your return statement!");
      } else {
        withReturns = withReturns.join('');
        let returnStatement = withReturns.slice(withReturns.indexOf('return'), withReturns.indexOf(';') + 1);
        return returnStatement;
      }

    };


});
