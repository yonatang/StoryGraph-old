(function (angular, $, undefined) {
    'use strict';
    //available profiles for different settings.
    //must include time, characters and locations specifications
    var disneyProfile = {
        id: 'disney',
        name: 'Disney',
        times: [
            {id: 'morning', name: 'Morning'},
            {id: 'afternoon', name: 'Afternoon'},
            {id: 'night', name: 'Night'}
        ],
        locations: [
            {id: 'aladdin-musical', name: 'Aladdin Musical'},
            {id: 'ariels-grotto', name: 'Ariel\'s Grotto'}
        ],
        characters: [
            {id: 'father', name: 'Father', groups: ['family']},
            {id: 'mother', name: 'Mother', groups: ['family']},
            {id: 'boy', name: 'Boy', groups: ['family']},
            {id: 'girl', name: 'Girl', groups: ['family']},

            {id: 'mickeyMouse', name: 'Mickey', groups: ['disney']},
            {id: 'minniMouse', name: 'Minni', groups: ['disney']},
            {id: 'aliceInWonderland', name: 'Alice', groups: ['disney']},
            {id: 'goofy', name: 'Goofy', groups: ['disney']},
            {id: 'dumbo', name: 'Dumbo', groups: ['disney']},
            {id: 'pluto', name: 'Pluto', groups: ['disney']},
            {id: 'donnaldDuck', name: 'Donnald', groups: ['disney']},
            {id: 'daisey', name: 'Daisey', groups: ['disney']},
            {id: 'princessMerida', name: 'Merida', groups: ['disney', 'princess', 'brave']},
            {id: 'princessMulan', name: 'Mulan', groups: ['disney', 'princess', 'mulan']},
            {id: 'princessSnowWhite', name: 'Snow White', groups: ['disney', 'princess', 'snowWhite']},
            {id: 'duffy', name: 'Duffy', groups: ['disney']},
            {id: 'genie', name: 'Genie', groups: ['disney']},
            {id: 'buckeyTheSquirell', name: 'Buckey The Squirell', groups: ['disney']},

            // lilo and stitch
            {id: 'stitch', name: 'Stich', groups: ['disney', 'liloAndStitch']},
            {id: 'lilo', name: 'Lilo', groups: ['disney', 'liloAndStitch']},

            // the princess and the frog
            {id: 'princessTiana', name: 'Tiana', groups: ['disney', 'princess', 'princessAndFrog']},
            {id: 'princeNaveen', name: 'Naveen', groups: ['disney', 'prince', 'princessAndFrog']},

            // the beauty and the beast
            {id: 'princessBelle', name: 'Princess Belle', groups: ['disney', 'princess', 'beautyAndBeast']},
            {id: 'princeAdamBeast', name: 'Adam Beast', groups: ['disney', 'prince', 'beautyAndBeast']},

            // cinderella
            {id: 'princessCinderella', name: 'Cinderella', groups: ['disney', 'princess', 'cinderella']},
            {id: 'princeHenry', name: 'Henry', groups: ['disney', 'prince', 'cinderella']},

            // sleeping beauty
            {id: 'princessAurora', name: 'Aurora', groups: ['disney', 'princess', 'sleepingBeauty']},
            {id: 'princePhillip', name: 'Phillip', groups: ['disney', 'prince', 'sleepingBeauty']},

            // little mermaid
            {id: 'princessAriel', name: 'Ariel', groups: ['disney', 'princess', 'mermaid']},
            {id: 'princeEric', name: 'Eric', groups: ['disney', 'prince', 'mermaid']},

            // Aladdin
            {id: 'princessJasmine', name: 'Jasmine', groups: ['disney', 'princess', 'aladdin']},
            {id: 'princeAladin', name: 'Aladin', groups: ['disney', 'prince', 'aladdin']},

            // Pocahontas
            {id: 'princessPocahontas', name: 'Pocahontas', groups: ['disney', 'princess', 'pocahontas']},
            {id: 'princeJohnSmith', name: 'John Smith', groups: ['disney', 'prince', 'pocahontas']},

            // Tangled
            {id: 'princessRapunzel', name: 'Rapunzel', groups: ['disney', 'princess', 'tangled']},
            {id: 'princeFlynnRider', name: 'Flynn Rider', groups: ['disney', 'prince', 'tangled']},

            // pooh
            {id: 'winnieThePooh', name: 'Winnie The Pooh', groups: ['disney', 'pooh']},
            {id: 'piglet', name: 'Piglet', groups: ['disney', 'pooh']},

            // toy story
            {id: 'buzzLightYear', name: 'Buzz Lightyear', groups: ['disney', 'toyStory']},
            {id: 'woody', name: 'Woody', groups: ['disney', 'toyStory']},
            {id: 'jessie', name: 'Jessie', groups: ['disney', 'toyStory']},

            // peter pan
            {id: 'peterPan', name: 'Peter Pan', groups: ['disney', 'peterPan']},
            {id: 'tinkerbell', name: 'Tinkerbell', groups: ['disney', 'peterPan']},


            // chip and dale
            {id: 'chip', name: 'Chip', groups: ['disney', 'chipAndDale']},
            {id: 'dale', name: 'Dale', groups: ['disney', 'chipAndDale']}

        ],
        groups: [
            {id: 'family', name: 'Family'},
            {id: 'disney', name: 'Disney\'s Charachter'},
            {id: 'princess', name: 'Princesses'},
            {id: 'prince', name: 'Princes'},
            {id: 'chipAndDale', name: 'Chip and Dale'},
            {id: 'peterPan', name: 'Peter Pan'},
            {id: 'toyStory', name: 'Toy Story'},
            {id: 'pooh', name: 'Winnie The Pooh'},
            {id: 'tangled', name: 'Tangled'},
            {id: 'pocahontas', name: 'Pocahontas'},
            {id: 'aladdin', name: 'Aladdin'},
            {id: 'mermaid', name: 'The Little Mermaid'},
            {id: 'sleepingBeauty', name: 'The Sleeping Beauty'},
            {id: 'cinderella', name: 'Cinderella'},
            {id: 'beautyAndBeast', name: 'Beauty and The Beast'},
            {id: 'princessAndFrog', name: 'The Princess and The Frog'},
            {id: 'brave', name: 'Brave'},
            {id: 'mulan', name: 'Mulan'},
            {id: 'snowWhite', name: 'Snow White'},
            {id: 'liloAndStitch', name: 'Lilo and Stitch'}
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
