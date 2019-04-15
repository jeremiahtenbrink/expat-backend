exports.up = function( knex ) {
    return knex.schema.createTable( "comments", tbl => {
        tbl.increments();
        tbl.timestamps( true, true, );
        tbl.text( "comment" ).notNullable();
        tbl.integer( "likes" ).defaultTo( 0 );
        tbl.integer( "user_id" ).
            references( "id" ).
            inTable( "users" ).
            onUpdate( "CASCADE" ).
            onDelete( "CASCADE" );
        tbl.integer( "post_id" ).
            references( "id" ).
            inTable( "posts" ).
            onUpdate( "CASCADE" ).
            onDelete( "CASCADE" );
    } );
};

exports.down = function( knex ) {
    return knex.schema.dropTableIfExists( "comments" );
};
