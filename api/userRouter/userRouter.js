const router = require('express').Router();
const Users = require('../../database/endPointModel.js');


router.get('/familyName', (req, res) => {
    const familyName = req.body;
    console.log(familyName);
    Users.findAllFamily(familyName)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'didnt work try again a different way!' });
        });
});

module.exports = router;