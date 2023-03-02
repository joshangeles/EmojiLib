/**
 * This is where the "Emoji Lib Bot" lives. "El Bot" will be responsible for importing emojis
 * and MUST be present and with proper scopes/permissions
 */

const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Run codeblock once client is ready
client.once(Events.ClientReady, initClient => {
  // eslint-disable-next-line no-console
  console.log(`Ready! Logged in as ${initClient.user.tag}`);
  client.user.setStatus('Making Emoji Uploads Easier');
});

// Login to discord with client_token stored in .env
client.login(process.env.TOKEN_SECRET);
