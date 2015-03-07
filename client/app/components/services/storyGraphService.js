(function (angular, window, undefined) {
    'use strict';

    function StoryEvent(id, x, y, name) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.name = name || 'Event ' + id;
    }

    StoryEvent.prototype.toString = function () {
        return '(' + this.id + ': ' + this.name + ')';
    };

    function StoryEventDependency(event1Id, event2Id, type, data) {
        this.event1Id = event1Id;
        this.event2Id = event2Id;
        this.type = type;
        this.data = data;
    }

    StoryEventDependency.prototype.toString = function () {
        return '(' + this.type + ': ' + this.event1Id + ' -> ' + this.event2Id + ')';
    };

    angular.module('sg.services', []).service('storyGraphService', [
        function () {
            if (!window.graphlib) {
                throw new Error('Missing graphlib');
            }
            var _graph = new window.graphlib.Graph({multigraph: true}),
                _id = 0,
                _nodes = [],
                _edges = [];

            this.addNewEvent = function (x, y) {
                _id++;
                _graph.setNode(_id, new StoryEvent(_id, x, y));
                refreshDataStructure();
            };

            this.addDependency = function (w, v, type, data) {
                _graph.setEdge(w, v, new StoryEventDependency(w, v, type, data), type);
                refreshDataStructure();
            };

            this.removeEvent = function (event) {
                if (!event) {
                    console.error('trying to remove null event');
                    return;
                }
                _graph.removeNode(event.id);
                refreshDataStructure();
            };

            this.removeDependency = function (dependency) {
                if (!dependency) {
                    console.error('trying to remove null dependency');
                    return;
                }
                _graph.removeEdge(dependency.event1Id, dependency.event2Id, dependency.type);
                refreshDataStructure();
            };

            var refreshDataStructure = function () {
                _nodes.splice(0);
                _edges.splice(0);
                angular.forEach(_graph.nodes(), function (nodeName) {
                    _nodes.push(_graph.node(nodeName));
                });
                angular.forEach(_graph.edges(), function (edge) {
                    _edges.push(_graph.edge(edge));
                });
            };

            this.events = _nodes;
            this.dependencies = _edges;

        }]);

})(angular, window);
