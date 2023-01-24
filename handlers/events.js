const { getFiles } = require("../util/functions")
const { antiSpam } = require("../util/antispam")
const { MessageEmbed } = require('discord.js')

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
    // client.on('messageCreate', (message) => {
    //     triggerEventHandler(bot, "messageCreate", message)
    // })
    client.on('messageCreate', (message) => {
        triggerEventHandler(bot, "messageCreate", message)
        // Anti Ping
        const antiPing = new MessageEmbed()
        .setColor('#faa152')
        .setTitle(message.author.toString() + ' đừng ping người quản lý nha !')
        const staffMember = message.mentions.users.first();
        if(staffMember) {
            const staffTarget = message.guild.members.cache.get(staffMember.id);
            if(staffTarget) {
                const permissionsCheck = staffTarget.permissions.has("BAN_MEMBERS");
                    if (permissionsCheck) {
                        message.delete()
                        .then(msg => {
                            msg.channel.send({ embeds: [antiPing] })
                        }).catch((err) => {console.log(err)});
                    }
            }
        }
        // Anti Ping 
        antiSpam.message(message)
    })
    client.on("interactionCreate", (interaction) => {
        triggerEventHandler(bot, "interactionCreate", interaction)
    })
}