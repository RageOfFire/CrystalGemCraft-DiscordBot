const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const { getFiles } = require("../../util/functions")
const fs = require("fs")
module.exports = {
	name: "help",
	category: "info",
	description: 'Xem hướng dẫn',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, prefix, args }) => {
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
			.setAuthor({ name: 'CrystalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'https://www.crystalgemcraft.xyz/' })
			.setDescription(HelpCMD)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'CrystalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [helpEmbed] }).catch((err) => {console.log(err)})
	}
}