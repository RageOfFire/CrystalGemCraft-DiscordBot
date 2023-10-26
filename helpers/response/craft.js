const { hyperlink } = require('@discordjs/builders');
module.exports = {
    name: "craft",
    category: "response",
    aliases: [
        "công thức",
        "chế",
        "item",
        "nung"
    ],
    run: async ({ client, message }) => {
        message.reply("Bạn có thể xem toàn bộ công thức tại " +
        hyperlink('đây','https://crystalgemcraft.gitbook.io/wiki/craft/gioi-thieu'))
    }
}