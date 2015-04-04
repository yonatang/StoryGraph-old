(function (angular, window, undefined) {
    'use strict';

    function StoryEventDependency(event1Id, event2Id, type, data) {
        this.event1Id = event1Id;
        this.event2Id = event2Id;
        this.type = type;
        this.data = data;
    }

    StoryEventDependency.prototype.toString = function () {
        return '(' + this.type + ': ' + this.event1Id + ' -> ' + this.event2Id + ')';
    };

    //https://github.com/cpettitt/graphlib
    angular.module('sg.services').service('storyGraphService', [
        'sg.profiles', 'StoryEvent',
        function (profiles,StoryEvent) {
            if (!window.graphlib) {
                throw new Error('Missing graphlib');
            }
            var _graph = new window.graphlib.Graph({multigraph: true}),
                _id = 0,
                _state = {selectedEvents : []},
                _nodes = [],
                _edges = [],
                _eventEdges = {};

            this.addNewEvent = function (x, y) {
                _id++;
                _graph.setNode(_id, new StoryEvent(_id, x, y));
                refreshDataStructure();
            };

            this.addDependency = function (dependencyObj) {
                var v = dependencyObj.fromEventId,
                    w = dependencyObj.toEventId,
                    type = dependencyObj.type;

                _graph.setEdge(v, w, dependencyObj, type);
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
                Object.keys(_eventEdges).forEach(function(key){ delete _eventEdges[key]; });
                var init=function(node){
                    if (!_eventEdges[node]){
                        _eventEdges[node] = { inDeps : [], outDeps : [] };
                    }
                };

                angular.forEach(_graph.nodes(), function (nodeName) {
                    init(nodeName);
                    _nodes.push(_graph.node(nodeName));
                });
                angular.forEach(_graph.edges(), function (edge) {
                    _edges.push(_graph.edge(edge));
                    var inNode = edge.v,
                        outNode = edge.w,
                        edgeData = _graph.edge(inNode, outNode, edge.name);
                    _eventEdges[inNode].outDeps.push(edgeData);
                    _eventEdges[outNode].inDeps.push(edgeData);
                });
            };

            this.state = _state;
            this.events = _nodes;
            this.eventDeps = _eventEdges;
            this.dependencies = _edges;
            this.profile = profiles[0];

        }]);

})(angular, window);
