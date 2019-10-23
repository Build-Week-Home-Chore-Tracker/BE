exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('choreList').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('choreList').insert([
                { userId: 2, choreId: 12, notes: 'blah', dateMade: '', bonusP: 1, completed: false },
                { userId: 2, choreId: 22, notes: 'blah', dateMade: '', bonusP: 2, completed: false },
                { userId: 3, choreId: 36, notes: 'blah', dateMade: '', bonusP: 0, completed: false },
                { userId: 3, choreId: 12, notes: 'blah', dateMade: '', bonusP: 0, completed: false },

            ]);
        });
};