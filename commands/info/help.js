const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "help",
	category: "info",
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const helpEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Hướng dẫn')
			.setURL('http://www.ragefiresmp.ga/')
			.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
			.setDescription(`
			🔶Tất cả lệnh đều bắt đầu = (r-)
			\n🔶 towny : Xem các lệnh cơ bản của Towny
			\n🔶 shop : Xem các lệnh cơ bản của Shop
			\n🔶 lock : Xem các lệnh cơ bản của LWC (Khóa rương)
			\n🔶 rtp : Xem các lệnh cơ bản của rtp (random tp)
			\n🔶 skin : Xem các lệnh cơ bản của đổi skin
			\n🔶 map : Xem bản đồ thế giới
			\n🔶 howhandsome : Xem tỷ lệ đẹp trai của bạn :v
			\n🔶 howgay : Xem tỷ lệ gay của bạn
			\n🔶 number : Nhận 1 số ngẫu nhiên từ 1-100`)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [helpEmbed] })
	}
}