const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "rtp",
	category: "help",
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const rtpEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Hướng dẫn Shop')
			.setURL('http://www.ragefiresmp.ga/')
			.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
			.setDescription(`🔮 /rtp : Dịch chuyển bạn đến 1 nơi ngẫu nhiên trên thế giới\n🔮 /rtp biome "Tên biome" : Cần VIP | Dịch chuyển bạn tới 1 khu ngẫu nhiên với 1 biome được chọn sẵn\n🔮 /rtp location "Tên cấu trúc": Cần KING | Dịch chuyển bạn tới 1 cấu trúc được chọn trước`)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [rtpEmbed] })
	}
}