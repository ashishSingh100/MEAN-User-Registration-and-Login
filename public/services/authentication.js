angular.module('meanApp')
    .factory('authentication', ['$http','$window', function($http,$window) {

    var authentication = {};

    authentication.saveToken = function (token) {
        $window.localStorage['mean-token'] = token;
    };

    authentication.getToken = function () {
        return $window.localStorage['mean-token'];
    };

    authentication.logout = function () {
        $window.localStorage.removeItem('mean-token');
    };

    authentication.isLoggedIn = function () {
        var token = authentication.getToken();
        var payload;

        if (token) {
            payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);

            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };

    authentication.currentUser = function () {
        if (isLoggedIn()) {
            var token = authentication.getToken();
            var payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
            return {
                email: payload.email,
                name: payload.name
            };
        }
    };


    authentication.register = function (user) {
        return $http.post('/api/register', user).then(function (data) {
            authentication.saveToken(data.token);

        });
    };

    authentication.login = function (user) {
        return $http.post('/api/login', user).then(function (data) {
            alert('DATA IS SUCESSFUL');
        });
    };


    return authentication;
}]);


