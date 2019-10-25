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
        await db('chores').truncate();
        await db('choreList').truncate();
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

            await Users.addUser({ "familyNameID": "theFam", "username": "namely", "name": "name", "password": "password", "role": "child" });

            const anotherData = await db('users')
            expect(anotherData).toHaveLength(2);

        })
        it('check length and delete if retained users', async() => {
            const data = await db('users');
            expect(data).toHaveLength(0);

            await Users.addUser({ "familyNameID": "theFam", "username": "another", "name": "name", "password": "password", "role": "child" });

            const bData = await db('users');
            expect(bData).toHaveLength(1);
            const id = 1;
            await Users.removeUser(id);

            const endData = await db('users');
            expect(endData).toHaveLength(0);

        })

    })

    describe('test chores table', () => {
        it('should be empty at first', async() => {
            const c = await db('chores');
            expect(c).toHaveLength(0);
        })
        it('adding one should change the length', async() => {
            const c = await db('chores');
            expect(c).toHaveLength(0);

            await Users.addChore({ "choreName": "trim grandpas back hair", "chorePointValue": 8 });

            const cc = await db('chores');
            expect(cc).toHaveLength(1);
            console.table(cc);
        })
        it('add then getbyid then delete', async() => {
            const c = await db('chores');
            expect(c).toHaveLength(0);

            await Users.addChore({ "choreName": "trim grandpas back hair", "chorePointValue": 8 });

            const c2 = await db('chores')
            expect(c2).toHaveLength(1);

            await Users.findChoreById(1)
                .then(chore => {
                    return theChore = chore;
                })
            console.table(theChore);

            await Users.removeChore(1)
            const gone = await db('chores');
            expect(gone).toHaveLength(0);

        })
    })
});