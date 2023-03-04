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
    .setDescription(description);
  return embedMessage;
};
