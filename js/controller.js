'use strict';

var enterStuff = angular.module('enterStuff', []);

enterStuff.controller('EnterController', ['$scope', 
  function ($scope) {
  $scope.stuffIn = '';
  
  $scope.$watch('stuffIn', 
  function () {
    $scope.showStuff = ($scope.stuffIn).trim();
  });
}]);