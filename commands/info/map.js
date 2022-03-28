const { hyperlink } = require('@discordjs/builders');
module.exports = {
    name: "map",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        message.reply(hyperlink("🗺️Mở bản đồ","http://www.ragefiresmp.ga/map"))
    }
}