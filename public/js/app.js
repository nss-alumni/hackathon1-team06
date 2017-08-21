"use strict";

let app = angular.module("TotalEclipse", ["ngRoute", "ui.materialize"]);


app.config( ($routeProvider) => {
  $routeProvider
    .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
    })
  .otherwise('/');
});
