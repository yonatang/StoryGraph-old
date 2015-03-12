(function (angular, window, undefined) {
    'use strict';

    angular.module('sg.storyCanvas')
        .directive('sgEventDependency', ['storyGraphService',
            function(storyGraphService) {
                return {
                    replace: true,
                    scope: {
                        sgDependency: '='
                    },
                    template: '<line ' +
                        'ng-attr-x1="{{getE1().x}}" ng-attr-y1="{{getE1().y}}" ' +
                        'ng-attr-x2="{{getE2().x}}" ng-attr-y2="{{getE2().y}}" ' +
                        'style="stroke:rgb(255,0,0);stroke-width:2" />',
                    link: function(scope){
                        var dependency = scope.sgDependency;
                        scope.getE1 = function(){
                            return storyGraphService.getEventById(dependency.event1Id);
                        };
                        scope.getE2 = function(){
                            return storyGraphService.getEventById(dependency.event2Id);
                        };

                        console.log(dependency);
                    }
                };
            }]);
})(angular,window);
