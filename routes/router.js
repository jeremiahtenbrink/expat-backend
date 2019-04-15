const express = require( "express" );
const restricted = require( "../api/restricted" );
const path = require( "path" );

const usersRouter = require( "./users/usersRouter" );
const postsRouter = require( "./posts/postsRouter" );
const commentsRouter = require( "./comments/commentsRouter" );

const apiDocsPath = path.join( __dirname, "../apidoc" );

module.exports = server => {
    server.use( "/users", usersRouter );
    server.use( "/posts", restricted, postsRouter );
    server.use( "/comments", restricted, commentsRouter );
    server.use( "/", express.static( apiDocsPath ) );
};


