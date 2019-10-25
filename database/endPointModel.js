//pull in the config as db
const db = require('../database/dbConfig.js');

module.exports = {
    addUser,
    addChore,
    addChoreToUser,
    findAllUsers,
    findAllFamily,
    findBy,
    findById,
    findAllChores,
    findChoreById,
    getAllAssigned,
    findUserChores,
    updateAssignedChore,
    updateChore,
    getpointsT,
    updateUser,
    removeUser,
    removeChore,
    deleteChoreFromUser,
    findUserChoreById

};
//admin function
function findAllUsers() {
    return db('users');
}


function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => {
            return findById(id)
                .select('id', 'username');
        });
};

function addChore(chore) {
    return db('chores')
        .insert(chore, 'choreId')
        .then(([choreId]) => {
            return findChoreById(choreId);
        })
};

function findUserChoreById(choreListId) {
    console.log(choreListId);
    return db('choreList')
        .where({ choreListId })
        .first();
};

function getAllAssigned() {
    return db('choreList');
};

function addChoreToUser(newChore) {
    console.log(newChore)
    return db('choreList')
        .insert({ userId: newChore.userId, choreId: newChore.newer.choreId, notes: newChore.newer.notes }, 'choreListId');
};

function deleteChoreFromUser(choreListId) {
    console.log(choreListId);
    return db('choreList')
        .where({ choreListId })
        .del();
}

function findAllFamily(familyNameID) {
    return db('users')
        .where(familyNameID);
}

function findBy(filter) {
    console.log(filter, 'from auth-model');
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
    return db('chores')
        .where({ choreId })
        .first();
}
//find then update single chore on table-admin function?
function updateChore(choreId, changes) {
    return db('chores')
        .where({ choreId })
        .update(changes)
        .then(() => {
            return findChoreById(choreId);
        })
};

function findUserChores(id) {
    return db('users as u')
        .where('u.id', id)
        .join('choreList as cl', 'u.id', '=', 'cl.userId')
        .join('chores as c', 'cl.choreId', '=', 'c.choreId')
        .select('u.name', 'c.choreName', 'cl.completed', 'cl.notes', 'c.chorePointValue');
};

function getpointsT(id) {
    return db('users')
        .where('users.id', '=', id)
        .where('choreList.completed', '=', 1)
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

function updateAssignedChore(choreListId, changes) {
    return db('choreList')
        .where({ choreListId })
        .update(changes);
};

function removeUser(id) {
    return db('users')
        .where({ id })
        .del();
}

function removeChore(choreId) {
    return db('chores')
        .where({ choreId })
        .del();
};