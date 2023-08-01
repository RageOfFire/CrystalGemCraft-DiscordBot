const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🏦 /shop : Mở shop để mua/bán vật phẩm\n',
        'Lưu ý: Khi sử dụng /shop đưa trỏ chuột vào 1 vật phẩm thì chuột trái để mua/chuột phải để bán\n',
        '🏦 /sellall "Tên vật phẩm" : bán tất cả vật phẩm trong túi đồ của bạn (Tên vật phẩm là vật phẩm bạn cần bán nếu không có sẽ bán hết đồ)\n',
        '🏦 /sellall hand : bán tất cả vật phẩm trên tay bạn\n',
		'🏦 /sellgui : Mở 1 gui bán đồ bạn có thể đưa đồ vào đó rồi đóng gui sẽ tự động bán hết đồ bạn để vào đó\n',
		'🏦 /trade "tên người chơi" : Trao đổi vật phẩm hoặc tiền với người chơi khác\n',
		'Thêm thông tin tại:' + hyperlink('Thông tin','https://gpplugins.gitbook.io/economyshopgui/basics/commands')
    ];
	const shopEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn Shop')
		.setURL('https://www.crystalgemcraft.com/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.com/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()
	interaction.reply({ embeds: [shopEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "shop",
	category: "help",
	description: 'Xem hướng dẫn các lệnh shop',
	permissions: [],
	devOnly: false, run
}