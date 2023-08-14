const { MessageEmbed } = require('discord.js')
const run = async (client, interaction) => {
	const descriptions = [
        'Để link với discord nhận free rank:\n',
        '🔗Bước 1: vào server nhập /discord link🔗\n',
        '🔗Bước 2: Mang mã số nhận được từ /discord link nhắn tin riêng cho con bot này🔗\n',
        '🔗Bước 3: Giờ discord của bạn đã được liên kết, bạn có thế nhận được rank miễn phí🔗\n',
    ];
	const linkEmbed = new MessageEmbed()
	.setColor('#faa152')
	.setTitle('Hướng dẫn Link discord')
	.setURL('https://www.crystalgemcraft.com/')
	.setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.com/' })
	.setDescription(descriptions.join("").toString())
	.setThumbnail(client.user.displayAvatarURL())
	.setTimestamp()
	interaction.reply({ embeds: [linkEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "link",
	category: "help",
	description: 'Xem hướng dẫn cách link tới discord',
	permissions: [],
	devOnly: false, run
}