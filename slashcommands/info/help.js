const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const { getFiles } = require("../../util/functions")
require("dotenv").config()
const fs = require("fs")
const run = async (client, interaction) => {
	let HelpCMD = '';
	fs.readdirSync('./slashcommands/').forEach((category) => {
		let commands = getFiles(`./slashcommands/${category}`, ".js")
		commands.forEach((f) => {
			const command = require(`../${category}/${f}`)
			HelpCMD += `🔶/${command.name}: ${command.description}\n`
		})
	})
	HelpCMD += `Thêm thông tin tại ${hyperlink('📒 Wiki', 'https://crystalgemcraft.gitbook.io/wiki/')}`
	const helpEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn')
		.setURL('https://www.crystalgemcraft.com/')
		.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(), url: 'https://www.crystalgemcraft.com/' })
		.setDescription(HelpCMD)
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()
		.setFooter({ text: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
	interaction.reply({ embeds: [helpEmbed] }).catch((err) => { console.log(err) })
}
module.exports = {
	name: "help",
	category: "info",
	description: 'Xem hướng dẫn',
	permissions: [],
	devOnly: false, run
}