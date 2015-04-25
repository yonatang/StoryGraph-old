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
            {id: 'buena_vista_street_carthay_circle_lounge', name: 'Carthay circle lounge'},
            {id: 'buena_vista_street_carthay_circle_restaurant', name: 'Carthay circle restaurant'},
            {id: 'buena_vista_street_clarabelles_handscooped_ice_cream', name: 'Clarabelles ice cream'},
            {id: 'buena_vista_street_fiddler_fifer__practical_cafe', name: 'Fiddler Fifer cafe'},
            {id: 'buena_vista_street_mortimers_market', name: 'Mortimers market'},
            {id: 'cars_land_cozy_cone_motel', name: 'Cozy cone motel'},
            {id: 'cars_land_filmores_tastein', name: 'Filmores tastein'},
            {id: 'cars_land_flos_v_cafe', name: 'Flos v cafe'},
            {id: 'condor_flats_taste_pilots_grill', name: 'Condor flats grill'},
            {id: 'hollywood_land_award_wieners', name: 'Award wieners'},
            {id: 'hollywood_land_fairfax_market', name: 'Fairfax market'},
            {id: 'hollywood_land_schmoozies', name: 'Schmoozies'},
            {id: 'hollywood_land_studio_catering_co', name: 'Studio catering co'},
            {id: 'pacific_wharf_cocina_cucamonga_mexican_grill', name: 'Cocina grill'},
            {id: 'pacific_wharf_ghirardelli_soda_fountain_and_chocolate_shop', name: 'Ghirardelli chocolate shop'},
            {id: 'pacific_wharf_lucky_fortune_cookery', name: 'Lucky fortune cookery'},
            {id: 'pacific_wharf_mendocino_terrace_at_the_golden_vine_winery', name: 'Mendocino terrace winery'},
            {id: 'pacific_wharf_pacific_wharf_cafe', name: 'Pacific wharf cafe'},
            {id: 'pacific_wharf_pacific_wharf_distribution_co', name: 'Pacific wharf distribution co.'},
            {id: 'pacific_wharf_ritas_baja_blenders', name: 'Ritas baja blenders'},
            {id: 'pacific_wharf_sonoma_terrace_at_the_golden_vine_winery', name: 'Sonoma terrace winery'},
            {id: 'pacific_wharf_wine_country_trattoria_at_the_golden_vine_winery', name: 'Wine country trattoria'},
            {id: 'paradise_pier_ariels_grotto', name: 'Ariel\'s grotto'},
            {id: 'paradise_pier_bayside_brews', name: 'Bayside brews'},
            {id: 'paradise_pier_boardwalk_pizza__pasta', name: 'Boardwalk pizza  pasta'},
            {id: 'paradise_pier_corn_dog_castle', name: 'Corn dog castle'},
            {id: 'paradise_pier_cove_bar', name: 'Cove bar'},
            {id: 'paradise_pier_paradise_garden_grill', name: 'Paradise garden grill'},
            {id: 'paradise_pier_paradise_pier_ice_cream_company', name: 'Paradise pier ice cream'},
            {id: 'a_bugs_land_fliks_flyers', name: 'Fliks flyers'},
            {id: 'a_bugs_land_francis_ladybug_boogie', name: 'Francis ladybug boogie'},
            {id: 'a_bugs_land_heimlichs_chew_chew_train', name: 'Heimlichs chew chew train'},
            {id: 'a_bugs_land_its_tough_to_be_a_bug', name: 'Bugs ride'},
            {id: 'a_bugs_land_princess_dot_puddle_park', name: 'Princess puddle park'},
            {id: 'a_bugs_land_tuck_and_rolls_driveem_buggies', name: 'Tuck and Rolls buggies'},
            {id: 'buena_vista_street_red_car_trolley', name: 'Red car trolley'},
            {id: 'cars_land_luigis_flying_tires', name: 'Luigi\'s flying tires'},
            {id: 'cars_land_maters_junkyard_jamboree', name: 'Maters junkyard jamboree'},
            {id: 'cars_land_radiator_springs_racers', name: 'Radiator springs racers'},
            {id: 'condor_flats_soarin_over_california', name: 'Soarin over California'},
            {id: 'disney_california_adventure_hollywood_land_hyperion', name: 'Hollywood land hyperion'},
            {id: 'disney_california_adventure_main_entrance', name: 'Adventure main entrance'},
            {id: 'disney_california_adventure_sunshine_plaza', name: 'Sunshine plaza'},
            {id: 'grizzly_peak_grizzly_river_run', name: 'Grizzly river run'},
            {id: 'grizzly_peak_redwood_creek_challenge_trail', name: 'Redwood creek trail'},
            {id: 'hollywood_land_animation_academy', name: 'Animation academy'},
            {id: 'hollywood_land_character_closeup', name: 'Character closeup attraction'},
            {id: 'hollywood_land_disney_junior_live_on_stage', name: 'Disney junior show'},
            {id: 'hollywood_land_disneys_aladdin_a_musical_spectacular', name: 'Aladdin musical'},
            {id: 'hollywood_land_mad_t_party', name: 'Mad tea party'},
            {id: 'hollywood_land_monsters_inc_mike__sulley_to_the_rescue', name: 'Mike Sulley ride'},
            {id: 'hollywood_land_muppet_vision_d', name: 'Muppet vision'},
            {id: 'hollywood_land_red_car_trolley', name: 'Red car trolley'},
            {id: 'hollywood_land_sorcerers_workshop', name: 'Sorcerers workshop'},
            {id: 'hollywood_land_the_hollywood_backlot_stage', name: 'Hollywood backlot stage'},
            {id: 'hollywood_land_the_twilight_zone_tower_of_terror', name: 'Tower of terror'},
            {id: 'hollywood_land_turtle_talk_with_crush', name: 'Turtle talk'},
            {id: 'pacific_wharf_paradise_pier', name: 'Paradise pier'},
            {id: 'pacific_wharf_the_bakery_tour', name: 'Bakery tour'},
            {id: 'pacific_wharf_walt_disney_imagineering_blue_sky_cellar', name: 'Blue sky cellar'},
            {id: 'paradise_pier_california_screamin', name: 'California screamin'},
            {id: 'paradise_pier_games_of_the_boardwalk', name: 'Games of the boardwalk'},
            {id: 'paradise_pier_golden_zephyr', name: 'Golden zephyr'},
            {id: 'paradise_pier_goofys_sky_school', name: 'Goofy\'s sky school'},
            {id: 'paradise_pier_jumpin_jellyfish', name: 'Jumpin jellyfish'},
            {id: 'paradise_pier_king_tritons_carousel', name: 'King Triton\'s carousel'},
            {id: 'paradise_pier_meet_duffy_the_disney_bear_at_paradise_pier', name: 'Meet Duffy attraction'},
            {id: 'paradise_pier_mickeys_fun_wheel', name: 'Mickey\'s fun wheel'},
            {id: 'paradise_pier_phineas_and_ferbs_rockin_rollin_dance_party', name: 'Phineas and Ferbs dance party'},
            {id: 'paradise_pier_pixar_play_parade', name: 'Pixar play parade'},
            {id: 'paradise_pier_silly_symphony_swings', name: 'Silly symphony swings'},
            {id: 'paradise_pier_the_little_mermaid_ariels_undersea_adventure', name: 'Ariel\'s undersea adventure'},
            {id: 'paradise_pier_toy_story_midway_mania', name: 'Toy-story midway mania'},
            {id: 'paradise_pier_world_of_color', name: 'World of color'},
            {id: 'adventureland_bengal_barbecue', name: 'Bengal barbecue'},
            {id: 'adventureland_tiki_juice_bar', name: 'Tiki juice bar'},
            {id: 'critter_country_harbour_galley', name: 'Harbour galley'},
            {id: 'critter_country_hungry_bear_restaurant', name: 'Hungry bear restaurant'},
            {id: 'fantasyland_troubadour_tavern', name: 'Troubadour tavern'},
            {id: 'fantasyland_village_haus_restaurant', name: 'Village haus restaurant'},
            {id: 'frontierland_big_thunder_ranch_barbecue', name: 'Big thunder-ranch barbecue'},
            {id: 'frontierland_rancho_del_zocalo_restaurante', name: 'Rancho restaurante'},
            {id: 'frontierland_river_belle_terrace', name: 'River belle terrace'},
            {id: 'frontierland_stage_door_cafe', name: 'Stage door cafe'},
            {id: 'frontierland_the_golden_horseshoe', name: 'Golden horseshoe'},
            {id: 'main_street_usa_carnation_cafe', name: 'Carnation cafe'},
            {id: 'main_street_usa_gibson_girl_ice_cream_parlor', name: 'Gibson ice cream parlor'},
            {id: 'main_street_usa_jolly_holiday_bakery_cafe', name: 'Jolly holiday bakery'},
            {id: 'main_street_usa_main_street_cone_shop', name: 'Cone shop'},
            {id: 'main_street_usa_plaza_inn', name: 'Plaza inn'},
            {id: 'new_orleans_square_blue_bayou_restaurant', name: 'Blue bayou restaurant'},
            {id: 'new_orleans_square_cafe_orleans', name: 'Cafe Orleans'},
            {id: 'new_orleans_square_french_market_restaurant', name: 'French market restaurant'},
            {id: 'new_orleans_square_royal_street_veranda', name: 'Royal street veranda'},
            {id: 'tomorrowland_redd_rocketts_pizza_port', name: 'Redd rocketts pizza'},
            {id: 'tomorrowland_the_spirit_of_refreshment', name: 'Spirit of refreshment'},
            {id: 'tomorrowland_tomorrowland_terrace', name: 'Tomorrowland terrace'},
            {id: 'adventureland_enchanted_tiki_room', name: 'Enchanted tiki room'},
            {id: 'adventureland_magic_carpet_of_aladin', name: 'Magic carpet of Aladin'},
            {id: 'adventureland_indiana_jones_adventure', name: 'Indiana Jones adventure'},
            {id: 'adventureland_jungle_cruise', name: 'Jungle cruise'},
            {id: 'adventureland_tarzans_treehouse', name: 'Tarzans treehouse'},
            {id: 'critter_country_davy_crocketts_explorer_canoes', name: 'Davy Crockett\'s canoes'},
            {id: 'critter_country_splash_mountain', name: 'Splash mountain'},
            {id: 'critter_country_the_many_adventures_of_winnie_the_pooh', name: 'Winnie the Pooh adventures'},
            {id: 'disneyland_park_castle_area_anaheim', name: 'Castle'},
            {id: 'disneyland_park_main_entrance', name: 'Main entrance'},
            {id: 'disneyland_park_walt_disney_statue_anaheim', name: 'Walt Disney statue'},
            {id: 'fantasyland_alice_in_wonderland', name: 'Fantasyland'},
            {id: 'fantasyland_bibbidi_bobbidi_boutique', name: 'Bibbidi bobbidi boutique'},
            {id: 'fantasyland_casey_jr_circus_train', name: 'Casey jr. circus train'},
            {id: 'fantasyland_christmas_fantasy_parade', name: 'Christmas fantasy parade'},
            {id: 'fantasyland_disney_princess_fantasy_faire', name: 'Princess fantasy faire'},
            {id: 'fantasyland_dumbo_the_flying_elephant', name: 'Dumbo ride'},
            {id: 'fantasyland_fireworks_at_disneyland_park', name: 'Fireworks show'},
            {id: 'fantasyland_its_a_small_world', name: 'It\'s a small world ride'},
            {id: 'fantasyland_jedi_training_academy', name: 'Jedi training academy'},
            {id: 'fantasyland_king_arthur_carrousel', name: 'King Arthur carrousel'},
            {id: 'fantasyland_mad_tea_party', name: 'Mad tea party'},
            {id: 'fantasyland_matterhorn_bobsleds', name: 'Matterhorn bobsleds'},
            {id: 'fantasyland_meet_merida_in_fantasyland', name: 'Meet Merida place'},
            {id: 'fantasyland_mickey_and_the_magical_map', name: 'Magical map ride'},
            {id: 'fantasyland_mickeys_soundsational_parade', name: 'Mickey\'s parade'},
            {id: 'fantasyland_mr_toads_wild_ride', name: 'Mr. Toads wild ride'},
            {id: 'fantasyland_peter_pans_flight', name: 'Peter Pan\'s flight'},
            {id: 'fantasyland_pinocchios_daring_journey', name: 'Pinocchio\'s daring journey'},
            {id: 'fantasyland_pixie_hollow', name: 'Pixie hollow'},
            {id: 'fantasyland_sleeping_beauty_castle_walkthrough', name: 'Sleeping beauty walkthrough'},
            {id: 'fantasyland_snow_whites_scary_adventures', name: 'Snow white\'s scary adventures'},
            {id: 'fantasyland_storybook_land_canal_boats', name: 'Storybook canal boats'},
            {id: 'frontierland_big_thunder_mountain_railroad', name: 'Thunder mountain railroad'},
            {id: 'frontierland_big_thunder_ranch', name: 'Big thunder ranch'},
            {id: 'frontierland_frontierland_shootin_exposition', name: 'Frontierland shooting exposition'},
            {id: 'frontierland_jingle_jangle_jamboree', name: 'Jingle jangle jamboree'},
            {id: 'frontierland_mark_twain_riverboat', name: 'Mark twain riverboat'},
            {id: 'frontierland_pirates_lair_on_tom_sawyer_island', name: 'Tom Sawyer island'},
            {id: 'frontierland_sailing_ship_columbia', name: 'Columbia sailing ship'},
            {id: 'frontierland_the_golden_horseshoe_stage', name: 'Golden horseshoe stage'},
            {id: 'main_street_usa_disneyland_railroad_main_street_vehicles', name: 'Main street vehicles'},
            {id: 'main_street_usa', name: 'Main street USA'},
            {id: 'main_street_usa_fire_engine', name: 'Fire engine'},
            {id: 'main_street_usa_horsedrawn_streetcars', name: 'Horsedrawn streetcars'},
            {id: 'main_street_usa_horseless_carriage', name: 'Horseless carriage'},
            {id: 'main_street_usa_main_street_cinema', name: 'Cinema'},
            {id: 'main_street_usa_omnibus', name: 'Omnibus'},
            {id: 'main_street_usa_the_disney_gallery', name: 'Disney gallery'},
            {
                id: 'main_street_usa_the_disneyland_story_presenting_great_moments_with_mr_lincoln',
                name: 'Moments with Mr. Lincoln'
            },
            {id: 'mickeys_toontown_chip_n_dale_treehouse', name: 'Chip\'n Dale treehouse'},
            {id: 'mickeys_toontown_disneyland_railroad', name: 'Disneyland railroad'},
            {id: 'mickeys_toontown_donalds_boat', name: 'Donald\'s boat'},
            {id: 'mickeys_toontown_gadgets_go_coaster', name: 'Gadgets go coaster'},
            {id: 'mickeys_toontown_goofys_playhouse', name: 'Goofys playhouse'},
            {id: 'toontown_mickeys_house_and_meet_mickey', name: 'Mickey\'s house'},
            {id: 'mickeys_toontown_minnies_house', name: 'Minnie\'s house'},
            {id: 'mickeys_toontown_roger_rabbits_car_toon_spin', name: 'Roger rabbit\'s car toon spin'},
            {id: 'new_orleans_square_disneyland_railroad', name: 'New-Orleans railroad'},
            {id: 'new_orleans_square_fantasmic', name: 'Fantasmic'},
            {id: 'new_orleans_square_haunted_mansion', name: 'Haunted mansion'},
            {id: 'new_orleans_square_pirates_of_the_caribbean', name: 'Pirates of the Caribbean'},
            {id: 'tomorrowland_astro_orbitor', name: 'Astro orbitor'},
            {id: 'tomorrowland_autopia', name: 'Autopia'},
            {id: 'tomorrowland_buzz_lightyear_astro_blasters', name: 'Buzz lightyear astro blasters'},
            {id: 'tomorrowland_captain_eo', name: 'Captain eo'},
            {id: 'tomorrowland_disneyland_monorail', name: 'Disneyland monorail'},
            {id: 'tomorrowland_disneyland_railroad', name: 'Tomorrowland railroad'},
            {id: 'tomorrowland_finding_nemo_submarine_voyage', name: 'Nemo submarine voyage'},
            {id: 'tomorrowland_innoventions', name: 'Innoventions'},
            {id: 'tomorrowland_space_mountain', name: 'Space mountain'},
            {id: 'tomorrowland_star_tours_the_adventures_continue', name: 'Star tours'},
            {id: 'tomorrowland_starcade', name: 'Starcade'}
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

    function Profile(obj) {
        $.extend(true, this, obj);
        this.timesById = arrayToObject(this.times);
        this.locationsById = arrayToObject(this.locations);
        this.charactersById = arrayToObject(this.characters);
        this.groupsById = arrayToObject(this.groups);
    }

    function arrayToObject(array) {
        var obj = {};
        for (var i in array) {
            var elem = array[i];
            obj[elem.id] = elem;
        }
        return obj;
    }

    angular.module('sg.model').constant('sg.profiles', [
        new Profile(disneyProfile)
    ]);
})(angular, jQuery);
