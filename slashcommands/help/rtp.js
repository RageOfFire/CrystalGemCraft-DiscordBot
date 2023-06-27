const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🔮 /rtp : Dịch chuyển bạn đến 1 nơi ngẫu nhiên trên thế giới\n',
        '🔮 /rtp biome "Tên biome" : Cần VIP | Dịch chuyển bạn tới 1 khu ngẫu nhiên với 1 biome được chọn sẵn\n',
        '🔮 /sethome "Tên" : Tạo home để có thể di chuyển về đó mọi lúc mọi nơi bằng lệnh /home "tên" và xóa đi bất kỳ lúc nào với /delhome "Tên"\n',
        '🔮 /warps : Hiển thị các khu khả dụng trong server\n',
		'🔮 /tpa "Tên người chơi" : Gửi 1 yêu cầu dịch chuyển tới người chơi đó\n',
		'🔮 /tpahere "Tên người chơi" : Gửi 1 yêu cầu người chơi đó dịch chuyển tới bản thân bạn\n',
		'🔮 /rw tp : Dịch chuyển tới thế giới vô hạn tài nguyên\n',
		'🔮 /rw tp nether/end : Dịch chuyển tới thế giới nether/end vô hạn tài nguyên'
    ];
	const rtpEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn dịch chuyển ngẫu nhiên')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()
	interaction.reply({ embeds: [rtpEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "rtp",
	category: "help",
	description: 'Xem hướng dẫn các lệnh di chuyển',
	permissions: [],
	devOnly: false, run
}