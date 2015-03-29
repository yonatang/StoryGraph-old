(function (angular, window, undefined) {
    'use strict';

    angular.module('sg.storyCanvas')
        .directive('sgEventDependency', ['storyGraphService',
            function(storyGraphService) {
                return {
                    replace: true,
                    scope: {
                        dep: '=sgDependency'
                    },
                    template: '<line ' +
                        'ng-attr-x1="{{getE1().x}}" ng-attr-y1="{{getE1().y}}" ' +
                        'ng-attr-x2="{{getE2().x}}" ng-attr-y2="{{getE2().y}}" ' +
                        'class="dep-class" ' +
                        'ng-class="cssStyle" />',
                    link: function(scope){
                        var dependency = scope.dep;
                        scope.getE1 = function(){
                            return storyGraphService.getEventById(dependency.fromEventId);
                        };
                        scope.getE2 = function(){
                            return storyGraphService.getEventById(dependency.toEventId);
                        };
                        scope.$watch('dep.type', function(type){
                            scope.cssStyle = 'dep-class-'+type;
                        });
                    }
                };
            }]);
})(angular,window);
