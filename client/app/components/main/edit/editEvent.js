(function (angular, undefined) {
    'use strict';
    angular.module('sg.main')
        .controller('EditEventController', ['$modalInstance', 'sgEvent', 'addEditConstraint',
            'storyGraphService',
            function ($modalInstance, sgEvent, addEditConstraint, storyGraphService) {
                var ctrl = this;
                var originalEvent = sgEvent;
                ctrl.sgEvent = sgEvent.clone();
                ctrl.cancel = function () {
                    return $modalInstance.dismiss();
                };
                ctrl.ok = function () {
                    originalEvent.mergeWith(ctrl.sgEvent);
                    return $modalInstance.close();
                };
                ctrl.addConstraint = function () {
                    addEditConstraint(null, storyGraphService.profile).result
                        .then(function (constraint) {
                            ctrl.sgEvent.constraints.push(constraint);
                        });
                };
                ctrl.removeConstraint = function(constraint){
                    var constraints = ctrl.sgEvent.constraints;
                    var idx= constraints.indexOf(constraint);
                    if (idx>-1){
                        constraints.splice(idx,1);
                    }
                };
                ctrl.editConstraint = function(constraint){
                    addEditConstraint(constraint, null);
                };

            }])
        .factory('editEvent', ['$modal', function ($modal) {
            return function (sgEvent) {
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
})(angular);
