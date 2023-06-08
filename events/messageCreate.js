module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {

        if (!message.guild) return;
        if (message.author.bot) return;
        if (message.content.includes("@here") || message.content.includes("@everyone")) return;
    }
}