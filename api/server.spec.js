const server = require('./server.js');
const request = require('supertest');


describe('verify in testing environment', () => {
    it('db_env is  testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
});

describe('should return with 200 status', () => {
    it('return 200 status code upon success', () => {
        return request(server).get('/')
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
    it('again new api same test return 200 status reg -will be 500 after first test since server sees user made', () => {
        return request(server)
            .post('/api/auth/register')
            .send({ "username": "billy", "name": "billy", "password": "password", "familyNameID": "kuddies", })
            .set('Accept', "application/json")
            .then(response => {
                expect(response.status).toBe(200);
            }) //this will swap back and forth when test env resets
    })
    it('another api same test return 200 status login', () => {
        return request(server).post('/api/auth/login')
            .send({ "username": "billy", "password": "password" })
            .set('Accept', 'application/json')
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
    it('return proper status code get all users', () => {
        return request(server).get('/api/users/all')
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
    it('return proper code get users in family group-404 no token', () => {
        return request(server).get('/users/familyNameID')
            .send({ "familyNameID": "kuddies" })
            .set("Accept", "application/json")
            .then(response => {
                expect(response.status).toBe(404);
            })
    })
    it('return proper code get all chores', () => {
        return request(server).get('/api/chores')
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
    it('return proper code get all assinged chores', () => {
        return request(server)
            .get('/api/assign/all')
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
});