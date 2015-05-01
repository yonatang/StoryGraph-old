(function (angular, undefined) {
    'use strict';
    angular.module('sg.main').directive('selectCharacters', ['storyGraphService', function (storyGraphService) {
        return {
            scope: {
                container: '=' //either constraint or dependency object
            },
            restrict: 'E',
            templateUrl: '/components/main/edit/select-characters/selectCharacters.tpl.html',
            link: function (scope, element /*, attrs*/) {
                scope.selectAllInGroup = selectAllInGroup;
                scope.deselectAllInGroup = deselectAllInGroup;
                scope.groupFilter = groupFilter;
                scope.profile = storyGraphService.profile;
                scope.options = scope.profile.characters;

                function selectAllInGroup() {
                    var value = scope.container.value,
                        group = scope.container.group.id;
                    angular.forEach(scope.options, function (option) {
                        var idx = value.indexOf(option);
                        if ((option.groups.indexOf(group) > -1) && (idx === -1)) {
                            value.push(option);
                        }
                    });
                }

                function deselectAllInGroup() {
                    var value = scope.container.value,
                        group = scope.constraint.group.id;
                    angular.forEach(scope.options, function (option) {
                        var idx = value.indexOf(option);
                        if ((option.groups.indexOf(group) > -1) && (idx > -1)) {
                            value.splice(idx, 1);
                        }
                    });
                }

                function groupFilter(option) {
                    if (!scope.container.group){
                        return true;
                    }
                    var group = scope.container.group.id;
                    return (option.groups.indexOf(group) > -1);
                }


            }
        };

    }]);
})(angular);
