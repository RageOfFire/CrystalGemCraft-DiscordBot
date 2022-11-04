const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
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
	.setURL('https://www.crystalgemcraft.xyz/')
	.setAuthor({ name: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.xyz/' })
	.setDescription(descriptions.join("").toString())
	.setThumbnail(client.user.displayAvatarURL())
	.addFields(
		{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
		{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
	)
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