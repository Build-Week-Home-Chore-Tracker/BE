exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('chores').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('chores').insert([
                { choreName: 'vaccum house' }, //1
                { choreName: 'vaccum livingroom' }, //2
                { choreName: 'vaccum bedroom' }, //3
                { choreName: 'collect and take out trash' }, //4
                { choreName: 'dust' }, //5
                { choreName: 'clean litterbox' }, //6
                { choreName: 'take dog for walk' }, //7
                { choreName: 'pickup clutter' }, //8
                { choreName: 'clean bathroom(s)' }, //9
                { choreName: 'sweep' }, //10
                { choreName: 'mop' }, //11
                { choreName: 'laundry' }, //12
                { choreName: 'wipe counters' }, //13
                { choreName: 'clean kitchen table' }, //14
                { choreName: 'wash dishes / fill and start dishwasher' }, //15

            ]);
        });
};