const router = require('express').Router();

const Users = require('../../database/endPointModel.js')


router.get('/', (req, res) => {
    Users.findAllChores()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({ error, message: 'can not return chores' });
        });
});

//post new chore into chores table
router.post('/', (req, res) => {
    const newChore = req.body;
    Users.addChore(newChore)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'couldnt add new chore to default list' });
        });
});
router.get('/chore/:choreId', (req, res) => {
    const choreId = req.params.choreId;
    Users.findChoreById(choreId)
        .then(theChore => {
            if (theChore) {
                res.status(200).json(theChore)
            } else {
                res.status(404).json({ Message: 'no chore by that id' });
            }
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'could not find the chore' });
        });
});
router.delete('/chore/:choreId', (req, res) => {
    const choreId = req.params.choreId;
    Users.removeChore(choreId)
        .then(removed => {
            if (removed) {
                res.status(200).json({ removed, Message: 'chore deleted from list but not from life...:)' });
            } else {
                res.status(404).json({ message: 'dont think that chore exists here yet' });
            }
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'could not delete the chore' });
        });
});



//points total
router.get('/user/:id/points', (req, res) => {
    const id = req.params.id;
    Users.getpointsT(id)
        .then(points => {
            console.log(points);
            res.status(200).json(points);
        })
        .catch(error => {
            res.status(500).json({ error, message: 'could not get points information' });
        });
});

//updates the chore on chores table
router.put('/chore/:choreId', (req, res) => {
    const choreId = req.params.choreId;
    const changes = req.body;
    Users.findChoreById(choreId)
        .then(getChores => {
            Users.updateChore(choreId, changes)
                .then(changed => {
                    res.status(200).json(changed);
                })
                .catch(error => {
                    res.status(500).json({ error, Message: ' couldnt update for some reason or another' });
                });
        })

});


module.exports = router;