module.exports = {
    name: "ready",
    run: async(bot) => {
        const { client } = bot;
        await client.application.commands.set([...client.slashcommands.values()])
        console.log("logged as " + bot.client.user.tag)
    }
}