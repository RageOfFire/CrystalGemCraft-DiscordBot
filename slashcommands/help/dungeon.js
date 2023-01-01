const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🕸 /md play <dungeon> : Chơi dungeon với tên là <dungeon>\n',
        '🕸 /md stuck : Nếu bị kẹp vào đâu đó sử dụng lệnh này để ra khỏi đó\n',
        '🕸 /md leave : Rời khỏi dungeon (Nếu đang trong dungeon)\n',
		'🕸 /md lives : Xem điểm chơi lại còn lại\n',
		'Thêm thông tin tại:' + hyperlink('Thông tin','https://git.mythiccraft.io/mythiccraft/MythicDungeons/-/wikis/Commands-and-Permissions')
    ];
	const dungeonEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn Dungeon')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setTimestamp()
	interaction.reply({ embeds: [dungeonEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "dungeon",
	category: "help",
	description: 'Xem hướng dẫn các lệnh dungeon',
	permissions: [],
	devOnly: false, run
}