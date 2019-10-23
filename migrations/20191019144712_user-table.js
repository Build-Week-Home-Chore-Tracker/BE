exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
            tbl.increments();
            tbl.string('familyNameID', 128).notNullable();
            tbl.string('username', 128).unique().notNullable();
            tbl.string('name').notNullable();
            tbl.string('password', 128).notNullable();
            tbl.string('role').defaultTo('child')
        })
        .createTable('choreList', tbl => {
            tbl.increments('chorelistId');
            tbl.integer('userId')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.integer('choreId')
                .notNullable()
                .unsigned()
                .references('choreId')
                .inTable('chores')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            // tbl.integer('points').defaultTo(0);
            tbl.integer('bonusP').defaultTo(0);
            tbl.boolean('completed').defaultTo(false);
            tbl.time('dateMade').defaultTo(knex.fn.now());
            tbl.text('notes');
        })
        .createTable('chores', tbl => {
            tbl.increments('choreId');
            tbl.string('choreName', 128).unique().notNullable();
            tbl.string('choreIcon');
            tbl.integer('chorePointValue');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('points')
        .dropTableIfExists('chores')
        .dropTableIfExists('choreList')
        .dropTableIfExists('users');
};