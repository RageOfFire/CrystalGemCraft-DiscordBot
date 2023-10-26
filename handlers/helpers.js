const { getFiles } = require("../util/functions")
const fs = require("fs")

module.exports = (bot, reload) => {
    const { client } = bot
    fs.readdirSync("./helpers/").forEach((category) => {
    let helpers = getFiles(`./helpers/${category}`, ".js")

    if(helpers.length === 0)
        console.log("No helpers loaded")

        helpers.forEach(f => {
            if (reload) delete require.cache[require.resolve(`../helpers/${category}/${f}`)]
            const help = require(`../helpers/${category}/${f}`)
            client.helpers.set(help.name, help)
        })
    })
    console.log(`Successfully loaded in ${client.helpers.size} helpers`)
}