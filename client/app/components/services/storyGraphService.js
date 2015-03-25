(function (angular, window, undefined) {
    'use strict';

    function StoryEvent(id, x, y, name) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.selected = false;
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

    angular.module('sg.services').service('storyGraphService', [
        function () {
            if (!window.graphlib) {
                throw new Error('Missing graphlib');
            }
            var _graph = new window.graphlib.Graph({multigraph: true}),
                _id = 0,
                _state = {selectedEvents : []},
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

            this.removeEvent = function (events) {
                if (!events) {
                    console.error('trying to remove null event');
                    return;
                }
                if (!angular.isArray(events)){
                    events=[events];
                } else {
                    events = [].concat(events);
                }
                angular.forEach(events, function(event){
                    _graph.removeNode(event.id);
                    var idx=_state.selectedEvents.indexOf(event);
                    if (idx>-1){
                        _state.selectedEvents.splice(idx,1);
                    }
                });
                refreshDataStructure();
            };

            this.deselectAll = function (){
                angular.forEach(_state.selectedEvents, function(node){
                    node.selected=false;
                });
                _state.selectedEvents = [];
            };

            this.getEventById = function (eventId) {
                return _graph.node(eventId);
            };

            this.selectEvent = function (event, append) {
                if (!append) {
                    angular.forEach(_nodes, function (node) {
                        node.selected = false;
                    });
                    _state.selectedEvents = [];
                }
                event.selected = true;
                _state.selectedEvents.push(event);
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

            this.state = _state;
            this.events = _nodes;
            this.dependencies = _edges;

        }]);

})(angular, window);
