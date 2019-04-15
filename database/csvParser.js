const csv = require( "csv-parser" );
const fs = require( "fs" );
const Promise = require( "promise" );

module.exports = ( file ) => {
    
    const promise = new Promise( ( resolve ) => {
        const results = [];
        fs.createReadStream( file ).pipe( csv( {
            mapHeaders: ( { header } ) => header.toLowerCase().trim()
        } ) ).
            on( "data", data => {
                let objectKeys = Object.keys( data );
                for ( var i = 0; i < objectKeys.length; i++ ) {
                    if ( data[ objectKeys[ i ] ] ) {
                        data[ objectKeys[ i ] ] = data[ objectKeys[ i ] ].trim();
                    }
                    
                }
                results.push( data );
            } ).on( "end", () => {
                resolve( results );
            } );
        
    } );
    
    return promise;
};

