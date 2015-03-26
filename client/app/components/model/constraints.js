(function (angular, undefined) {
    'use strict';
    var singleValueOperator = {
        'oneOf': {id: 'oneOf', name: 'Must be one of'},
        'notOneOf': {id: 'notOneOf', name: 'Cannot be one of'}
    };
    var multiValueOperator = {
        'includeAll': {id: 'includeAll', name: 'Must include all of'},
        'includeN': {id: 'includeN', name: 'Must include N of', extra:true},
        'excludeAll': {id: 'excludeAll', name: 'Cannot include all of'}
    };
    angular.module('sg.model')
        .factory('Constraint', function () {
            function Constraint(type) {
                this.type = type;
                this.operator = null;
                this.value = [];
            }

            Constraint.prototype = Object.create({}, {
                operators: {value: {}},
                valueNames: {
                    get: function () {
                        var arr = [];
                        for (var i in this.value) {
                            var elem = this.value[i];
                            arr.push(elem.name);
                        }
                        return arr;
                    }
                }
            });

            return Constraint;
        })

        .factory('TimeConstraint', ['Constraint', function (Constraint) {
            function TimeConstraint(profile) {
                Constraint.call(this, 'when');
                this.options = angular.copy(profile.timesById);
            }

            TimeConstraint.prototype = Object.create(Constraint.prototype, {
                operators: {value: singleValueOperator}
            });

            return TimeConstraint;
        }])

        .factory('CharacterConstraint', ['Constraint', function (Constraint) {
            function CharacterConstraint(profile) {
                Constraint.call(this, 'who');
                this.options = angular.copy(profile.charactersById);
            }

            CharacterConstraint.prototype = Object.create(Constraint.prototype, {
                operators: {value: multiValueOperator}
            });

            return CharacterConstraint;
        }])


        .factory('LocationConstraint', ['Constraint', function (Constraint) {
            function LocationConstraint(profile) {
                Constraint.call(this, 'where');
                this.options = angular.copy(profile.locationsById);
            }

            LocationConstraint.prototype = Object.create(Constraint.prototype, {
                operators: {value: singleValueOperator}
            });

            return LocationConstraint;
        }])


        .factory('ThingConstraint', ['Constraint', function (Constraint) {
            function ThingConstraint() {
                Constraint.call(this, 'what');
            }

            ThingConstraint.prototype = Object.create(Constraint.prototype, {
                operators: {value: multiValueOperator}
            });

            return ThingConstraint;
        }]);

})(angular);
