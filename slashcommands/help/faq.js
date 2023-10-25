const { templateEmbed } = require("../../util/templateEmbed")
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const faqEmbed = templateEmbed(
        client,
        interaction,
        "Các câu hỏi thường gặp",
        hyperlink('🕵️ Câu hỏi thường gặp','https://crystalgemcraft.gitbook.io/wiki/tong-quan/faq')
        )
	interaction.reply({ embeds: [faqEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "faq",
	category: "help",
	description: 'Các câu hỏi thường gặp',
	permissions: [],
	devOnly: false, run
}