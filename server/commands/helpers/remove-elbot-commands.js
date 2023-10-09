/* eslint-disable no-console */
// For deleting registered slash commands. NOTE: For development purposes only!
require('dotenv/config');
const { REST, Routes } = require('discord.js');
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

/**
 * An array containing the commandIDs for all commands flagged for deletion.
 * Note that commandIDs must be strings.
 * DANGER: Running this script with an empty array will globally delete ALL slash commands.
 */
const commands = [];

for (const commandId of commands) {
  // This timeout is set to buffer delete requests to prevent rejections.
  setTimeout(() => {
    // This code block send a delete request to the Discord API for each commandId found in the commands array.
    rest.delete(Routes.applicationCommand(process.env.CLIENT_ID, `${commandId}`))
      .then(() => console.log(`Successfully deleted application command #${commandId}`))
      .catch(console.error);
  }, 1000);
}

if (commands.length === 0) {
  rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
    .then(() => console.log('Successfully deleted all application commands.'))
    .catch(console.error);
}
