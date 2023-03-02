# On Creating Commands:

Whatever format it is written in a command MUST do the following:
 - Import SlashCommandBuilder
 - Contain a `data` property containing a new instance of SlashCommandBuilder, name, and description.
 - Contain an `execute` method where command functionality is written.
