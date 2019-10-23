exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('chores').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('chores').insert([
                { choreName: 'vaccum house', choreIcon: "Vacuum.png", chorePointValue: 1 }, //1
                { choreName: 'vaccum livingroom', choreIcon: "Vacuum.png", chorePointValue: 1 }, //2
                { choreName: 'vaccum bedroom', choreIcon: "Vacuum.png", chorePointValue: 1 }, //3
                { choreName: 'collect and take out trash', choreIcon: "Trash.png", chorePointValue: 1 }, //4
                { choreName: 'dust', choreIcon: "Dust.png", chorePointValue: 1 }, //5
                { choreName: 'clean litterbox', choreIcon: "Toilet.png", chorePointValue: 1 }, //6
                { choreName: 'take dog for walk', choreIcon: "Toilet.png", chorePointValue: 1 }, //7
                { choreName: 'pickup clutter', choreIcon: '', chorePointValue: 1 }, //8
                { choreName: 'clean bathroom(s)', choreIcon: "Toilet.png", chorePointValue: 1 }, //9
                { choreName: 'sweep', choreIcon: "BroomSweeping.png", chorePointValue: 1 }, //10
                { choreName: 'mop', choreIcon: "MopBucket.png", chorePointValue: 1 }, //11
                { choreName: 'laundry', choreIcon: "WashingMachine.png", chorePointValue: 1 }, //12
                { choreName: 'wipe counters', choreIcon: "Sponge.png", chorePointValue: 1 }, //13
                { choreName: 'clean kitchen table', choreIcon: "Sponge.png", chorePointValue: 1 }, //14
                { choreName: 'wash dishes / fill and start dishwasher', choreIcon: "DishWasher.png", chorePointValue: 1 }, //15
                { choreName: 'get the newpaper from the dog', choreIcon: '', chorePointValue: 1 }, //16
                { choreName: 'wash the dog(s)', choreIcon: "GardenHose.png", chorePointValue: 1 }, //17
                { choreName: 'wash the cat(s)', choreIcon: "GardenHose.png", chorePointValue: 1 }, //18
                { choreName: `rub grandma's bunions`, choreIcon: '', chorePointValue: 1 }, //19
                { choreName: `trim grandpa's back hair`, choreIcon: '', chorePointValue: 1 }, //20
                { choreName: 'clean out any spider webs from ceiling corners', choreIcon: "Vacuum.png", chorePointValue: 1 }, //21
                { choreName: 'water the garden', choreIcon: "GardenHose.png", chorePointValue: 1 }, //22
                { choreName: 'pick up the yard', choreIcon: "BroomSweeping.png", chorePointValue: 1 }, //23
                { choreName: 'rake the leaves', choreIcon: "BroomSweeping.png", chorePointValue: 1 }, //24
                { choreName: 'sweep out garage', choreIcon: "BroomSweeping.png", chorePointValue: 1 }, //25
                { choreName: 'feed the dog(s)', choreIcon: '', chorePointValue: 1 }, //26
                { choreName: 'feed the cat(s)', choreIcon: '', chorePointValue: 1 }, //27
                { choreName: 'clean kitchen', choreIcon: "Sponge.png", chorePointValue: 1 }, //28"Toilet.png"
                { choreName: 'pick up bedroom', choreIcon: '', chorePointValue: 1 }, //29
                { choreName: 'make the bed', choreIcon: '', chorePointValue: 1 }, //30
                { choreName: 'fold laundry', choreIcon: "FoldedClothes.png", chorePointValue: 1 }, //31
                { choreName: 'put away laundry', choreIcon: "Hanger.png", chorePointValue: 1 }, //32
                { choreName: 'clean the chimney', choreIcon: "BroomSweeping.png", chorePointValue: 1 }, //33
                { choreName: 'rotate seasonal clothes/items', choreIcon: "Hanger.png", chorePointValue: 1 }, //34
                { choreName: 'organize closet', choreIcon: "Hanger.png", chorePointValue: 1 }, //35
                { choreName: 'mow the yard', choreIcon: '', chorePointValue: 1 }, //36
                { choreName: 'pull weeds in garden(not the flowers or veggies', choreIcon: '', chorePointValue: 1 }, //37
                { choreName: 'wash the car', choreIcon: "GardenHose.png", chorePointValue: 1 }, //38
                { choreName: 'power wash the house', choreIcon: "GardenHose.png", chorePointValue: 1 }, //39
                { choreName: 'clean out gutters', choreIcon: "GardenHose.png", chorePointValue: 1 }, //40

            ]);
        });
};