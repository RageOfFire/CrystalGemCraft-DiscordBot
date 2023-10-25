const { templateEmbed } = require("../../util/templateEmbed")
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const craftEmbed = templateEmbed(
        client,
        interaction,
        "Công thức chế tạo",
        hyperlink('🛠 Công thức chế tạo','https://crystalgemcraft.gitbook.io/wiki/craft/gioi-thieu')
        )
	interaction.reply({ embeds: [craftEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "craft",
	category: "help",
	description: 'Xem toàn bộ công thức chế tạo trong máy chủ',
	permissions: [],
	devOnly: false, run
}