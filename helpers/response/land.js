const { templateEmbed } = require("../../util/messageEmbed");
const { lands } = require("../../util/allDescription");
module.exports = {
    name: "land",
    category: "response",
    aliases: [
        "claim",
        "đất"
    ],
    run: async ({ client, message }) => {
        const landEmbed = templateEmbed(client, message, "Hướng dẫn sở hữu đất riêng", lands.join("").toString())
        message.reply({ embeds: [landEmbed] }).catch((err) => {console.log(err)})
    }
}