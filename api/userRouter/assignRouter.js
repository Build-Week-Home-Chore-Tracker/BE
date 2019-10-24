const router = require('express').Router();
const authToken = require('../../Auth/authToken.js');
const Users = require('../../database/endPointModel.js');
router.get('/all', (req, res) => {
    Users.getAllAssigned()
        .then(all => {

            res.status(200).json(all);
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'could not gather assigned chores' });
        });
});

//get the chores by user id
router.get('/chores/user/:id', (req, res) => {
    const id = req.params.id;
    Users.findUserChores(id)
        .then(response => {
            if (response.length === 0) {
                res.status(200).json({ Message: 'this user has no chores' });
            } else {
                res.status(200).json(response);
            }
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'could not return user chores' });
        });
});


//to post a chore from chore table to connect with user in users table via choreList table
router.post('/user/:id', (req, res) => {
    const userId = req.params.id;
    const newer = req.body;
    const newChore = { userId, newer };
    Users.addChoreToUser(newChore)
        .then(user => {

            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'could not assign chore.. try again' });
        });
});


//gets assigned chores off choreList by the chorelistId-gets one chore
router.get('/user/chore/:choreListId', (req, res) => {
    const choreListId = req.params.choreListId;
    Users.findUserChoreById(choreListId)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'could not find assigned chore' });
        });
});

router.delete('/user/chore/:choreListId/delete', (req, res) => {
    const choreListId = req.params.choreListId;
    console.log('from before .then', choreListId);
    Users.deleteChoreFromUser(choreListId)
        .then(deleted => {
            res.status(200).json({ deleted, Message: 'chore removed from user' });
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'could not delete this chore from user' });
        });
});

router.put('/user/chore/:choreListId/update', (req, res) => {
    const choreListId = req.params.choreListId;
    const changes = req.body;
    Users.findUserChoreById(choreListId)
        .then(found => {
            Users.updateAssignedChore(choreListId, changes)
                .then(updated => {
                    res.status(201).json(updated);
                })
                .catch(error => {
                    res.status(500).json({ error, Message: 'woops could not update the assignment' });
                });
        })
});


module.exports = router;