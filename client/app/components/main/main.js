(function (angular, window, undefine) {
    'use strict';
    var module = angular.module('sg.main', ['ngRoute']);
    module.controller('MainController', ['$scope',
        function ($scope) {
            var ctrl = this;

            ctrl.myName = 'Yonatan';
        }])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'components/main/main.html',
                    controller: 'MainController as ctrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);

}(angular, window));
