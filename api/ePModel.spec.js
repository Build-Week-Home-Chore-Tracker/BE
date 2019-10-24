const Users = require('../database/endPointModel.js');
const db = require('../database/dbConfig.js')
describe('verify in testing environment', () => {
    it('db_env is  testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
});
//testing the model now
describe('endPointModel', () => {
    beforeEach(async() => {
        await db('users').truncate();
    });
    describe('check length of current test db then add a user', () => {
        it('should start as empty', async() => {
            const ogData = await db('users');
            expect(ogData).toHaveLength(0);
        })
        it('add user and check length of database again', async() => {
            await Users.addUser({ "familyNameID": "theFam", "username": "theName", "name": "name", "password": "password", "role": "parent" });


            //check again now
            const data = await db('users');
            expect(data).toHaveLength(1);
        })
    })
});