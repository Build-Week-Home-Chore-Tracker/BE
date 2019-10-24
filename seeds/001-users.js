exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([
                { familyNameID: 'theParkers', username: 'momma22', name: 'Karen', password: 'password', role: 'parent' },
                { familyNameID: 'theParkers', username: 'bobby22', name: 'bobby', password: 'password', role: 'child' },
                { familyNameID: 'theParkers', username: 'katie22', name: 'katie', password: 'password', role: 'child' },

            ]);
        });
};