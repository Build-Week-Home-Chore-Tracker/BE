//pull in the config as db
const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findAllUsers,
    findAllFamily,
    findBy,
    findById,
    findAllChores,
    findUserChores,
    updateUser,
    removeUser,

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

function findAllFamily(familyNameID) {
    return db('users')
        .where(familyNameID);
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

function findAllChores() {
    return db('chores')
};

function findUserChores(id) {

};

function updateUser(id, changes) {
    return db('users')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        })
};

function removeUser(id) {
    return db('users')
        .where({ id })
        .del();
}