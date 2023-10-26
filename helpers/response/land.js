const { hyperlink } = require('@discordjs/builders');
module.exports = {
    name: "land",
    category: "response",
    aliases: [
        "claim",
        "đất"
    ],
    run: async ({ client, message }) => {
        message.reply("Bạn có thể xem thêm thông tin tại " +
        hyperlink('đây','https://crystalgemcraft.gitbook.io/wiki/cau-lenh/land'))
    }
}