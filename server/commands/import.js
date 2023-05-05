/* eslint-disable no-console */
// Imports emojis specified when /import is used.
const createMessage = require('./helpers/create-message-object');
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js/');
const embedMessage = require('./helpers/embed-builder');
const fetchOptions = require('./helpers/fetch-options');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('import')
    .setDescription('Imports emojis from EL Library. (As in EmojiLib, not La Biblioteca)')
    .addStringOption(option => option.setName('list').setDescription('The emoji(s) to be imported').setRequired(true)),
  async execute(interaction) {
    // Check if user has permission to manage emojis/stickers
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageEmojisAndStickers)) {
      return await interaction.reply(createMessage('User must have Manage Emojis & Stickers permissions!', true));
    }
    /**
     * @type {String}
     * A string representing the user input of the `list` option.
     */
    const userInput = interaction.options.getString('list')?.trim();
    /**
     * @type {Boolean}
     * A boolean representing whether the `userInput` contains multiple emojis.
     */
    const hasMultiple = userInput.includes(',');
    /**
     * @type {Array}
     * An array containing all the successfully imported emojis.
     */
    const importedEmojis = [];

    function fetchAndCreate(emote) {
      fetch(`https://emoji-lib.herokuapp.com/api/emojis/name/${emote}`, fetchOptions('GET', 'application/json'))
        .then(res => res.json())
        .then(data => {
          // Checks if query returned an error and replies accordingly.
          if (data.error) {
            console.log(data.error); // Remove after implementation
            return interaction.reply(createMessage(`Cannot find emoji with query: ${emote}`));
          }

          /**
           * An object containing the relative filepath for the emoji being imported and the emoji name.
           * @property emoteObject.attachment - The filepath to the emoji being imported.
           * @property emoteObject.name - The name of the emoji being imported.
           */
          const emoteObject = { attachment: `/public${data.url}`, name: `${data.name}` };
          console.log('Attachment:', emoteObject.attachment);
          interaction.guild.emojis.create(emoteObject)
            .then(emote => {
              importedEmojis.push(emote);
            })
            .catch(err => {
              interaction.reply(createMessage(`Cannot upload ${emote}! Did you reach the server limit?`, true));
              console.error(err);
            });

        })
        .catch(async error => {
          await interaction.reply(createMessage('Something went wrong while fetching the emoji information!', true));
          console.error(error); // Remove after implementation
        });
    }

    // Run this if multiple emojis are specified
    if (hasMultiple) {
      // Splits the user input into an array of emotes
      // Note: Not named emojis due to property naming conflict with discord.js :-(
      const emotes = userInput.split(',');

      emotes.forEach(emote => {
        fetchAndCreate(emote);
      });
    }
    // Run this is there is only a single emoji specified
    if (!hasMultiple) {
      fetchAndCreate(userInput);
    }

    const embed = embedMessage('Blue', 'Hey There!', 'Your imported emoji(s) now available!');
    interaction.reply(embed);
  }
};
