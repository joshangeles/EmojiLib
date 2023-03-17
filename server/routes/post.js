/* eslint-disable no-unused-vars */
const db = require('../db');
const { json, error } = require('../status');
const uploadsMiddleware = require('../uploads-middleware');
const path = require('path');

const postEmoji = (req, res, next) => {
  const sql = `
  INSERT INTO "emojis" ("name", "url", "userId")
  VALUES ($1, $2, $3)
  RETURNING *;
  `;

  const { name, url, userId } = req.body;
  if (!name) error(400, 'name is a required field');
  if (!userId) error(400, 'userId is a required field');

  const params = [name, url, userId];

  db.query(sql)
    .then(result => {
      const emoji = result.rows;
      json(res, 201, emoji);
    })
    .catch(err => next(err));

};

module.exports = postEmoji;
