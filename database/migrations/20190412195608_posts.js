exports.up = function( knex ) {
    return knex.schema.createTable( "posts", tbl => {
        tbl.increments();
        tbl.timestamps( true, true );
        tbl.integer( "user_id" ).
            references( "id" ).
            inTable( "users" ).
            onUpdate( "CASCADE" ).
            onDelete( "CASCADE" );
        tbl.string( "title", 255 );
        tbl.string( "description", 255 );
        tbl.text( "story" );
        tbl.integer("likes").defaultTo(0);
        tbl.string("img_url").notNullable();
        tbl.string("user_profile_img");
        
    } );
};

exports.down = function( knex ) {
    return knex.schema.dropTableIfExists( "posts" );
};
