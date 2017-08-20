'use strict';

let app = angular.module('TotalEclipse', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
    .when('/practice1', {
        templateUrl: 'partials/practiceView1.html',
        controller: 'PracticeCtrl'
    })
    .otherwise('/');
});