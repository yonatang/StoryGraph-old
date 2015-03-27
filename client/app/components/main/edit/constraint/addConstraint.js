(function (angular, $, undefined) {
    'use strict';
    angular.module('sg.main')
        .controller('AddConstraintController', ['$modalInstance', 'constraint', 'profile',
            'TimeConstraint', 'CharacterConstraint', 'LocationConstraint', 'ThingConstraint',
            function ($modalInstance, constraint, profile,
                      TimeConstraint, CharacterConstraint, LocationConstraint, ThingConstraint) {
                console.log('AddConstraintController', constraint, profile);
                var ctrl = this;
                var originalConstraint = constraint;
                var editMode = ctrl.editMode = !!constraint;

                ctrl.type = null;
                ctrl.page = editMode ? 2 : 1;
                ctrl.next = function () {
                    ctrl.page++;
                    var AbsConstructor;
                    switch (ctrl.type) {
                        case 'where':
                            AbsConstructor = LocationConstraint;
                            break;
                        case 'when':
                            AbsConstructor = TimeConstraint;
                            break;
                        case 'who':
                            AbsConstructor = CharacterConstraint;
                            break;
                        case 'what':
                            AbsConstructor = ThingConstraint;
                            break;
                    }
                    ctrl.constraint = new AbsConstructor(profile);
                    console.log(ctrl.type);
                    console.log(ctrl.constraint);
                };
                ctrl.back = function(){
                    ctrl.page--;
                    ctrl.constraint = null;
                };
                ctrl.constraint = editMode ? constraint.clone() : null;
                ctrl.cancel = function () {
                    return $modalInstance.dismiss();
                };
                ctrl.ok = function () {
                    if (editMode) {
                        $.extend(true, originalConstraint, ctrl.constraint);
                    } else {
                        originalConstraint = ctrl.constraint;
                    }
                    return $modalInstance.close(originalConstraint);
                };

            }])
        .factory('addConstraint', ['$modal', function ($modal) {
            return function (constraint, profile) {
                console.log('addConstraint',constraint,profile);
                var modalInstance = $modal.open({
                    templateUrl: '/components/main/edit/constraint/addConstraint.tpl.html',
                    controller: 'AddConstraintController as ctrl',
                    backdrop: true,
                    size: 'sm',
                    resolve: {
                        constraint: function () {
                            return constraint;
                        },
                        profile: function(){
                            return profile;
                        }
                    }
                });
                return modalInstance;
            };
        }]);
})(angular, jQuery);
