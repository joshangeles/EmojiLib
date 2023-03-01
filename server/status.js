function json(result, status, data) {
  result.status(status).json(data);
}

function error(result, status, message) {
  result.status(status).json({ error: `${message}` });
}

function sendStatus(result, status) {
  result.sendStatus(status);
}

module.exports = { json, sendStatus, error };
