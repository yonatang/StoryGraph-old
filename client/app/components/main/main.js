(function (angular, window, undefined) {
    'use strict';
    var module = angular.module('sg.main', [
        'sg.storyCanvas',
        'sg.services',
        'ngRoute'
    ]);
    module.controller('MainController', ['$scope', 'storyGraphService',
        function ($scope, storyGraphService) {
            var ctrl = this;
            $scope=$scope;

            var CONSTRAINT_TYPES = [
                {name: 'where'}, {name: 'when'}, {name: 'who'}
            ];

            ctrl.constraintTypes = CONSTRAINT_TYPES;
            ctrl.newDependencyData = {};
            ctrl.eventToRemove = null;
            ctrl.dependencyToRemove = null;
            ctrl.events = storyGraphService.events;
            ctrl.dependencies = storyGraphService.dependencies;

            ctrl.addEvent = function () {
                storyGraphService.addNewEvent(10+Math.random()*100, 10+Math.random()*100);
                ctrl.newEventData = {};
            };
            ctrl.addDependency = function () {
                var newDependencyData = ctrl.newDependencyData;
                storyGraphService.addDependency(newDependencyData.w.id, newDependencyData.v.id,
                    newDependencyData.type.name, newDependencyData.data);
                ctrl.newDependencyData = {};
            };
            ctrl.removeDependency = function(){
                var dependencyToRemove = ctrl.dependencyToRemove;
                storyGraphService.removeDependency(dependencyToRemove);
                ctrl.edgeToRemove = null;
            };
            ctrl.removeEvent = function(){
                var eventToRemove = ctrl.eventToRemove;
                storyGraphService.removeEvent(eventToRemove);
                ctrl.eventToRemove = null;
            };
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
