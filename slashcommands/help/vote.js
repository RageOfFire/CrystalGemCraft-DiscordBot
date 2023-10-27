const { templateEmbed } = require("../../util/templateEmbed");
const { vote } = require("../../util/allDescription");
const run = async (client, interaction) => {
	const voteEmbed = templateEmbed(client, interaction, "Hướng dẫn vote", vote.join("").toString())
	interaction.reply({ embeds: [voteEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "vote",
	category: "help",
	description: 'Xem hướng dẫn về các vote cho server',
	permissions: [],
	devOnly: false, run
}