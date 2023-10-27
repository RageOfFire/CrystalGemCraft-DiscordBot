const { templateEmbed } = require("../../util/templateEmbed");
const { shop } = require("../../util/allDescription");
const run = async (client, interaction) => {
	const shopEmbed = templateEmbed(client, interaction, "Hướng dẫn Shop", shop.join("").toString())
	interaction.reply({ embeds: [shopEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "shop",
	category: "help",
	description: 'Xem hướng dẫn các lệnh shop',
	permissions: [],
	devOnly: false, run
}