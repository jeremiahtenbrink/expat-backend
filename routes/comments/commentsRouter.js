const { getCommentsByPostId, addComment, getCommentById, editComment } = require(
    "./commentsModal" );

const commentsRouter = require( "express" ).Router();

/**
 * @api {get} /comments/post_id/:id   Get all comments for a post.
 * @apiVersion 1.0.0
 * @apiName GetPostComments
 * @apiGroup Comments
 *
 * @apiHeader {String} authorization    The token given to the user at login.
 *
 * @apiParam {Number} id                The id of the post you are collecting
 *     comments for.
 *
 * @apiExample Get comments example:
 * const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.get("/comments/post_id/45");
 *
 * @apiUse Error
 *
 * @apiSuccessExample Posts Data
 *[
 *  {
        "id": 273,
        "created_at": "2019-04-14 18:00:08",
        "updated_at": "2019-04-15 01:38:18",
        "comment": "Autem doloremque est quia sed sequi cumque dolor quaerat recusandae. Autem quia quasi qui in quisquam occaecati exercitationem. Dignissimos ea placeat iusto cumque dolores numquam quidem. Quis quia veritatis odit sed.",
        "likes": 0,
        "user_id": 30,
        "post_id": 45,
        "user_name": "Ellen91"
    },
 *  {
        "id": 274,
        "created_at": "2019-04-14 18:27:45",
        "updated_at": "2019-04-15 01:38:18",
        "comment": "Labore voluptatibus sed asperiores mollitia adipisci doloremque quo. Deleniti itaque voluptatem asperiores rerum sit nemo vitae consequuntur.",
        "likes": 0,
        "user_id": 95,
        "post_id": 45,
        "user_name": "Alvena44"
    }....
 ]
 *
 */
commentsRouter.get( "/post_id/:id", ( req, res ) => {
    const id = req.params.id;
    
    if ( !id ) {
        return res.status( 400 ).
            json( { message: "No id, no comment", status: 400 } );
    }
    getCommentsByPostId( id ).then( postComments => {
        if ( postComments.length > 0 ) {
            return res.status( 200 ).json( postComments );
        } else {
            throw { message: "We couldn't find those comments.", status: 404 };
        }
    } ).catch( err => {
        console.log( err );
        res.status( err.status || 500 ).
            json( {
                message: err.message ||
                             "Something went wrong trying to gather the comments.",
                status:  err.status || 500
            } );
    } );
} );

/**
 * @api {post} /comments   Create a comment.
 * @apiVersion 1.0.0
 * @apiName CreateComment
 * @apiGroup Comments
 *
 * @apiHeader {String} authorization    The token given to the user at login.
 *
 * @apiExample Post comment example:
 * const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.post("/comments", {
    comment: "Long string",
    post_id: 45,
 });
 *
 * @apiParam {Text} comment     Comment to add to post.
 * @apiParam {Number} post_id   Id of the post to add the comment to.
 * @apiParam {String} [created_at]   Id of the post to add the comment to.
 * @apiParam {String} [updated_at]   Id of the post to add the comment to.
 * @apiParam {Number} [likes]       Number of likes the comment has.
 *
 * @apiUse Error
 *
 * @apiSuccessExample Create post success.
 *{
    "id": 5876,
    "created_at": "2019-04-15 01:41:41",
    "updated_at": "2019-04-15 01:41:41",
    "comment": "Some text here",
    "likes": 0,
    "user_id": 101,
    "post_id": 45
}
 *
 */
commentsRouter.post( "/", ( req, res ) => {
    const comment = req.body;
    const user = req.decodedToken;
    
    if ( !comment || !comment.comment || !comment.post_id ) {
        return res.status( 400 ).
            json(
                {
                    message: "You must include the comment and the post id in your request.",
                    status:  400
                } );
    }
    
    comment.user_id = user.id;
    
    addComment( comment ).then( ids => {
        if ( ids[ 0 ] ) {
            getCommentById( ids[ 0 ] ).then( newComment => {
                return res.status( 201 ).json( newComment );
            } ).catch( err => {
                throw err;
            } );
        } else {
            throw {
                message: "Something went wrong while trying to insert the comment.",
                status:  500
            };
        }
        
    } ).catch( err => {
        return res.status( err.status || 500 ).
            json( {
                message: err.message || "Server error",
                status:  err.status || 500
            } );
    } );
} );

/**
 * @api {put} /comments   Update a comment.
 * @apiVersion 1.0.0
 * @apiName UpdateComment
 * @apiGroup Comments
 *
 * @apiHeader {String} authorization    The token given to the user at login.
 *
 * @apiExample Post comment example:
 * const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.put("/comments", {
    id: 273,
    likes: 20
 });
 *
 * @apiParam {Number} id            Post id.
 * @apiParam {Number} [post_id]       Id of the post to add the comment to.
 * @apiParam {Text} [comment]       Comment to add to post.
 * @apiParam {String} [created_at]  Id of the post to add the comment to.
 * @apiParam {String} [updated_at]  Id of the post to add the comment to.
 * @apiParam {Number} [likes]       Number of likes the comment has.
 *
 * @apiUse Error
 *
 * @apiSuccessExample Create post success.
 *{
    "id": 273,
    "created_at": "2019-04-14 18:00:08",
    "updated_at": "2019-04-15 01:38:18",
    "comment": "Autem doloremque est quia sed sequi cumque dolor quaerat recusandae. Autem quia quasi qui in quisquam occaecati exercitationem. Dignissimos ea placeat iusto cumque dolores numquam quidem. Quis quia veritatis odit sed.",
    "likes": 20,
    "user_id": 101,
    "post_id": 45
}
 *
 */
commentsRouter.put( "/", ( req, res ) => {
    const comment = req.body;
    const user = req.decodedToken;
    
    if ( !comment.id ) {
        return res.status( 400 ).
            json(
                {
                    message: "You must include the post id in your request.",
                    status:  400
                } );
    }
    
    comment.user_id = user.id;
    
    editComment( comment ).then( result => {
        if ( result ) {
            getCommentById( comment.id ).then( newComment => {
                return res.status( 200 ).json( newComment );
            } ).catch( err => {
                throw err;
            } );
        } else {
            throw {
                message: "Something went wrong while trying to update the comment.",
                status:  500
            };
        }
        
    } ).catch( err => {
        return res.status( err.status || 500 ).
            json( {
                message: err.message || "Server error",
                status:  err.status || 500
            } );
    } );
} );

module.exports = commentsRouter;