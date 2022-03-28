module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix, owner } = bot

        if (!message.guild) return
        if (message.author.bot) return
        if (!message.content.startsWith(prefix))
            return

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        if (!command) return

        let member = message.member

        if (command.devOnly && !owner.include(member.id)) {
            return message.reply("This owner lore")
        }
        if (command.premissions && member.premissions.missing(command.premissions).length !== 0) {
            return message.reply("You don't have permission")
        }
        try {
            await command.run({...bot, message, args })
        } catch (err) {
            let errMSG = err.toString()
            if (errMSG.startsWith("?")) {
                errMSG = errMSG.slice(1)
                await message.reply(errMSG)
            } else
                console.error(err)
        }
    }
}