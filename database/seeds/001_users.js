const faker = require( "faker" );
const bcrypt = require( "bcrypt" );
const moment = require( "moment" );

const getUsers = () => {
    let users = [];
    let amountOfUsers = 100;
    for ( let i = 0; i < amountOfUsers; i++ ) {
        let user = {
            user_name:  faker.internet.userName(),
            password:   bcrypt.hashSync( "password", 5 ),
            created_at: moment( faker.date.recent() ).
                format( "YYYY-MM-DD HH:mm:ss" ),
        };
        users.push( user );
    }
    return users;
};

exports.seed = function( knex ) {
    // Deletes ALL existing entries
    return knex( "users" ).truncate().then( function() {
        // Inserts seed entries
        return knex( "users" ).insert( getUsers() );
    } );
};
