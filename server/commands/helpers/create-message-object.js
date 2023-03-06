/**
 * @module CreateMessageObject
 * @param {String} message - The message that is being sent.
 * @param {Boolean} ephemeral - Whether the message is ephemeral or not.
 * @returns {Object} - An anonymous object.
 */
function createMsgObj(message, ephemeral) {
  return {
    content: message,
    ephemeral
  };
}

module.exports = createMsgObj;
