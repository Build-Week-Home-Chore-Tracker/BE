const router = require('express').Router();
const checkToken = require('../../Auth/authToken.js');
const Users = require('../../database/endPointModel.js');
//its currently not liking the token setup.. may need to switch to sessions... well see

//put in token auth so only logged in child can see their profile on this route
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Users.findById(id)
        .then(resp => {

            res.status(200).json({ id: resp.id, familyNameID: resp.familyNameID, username: resp.username, name: resp.name, role: resp.role })
        })
        .catch(error => {
            res.status(500).json({ error, message: 'could not complete request' });
        });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Users.findById(id)
        .then(user => {
            if (user) {
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

module.exports = router;