const { templateEmbed } = require("../../util/templateEmbed")
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const rankEmbed = templateEmbed(
        client,
        interaction,
        "Quyền lợi Rank",
        hyperlink('⭐️ Quyền lợi','https://crystalgemcraft.gitbook.io/wiki/tong-quan/thong-tin-rank')
        )
	interaction.reply({ embeds: [rankEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "rankinfo",
	category: "help",
	description: 'Xem quyền lợi các rank',
	permissions: [],
	devOnly: false, run
}