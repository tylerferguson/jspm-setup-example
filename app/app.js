// app/app.js

import angular from 'angular';

import MainController from './main.controller.js';

angular.module('app', [])
    .controller('MainController', MainController);