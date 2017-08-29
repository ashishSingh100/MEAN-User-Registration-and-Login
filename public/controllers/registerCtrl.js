angular.module('meanApp')
.controller('RegisterCtrl',['$scope','$location','authentication',function($scope,$location,authentication){

$scope.credentials = {
  name : "",
  email : "",
  password : ""
};

$scope.onSubmit = function () {
  authentication
    .register($scope.credentials)
    .then(function(err){
      alert(err);
    })
    .then(function(){
$location.url('/login');
    });
};

}]);


