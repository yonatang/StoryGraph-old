(function (angular, undefined) {
    'use strict';

    angular.module('sg.main')
        .controller('AddDependencyController', ['$modalInstance', 'storyGraphService', 'sgEvent', 'dependency', 'profile',
            'TimeDependency',
            function ($modalInstance, storyGraphService, sgEvent, dependency, profile, TimeDependency) {
                var ctrl = this;
                var originalDependency = dependency;
                var editMode = ctrl.editMode = !!dependency;

                ctrl.events = storyGraphService.events;
                ctrl.sgEvent = sgEvent;
                ctrl.targetEvents = [];
                //ctrl.storyGraphService = storyGraphService;
                ctrl.type = editMode ? dependency.name : null;
                ctrl.page = editMode ? 2 : 1;
                //ctrl.next = function () {
                //    ctrl.page++;
                //    var AbsConstructor;
                //    switch (ctrl.type) {
                //        case 'where':
                //            AbsConstructor = LocationConstraint;
                //            break;
                //        case 'when':
                //            AbsConstructor = TimeConstraint;
                //            break;
                //        case 'who':
                //            AbsConstructor = CharacterConstraint;
                //            break;
                //        case 'what':
                //            AbsConstructor = ThingConstraint;
                //
                //            break;
                //    }
                //    ctrl.constraint = new AbsConstructor(profile);
                //};
                //ctrl.back = function(){
                //    ctrl.page--;
                //    ctrl.constraint = null;
                //};
                ctrl.dependency = new TimeDependency(); //editMode ? dependency.clone() : null;
                ctrl.cancel = function () {
                    return $modalInstance.dismiss();
                };
                ctrl.ok = function () {
                    var dependencies = [];
                    angular.forEach(ctrl.targetEvents, function(eventId){
                        dependencies.push(new TimeDependency(ctrl.sgEvent.id,eventId));
                    });
                    return $modalInstance.close(dependencies)
                    //if (editMode) {
                    //    originalDependency.mergeWith(ctrl.dependency);
                    //} else {
                    //    originalDependency = ctrl.dependency;
                    //}
                    //return $modalInstance.close(originalDependency);
                };
            }])
        .factory('addEditDependency', ['$modal', function ($modal) {
            return function (sgEvent, dependency, profile) {
                var modalInstance = $modal.open({
                    templateUrl: '/components/main/edit/dependency/addDependency.tpl.html',
                    controller: 'AddDependencyController as ctrl',
                    backdrop: true,
                    size: 'sm',
                    resolve: {
                        dependency: function () {
                            return dependency;
                        },
                        sgEvent : function(){
                            return sgEvent;
                        },
                        profile: function(){
                            return profile;
                        }
                    }
                });
                return modalInstance;
            };
        }]);
})(angular);
