const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const rtpEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn dịch chuyển ngẫu nhiên')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(`
		🔮 /rtp : Dịch chuyển bạn đến 1 nơi ngẫu nhiên trên thế giới
		🔮 /rtp biome "Tên biome" : Cần VIP | Dịch chuyển bạn tới 1 khu ngẫu nhiên với 1 biome được chọn sẵn
		🔮 /sethome "Tên" : Tạo home để có thể di chuyển về đó mọi lúc mọi nơi bằng lệnh /home "tên" và xóa đi bất kỳ lúc nào với /delhome "Tên"
		🔮 /warps : Hiển thị các khu khả dụng trong server
		🔮 /tpa "Tên người chơi" : Gửi 1 yêu cầu dịch chuyển tới người chơi đó
		🔮 /tpahere "Tên người chơi" : Gửi 1 yêu cầu người chơi đó dịch chuyển tới bản thân bạn
		🔮 /rw tp : Dịch chuyển tới thế giới vô hạn tài nguyên
		🔮 /rw tp nether/end : Dịch chuyển tới thế giới nether/end vô hạn tài nguyên`)
		.setThumbnail(client.user.displayAvatarURL())
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setTimestamp()
		.setFooter({ text: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });
	interaction.reply({ embeds: [rtpEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "rtp",
	category: "help",
	description: 'Xem hướng dẫn các lệnh di chuyển',
	permissions: [],
	devOnly: false, run
}