const { templateEmbed } = require("../../util/messageEmbed");
const { link } = require("../../util/allDescription");
module.exports = {
    name: "link",
    category: "response",
    aliases: [
        "liên kết",
        "link discord",
        "royal"
    ],
    run: async ({ client, message }) => {
        const linkEmbed = templateEmbed(client, message, "Hướng dẫn Link discord", link.join("").toString())
        message.reply({ embeds: [linkEmbed] }).catch((err) => {console.log(err)})
    }
}