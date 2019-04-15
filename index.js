require( "dotenv" ).config();

const server = require( "./api/server.js" );

const port = process.env.PORT || 3200;
server.listen( port, () => {
    console.log( `\n\n--- Server RAWRR ${ port } ---` );
} );
