const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "shop",
	category: "help",
	description: 'Xem hướng dẫn các lệnh shop',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const shopEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn Shop')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(`
		🏦 /shop : Mở shop để mua/bán vật phẩm
		Lưu ý: Khi sử dụng /shop đưa trỏ chuột vào 1 vật phẩm thì chuột trái để mua/chuột phải để bán
		🏦 /sellall "Tên vật phẩm" : bán tất cả vật phẩm trong túi đồ của bạn (Tên vật phẩm là vật phẩm bạn cần bán nếu không có sẽ bán hết đồ)
		🏦 /sellall hand : bán tất cả vật phẩm trên tay bạn
		🏦 /sellgui : Mở 1 gui bán đồ bạn có thể đưa đồ vào đó rồi đóng gui sẽ tự động bán hết đồ bạn để vào đó
		🏦 /trade "tên người chơi" : Trao đổi vật phẩm hoặc tiền với người chơi khác
		🏦 /ah : Mở chợ đen
		🏦 /ah sell $ : Bán vật phẩm trên tay lên chợ đen
		Thêm thông tin tại: ${hyperlink('Thông tin','https://gpplugins.gitbook.io/economyshopgui/basics/commands')}`)
		.setThumbnail(client.user.displayAvatarURL())
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setTimestamp()
		.setFooter({ text: `Được đề xuất bởi ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) });
		message.reply({ embeds: [shopEmbed] }).catch((err) => {console.log(err)})
	}
}