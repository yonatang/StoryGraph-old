(function (angular, window, undefined) {
    'use strict';

    angular.module('sg.storyCanvas')
        .directive('sgEventCircle', ['storyGraphService', 'dragging',
            function (storyGraphService, dragging) {
                return {
                    replace: true,
                    scope: {
                        sgEvent: '=sgEvent'
                    },
                    template: '<circle ' +
                    'ng-class="{ selected : sgEvent.selected }" ' +
                    'ng-attr-cx="{{sgEvent.x}}" ng-attr-cy="{{sgEvent.y}}" r="10" ' +
                    'ng-mousedown="nodeMouseDown($event, sgEvent)"></circle>',
                    link: function (scope, element) {
                        element.css('cursor', 'pointer');
                        scope.nodeMouseDown = function (event, sgEvent) {
                            dragging.startDrag(event, {
                                //dragStarted: function (x, y) {
                                //},
                                dragging: function (x, y, evt) {
                                    scope.sgEvent.x = evt.offsetX;
                                    scope.sgEvent.y = evt.offsetY;
                                },
                                clicked: function () {
                                    storyGraphService.selectEvent(sgEvent);
                                }
                                //clicked: // ...
                                //});
                            });
                        };
                    }
                };
            }]);
})(angular, window);
