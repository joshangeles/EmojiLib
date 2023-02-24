const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/emojiLib?sslmode=disable',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = db;
