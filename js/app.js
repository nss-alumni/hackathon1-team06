'use strict';

let app = angular.module('TotalEclipse', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
    .otherwise('/');
});