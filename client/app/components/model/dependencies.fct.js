(function (angular, undefined) {
    'use strict';
    angular.module('sg.model')
        .factory('sg.Dependency', [function () {
            function Dependency(type, id) {
                this.id = id;
                this.type = type;
                this.operator = null;
                this.value = null;
            }

            Dependency.prototype = Object.create({}, {
                operators: {value: {}},
                closedListValue: {value: false}
            });
            Dependency.prototype.constructor = Dependency;
            return Dependency;

        }])

        .factory('sg.TimeDependency', ['sg.Dependency',
            function (Dependency) {
                function TimeDependency(id) {
                    Dependency.call(this, 'time', id);
                }

                TimeDependency.prototype = Object.create(Dependency.prototype, {
                    operators: {
                        value: {
                            'increase': {id: 'increase', name: 'Increase'},
                            'decrease': {id: 'decrease', name: 'Decrease'},
                            'same': {id: 'same', name: 'Same'}
                        }
                    }
                });
                TimeDependency.prototype.constructor = TimeDependency;
                return TimeDependency;

            }]);
})(angular);
