const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const { getFiles } = require("../../util/functions")
require("dotenv").config()
const fs = require("fs")
const run = async (client, interaction) => {
	let prefix = process.env.PREFIX
	let HelpCMD = 'Tất cả lệnh đều bắt đầu = ' + prefix + '\n\n';
	fs.readdirSync('./commands/').forEach((category) => {
		let commands = getFiles(`./commands/${category}`, ".js")
		commands.forEach((f) => {
			const command = require(`../${category}/${f}`)
			HelpCMD += `🔶${prefix}${command.name}: ${command.description}\n\n`
		})
	})
	const helpEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(HelpCMD)
		.setThumbnail(client.user.displayAvatarURL())
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setTimestamp()
		.setFooter({ text: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });
	interaction.reply({ embeds: [helpEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "help",
	category: "info",
	description: 'Xem hướng dẫn',
	permissions: [],
	devOnly: false, run
}