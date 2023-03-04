// eslint-disable-next-line no-unused-vars
const db = require('../db');
const { json, error } = require('../status');

/**
 * Get Library endpoint
 * @returns an array of all `emoji` objects within the EmojiLib Database.
 */
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

/**
 * Get By Name endpoint
 * @returns an array of `emoji` objects whose `name` property contains the query
 */
const getByName = (req, res, next) => {
  const sql = `
    SELECT *
      FROM "emojis"
    WHERE "name" LIKE $1;
  `;
  // Capitalizes first letter of requested emoji name and introduces %
  // % searches for any emojis that contain the query in any position
  const emojiName = `%${req.params.emojiName.toLowerCase().charAt(0).toUpperCase() + req.params.emojiName.slice(1)}%`;
  const params = [emojiName];

  db.query(sql, params)
    .then(result => {
      const emojis = result.rows[0];
      emojis
        ? json(res, 200, emojis)
        : error(res, 404, `Cannot find emoji with query: ${req.params.emojiName}`);
    })
    .catch(err => next(err));

};

/**
 * Get By ID endpoint
 * @returns an emoji` object whose `emojiId` property matches the query.
 */
const getById = (req, res, next) => {
  const sql = `
    SELECT *
      FROM "emojis"
    WHERE "emojiId" = $1;
  `;

  const emojiId = req.params.emojiId;
  const params = [emojiId];

  db.query(sql, params)
    .then(result => {
      const emojis = result.rows[0];
      emojis
        ? json(res, 200, emojis)
        : error(res, 404, 'Cannot find emoji with that ID!');
    })
    .catch(err => next(err));

};
module.exports = { getLibrary, getByName, getById };
