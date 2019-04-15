const postsRouter = require( "express" ).Router();
const { getRecentPosts, getPostById, insertPost, updatePost, getPostUserId } = require(
    "./postsModel" );
const { getCommentsByPostId } = require( "../comments/commentsModal" );

/**
 * @api {get} /posts/:offset     Gets posts ordered by updated_at
 * @apiVersion 1.0.0
 * @apiName GetPosts
 * @apiGroup Posts
 *
 * @apiHeader {String} authorization    The token given to the user at login.
 *
 * @apiParam {Number} offset      The number to start the posts at.
 *
 * @apiExample Request example:
 * axios.post('/posts/20', {
 *     headers: {
 *         authorization: "token"
 *     }
 * });
 *
 * @apiUse Error
 *
 * @apiSuccessExample Posts Data
 *[
 *  {
        "id": 1,
        "created_at": "2019-04-14 19:01:18",
        "updated_at": "2019-04-15 01:19:25",
        "user_id": 38,
        "title": "mountain peak during golden hour",
        "description": "Et molestias recusandae consectetur soluta.",
        "story": "Ut et quia nam eum sed ratione. Reprehenderit vel quia dolores rem harum voluptas praesentium. Veritatis distinctio et ut voluptas ipsa qui. Aut quo perspiciatis.\n \rNobis qui quaerat enim. Reprehenderit recusandae alias blanditiis doloribus quisquam nemo delectus. Et et provident. Mollitia rerum et sint error consequatur ducimus beatae est numquam. Vel culpa nemo accusantium laborum neque sunt. Quod quo excepturi aut sapiente debitis sed quae repellendus sunt.\n \rTempora est exercitationem similique repellat at rerum nihil sequi. Et voluptas esse tenetur quis porro id reiciendis. Voluptas neque culpa. Dignissimos enim ea accusantium iusto reiciendis. Dicta consequuntur ipsam rerum consequatur explicabo.",
        "likes": 0,
        "img_url": "https://images.unsplash.com/photo-1528920304568-7aa06b3dda8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU2NzU3fQ",
        "user_profile_img": null,
        "user_name": "Jake.Gorczany95"
    }...
 ]
 *
 */
postsRouter.get( "/:offset", ( req, res ) => {
    const offset = req.params.offset;
    const user = req.decodedToken;
    if ( !user || !offset ) {
        return res.status( 400 ).
            json( { message: "You must have set a offset number" } );
    }
    
    getRecentPosts( offset ).then( results => {
        res.status( 200 ).json( results );
    } ).catch( err => {
        console.log( err );
        res.status( err.status || 500 ).
            json( {
                message: err.message || "Server error",
                status:  err.status || 500
            } );
    } );
} );

/**
 * @api {get} /posts/id/:id     Gets post by id
 * @apiVersion 1.0.0
 * @apiName GetPostById
 * @apiGroup Posts
 *
 * @apiHeader {String} authorization    The token given to the user at login.
 *
 * @apiParam {Number} id      The id of the post.
 *
 * @apiExample Request example:
 * axios.post('/posts/id/5', {
 *     headers: {
 *         authorization: "token"
 *     }
 * });
 *
 * @apiUse Error
 *
 * @apiSuccessExample Posts Data
 *
 {
    "id": 45,
    "created_at": "2019-04-14 16:29:02",
    "updated_at": "2019-04-15 01:19:25",
    "user_id": 52,
    "title": "body of water between mountains",
    "description": "Nostrum sapiente ipsum hic nemo sit exercitationem architecto iure animi.",
    "story": "Sint porro quis. Perferendis alias et tenetur. Amet nobis totam doloribus dolorem magni velit reiciendis. Fuga rerum accusamus. Et pariatur quae ut eligendi provident et placeat odio qui.\n \rDicta harum ut iure temporibus. Explicabo ea alias cum impedit esse praesentium sed enim blanditiis. Quas nisi voluptatibus dolores ipsum dignissimos. Est asperiores modi tempora. Sint quo officiis mollitia maiores totam dolorem autem ipsam deleniti. Et qui at vel animi minima.\n \rUt voluptatem doloremque voluptatem unde voluptas aut necessitatibus exercitationem tempora. Quam officiis corrupti qui atque quidem sint perspiciatis sed. Molestiae est modi rem dicta non. Voluptas sint consequuntur consequuntur autem. Enim est tempora esse error ut quas deserunt explicabo. Ut accusantium est optio in et dolorem vel cupiditate.",
    "likes": 0,
    "img_url": "https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU2NzU3fQ",
    "user_profile_img": null,
    "user_name": "Norris.Halvorson81",
    "comments": [
        {
            "id": 268,
            "created_at": "2019-04-14 00:50:05",
            "updated_at": "2019-04-15 01:19:26",
            "comment": "Dolor rerum eaque dolore praesentium non dolores. Aspernatur sed sit dolorem cumque omnis exercitationem iure quibusdam eum. Animi enim assumenda porro et aut enim non. Consequatur aut quisquam repellat.",
            "user_id": 74,
            "post_id": 45,
            "user_name": "Ocie_Gusikowski"
        }...
    ]
}
 *
 */
postsRouter.get( "/id/:id", ( req, res ) => {
    const id = req.params.id;
    const user = req.decodedToken;
    if ( !user || !id ) {
        return res.status( 400 ).
            json( { message: "You must have a id in the params." } );
    }
    
    getPostById( id ).then( results => {
        
        if ( !results ) {
            return res.status( 404 ).
                json( {
                    message: "That post seems to be in another filing cabinet.",
                    status:  404
                } );
        }
        
        getCommentsByPostId( results.id ).then( comments => {
            if ( comments ) {
                results.comments = comments;
                return res.status( 200 ).json( results );
            } else {
                results.comments = [];
                return res.status( 200 ).json( results );
            }
        } ).catch( () => {
            results.comments = "Something went wrong trying to collect the comments.";
            return res.status( 500 ).json( results );
        } );
        
    } ).catch( err => {
        console.log( err );
        res.status( err.status || 500 ).
            json( {
                message: err.message || "Server error",
                status:  err.status || 500
            } );
    } );
} );

/**
 * @api {post} /posts/   Create a post
 * @apiVersion 1.0.0
 * @apiName CreatePost
 * @apiGroup Posts
 *
 * @apiHeader {String} authorization    The token given to the user at login.
 *
 * @apiParam {String} title             The title of the post.
 * @apiParam {String} description       Short description of the post.
 * @apiParam {Text} story               The story of the post.
 * @apiParam {String} img_url            The picture url.
 * @apiParam {Number} [likes]           Number of times the post has been
 *     liked.
 * @apiParam {String} [user_profile_img] The users profile image url.
 * @apiParam {String} [created_at]      Time and date the post was created.
 * @apiParam {String} [updated_at]      Time and date the post was updated.
 *
 * @apiExample Create post example:
 * const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.post("/posts", {
    title: "Some Title",
    description: "Some description",
    story: "Lots of text here.",
    img_url: "http://SomeUrl.something",
 });
 *
 * @apiUse Error
 *
 * @apiSuccessExample Posts Data
 *
 {
    "id": 979,
    "created_at": "2019-04-15 01:35:35",
    "updated_at": "2019-04-15 01:35:35",
    "user_id": 101,
    "title": "Some title",
    "description": "Some description",
    "story": "la la la lahahahah",
    "likes": 0,
    "img_url": "http://someUrl.com",
    "user_profile_img": null,
    "user_name": "jeremiah"
}
 *
 */
postsRouter.post( "/", ( req, res ) => {
    
    const user = req.decodedToken;
    if ( !user ) {
        return res.status( 400 ).
            json( { message: "You must be logged in as a user." } );
    }
    
    const post = req.body;
    if ( !post || !post.title || !post.description || !post.story ) {
        return res.status( 400 ).
            json( {
                message: "You must include all the post details.",
                status:  400
            } );
    }
    
    if ( !post.img_url ) {
        return res.status( 400 ).
            json( {
                message: "You need to include the image url.",
                status:  400
            } );
    }
    
    post.user_id = user.id;
    
    insertPost( post ).then( ids => {
        if ( ids[ 0 ] ) {
            getPostById( ids[ 0 ] ).then( post => {
                res.status( 201 ).json( post );
            } ).catch( err => {
                throw err;
            } );
        } else {
            throw {
                message: "Something went wrong while trying to insert the post.",
                status:  500
            };
        }
    } ).catch( err => {
        res.status( err.status || 500 ).
            json( {
                message: err.message || "Server error",
                status:  err.status || 500
            } );
    } );
    
} );

/**
 * @api {put} /posts/   Update a post
 * @apiVersion 1.0.0
 * @apiName UpdatePost
 * @apiGroup Posts
 *
 * @apiHeader {String} authorization    The token given to the user at login.
 *
 * @apiParam {Number} id                    Post id.
 * @apiParam {String} [title]               The title of the post.
 * @apiParam {String} [description]         Short description of the post.
 * @apiParam {Text} [story]                 The story of the post.
 * @apiParam {String} [img_url]             The picture url.
 * @apiParam {Number} [likes]        Number of times the post has been liked.
 * @apiParam {String} [user_profile_img]    The users profile image url.
 * @apiParam {String} [created_at]          Time and date the post was created.
 * @apiParam {String} [updated_at]          Time and date the post was updated.
 *
 * @apiExample Update post example:
 * const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.put("/posts", {
    id: 979,
    likes: 25
 });
 *
 * @apiUse Error
 *
 * @apiSuccessExample Update post success
 *
 {
    "id": 979,
    "created_at": "2019-04-15 02:09:55",
    "updated_at": "2019-04-15 02:09:55",
    "user_id": 101,
    "title": "Some title",
    "description": "ffnkdl;ahijfkdls;a",
    "story": "fjdka;fjdinaklf;dfids;",
    "likes": 25,
    "img_url": "https://www.someurl.com",
    "user_profile_img": null,
    "user_name": "jeremiah"
}
 *
 */
postsRouter.put( "/", ( req, res ) => {
    
    const user = req.decodedToken;
    if ( !user ) {
        return res.status( 400 ).
            json( { message: "You must be logged in as a user." } );
    }
    
    const post = req.body;
    if ( !post || !post.id ) {
        return res.status( 400 ).
            json( {
                message: "You must include the post id in the request body.",
                status:  400
            } );
    }
    
    getPostUserId( post.id ).then( id => {
        if ( user.id !== id.user_id ) {
            throw {
                message: "You are not allowed to edit other peoples posts.",
                status:  401
            };
        }
        
        updatePost( post ).then( result => {
            if ( result === 1 ) {
                getPostById( post.id ).
                    then( post => res.status( 200 ).json( post ) ).
                    catch( err => {
                        throw err;
                    } );
            } else {
                throw {
                    message: "Something went wrong while trying to update the post.",
                    status:  500
                };
            }
        } );
        
    } ).catch( err => {
        console.log( err );
        res.status( err.status || 500 ).
            json( {
                message: err.message || "Server error",
                status:  err.status || 500
            } );
    } );
    
} );

module.exports = postsRouter;