const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        'Bạn bị chặn vào server bởi antibot ? Đừng lo hãy theo những bước sau để xử lý\n',
        '🔐Bước 1: Tra google với từ khóa `what my ip` hoặc ấn ' + hyperlink('vào đây','https://www.google.com/search?q=what+my+ip') + '\n',
        '🔐Bước 2: Mang mã ip đó **gửi riêng** cho chủ server🔐\n',
        '🔐Bước 3: Chờ đợi chủ server xử lý🔐\n',
    ];
	const blacklistEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn gỡ blacklist')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()
	interaction.reply({ embeds: [blacklistEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "blacklist",
	category: "help",
	description: 'Xem hướng dẫn các lệnh blacklist',
	permissions: [],
	devOnly: false, run
}