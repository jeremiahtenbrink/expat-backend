const db = require( "../../database/dbConfig" );

const getAllUsers = () => {
    return db( "users" );
};

const getUserById = id => {
    return db( "users" ).where( { id } ).first();
};

const getUserByUserName = userName => {
    return db( "users" ).where( { user_name: userName } ).first();
};

const insertUser = user => {
    return db( "users" ).
        returning( [ "id", "user_name", "created_at", "updated_at" ] ).
        insert( user );
    
};

const updateUser = user => {
    return db( "users" ).where( { id: user.id } ).update( user );
};

module.exports = {
    getAllUsers,
    getUserById,
    insertUser,
    getUserByUserName,
    updateUser
};