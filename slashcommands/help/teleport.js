const { templateEmbed } = require("../../util/templateEmbed");
const { teleport } = require("../../util/allDescription");
const run = async (client, interaction) => {
	const rtpEmbed = templateEmbed(client, interaction, "Hướng dẫn dịch chuyển", teleport.join("").toString())
	interaction.reply({ embeds: [rtpEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "teleport",
	category: "help",
	description: 'Xem hướng dẫn các lệnh di chuyển',
	permissions: [],
	devOnly: false, run
}