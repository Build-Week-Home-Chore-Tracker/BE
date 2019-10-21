//pull in the config as db
const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findAllUsers,
    findAllFamily,
    findBy,
    findById,
    update,
    remove,

};

function findAllUsers() {
    return db('users');
}


function add(user) {
    console.log('am i getting here?');
    return db('users')
        .insert(user, 'id')
        .then(([id]) => {
            return findById(id)
                .select('id', 'username');
        });
};

function findAllFamily(familyName) {
    return db('users')
        .where(familyName);
}

function findBy(filter) {
    // console.log(filter, 'from auth-model');
    return db('users')
        .where(filter)
        .first();

};

function findById(id) {
    return db('users')
        .where({ id })
        .first();
};

function update() {

};

function remove() {

}