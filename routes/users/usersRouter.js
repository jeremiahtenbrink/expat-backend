const { getAllUsers, getUserById, insertUser, getUserByUserName, updateUser } = require(
    "./usersModel" );
const usersRouter = require( "express" ).Router();
const restricted = require( "../../api/restricted" );
const bcrypt = require( "bcrypt" );
const { generateToken } = require( "../../api/tokenService" );

/**
 * @api {get} /users Get all users
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiHeader {String} authorization  User auth token.
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
 * });
 * request.get('/users');
 *
 * @apiUse Error
 *
 * @apiSuccessExample Users Data
 * [
 {
        "id": 1,
        "created_at": "2019-04-13 09:01:42",
        "updated_at": "2019-04-13 18:54:22",
        "user_name": "Constance36"
    },
 {
        "id": 2,
        "created_at": "2019-04-13 03:36:08",
        "updated_at": "2019-04-13 18:54:22",
        "user_name": "Marcellus_Kautzer24"
    },...
 ]
 *
 */
usersRouter.get( "/", restricted, ( req, res ) => {
    getAllUsers().then( dbUsers => {
        const usersArray = dbUsers.map( user => {
            return { ...user, password: undefined };
        } );
        
        res.status( 200 ).json( usersArray );
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { status: 500, message: err.message } );
    } );
} );

/**
 * @api {get} /users/:id        Get a user with the id.
 * @apiVersion 1.0.0
 * @apiName GetUser
 * @apiGroup Users
 *
 * @apiHeader {String} authorization  User auth token.
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
 * });
 * request.get('/users/11');
 *
 * @apiParam {Number} id    User id.
 *
 * @apiUse Error
 *
 * @apiSuccessExample User Data
 *
 {
        "id": 1,
        "created_at": "2019-04-13 09:01:42",
        "updated_at": "2019-04-13 18:54:22",
        "user_name": "Constance36"
    }
 *
 */
usersRouter.get( "/:id", restricted, ( req, res ) => {
    const id = req.params.id;
    getUserById( id ).then( user => {
        if ( !user ) {
            return res.status( 404 ).
                json( { message: "This user is lost.", status: 404 } );
        }
        const newUser = { ...user, password: undefined };
        res.status( 200 ).json( newUser );
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { message: err.message, status: 500 } );
    } );
    
} );

/**
 * @api {post} /users/register    Register a new user.
 * @apiVersion 1.0.0
 * @apiName RegisterUser
 * @apiGroup Users
 *
 * @apiParam {String} user_name         Users username
 * @apiParam {String} password         Users password
 * @apiParam {String} [created_at]         Timestamp the user was created
 * @apiParam {String} [updated_at]         Timestamp the user was last updated.
 *
 * @apiExample Register example:
 * axios.post('/users/register', {
 *     user_name: "Constance36",
 *     password: "password"
 * });
 *
 * @apiUse Error
 *
 * @apiSuccessExample Register Success
 *
 {
        "id": 1,
        "created_at": "2019-04-13 09:01:42",
        "updated_at": "2019-04-13 18:54:22",
        "user_name": "Constance36"
    }
 *
 */
usersRouter.post( "/register", ( req, res ) => {
    const user = req.body;
    if ( !user || !user.user_name || !user.password ) {
        return res.status( 400 ).
            json( {
                message: "Please include username and password in the request body.",
                status:  400
            } );
    }
    
    user.password = bcrypt.hashSync( user.password, 5 );
    insertUser( user ).then( ids => {
        if ( ids[ 0 ] ) {
            getUserById( ids[ 0 ] ).then( newUser => {
                res.status( 201 ).json( { ...newUser, password: undefined } );
            } );
        } else {
            throw {
                message: "Something went wrong adding the user",
                status:  500
            };
        }
        
    } ).catch( err => {
        console.log( err );
        if ( err.errno === 19 ) {
            return res.status( 400 ).
                json( { message: "Username is taken", status: 400 } );
        }
        res.status( err.status || 500 ).
            json( { message: err.message, status: err.status || 500 } );
    } );
    
} );

/**
 * @api {post} /users/login    Log a user in.
 * @apiVersion 1.0.0
 * @apiName LoginUser
 * @apiGroup Users
 *
 * @apiParam {String} user_name         Users username
 * @apiParam {String} password         Users password
 *
 * @apiExample Login example:
 * axios.post('/users/login', {
 *     user_name: "Constance36",
 *     password: "password"
 * });
 *
 * @apiUse Error
 *
 * @apiSuccessExample Login Success
 *
 {
    "message": "Welcome jeremiah!",
    "status": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJjcmVhdGVkX2F0IjoiMjAxOS0wNC0xMyAyMzowMDoxNSIsInVwZGF0ZWRfYXQiOiIyMDE5LTA0LTEzIDIzOjAwOjE1IiwidXNlcl9uYW1lIjoiamVyZW1pYWgiLCJpYXQiOjE1NTUxOTY0MzAsImV4cCI6MTU1NTI4MjgzMH0.3dY5x5o-OTRPLJwCc2mYSMzjsfdXomtHWvrc14QUvQ4"
}
 *
 */
usersRouter.post( "/login", ( req, res ) => {
    let { user_name, password } = req.body;
    
    getUserByUserName( user_name ).then( user => {
        if ( user && bcrypt.compareSync( password, user.password ) ) {
            const token = generateToken( user );
            res.status( 200 ).
                json( {
                    message: `Welcome ${ user.user_name }!`,
                    status:  200,
                    token
                } );
        } else {
            res.status( 401 ).
                json( { message: "You shall not pass!", status: 401 } );
        }
    } ).catch( err => {
        console.log( err );
        res.status( err.status || 500 ).
            json( {
                message: err.message || "Server Err",
                status:  err.status || 500
            } );
    } );
    
} );

/**
 * @api {put} /users    Update user info.
 * @apiVersion 1.0.0
 * @apiName UpdateUser
 * @apiGroup Users
 *
 * @apiParam {Number} id                User id.
 * @apiParam {String} [user_name]         Users username
 * @apiParam {String} [password]         Users password
 *
 * @apiHeader {String} authorization  User auth token.
 *
 * @apiExample Request example:
 * const request = axios.create({
 *     baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
 * });
 * request.put('/users');
 *
 * @apiUse Error
 *
 * @apiSuccessExample Update Success
 *
 {
    "message": "Welcome jeremiah!",
    "status": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJjcmVhdGVkX2F0IjoiMjAxOS0wNC0xMyAyMzowMDoxNSIsInVwZGF0ZWRfYXQiOiIyMDE5LTA0LTEzIDIzOjAwOjE1IiwidXNlcl9uYW1lIjoiamVyZW1pYWgiLCJpYXQiOjE1NTUxOTY0MzAsImV4cCI6MTU1NTI4MjgzMH0.3dY5x5o-OTRPLJwCc2mYSMzjsfdXomtHWvrc14QUvQ4"
}
 *
 */
usersRouter.put( "/", restricted, ( req, res ) => {
    let user = req.body;
    const tokenUser = req.decodedToken;
    
    if ( tokenUser.id !== parseInt( user.id ) ) {
        return res.status( 401 ).
            json( {
                message: "You are not allowed to edit other peoples accounts.",
                status:  401
            } );
    }
    
    if ( user.password ) {
        user.password = bcrypt.hashSync( user.password, 5 );
    }
    
    updateUser( user ).then( result => {
        if ( result ) {
            getUserById( user.id ).then( dbUser => {
                res.status( 200 ).json( { ...dbUser, password: undefined } );
            } ).catch( err => {
                throw err;
            } );
        } else {
            throw {
                message: "Something went wrong while trying to update the user.",
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

module.exports = usersRouter;