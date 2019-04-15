// add a .env file with the JWT_SECRET you'd like to use

module.exports = {
    jwtSecret:
    process.env.JWT_SECRET || "keep it secret, keep it safe",
};
