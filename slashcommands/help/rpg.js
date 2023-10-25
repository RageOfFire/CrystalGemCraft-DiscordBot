const { templateEmbed } = require("../../util/templateEmbed")
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🎒 /profile : Mở GUI xem thông tin bản thân (ngồi xuống chuột phải vào người chơi khác để xem thông tin người khác)\n',
        '🎒 /stats|/att|/attributes : Mở GUI nâng cấp điểm cá nhân (như hp,def,...)\n',
        '🎒 /class : Mở GUI chọn class\n',
		'🎒 /skills : Mở GUI nâng cấp skills (cần có class khác mặc định)\n',
		'🎒 /friends : Mở danh sách bạn bè\n',
		'🎒 /party : Mở danh sách nhóm\n',
		'🎒 /mmoinventory|/rpginv|/rpginventory : Mở túi trang bị cho các vật phẩm như (nhẫn, dây chuyền, găng tay, ...)\n',
		'Thông tin về các kỹ năng: ' + hyperlink('Thông tin','https://gitlab.com/phoenix-dvpmt/mythiclib/-/wikis/Skills#default-skills')
    ];
	const rpgEmbed = templateEmbed(client, interaction, "Hướng dẫn hệ thống RPG", descriptions.join("").toString())
	interaction.reply({ embeds: [rpgEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "rpg",
	category: "help",
	description: 'Xem hướng dẫn các lệnh rpg',
	permissions: [],
	devOnly: false, run
}