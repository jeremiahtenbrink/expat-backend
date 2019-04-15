const path = require( "path" );
const dbPath = path.join( __dirname, "./database/expat.sqlite3" );

module.exports = {
    development: {
        client:           "sqlite3",
        connection:       { filename: dbPath },
        useNullAsDefault: true,
        migrations:       {
            directory: "./database/migrations",
            tableName: "dbmigrations",
        },
        seeds:            { directory: "./database/seeds" },
        // by default SQLite will not enforce foreign keys
        pool:             {
            afterCreate: ( conn, done ) => {
                conn.run( "PRAGMA foreign_keys = ON", done ); // enforce FK
            },
        },
    },
    testing:     {
        client:           "sqlite3",
        connection:       {
            filename: path.join( __dirname, "./database/test.sqlite3" ),
        },
        useNullAsDefault: true,
        migrations:       {
            directory: "./data/migrations",
        },
    },
    
    production: {
        client:     "pg",
        connection: path.join( __dirname, "./database/expatProd.sqlite3" ),
        migrations: {
            directory: "./data/migrations",
        },
        seeds:      {
            directory: "./data/seeds",
        },
    },
};
