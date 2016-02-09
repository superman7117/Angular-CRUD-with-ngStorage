'use strict';
console.log('main.js')
var app = angular.module("MyApp", ['ngStorage']);
app.controller("mainCtrl", ['$scope', '$localStorage', function($scope, $localStorage){
  console.log("hello Ctlr");
  $scope.$storage = $localStorage;
  $scope.keys = Object.keys;

    if($scope.$storage.names){
      $scope.names = $scope.$storage.names;
    }
    else{
      $localStorage.names = [];
    }
  $scope.initNewContact = function(){
    $('.baboom').addClass('thisthing')

    $scope.addNew = function(x){
      console.log("$scope", $scope.newContact.Name);
      var names = $localStorage.names;
      $scope.names.push($scope.newContact);
      $localStorage.names = names
      $scope.newContact = {};
      $('.baboom').removeClass('thisthing')
    }
  }
  $scope.deleteName = function(names){
    console.log('names', this.obj);
    var index = $scope.names.indexOf(this.obj);
    console.log(index);
    $localStorage.names.splice(index, 1);
  };
  $scope.editName = function(){
    var index = $scope.names.indexOf(this.obj);
    $('.editCt').addClass('thisthing')
    console.log("index in editname", index);
    $scope.editContact = function(){
      console.log("index inside of edit", index);
      $localStorage.names.splice(index, 1, $scope.updateContact);
      $scope.updateContact = {};
      $('.editCt').removeClass('thisthing')
    }
  }

}])
