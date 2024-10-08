/**
 * The config folder contains configuration related information.
*/

const dotenv = require("dotenv");
dotenv.config();

// Exporting all the env variables.
module.exports = {
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    Secret_key:process.env.Secret_key, 
    jwt_expiry: process.env.jwt_expiry
}