const { getFiles } = require("../util/functions")
const fs = require("fs")

module.exports = (bot, reload) => {
    const { client } = bot
    fs.readdirSync("./slashcommands/").forEach((category) => {
    let slashcommands = getFiles(`./slashcommands/${category}`, ".js")

    if(slashcommands.length === 0)
        console.log("No slash commands loaded")

        slashcommands.forEach(f => {
            if (reload) delete require.cache[require.resolve(`../slashcommands/${category}/${f}`)]
            const slashcmd = require(`../slashcommands/${category}/${f}`)
            client.slashcommands.set(slashcmd.name, slashcmd)
        })
    })
    console.log(`Successfully loaded in ${client.slashcommands.size} slashcommands`)
}