// Replies with 'Pong!' when /ping is used.
const { SlashCommandBuilder } = require('discord.js/');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with \'Pong!\''),
  async execute(interaction) {
    await interaction.reply('Pong!');
  }
};
