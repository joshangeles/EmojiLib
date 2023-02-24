// eslint-disable-next-line no-unused-vars
const db = require('../db');
const { json } = require('../status');
const getLibrary = (req, res, next) => {
  const sql = `
  SELECT * FROM "emojis"
  ORDER BY "emojiId" ASC;
  `;

  db.query(sql)
    .then(result => {
      const emojis = result.rows;
      json(res, 200, emojis);
    })
    .catch(err => next(err));

};

module.exports = { getLibrary };
