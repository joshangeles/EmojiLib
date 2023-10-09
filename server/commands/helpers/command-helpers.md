# About `server/command-helpers`:

## [Deploy Elbot Commands](server/commands/helpers/deploy-elbot-commands.js):
### `server/command-helpers/deploy-elbot-commands.js`

**Description:**
This script is used to send put requests to the Discord API in order to register slash commands.

**Use:**
`node deploy-elbot-commands.js`

*NOTE*: Ensure you are in the correct directory or adjust the filepath accordingly.
*(ex.)*: `node command-helpers/deploy-elbot-commands.js`

## [Remove Elbot Commands](server/commands/helpers/remove-elbot-commands.js):
### `server/command-helpers/remove-elbot-commands.js`

**Description:**
This script is used to send delete/put requests to the Discord API in order to delete slash commands.
If the `commands` array is **empty**, it will send a `put` request with an empty body to delete all commands.
Otherwise, it will send a `delete` request for each `commandId` specified.

**Use:**
`node remove-elbot-commands.js`

*NOTE*: Ensure you are in the correct directory or adjust the filepath accordingly.
*(ex.)*: `node command-helpers/remove-elbot-commands.js`
