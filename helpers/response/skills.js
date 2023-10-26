const { hyperlink } = require('@discordjs/builders');
module.exports = {
    name: "skill",
    category: "response",
    aliases: [
        "kỹ năng",
        "chiêu"
    ],
    run: async ({ client, message }) => {
        message.reply("Bạn có thể xem thêm thông tin tại " +
        hyperlink('đây','https://crystalgemcraft.gitbook.io/wiki/cau-lenh/he-thong-ky-nang'))
    }
}