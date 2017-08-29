angular.module('meanApp')
.controller('LoginCtrl',['$scope','$location','authentication',function($scope,$location,authentication){

$scope.credentials = {
    email : "",
    password : ""
  };

  $scope.onSubmit = function () {
    authentication
    .login($scope.credentials)
    .then(function(){
      $location.url('/profile');
    });
  };

}]);

