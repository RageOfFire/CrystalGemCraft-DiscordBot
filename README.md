# CrystalGemCraft-DiscordBot

![GitHub language count](https://img.shields.io/github/languages/count/RageOfFire/CrystalGemCraft-DiscordBot)
![Discord](https://img.shields.io/discord/752171524919918672)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/RageOfFire/CrystalGemCraft-DiscordBot)
![GitHub last commit](https://img.shields.io/github/last-commit/RageOfFire/CrystalGemCraft-DiscordBot)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/RageOfFire/CrystalGemCraft-DiscordBot)
![GitHub repo size](https://img.shields.io/github/repo-size/RageOfFire/CrystalGemCraft-DiscordBot)
![GitHub followers](https://img.shields.io/github/followers/RageOfFire)
![GitHub Repo stars](https://img.shields.io/github/stars/RageOfFire/CrystalGemCraft-DiscordBot)
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/RageOfFire/CrystalGemCraft-DiscordBot)

## Description

A discord bot for manager your server.

## Features

* Slash command.
* Anti ping system.
* ban/kick/timeout user.
* Send a message to specify channel
* Some fun slash command.
* Auto response if find word in user message
* And much more...

## Getting started

### Required

* [Discord.js](https://discord.js.org/#/).
* [DotENV](https://www.npmjs.com/package/dotenv).
* [Axios](https://axios-http.com/).

### Installed

```sh
npm i
```

### Setup

* Get your bot TOKEN in [here](https://discord.com/developers/applications)!
* Copy **.env.example** and rename it to **.env** right in the place have file name **index.js**!
* In **.env** edit:
* Optional: Your can add your discord id to set which command for only you can use

```sh
TOKEN=your-discord-bot-token
OWNER=your-discord-id-optional
BLACKLIST_CHANNEL=CHANNEL_ID_1, CHANNEL_ID_2, CHANNEL_ID_3 
(A list of channel id that you don't want to send helper message)
```

### Run

```sh
npm start
```

### Run [Docker](https://www.docker.com/)

* Build project:
```sh
npm run build
```
* Start project:
```sh
npm run docker
```

## Support

![GitHub issues](https://img.shields.io/github/issues/RageOfFire/CrystalGemCraft-DiscordBot)
![GitHub pull requests](https://img.shields.io/github/issues-pr/RageOfFire/CrystalGemCraft-DiscordBot)

## Author

* [RageOfFire](https://github.com/RageOfFire)