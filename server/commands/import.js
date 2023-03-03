// Imports emojis specified when /import is used.
const { SlashCommandBuilder } = require('discord.js/');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('import')
    .setDescription('Imports emojis from EL Library. (As in EmojiLib, not La Biblioteca)')
    .addStringOption(option => option.setName('list').setDescription('The emoji(s) to be imported').setRequired(true)),
  async execute(interaction) {
    // use discord.js's createGuildEmoji and relevant Managers to create each emoji.
    // Take the message content and split the `name(s)` string (String.split()) and store returned emoji object array.
    // Query getByNames endpoint for the returned array
    // Call the create method of discord.js's GuildEmojiManager for each emoji objects' url property.
    const list = interaction.getString('list');
    // eslint-disable-next-line no-unused-vars
    const isList = list.includes(',');

  }
};
