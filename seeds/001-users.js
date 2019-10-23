exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([
                { familyNameID: 'theParkers', username: 'momma22', name: 'Karen', password: 'password', role: 'parent' },
                { familyNameID: 'theParkers', username: 'bobby22', name: 'bobby', password: 'password', role: 'child' },
                { familyNameID: 'theParkers', username: 'katie22', name: 'katie', password: 'password', role: 'child' },
                { familyNameID: 'devFam', username: 'akak', name: 'Akak', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'daniel', name: 'Daniel', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'ciara', name: 'Ciara', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'isaac', name: 'Isaac', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'joshua', name: 'Joshua', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'russ', name: 'Russ', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'tyge', name: 'Tyge', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'jerry', name: 'Jerry', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'hayden', name: 'Hayden', password: 'password', role: 'parent' },
                { familyNameID: 'devFam', username: 'child1', name: 'little', password: 'password', role: 'child' },
                { familyNameID: 'devFam', username: 'child2', name: 'teenager', password: 'password', role: 'child' },
                { familyNameID: 'devFam', username: 'child3', name: 'kiddo', password: 'password', role: 'child' },
                { familyNameID: 'shockleys', username: 'momma10', name: 'chiara', password: 'password', role: 'parent' },
                { familyNameID: 'shockleys', username: 'mes10', name: 'malcom', password: 'password', role: 'child' },
                { familyNameID: 'shockleys', username: 'sophie10', name: 'sophie', password: 'password', role: 'child' },

            ]);
        });
};