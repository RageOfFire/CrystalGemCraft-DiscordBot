const { templateEmbed } = require("../../util/templateEmbed")
const run = async (client, interaction) => {
	const descriptions = [
        '🎨 /skin "Tên skin" : Đổi skin của bản thân bằng với "Tên skin"\n',
        '🎨 /skin url "Link" : Đổi skin của bản thân bằng với "Link" của skin đó\n',
        '🎨 /skin clear : Xóa skin của bản thân\n',
        '🎨 /skins : Mở 1 gui gồm nhiều skin để bạn chọn'
    ];
	const skinEmbed = templateEmbed(client, interaction, "Hướng dẫn đổi skin", descriptions.join("").toString())
	interaction.reply({ embeds: [skinEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "skin",
	category: "help",
	description: 'Xem hướng dẫn các lệnh đổi skin',
	permissions: [],
	devOnly: false, run
}