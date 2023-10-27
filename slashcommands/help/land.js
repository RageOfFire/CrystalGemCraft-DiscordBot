const { templateEmbed } = require("../../util/templateEmbed");
const { lands } = require("../../util/allDescription")
const run = async (client, interaction) => {
	const landEmbed = templateEmbed(client, interaction, "Hướng dẫn sở hữu đất riêng", lands.join("").toString())
	interaction.reply({ embeds: [landEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "land",
	category: "help",
	description: 'Xem thông tin sử dụng đất riêng',
	permissions: [],
	devOnly: false, run
}