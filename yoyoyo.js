'use strict';
console.log('main.js')
var app = angular.module("MyApp", []);

app.controller("mainCtrl", function($scope){
  console.log("hello Ctlr");
  $scope.names = {theNames:['zach', 'paige' , 'ben'],
    theParents:['molly', 'steve', 'joe']
  },

  $scope.qty = 5;
  $scope.cost = 10;
  $scope.doubleCosts = function(){
    console.log('double costs');
    $scope.cost *= 2;
  }
  $scope.addName = function(){
    $scope.names.theNames.push($scope.newName)
    $scope.names.theParents.push($scope.newParents)

  }
})
