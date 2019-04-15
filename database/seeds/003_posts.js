const db = require( "../dbConfig" );
const faker = require( "faker" );
const moment = require( "moment" );

const makePosts = async () => {
    const pictures = await db( "pictures" );
    let posts = [];
    for ( let i = 0; i < pictures.length; i++ ) {
        let user_id = Math.ceil( Math.random() * 100 );
        const post = {
            user_id:     user_id,
            title:       pictures[ i ].description,
            description: faker.lorem.sentence(),
            story:       faker.lorem.paragraphs(),
            created_at:  moment( faker.date.recent() ).
                format( "YYYY-MM-DD HH:mm:ss" ),
            likes: 0,
            img_url: pictures[i].pic_url_regular,
            user_profile_img: pictures[i].user_profile_img,
            
        };
        posts.push( post );
    }
    
    return posts;
};

exports.seed = function( knex ) {
    // Deletes ALL existing entries
    return knex( "posts" ).truncate().then( async function() {
        // Inserts seed entries
        return knex.batchInsert( "posts", await makePosts(), 10 );
        
    } );
};



