exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([
                { familyNameID: 'theParkers', username: 'momma22', name: 'Karen', password: 'password', role: 'parent' },
                { familyNameID: 'theParkers', username: 'bobby22', name: 'bobby', password: 'password', role: 'child' },
                { familyNameID: 'theParkers', username: 'katie22', name: 'katie', password: 'password', role: 'child' },
                { familyNameID: 'devFam', username: 'momma11', name: 'akak', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'billy11', name: 'daniel', password: 'password', role: 'child' },
                { familyNameID: 'devFam', username: 'julie11', name: 'ciara', password: 'password', role: 'child' },
                { familyNameID: 'shockleys', username: 'momma10', name: 'chiara', password: 'password', role: 'parent' },
                { familyNameID: 'shockleys', username: 'mes10', name: 'malcom', password: 'password', role: 'child' },
                { familyNameID: 'shockleys', username: 'sophie10', name: 'sophie', password: 'password', role: 'child' },

            ]);
        });
};