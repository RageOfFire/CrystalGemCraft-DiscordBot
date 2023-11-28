const { hyperlink } = require('@discordjs/builders');
const { templateEmbed } = require("../../util/messageEmbed");
module.exports = {
    name: "craft",
    category: "response",
    aliases: [
        "công thức ",
        "chế ",
        "item",
        "nung "
    ],
    run: async ({ client, message }) => {
        const craftEmbed = templateEmbed(
            client,
            message,
            "Công thức chế tạo",
            hyperlink('🛠 Công thức chế tạo','https://crystalgemcraft.gitbook.io/wiki/craft/gioi-thieu')
            )
            message.reply({ embeds: [craftEmbed], ephemeral: true }).catch((err) => {console.log(err)})
    }
}