const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../../database/endPointModel.js');

const generateToken = require('../../database/makeToken.js');

router.post('/register', (req, res) => {
    // implement registration
    console.log('starting the post request before setting body info');
    const user = req.body; //setting up what to send to add

    const hash = bcrypt.hashSync(user.password, 8); //this creates the hash
    user.password = hash; //this sets the value of the has to the created password

    Users.add(user)
        .then(newUser => {
            // req.session.userId = newUser.id;

            res.status(200).json({ newUser, Name: user.name });
        })
        .catch(error => {
            res.status(500).json({ error, Message: ' unable to add user' });
        });
});
//login router... 
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `welcome ${user.username}`,
                    token,
                    username: user.username,
                    userId: user.id,
                });
            } else {
                console.log('now in the else')
                res.status(401).json({ message: ' Credentials dont match' });
            }
        })
        .catch(error => {
            console.log('now its in the catch')
            res.status(500).json({ message: 'Can not find those Credentials' });
        });
});

module.exports = router;