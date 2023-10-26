const { hyperlink } = require('@discordjs/builders');
module.exports = {
    name: "link",
    category: "response",
    aliases: [
        "liên kết",
        "link discord",
        "royal"
    ],
    run: async ({ client, message }) => {
        message.reply("Bạn có thể xem hướng dẫn tại " +
        hyperlink('đây','https://crystalgemcraft.gitbook.io/wiki/cau-lenh/link-discord'))
    }
}