//bring in the jwt and secret to verify them

const jwt = require('jsonwebtoken');

const secret = require('../api/secret/secret.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ err, message: 'there was and error with the token' })
            } else {
                req.user = {
                    userId: decodedToken.Id,
                    username: decodedToken.username,
                    role: decodedToken.role,
                }
                next();
            }
        })
    } else {
        res.status(401).json({ you: 'shall not pass!' });
    }
};