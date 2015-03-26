(function (angular, $, undefined) {
    'use strict';
    angular.module('sg.main')
        .controller('EditEventController', ['$modalInstance', 'sgEvent', 'addConstraint',
            'storyGraphService',
            function ($modalInstance, sgEvent, addConstraint, storyGraphService) {
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
                ctrl.addConstraint = function(){
                    addConstraint(null, storyGraphService.profile).result.then(function(constraint){
                        console.log('received constraint',constraint);
                        window.constraint=constraint;
                        if (!ctrl.sgEvent.constraints){
                            ctrl.sgEvent.constraints=[];
                        }
                        ctrl.sgEvent.constraints.push(constraint);
                    });
                };

            }])
        .factory('editEvent', ['$modal', function($modal){
            return function(sgEvent){
                var modalInstance = $modal.open({
                    templateUrl: '/components/main/edit/editEvent.tpl.html',
                    controller: 'EditEventController as ctrl',
                    backdrop: true,
                    size: 'lg',
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
