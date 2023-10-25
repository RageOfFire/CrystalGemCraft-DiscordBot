const { templateEmbed } = require("../../util/templateEmbed")
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🏦 /shop : Mở shop để mua/bán vật phẩm\n',
        'Lưu ý: Khi sử dụng /shop đưa trỏ chuột vào 1 vật phẩm thì chuột trái để mua/chuột phải để bán\n',
        '🏦 /sellall "Tên vật phẩm" : bán tất cả vật phẩm trong túi đồ của bạn (Tên vật phẩm là vật phẩm bạn cần bán nếu không có sẽ bán hết đồ)\n',
        '🏦 /sellall hand : bán tất cả vật phẩm trên tay bạn\n',
		'🏦 /sellgui : Mở 1 gui bán đồ bạn có thể đưa đồ vào đó rồi đóng gui sẽ tự động bán hết đồ bạn để vào đó\n',
		'🏦 /ah : Mở chợ đen để mua bán vật phẩm giữa người chơi với người chơi\n',
		'Thêm thông tin tại: ' + hyperlink('Thông tin','https://gpplugins.gitbook.io/economyshopgui/basics/commands')
    ];
	const shopEmbed = templateEmbed(client, interaction, "Hướng dẫn Shop", descriptions.join("").toString())
	interaction.reply({ embeds: [shopEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "shop",
	category: "help",
	description: 'Xem hướng dẫn các lệnh shop',
	permissions: [],
	devOnly: false, run
}