const { hyperlink } = require('@discordjs/builders');
module.exports = {
    name: "rank",
    category: "response",
    aliases: [
        'quyền'
    ],
    run: async ({ client, message }) => {
        message.reply("Bạn có thể xem thông tin rank tại " +
        hyperlink('đây','https://crystalgemcraft.gitbook.io/wiki/tong-quan/thong-tin-rank'))
    }
}