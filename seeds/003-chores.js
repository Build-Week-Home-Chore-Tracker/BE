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
                { choreName: 'get the newpaper from the dog' }, //16
                { choreName: 'wash the dog(s)' }, //17
                { choreName: 'wash the cat(s)' }, //18
                { choreName: `rub grandma's bunions` }, //19
                { choreName: `trim grandpa's back hair` }, //20
                { choreName: 'clean out any spider webs from ceiling corners' }, //21
                { choreName: 'water the garden' }, //22
                { choreName: 'pick up the yard' }, //23
                { choreName: 'rake the leaves' }, //24
                { choreName: 'sweep out garage' }, //25
                { choreName: 'feed the dog(s)' }, //26
                { choreName: 'feed the cat(s)' }, //27
                { choreName: 'clean kitchen' }, //28
                { choreName: 'pick up bedroom' }, //29
                { choreName: 'make the bed' }, //30
                { choreName: 'fold laundry' }, //31
                { choreName: 'put away laundry' }, //32
                { choreName: 'clean the chimney' }, //33
                { choreName: 'rotate seasonal clothes/items' }, //34
                { choreName: 'organize closet' }, //35
                { choreName: 'mow the yard' }, //36
                { choreName: 'pull weeds in garden(not the flowers or veggies' }, //37
                { choreName: 'wash the car' }, //38
                { choreName: 'power wash the house' }, //39
                { choreName: 'clean out gutters' }, //40

            ]);
        });
};