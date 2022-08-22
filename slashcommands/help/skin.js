const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const skinEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn đổi skin')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(`
		🎨 /skin "Tên skin" : Đổi skin của bản thân bằng với "Tên skin"
		🎨 /skin url "Link" : Đổi skin của bản thân bằng với "Link" của skin đó
		🎨 /skin clear : Xóa skin của bản thân
		🎨 /skins : Mở 1 gui gồm nhiều skin để bạn chọn
		🎨 /petblock : Cần VIP | Mở 1 GUI chỉnh sửa pet của bạn
		🎨 /petblock toggle : Cần VIP | Bật/tắt pets của bạn
		🎨 /petblock call : Cần VIP | Gọi lại pet đến gần bạn
		🎨 /petblock rename "Ngẫu nhiên" : Cần VIP | Đổi tên pet của bạn trong đó "Ngẫu nhiên" là tùy chọn
		🎨 /petblock skin "Tên" : Cần VIP | Đổi skin cho pet của bạn`)
		.setThumbnail(client.user.displayAvatarURL())
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setTimestamp()
		.setFooter({ text: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });
	interaction.reply({ embeds: [skinEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "skin",
	category: "help",
	description: 'Xem hướng dẫn các lệnh đổi skin',
	permissions: [],
	devOnly: false, run
}