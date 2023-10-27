const { templateEmbed } = require("../../util/templateEmbed");
const { skin } = require("../../util/allDescription");
const run = async (client, interaction) => {
	const skinEmbed = templateEmbed(client, interaction, "Hướng dẫn đổi skin", skin.join("").toString())
	interaction.reply({ embeds: [skinEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "skin",
	category: "help",
	description: 'Xem hướng dẫn các lệnh đổi skin',
	permissions: [],
	devOnly: false, run
}