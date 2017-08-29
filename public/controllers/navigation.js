angular.module('meanApp')
.controller('navigation',['$scope','$location','authentication',function($scope,$location,authentication){

 

  $scope.isLoggedIn = authentication.isLoggedIn();

  $scope.currentUser = authentication.currentUser();
}]);






