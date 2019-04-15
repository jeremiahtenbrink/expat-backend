exports.up = function( knex ) {
    return knex.schema.createTable( "pictures", tbl => {
        tbl.increments();
        tbl.string( "created_at", 255 );
        tbl.integer( "width" );
        tbl.integer( "height" );
        tbl.integer( "likes" );
        tbl.string( "description", 255 );
        tbl.string( "user_profile_img_sm", 255 );
        tbl.string( "user_profile_img_md", 255 );
        tbl.string( "user_profile_img_lg", 255 );
        tbl.string( "pic_url_raw", 255 );
        tbl.string( "pic_url_full", 255 );
        tbl.string( "pic_url_regular", 255 );        tbl.string( "pic_url_sm", 255 );
        tbl.string( "pic_url_thumb", 255 );
    } );
};

exports.down = function( knex ) {
    return knex.schema.dropTableIfExists( "pictures" );
};
