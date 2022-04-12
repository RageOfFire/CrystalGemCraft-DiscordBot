const { hyperlink } = require('@discordjs/builders');
module.exports = {
    name: "info",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        message.reply(hyperlink("📈Mở bảng thông kê","http://www.ragefiresmp.ga/analytics"))
    }
}