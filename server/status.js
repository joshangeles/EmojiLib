function json(result, status, data) {
  result.status(status).json(data);
}

function sendStatus(result, status) {
  result.sendStatus(status);
}

module.exports = { json, sendStatus };
