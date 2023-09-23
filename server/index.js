require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const { getLibrary, getByName, getById } = require('./routes/get');
const path = require('node:path');
const elbot = require('./elbot');

const app = express();

app.use(staticMiddleware);

app.get('/api/emojis', getLibrary);
app.get('/api/emojis/name/:emojiName', getByName);
app.get('/api/emojis/id/:emojiId', getById);
app.use((req, res) => {
  res.sendFile('/index.html', {
    root: path.join(__dirname, 'public')
  });
});
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});

// Initializes EmojiLib Bot
elbot();
