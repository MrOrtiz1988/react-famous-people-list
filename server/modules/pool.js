const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 3000,
    database: 'famous_people', 
    user: 'postgres',
    password: 'Gambino20'
});

module.exports = pool;
