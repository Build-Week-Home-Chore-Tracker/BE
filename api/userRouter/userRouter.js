const router = require('express').Router();
const Users = require('../../database/endPointModel.js');
const authToken = require('../../Auth/authToken.js');


router.get('/all', (req, res) => {
    Users.findAllUsers()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({ error, message: 'woops could not get them' });
        });
});
//going to use authToken here i can help frontend figure out how to implement the auth
router.get(`/familyNameID`, (req, res) => {
    const familyNameID = req.body;
    console.log(familyNameID);
    Users.findAllFamily(familyNameID)

    .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'unable to pull request from database' });
        });
});
//has users/:id  should make this one for parents request and make another for child
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Users.findById(id)
        .then(response => {
            if (response) {
                res.status(200).json(response);
            } else {
                res.status(404).json({ Message: 'no user by that id' });
            }
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'unable to pull request from database' });
        });
});

//update user info
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Users.findById(id)
        .then(user => {
            if (user) {
                console.log(user);
                Users.updateUser(id, changes)
                    .then(updated => {
                        res.status(201).json(updated);
                    })
            } else(res.status(400)).json({ message: 'could not find user with that id' });
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'could not update user' });
        });
});
//delete

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            console.log(user);
            if (user) {
                Users.removeUser(id)
                    .then(gone => {
                        res.status(200).json({ Message: 'user deleted' });
                    })
            } else {
                res.status(404).json({ Message: 'could not find user with that id' });
            }
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'something went wrong' });
        });
});

module.exports = router;