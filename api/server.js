const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const knexConfig = require('../database/dbConfig.js');
const Users = require('../database/endPointModel.js');
const regLoginRouter = require('../api/regLogin/regLoginRouter.js');
const userRouter = require('../api/userRouter/userRouter.js');


const server = express();
//makes the config for the session cookie
const sessionConfig = {
    name: 'mysession',
    secret: 'maybe import this secret also',
    cookie: {
        maxAge: 1000 * 60 * 120,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new knexSessionStore({
        knex: knexConfig,
        createtable: true,
        clearInterval: 1000 * 60 * 600,
    })
};
//global middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(session(sessionConfig));

//if we make routers they can go here
server.use('/api/auth', regLoginRouter);
server.use('/api/users/', userRouter);

//test get
server.get('/', (req, res) => {
    res.status(200).json({ message: 'you made it to the fan club, Boss!' });
})

server.get('/api/users/all', (req, res) => {
    Users.findAllUsers()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({ error, message: 'woops could not get them' });
        });
});

module.exports = server;