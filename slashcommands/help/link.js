const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const linkEmbed = new MessageEmbed()
	.setColor('#faa152')
	.setTitle('Hướng dẫn Link discord')
	.setURL('http://www.ragefiresmp.ga/')
	.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
	.setDescription(`Để link với discord nhận free rank vip, king:\n🔗Bước 1: vào server nhập /discord link🔗\n🔗Bước 2: Mang mã số nhận được từ /discord link nhắn tin riêng cho con bot này🔗\n🔗Bước 3: Giờ discord của bạn đã được liên kết, bạn có thế nhận được rank vip và king miễn phí🔗\n`)
	.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
	.addFields(
		{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
		{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
	)
	.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
	.setTimestamp()
	.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
	interaction.reply({ embeds: [linkEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "link",
	category: "help",
	description: 'Xem hướng dẫn cách link tới discord',
	permissions: [],
	devOnly: false, run
}