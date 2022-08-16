const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "link",
	category: "help",
	description: 'Xem hướng dẫn cách link tới discord',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const linkEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn Link discord')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: 'CrytalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(`
		Để link với discord nhận free rank vip, king:
		🔗Bước 1: vào server nhập /discord link🔗
		🔗Bước 2: Mang mã số nhận được từ /discord link nhắn tin riêng cho con bot này🔗
		🔗Bước 3: Giờ discord của bạn đã được liên kết, bạn có thế nhận được rank vip và king miễn phí🔗`)
		.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.setTimestamp()
		.setFooter({ text: 'CrytalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [linkEmbed] }).catch((err) => {console.log(err)})
	}
}