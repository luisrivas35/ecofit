
const {DB_HOST, DB_PASSWORD,
        DB_NAME,
        DB_USER,
        DB_PORT} = require('./config');

module.exports ={

    database: {
        host: DB_HOST,
        port : DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    }
};