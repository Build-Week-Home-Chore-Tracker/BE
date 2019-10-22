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

            tbl.integer('points').defaultTo(0);
            tbl.integer('bonusP').defaultTo(0);
            tbl.boolean('completed').defaultTo(false);
            tbl.date('dateAssigned');
            tbl.text('notes');
        })
        .createTable('chores', tbl => {
            tbl.increments('choreId');
            tbl.string('choreName', 128).unique().notNullable();
        })
        // .createTable('points', tbl => {
        //     tbl.increments('pointsId');
        //     tbl.integer('p1').defaultTo(1);
        //     tbl.integer('p2').defaultTo(2);
        //     tbl.integer('p3').defaultTo(3);
        //     tbl.integer('p4').defaultTo(4);
        //     tbl.integer('p5').defaultTo(5);
        // })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('points')
        .dropTableIfExists('chores')
        .dropTableIfExists('choreList')
        .dropTableIfExists('users');
};