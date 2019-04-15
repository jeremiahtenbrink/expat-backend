const faker = require( "faker" );
const moment = require( "moment" );
const db = require( "../dbConfig" );

const makeComments = async () => {
    let comments = [];
    let posts = await db( "posts" );
    for ( let i = 0; i < posts.length; i++ ) {
        const randomNumberOfComments = Math.ceil( Math.random() * 5 ) + 3;
        for ( let c = 0; c < randomNumberOfComments; c++ ) {
            const user_id = Math.ceil( Math.random() * 100 );
            let comment = {
                user_id:    user_id,
                post_id:    i + 1,
                comment:    faker.lorem.sentences(),
                created_at: moment( faker.date.recent() ).
                    format( "YYYY-MM-DD HH:mm:ss" ),
            };
            comments.push( comment );
        }
    }
    
    return comments;
};

exports.seed = function( knex ) {
    // Deletes ALL existing entries
    return knex( "comments" ).truncate().then( async function() {
        // Inserts seed entries
        return knex.batchInsert( "comments", await makeComments(), 10 );
    } );
};

