(function (angular, $, undefined) {
    'use strict';
    angular.module('sg.main')
        .controller('EditEventController', ['$modalInstance', 'sgEvent',
            function ($modalInstance, sgEvent) {
                var ctrl=this;
                var originalEvent = sgEvent;
                ctrl.sgEvent = angular.copy(sgEvent);
                ctrl.cancel = function(){
                    return $modalInstance.dismiss();
                };
                ctrl.ok = function(){
                    $.extend(true, originalEvent,ctrl.sgEvent);
                    return $modalInstance.close();
                };

            }])
        .factory('editEvent', ['$modal', function($modal){
            return function(sgEvent){
                var modalInstance = $modal.open({
                    templateUrl: '/components/main/edit/editEvent.tpl.html',
                    controller: 'EditEventController as ctrl',
                    //size: size,
                    resolve: {
                        sgEvent: function () {
                            return sgEvent;
                        }
                    }
                });
                return modalInstance;
            };
        }]);
})(angular, jQuery);
