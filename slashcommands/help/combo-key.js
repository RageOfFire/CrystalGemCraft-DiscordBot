const { templateEmbed } = require("../../util/templateEmbed")
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🙌 Mỗi class thường sẽ có 4 kỹ năng 1 số class khác có thể có lên tới\n',
        '6 kỹ năng và đây là cách combo thực hiện kỹ năng của từng slot:\n',
        'Bắt đầu bằng việc ngồi xuống và tiếp theo là: \n',
        '🙌 Combo skill 1: **Chuột phải - Chuột phải - Chuột phải**\n',
        '🙌 Combo skill 2: **Chuột phải - Chuột trái - Chuột phải**\n',
        '🙌 Combo skill 3: **Chuột phải - Chuột phải - Chuột trái**\n',
		'🙌 Combo skill 4: **Chuột phải - Chuột trái - Chuột trái**\n',
		'🙌 Combo skill 5: **Chuột phải - Chuột phải - Ngồi xuống**\n',
		'🙌 Combo skill 6: **Chuột phải - Ngồi xuống - Ngồi xuống**\n',
		'Thông tin về cách sử dụng kỹ năng: ' + hyperlink('Thông tin','https://crystalgemcraft.gitbook.io/wiki/cau-lenh/he-thong-ky-nang')
    ];
	const skillEmbed = templateEmbed(client, interaction, "Các combo key sử dụng kỹ năng", descriptions.join("").toString())
	interaction.reply({ embeds: [skillEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "combo",
	category: "help",
	description: 'Xem bước thực hiện kỹ năng',
	permissions: [],
	devOnly: false, run
}