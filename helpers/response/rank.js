const { hyperlink } = require('@discordjs/builders');
const { templateEmbed } = require("../../util/messageEmbed");
module.exports = {
    name: "rank",
    category: "response",
    aliases: [
        'quyền'
    ],
    run: async ({ client, message }) => {
        const rankEmbed = templateEmbed(
            client,
            message,
            "Quyền lợi Rank",
            hyperlink('⭐️ Quyền lợi','https://crystalgemcraft.gitbook.io/wiki/tong-quan/thong-tin-rank')
            )
        message.reply({ embeds: [rankEmbed] }).catch((err) => {console.log(err)})
    }
}