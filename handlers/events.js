const { getFiles } = require("../util/functions")
const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
    warnThreshold: 3,
    muteThreshold: 4,
    maxInterval: 2000,
    warnMessage: "{@user}, Bớt spam lại hộ cái bro.",
    muteMessage: "**{user_tag}** đã bị mute vì spam.",
    maxDuplicatesWarning: 6,
    maxDuplicatesMute: 8,
    ignoredPermissions: ["ADMINISTRATOR"],
    ignoreBots: true,
    verbose: true,
    ignoredMembers: [],
    unMuteTime: 10,
    removeMessages: true,
    modLogsEnabled: false,
    modLogsChannelName: "mod-logs",
    modLogsMode: "embed",
  });

module.exports = (bot, reload) => {
    const { client } = bot

    let events = getFiles("./events/", ".js")

    if (events.length == 0) {
        console.log("No events");
    }
    events.forEach((f, i) => {
        if (reload)
            delete require.cache[require.resolve(`../events/${f}`)]
        const event = require(`../events/${f}`)
        client.events.set(event.name, event)

        if (!reload)
            console.log(`${i+1}. ${f} loaded`)
    })

    if (!reload)
        initEvents(bot)
}

function triggerEventHandler(bot, event, ...args) {
    const { client } = bot
    try {
        if (client.events.has(event))
            client.events.get(event).run(bot, ...args)
        else
            throw new Error(`Event ${event} not found`)
    } catch (err) {
        console.error(err)
    }
}

function initEvents(bot) {
    const { client } = bot

    client.on('ready', () => {
        triggerEventHandler(bot, "ready")
    })
    client.on('messageCreate', (message) => {
        triggerEventHandler(bot, "messageCreate", message)
    })
    client.on('messageCreate', (message) => {
        triggerEventHandler(bot, "messageCreate", message)
        antiSpam.message(message)
    })
    client.on("interactionCreate", (interaction) => {
        triggerEventHandler(bot, "interactionCreate", interaction)
    })
}