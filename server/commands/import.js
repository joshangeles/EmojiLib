// Imports emojis specified when /import is used.
const { SlashCommandBuilder } = require('discord.js/');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('import')
    .setDescription('Imports emojis from EL Library. (As in EmojiLib, not La Biblioteca)'),
  async execute(interaction) {
    // use discord.js's createGuildEmoji and relevant Managers to create each emoji.
    // Probably needs to use a loop if Discord API caps post requests...
  }
};
