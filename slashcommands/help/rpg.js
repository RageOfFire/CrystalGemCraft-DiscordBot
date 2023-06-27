const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🎒 /profile : Mở GUI xem thông tin bản thân (ngồi xuống chuột phải vào người chơi khác để xem thông tin người khác)\n',
        '🎒 /stats : Mở GUI nâng cấp điểm cá nhân (như hp,def,...)\n',
        '🎒 /class : Mở GUI chọn class | Cần rank Hero trở lên\n',
		'🎒 /skills : Mở GUI nâng cấp skills (cần có class khác mặc định)\n',
		'🎒 /friends : Mở danh sách bạn bè\n',
		'🎒 /party : Mở danh sách nhóm\n',
		'🎒 /guild : Mở danh sách guild\n',
		'Thông tin về các kỹ năng:' + hyperlink('Thông tin','https://gitlab.com/phoenix-dvpmt/mythiclib/-/wikis/Skills#default-skills')
    ];
	const rpgEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn RPG')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()
	interaction.reply({ embeds: [rpgEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "rpg",
	category: "help",
	description: 'Xem hướng dẫn các lệnh rpg',
	permissions: [],
	devOnly: false, run
}