//pull in the config as db
const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findAllUsers,
    findAllFamily,
    findBy,
    findById,
    findAllChores,
    findChoreById,
    findUserChores,
    updateAssignedChoreList,
    updateChore,
    getpointsT,
    updateUser,
    removeUser,

};
//admin function
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
//admin function
function findAllChores() {
    return db('chores')
};

//find chore by id
function findChoreById(choreId) {
    console.log(choreId);
    return db('chores')
        .where({ choreId })
        .first();
}
//find then update single chore on table-admin function?
function updateChore(choreId, changes) {
    return db('chores')
        .where({ choreId })
        .update(changes)
        .then((choreId) => {
            return db('chores')
                .where({ choreId })
                .first();
        })
};

function findUserChores(id) {
    console.log(id);
    return db('users as u')
        .where('u.id', id)
        .join('choreList as cl', 'u.id', '=', 'cl.userId')
        .join('chores as c', 'cl.choreId', '=', 'c.choreId')
        .select('u.name', 'c.choreName', 'cl.completed', 'cl.notes', 'cl.points');
};

function getpointsT(id) {
    console.log(id, 'from endPointsModel');
    return db('users')
        .where('users.id', '=', id)
        .join('choreList', 'users.id', '=', 'choreList.userId')
        .join('chores', 'choreList.choreId', '=', 'chores.choreId')
        .sum('chores.chorePointValue as totalPoints')
        .sum('choreList.bonusP as bonusPoints')

    ;
}

function updateUser(id, changes) {
    return db('users')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        })
};

function updateAssignedChoreList(id, choreId, changes) {
    return db('users')
        .where({ choreId })
        .update(changes)
        .then(() => {
            return findUserChores({ id })
        })
};

function removeUser(id) {
    return db('users')
        .where({ id })
        .del();
}