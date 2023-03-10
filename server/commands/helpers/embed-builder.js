const { EmbedBuilder } = require('discord.js');
/**
 * @module EmbedMessageCreator
 * @param {*} color - The color of the embed's heading.
 * @param {*} title - The title of the embed.
 * @param {*} description - The description of the embed.
 */
module.exports = function (color, title, description) {
  const embedMessage = new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .setDescription(description)
    .setAuthor({ name: 'EmojiLib', iconURL: 'https://i.imgur.com/okBD858.png', url: 'http://localhost:3000' })
    .setThumbnail('https://media1.giphy.com/media/a0h7sAqON67nO/giphy.gif');

  return { embeds: [embedMessage] };
};
