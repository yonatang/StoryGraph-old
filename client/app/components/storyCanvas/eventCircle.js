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
                    templateUrl: '/components/storyCanvas/eventCircle.tpl.html',
                    link: function (scope, element) {
                        scope.radius=25;
                        element.css('cursor', 'pointer');
                        var xClick, yClick;
                        scope.nodeMouseDown = function (event, sgEvent) {
                            dragging.startDrag(event, {
                                dragStarted: function (x, y) {
                                    var offset = element.offset();
                                    xClick = x - offset.left;
                                    yClick = y - offset.top;
                                },
                                dragging: function (x, y, evt) {
                                    scope.sgEvent.x = evt.offsetX - xClick;
                                    scope.sgEvent.y = evt.offsetY - yClick;
                                },
                                clicked: function () {
                                    storyGraphService.selectEvent(sgEvent);
                                },
                                dragEnded: function () {
                                }
                                //clicked: // ...
                                //});
                            });
                        };
                    }
                };
            }]);
})(angular, window);
