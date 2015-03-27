(function (angular, $, undefined) {
    'use strict';
    var singleValueOperator = {
        'oneOf': {id: 'oneOf', name: 'Must be one of'},
        'notOneOf': {id: 'notOneOf', name: 'Cannot be one of'}
    };
    var multiValueOperator = {
        'includeAll': {id: 'includeAll', name: 'Must include all of'},
        'includeN': {id: 'includeN', name: 'Must include N of', extra: true},
        'excludeAll': {id: 'excludeAll', name: 'Cannot include all of'}
    };
    angular.module('sg.model')
        .factory('Constraint', function () {
            function Constraint(type, profile) {
                this.type = type;
                this.operator = null;
                this.value = [];
                Object.defineProperty(this, 'profile', {
                    value: profile || undefined,
                    writable: true,
                    enumerable: false
                });
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
                },
                clone: {
                    value: function () {
                        window.constOrg = this;
                        var cloned = new this.constructor(this.profile);
                        $.extend(true, cloned, this);
                        window.constClone = cloned;
                        return cloned;
                    }
                }
            });

            Constraint.prototype.constructor = Constraint;

            return Constraint;
        })

        .factory('TimeConstraint', ['Constraint', function (Constraint) {
            function TimeConstraint(profile) {
                Constraint.call(this, 'when', profile);
            }

            TimeConstraint.prototype = Object.create(Constraint.prototype, {
                operators: {value: singleValueOperator},
                options: {
                    get: function () {
                        return this.profile.timesById;
                    }
                }
            });

            TimeConstraint.prototype.constructor = TimeConstraint;

            return TimeConstraint;
        }])

        .factory('CharacterConstraint', ['Constraint', function (Constraint) {
            function CharacterConstraint(profile) {
                Constraint.call(this, 'who', profile);
            }

            CharacterConstraint.prototype = Object.create(Constraint.prototype, {
                operators: {value: multiValueOperator},
                options: {
                    get: function () {
                        return this.profile.charactersById;
                    }
                }
            });

            CharacterConstraint.prototype.constructor = CharacterConstraint;

            return CharacterConstraint;
        }])


        .factory('LocationConstraint', ['Constraint', function (Constraint) {
            function LocationConstraint(profile) {
                Constraint.call(this, 'where', profile);
            }

            LocationConstraint.prototype = Object.create(Constraint.prototype, {
                operators: {value: singleValueOperator},
                options: {
                    get: function () {
                        return this.profile.locationsById;
                    }
                }
            });

            LocationConstraint.prototype.constructor = LocationConstraint;

            return LocationConstraint;
        }])


        .factory('ThingConstraint', ['Constraint', function (Constraint) {
            function ThingConstraint() {
                Constraint.call(this, 'what');
            }

            ThingConstraint.prototype = Object.create(Constraint.prototype, {
                operators: {value: multiValueOperator}
            });

            ThingConstraint.prototype.constructor = ThingConstraint;

            return ThingConstraint;
        }]);

})(angular, jQuery);
