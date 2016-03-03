// app/app.js

import angular from 'angular';

angular.module('app', [])
    .controller('MainController', ($scope) => {
        $scope.hello = 'Hello World';
    });