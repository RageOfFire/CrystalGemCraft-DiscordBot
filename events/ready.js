module.exports = {
    name: "ready",
    run: async(bot) => {
        console.log("logged as " + bot.client.user.tag)
    }
}