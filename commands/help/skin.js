const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "skin",
	category: "help",
	description: 'Xem hướng dẫn các lệnh đổi skin',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const skinEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Hướng dẫn đổi skin')
			.setURL('http://www.ragefiresmp.ga/')
			.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
			.setDescription(`🎨 /skin "Tên skin" : Đổi skin của bản thân bằng với "Tên skin"
			🎨 /skin url "Link" : Đổi skin của bản thân bằng với "Link" của skin đó
			🎨 /skin clear : Xóa skin của bản thân
			🎨 /skins : Mở 1 gui gồm nhiều skin để bạn chọn
			🎨 /petblock : Cần VIP | Mở 1 GUI chỉnh sửa pet của bạn
			🎨 /petblock toggle : Cần VIP | Bật/tắt pets của bạn
			🎨 /petblock call : Cần VIP | Gọi lại pet đến gần bạn
			🎨 /petblock rename "Ngẫu nhiên" : Cần VIP | Đổi tên pet của bạn trong đó "Ngẫu nhiên" là tùy chọn
			🎨 /petblock skin "Tên" : Cần VIP | Đổi skin cho pet của bạn`)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [skinEmbed] }).catch((err) => {console.log(err)})
	}
}