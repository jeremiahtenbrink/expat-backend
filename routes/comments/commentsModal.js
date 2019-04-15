const db = require( "../../database/dbConfig" );

const getCommentById = id => {
    return db( "comments" ).where( { id } ).first();
};

const getCommentsByPostId = postId => {
    return db( "comments" ).
        leftJoin( "users", "user_id", "users.id" ).
        select( [ "comments.*", "users.user_name" ] ).
        where( { "comments.post_id": postId } );
};

const addComment = comment => {
    return db( "comments" ).insert( comment );
};

const editComment = comment => {
    return db( "comments" ).where( { id: comment.id } ).update( comment );
};

module.exports = {
    getCommentById,
    getCommentsByPostId,
    addComment,
    editComment,
};