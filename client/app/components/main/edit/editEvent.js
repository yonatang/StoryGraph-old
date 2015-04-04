(function (angular, undefined) {
    'use strict';
    angular.module('sg.main')
        .controller('EditEventController', ['$modalInstance', 'sgEvent', 'addEditConstraint',
            'addEditDependency', 'storyGraphService',
            function ($modalInstance, sgEvent, addEditConstraint, addEditDependency, storyGraphService) {
                var ctrl = this;
                var originalEvent = sgEvent;
                ctrl.sgEvent = sgEvent.clone();
                ctrl.inDeps = storyGraphService.eventDeps[sgEvent.id].inDeps;
                ctrl.outDeps = storyGraphService.eventDeps[sgEvent.id].outDeps;
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
                ctrl.addDependency = function () {
                    addEditDependency(ctrl.sgEvent, storyGraphService.profile).result
                        .then(function (dependencies) {
                            //TODO keep action for commit at the save of the form
                            angular.forEach(dependencies, function (dependency) {
                                storyGraphService.addDependency(dependency);
                            });
                        });
                };
                ctrl.removeConstraint = function (constraint) {
                    var constraints = ctrl.sgEvent.constraints;
                    var idx = constraints.indexOf(constraint);
                    if (idx > -1) {
                        constraints.splice(idx, 1);
                    }
                };
                ctrl.editConstraint = function (constraint) {
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
