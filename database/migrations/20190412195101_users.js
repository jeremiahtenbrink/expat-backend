exports.up = function( knex ) {
    return knex.schema.createTable( "users", tbl => {
        tbl.increments();
        tbl.timestamps( true, true );
        tbl.string( "user_name", 255 ).unique().notNullable();
        tbl.string( "password", 255 ).notNullable();
    } );
};

exports.down = function( knex ) {
    return knex.schema.dropTableIfExists( "users" );
};
