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
            {id:'father', name:'Father', groups:['family']},
            {id:'mother', name:'Mother', groups:['family']},
            {id:'boy', name:'Boy', groups:['family']},
            {id:'girl', name:'Girl', groups:['family']},
            {id:'alice', name:'Alice', groups:['disney']},
            {id:'chip', name:'Chip', groups:['disney','animal']},
            {id:'dale', name:'Dale', groups:['disney','animal']}
        ],
        groups:[
            {id:'family', name:'Family'},
            {id:'disney', name:'Disney\'s Charachter'},
            {id:'animal', name:'Animals'}
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
