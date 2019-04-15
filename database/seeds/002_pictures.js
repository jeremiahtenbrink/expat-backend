const csvParse = require( "../csvParser" );
const path = require( "path" );

exports.seed = function( knex ) {
    // Deletes ALL existing entries
    return knex( "pictures" ).truncate().then( async function() {
        // Inserts seed entries
        const pictures = await csvParse(
            path.join( __dirname, "./pictures.csv" ) );
        return knex.batchInsert( "pictures", pictures, 10 );
    } );
};
