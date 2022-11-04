module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix, owner } = bot

        if (!message.guild) return
        if (message.author.bot) return
        if (message.content.includes("@here") || message.content.includes("@everyone")) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g)

        // chat command if reply bot
        if (!message.content.startsWith(prefix)) {
            const chatCommand = client.commands.get('chat');
            try {
                await chatCommand.run({...bot, message, args })
            } catch (err) {
                let errMSG = err.toString()
                if (errMSG.startsWith("?")) {
                    errMSG = errMSG.slice(1)
                    await message.reply(errMSG)
                } else
                    console.error(err)
            }
        }
        
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)

        // If user send empty prefix
        if (message.content === prefix) {
            const helpCommand = client.commands.get('help');
            try {
                await helpCommand.run({ ...bot, message, args })
            } catch (err) {
                let errMSG = err.toString()
                if (errMSG.startsWith("?")) {
                    errMSG = errMSG.slice(1)
                    await message.reply(errMSG)
                } else
                    console.error(err)
            }
        }

        if (!command) return

        let member = message.member

        if (command.devOnly && !owner.includes(member.id)) {
            return message.reply("Lệnh này đang trong chế độ phát triển")
        }
        if (command.premissions && member.premissions.missing(command.premissions).length !== 0) {
            return message.reply("Bạn không có quyền thực hiện lênh này")
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