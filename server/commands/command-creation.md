# On Creating Commands:

Whatever format it is written in a command MUST do the following:
 - Import SlashCommandBuilder
 - Contain a `data` property containing a new instance of SlashCommandBuilder, name, and description.
 - Contain an `execute` method where command functionality is written.

NOTE: The `data` property can be further modified to include options. The `ephemeral` property enables the echoed response to be an "ephemeral message" which is a response that is purely client-side and cannot be seen by other users.
