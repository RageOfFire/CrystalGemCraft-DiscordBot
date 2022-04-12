const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "skin",
	category: "help",
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const skinEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Hướng dẫn đổi skin')
			.setURL('http://www.ragefiresmp.ga/')
			.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
			.setDescription(`🎨 /skin "Tên skin" : Đổi skin của bản thân bằng với "Tên skin"\n🎨 /skin url "Link" : Đổi skin của bản thân bằng với "Link" của skin đó\n🎨 /skin clear : Xóa skin của bản thân\n🎨 /skins : Mở 1 gui gồm nhiều skin để bạn chọn\n🎨 /petblock : Mở 1 GUI chỉnh sửa pet của bạn\n🎨 /petblock toggle : Bật/tắt pets của bạn\n🎨 /petblock call : Gọi lại pet đến gần bạn\n🎨 /petblock rename "Ngẫu nhiên" : Đổi tên pet của bạn trong đó "Ngẫu nhiên" là tùy chọn\n🎨 /petblock skin "Tên" : Đổi skin cho pet của bạn`)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [skinEmbed] })
	}
}