const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🎨 /skin "Tên skin" : Đổi skin của bản thân bằng với "Tên skin"\n',
        '🎨 /skin url "Link" : Đổi skin của bản thân bằng với "Link" của skin đó\n',
        '🎨 /skin clear : Xóa skin của bản thân\n',
        '🎨 /skins : Mở 1 gui gồm nhiều skin để bạn chọn'
    ];
	const skinEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn đổi skin')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setTimestamp()
	interaction.reply({ embeds: [skinEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "skin",
	category: "help",
	description: 'Xem hướng dẫn các lệnh đổi skin',
	permissions: [],
	devOnly: false, run
}