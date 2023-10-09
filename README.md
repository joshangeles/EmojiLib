# Emoji-Lib

## About
A web application for Discord users who want to use new emojis in their servers.

EmojiLib is an application that I built to import multiple emojis into Discord servers. Through using Discord I had noticed that adding multiple emojis into a server at once was tedious, and by utilizing a bot that already had access to the emojis that I would like, it would make the process much easier.

[Live Demo](https://emoji-lib.herokuapp.com/)

## Technologies-Used
* HTML5
* CSS3
* JavaScript
* [Node.js](https://nodejs.org/en/docs)
* [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [Discord.js](https://discord.js.org/#/docs)
* [Discord Developer Portal](https://discord.com/developers/docs/intro)

## Features
#### Users can...
* View a library of emojis
* Search the library for emojis
* Import emojis into their server via EmojiLib's Discord bot

## Demo
<details>
  <summary>A demo of a user selecting their desired emojis</summary>
  <img alt="The User selects the emojis they wish to import" src="https://github.com/joshangeles/EmojiLib/assets/68949703/cd1a67b3-dbc4-412f-ad8f-32dd2795b282">
</details>
<details>
  <summary>A demo of the Discord Bot importing emojis</summary>
  <img alt="The User imports the selected emojis via the EmojiLib Discord Bot" src="https://github.com/joshangeles/EmojiLib/assets/68949703/8de91fe0-5bea-4122-97ab-89b16a3c7cef">
</details>

## Stretch-Features
#### Users can...
* Import an emoji package
* Rate an Emoji and sort the Library by most popular, least popular, etc.
* Search emojis by metadata/packs they're included in

## System-Requirements
* [Node.js (^18.12.0)](https://nodejs.org/en/download/ "Download Node.js here")
* [PostgreSQL (^14.5)](https://www.postgresql.org/download/ "Download PostgreSql here")
* [Git](https://git-scm.com/downloads "Download Git here")

## Getting-Started
1. Clone the repository via console with \
`git clone https://github.com/joshangeles/EmojiLib.git`
2. Install dependencies via console with \
`npm install`
3. Create your `.env` file via console with \
`cp .env.example .env`
4. Replace the placeholder values within the new `.env` file with your bot's information
5. Start PostgreSQL and create a database if you don't have one via console with \
`sudo service postgresql start` and `createdb <database-name>`
6. Import the [provided schema](database/schema.sql) and any [data](database/data.sql) via console with \
`npm run db:import`

To start developing simply run `npm run dev` via console \
To create a production build simply run `npm run build` via console

## Additional-Documentation
* [Command Creation](server/commands/command-creation.md)
* [Command Helpers](server/commands/helpers/command-helpers.md)
