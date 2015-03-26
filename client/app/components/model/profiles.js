(function (angular, $, undefined) {
    'use strict';
    //available profiles for different settings.
    //must include time, characters and locations specifications
    var disneyProfile = {
        id:'disney',
        name:'Disney',
        times: [
            {id:'morning', name:'Morning'},
            {id:'afternoon',name:'Afternoon'},
            {id:'night',name:'Night'}
        ],
        locations: [
            {id:'aladdin-musical', name:'Aladdin Musical'},
            {id:'ariels-grotto', name:'Ariel\'s Grotto'}
        ],
        characters: [
            {id:'father', name:'Father', group:'family'},
            {id:'mother', name:'Mother', group:'family'},
            {id:'boy', name:'Boy', group:'family'},
            {id:'girl', name:'Girl', group:'family'},
            {id:'alice', name:'Alice', group:'disney'},
            {id:'chip', name:'Chip', group:'disney'},
            {id:'dale', name:'Dale', group:'disney'}
        ],
        groups:[
            {id:'family', name:'Family'},
            {id:'disney', name:'Disney\'s Charachter'}
        ]
    };

    function Profile(obj){
        $.extend(true, this, obj);
        this.timesById = arrayToObject(this.times);
        this.locationsById=arrayToObject(this.locations);
        this.charactersById =arrayToObject(this.characters);
        this.groupsById =arrayToObject(this.groups);
    }
    function arrayToObject(array){
        var obj = {};
        for (var i in array){
            var elem=array[i];
            obj[elem.id]=elem;
        }
        return obj;
    }
    angular.module('sg.model').constant('sg.profiles', [
        new Profile(disneyProfile)
    ]);
})(angular, jQuery);
