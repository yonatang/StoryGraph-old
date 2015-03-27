(function (angular, undefined) {
    'use strict';
    angular.module('sg.main')
        .controller('EditEventController', ['$modalInstance', 'sgEvent', 'addConstraint',
            'storyGraphService',
            function ($modalInstance, sgEvent, addConstraint, storyGraphService) {
                var ctrl = this;
                var originalEvent = sgEvent;
                ctrl.editMode = !!sgEvent;
                ctrl.sgEvent = ctrl.editMode ? sgEvent.clone() : null;
                ctrl.cancel = function () {
                    return $modalInstance.dismiss();
                };
                ctrl.ok = function () {
                    originalEvent.mergeWith(ctrl.sgEvent);
                    return $modalInstance.close();
                };
                ctrl.addConstraint = function () {
                    addConstraint(null, storyGraphService.profile).result
                        .then(function (constraint) {
                            ctrl.sgEvent.constraints.push(constraint);
                        });
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
