angular.module('meanApp', ['ngRoute'])
    .config(['$locationProvider','$routeProvider', function ($locationProvider,$routeProvider) {


        $routeProvider
               .when('/', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
         
            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });


        $locationProvider.html5Mode(true);
  }]);


