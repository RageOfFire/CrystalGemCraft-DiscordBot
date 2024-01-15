const { getFiles } = require("../util/functions")
const fs = require("fs")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, blacklist } = bot

        if (!message.guild) return;
        if (message.author.bot) return;
        if (message.content.includes("@here") || message.content.includes("@everyone")) return;

        fs.readdirSync('./helpers/').forEach((category) => {
            let helpers = getFiles(`./helpers/${category}`, ".js")
            helpers.forEach(async (f) => {
                const help = require(`../helpers/${category}/${f}`)
                const aliasesMatch = help.aliases.some(alias => message.content.toLowerCase().includes(alias));
                if (message.content.toLowerCase().includes(help.name) || aliasesMatch) {
                    const helperCmd = client.helpers.get(help.name)
                    try {
                        if(!blacklist?.includes(message.channel.id)) {
                            await helperCmd.run({ ...bot, message })
                        }
                    } catch (err) {
                        let errMSG = err.toString()
                        if (errMSG.startsWith("?")) {
                            errMSG = errMSG.slice(1)
                            await message.reply(errMSG).catch((err) => { console.log(err) });
                        } else
                            console.error(err)
                    }
                }
            })
        })
    }
}