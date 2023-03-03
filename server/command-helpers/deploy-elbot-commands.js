/* eslint-disable no-console */
const { REST, Routes } = require('discord.js');
const { clientId, token } = require('../config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
// Grabs all command files from the commands directory
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const rest = new REST({ version: '10' }).setToken(token);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

(async () => {
  try {
    console.log(`Refreshing ${commands.length} slash commands...`);

    // The put method is used to fully refresh all commands in the server with
    // the current set within the commands array.
    const data = await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands }
    );
      // NOTE: Registered commands are stored by Discord, so this only needs to
      // be run (via node) whenever updating/creating commands
    console.log(`... Done! ${data.length} slash commands refreshed.`);
  } catch (error) {
    console.error(error);
  }
})();
