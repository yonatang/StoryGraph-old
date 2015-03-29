(function (angular, window, undefined) {
    'use strict';

    angular.module('sg.storyCanvas')
        .directive('sgCanvas', ['storyGraphService',
            function (storyGraphService) {
                return {
                    templateUrl: '/components/storyCanvas/storyCanvas.html',
                    restrict: 'E',
                    link: function (scope) {
                        scope.events = storyGraphService.events;
                        scope.dependencies = storyGraphService.dependencies;
                        scope.eventDeps = storyGraphService.eventDeps;
                        scope.state = storyGraphService.state;
                        scope.getSgEvent = function(){
                            return storyGraphService.state.selectedEvents[0];
                        };
                        scope.deselectAll = function(){
                            storyGraphService.deselectAll();
                        };
                    }
                };
            }]);
})(angular, window);
