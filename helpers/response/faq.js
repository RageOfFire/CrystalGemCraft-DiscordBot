const { hyperlink } = require('@discordjs/builders');
module.exports = {
    name: "faq",
    category: "response",
    aliases: [
        "admin",
        "staff",
        "lỗi"
    ],
    run: async ({ client, message }) => {
        message.reply(hyperlink('FAQ','https://crystalgemcraft.gitbook.io/wiki/tong-quan/faq'))
    }
}