const { templateEmbed } = require("../../util/messageEmbed");
const { skills } = require("../../util/allDescription");
module.exports = {
    name: "skill",
    category: "response",
    aliases: [
        "kỹ năng",
        "chiêu"
    ],
    run: async ({ client, message }) => {
        const skillEmbed = templateEmbed(client, message, "Các combo key sử dụng kỹ năng", skills.join("").toString())
        message.reply({ embeds: [skillEmbed] }).catch((err) => {console.log(err)})
    }
}