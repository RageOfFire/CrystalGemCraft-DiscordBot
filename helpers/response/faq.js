const { hyperlink } = require('@discordjs/builders');
const { templateEmbed } = require("../../util/messageEmbed");
module.exports = {
    name: "faq",
    category: "response",
    aliases: [
        "admin",
        "staff",
        "lỗi"
    ],
    run: async ({ client, message }) => {
        const faqEmbed = templateEmbed(
            client,
            message,
            "Các câu hỏi thường gặp",
            hyperlink('🕵️ Câu hỏi thường gặp','https://crystalgemcraft.gitbook.io/wiki/tong-quan/faq')
            )
        message.reply({ embeds: [faqEmbed], ephemeral: true }).catch((err) => {console.log(err)})
    }
}