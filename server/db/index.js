var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/favorites';
var db = pgp(connectionString);

module.exports = db;