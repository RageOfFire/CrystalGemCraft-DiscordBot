const { templateEmbed } = require("../../util/templateEmbed");
const { rpg } = require("../../util/allDescription");
const run = async (client, interaction) => {
	const rpgEmbed = templateEmbed(client, interaction, "Hướng dẫn hệ thống RPG", rpg.join("").toString())
	interaction.reply({ embeds: [rpgEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "rpg",
	category: "help",
	description: 'Xem hướng dẫn các lệnh rpg',
	permissions: [],
	devOnly: false, run
}