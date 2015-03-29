(function (angular, undefined) {
    'use strict';
    angular.module('sg.model')
        .factory('Dependency', [function () {
            function Dependency(type, fromEventId, toEventId) {
                this.fromEventId = fromEventId;
                this.toEventId = toEventId;
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

        .factory('TimeDependency', ['Dependency',
            function (Dependency) {
                function TimeDependency(fromEventId, toEventId) {
                    Dependency.call(this, 'when', fromEventId, toEventId);
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
