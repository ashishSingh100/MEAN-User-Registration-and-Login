
angular.module('meanApp')
.controller('ProfileCtrl',['$scope','$location','meanData',function($scope,$location,meanData){


  $scope.user = {};

  meanData.getProfile()
    .success(function(data) {
      $scope.user = data;
    })
    .error(function (e) {
      console.log(e);
    });
}
]);


