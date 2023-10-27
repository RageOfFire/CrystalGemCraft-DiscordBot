const { templateEmbed } = require("../../util/templateEmbed");
const { skills } = require("../../util/allDescription")
const run = async (client, interaction) => {
	const skillEmbed = templateEmbed(client, interaction, "Các combo key sử dụng kỹ năng", skills.join("").toString())
	interaction.reply({ embeds: [skillEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "combo",
	category: "help",
	description: 'Xem bước thực hiện kỹ năng',
	permissions: [],
	devOnly: false, run
}