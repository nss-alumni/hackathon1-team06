"use strict";

let app = angular.module("TotalEclipse", ["ngRoute", "ui.materialize"]);


app.config( ($routeProvider) => {
  $routeProvider
    .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
    })
    // .when('/practice1', {
    //     templateUrl: 'partials/practiceView1.html',
    //     controller: 'PracticeCtrl'
    // })
  .otherwise('/');
});
