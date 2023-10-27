const { templateEmbed } = require("../../util/templateEmbed")
const { link } = require("../../util/allDescription")
const run = async (client, interaction) => {
	const linkEmbed = templateEmbed(client, interaction, "Hướng dẫn Link discord", link.join("").toString())
	interaction.reply({ embeds: [linkEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "link",
	category: "help",
	description: 'Xem hướng dẫn cách link tới discord',
	permissions: [],
	devOnly: false, run
}