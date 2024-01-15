const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    // prefix: process.env.PREFIX,
    owner: [process.env.OWNER],
    blacklist: process.env.BLACKLIST_CHANNEL?.trim().split(",")
}

client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection()
client.helpers = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadHelpers = (bot, reload) => require("./handlers/helpers")(bot, reload)

client.loadEvents(bot, false)
client.loadSlashCommands(bot, false)
client.loadHelpers(bot, false)

module.exports = bot

client.login(process.env.TOKEN)