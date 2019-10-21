// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './database/users.db3'
        },
        useNullAsDefault: true,
    },

    testing: {
        client: 'sqlite3',
        connection: {
            filename: './database/test.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',

        },
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },

};