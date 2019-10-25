exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('chores').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('chores').insert([
                { choreName: 'vaccum house', choreIcon: "Vacuum.png", chorePointValue: 5 }, //1
                { choreName: 'vaccum livingroom', choreIcon: "Vacuum.png", chorePointValue: 2 }, //2
                { choreName: 'vaccum bedroom', choreIcon: "Vacuum.png", chorePointValue: 1 }, //3
                { choreName: 'collect and take out trash', choreIcon: "Trash.png", chorePointValue: 3 }, //4
                { choreName: 'dust', choreIcon: "Dust.png", chorePointValue: 1 }, //5
                { choreName: 'clean litterbox', choreIcon: "Cat.png", chorePointValue: 4 }, //6
                { choreName: 'take dog for walk', choreIcon: "Dog.png", chorePointValue: 4 }, //7
                { choreName: 'pickup clutter', choreIcon: "BroomSweeping.png", chorePointValue: 1 }, //8
                { choreName: 'clean bathroom(s)', choreIcon: "Toilet.png", chorePointValue: 5 }, //9
                { choreName: 'sweep', choreIcon: "BroomSweeping.png", chorePointValue: 2 }, //10
                { choreName: 'mop', choreIcon: "MopBucket.png", chorePointValue: 2 }, //11
                { choreName: 'laundry', choreIcon: "WashingMachine.png", chorePointValue: 5 }, //12
                { choreName: 'wipe counters', choreIcon: "Sponge.png", chorePointValue: 1 }, //13
                { choreName: 'clean kitchen table', choreIcon: "Sponge.png", chorePointValue: 1 }, //14
                { choreName: 'wash dishes / fill and start dishwasher', choreIcon: "DishWasher.png", chorePointValue: 5 }, //15
                { choreName: 'get the newpaper from the dog', choreIcon: "Dog.png", chorePointValue: 3 }, //16
                { choreName: 'wash the dog(s)', choreIcon: "Dog.png", chorePointValue: 5 }, //17
                { choreName: 'wash the cat(s)', choreIcon: "Cat.png", chorePointValue: 5 }, //18
                { choreName: `rub grandma's bunions`, choreIcon: "Grandma.png", chorePointValue: 4 }, //19
                { choreName: `trim grandpa's back hair`, choreIcon: "Grandpa.png", chorePointValue: 4 }, //20
                { choreName: 'clean out any spider webs from ceiling corners', choreIcon: "SpiderWeb.png", chorePointValue: 1 }, //21
                { choreName: 'water the garden', choreIcon: "GardenHose.png", chorePointValue: 2 }, //22
                { choreName: 'pick up the yard', choreIcon: "BroomSweeping.png", chorePointValue: 2 }, //23
                { choreName: 'rake the leaves', choreIcon: "Rake.png", chorePointValue: 4 }, //24
                { choreName: 'sweep out garage', choreIcon: "BroomSweeping.png", chorePointValue: 3 }, //25
                { choreName: 'feed the dog(s)', choreIcon: "Dog.png", chorePointValue: 2 }, //26
                { choreName: 'feed the cat(s)', choreIcon: "Cat.png", chorePointValue: 2 }, //27
                { choreName: 'clean kitchen', choreIcon: "Sponge.png", chorePointValue: 5 }, //28"Toilet.png"
                { choreName: 'pick up bedroom', choreIcon: "Bed.png", chorePointValue: 1 }, //29
                { choreName: 'make the bed', choreIcon: "Bed.png", chorePointValue: 1 }, //30
                { choreName: 'fold laundry', choreIcon: "FoldedClothes.png", chorePointValue: 3 }, //31
                { choreName: 'put away laundry', choreIcon: "Hanger.png", chorePointValue: 2 }, //32
                { choreName: 'clean the chimney', choreIcon: "BroomSweeping.png", chorePointValue: 5 }, //33
                { choreName: 'rotate seasonal clothes/items', choreIcon: "Hanger.png", chorePointValue: 3 }, //34
                { choreName: 'organize closet', choreIcon: "Hanger.png", chorePointValue: 4 }, //35
                { choreName: 'mow the yard', choreIcon: "LawnMower.png", chorePointValue: 5 }, //36
                { choreName: 'pull weeds in garden(not the flowers or veggies', choreIcon: '', chorePointValue: 4 }, //37
                { choreName: 'wash the car', choreIcon: "GardenHose.png", chorePointValue: 5 }, //38
                { choreName: 'power wash the house', choreIcon: "GardenHose.png", chorePointValue: 5 }, //39
                { choreName: 'clean out gutters', choreIcon: "GardenHose.png", chorePointValue: 5 }, //40

            ]);
        });
};