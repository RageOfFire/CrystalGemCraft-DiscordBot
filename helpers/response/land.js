const { templateEmbed } = require("../../util/messageEmbed");
const { lands } = require("../../util/allDescription");
module.exports = {
    name: "land",
    category: "response",
    aliases: [
        "claim ",
        "đất "
    ],
    run: async ({ client, message }) => {
        const landEmbed = templateEmbed(client, message, "Hướng dẫn sở hữu đất riêng", lands.join("").toString())
        message.channel.send({ embeds: [landEmbed] })
        .then(msg => {
            setTimeout(() => msg.delete(), 30000)
        }).catch((err) => {console.log(err)})
    }
}