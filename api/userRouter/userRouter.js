const router = require('express').Router();
const Users = require('../../database/endPointModel.js');


router.get('/familyNameID', (req, res) => {
    const familyNameID = req.body;
    console.log(familyNameID);
    Users.findAllFamily(familyNameID)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({ error, Message: 'didnt work try again a different way!' });
        });
});

module.exports = router;