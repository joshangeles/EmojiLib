const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv/config');

/**
 * This is where the "Emoji Lib Bot" lives. "El Bot" will be responsible for importing emojis
 * and MUST be present and with proper scopes/permissions
 */
function elBot() {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ]
  });

  client.commands = new Collection();

  const commandsDir = path.join(__dirname, 'commands');
  const commands = fs.readdirSync(commandsDir).filter(command => command.endsWith('.js'));

  for (const commandFile of commands) {
    const commandPath = path.join(commandsDir, commandFile);
    const command = require(commandPath);

    ('data' in command && 'execute' in command)
      ? client.commands.set(command.data.name, command)
      // eslint-disable-next-line no-console
      : console.log(`${commandPath} is missing a data/execute property!`);

  }

  client.once(Events.ClientReady, initClient => {
    // eslint-disable-next-line no-console
    console.log(`Ready! Logged in as ${initClient.user.tag}`);
    client.user.setStatus('Making Emoji Uploads Easier');
  });

  client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
      } else {
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  });

  // Login to discord with client_token stored in .env
  client.login(process.env.DISCORD_BOT_TOKEN);
}

module.exports = elBot;
