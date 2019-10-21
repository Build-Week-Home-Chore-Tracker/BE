const jwt = require('jsonwebtoken');
const secret = require('../api/secret/secret.js');


module.exports = function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role,
        //any other data
    };
    const secrets = 'thisisa freaking secretof secrets!';
    const options = {
        expiresIn: '1h',
    };

    return jwt.sign(payload, secrets, options);

}