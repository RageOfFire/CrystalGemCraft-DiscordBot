const { templateEmbed } = require("../../util/messageEmbed");
const { link } = require("../../util/allDescription");
module.exports = {
    name: "link",
    category: "response",
    aliases: [
        "liên kết",
        "link discord",
        "royal "
    ],
    run: async ({ client, message }) => {
        const linkEmbed = templateEmbed(client, message, "Hướng dẫn Link discord", link.join("").toString())
        message.channel.send({ embeds: [linkEmbed] })
        .then(msg => {
            setTimeout(() => msg.delete(), 10000)
        }).catch((err) => {console.log(err)})
    }
}