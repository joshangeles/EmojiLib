/* eslint-disable no-unused-vars */
const db = require('../db');
const { json, error } = require('../status');
const uploadsMiddleware = require('../uploads-middleware');

const postEmoji = (req, res, next) => {
  const { name } = req.body;
  if (!name) error(400, 'caption is a required field');

};
