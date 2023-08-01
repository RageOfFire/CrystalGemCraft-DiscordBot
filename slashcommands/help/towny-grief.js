const { MessageEmbed } = require('discord.js')
const run = async (client, interaction) => {
	const descriptions = [
        'Vào 1 ngày đẹp trời bạn vào server và phát hiện ra tự nhiên town mình\n',
        'bị phá không rõ lý do và bạn bắt đầu đổi lỗi do server ?\n',
        '**Trước khi đó bạn hãy thử vào town của mình và gõ `/town here`**\n',
		'Nếu bạn thấy ở **build/destroy/switch** có từ `rnao` xin chúc mừng\n',
		'đó là ý do tại sao town bạn bị phá\n',
		'Giải thích về quyền tý:\n',
		'```- r nghĩa là resisdent và là những người trong town\n',
		'- n nghĩa là nation và là tất cả người cùng quốc gia\n',
		'- a nghĩa là ally và là tất cả đồng minh của town\n',
		'- o nghĩa là outsider và là những người không thuộc town (Tốt nhất là tắt vì đây chính là nguyên nhân)```\n',
		'**Vậy làm cách nào để xử lý ?**\n',
		'Đầu tiên hãy sử dụng lệnh `/town set perm build/destroy/switch/itemuse off`\n',
		'Vậy là không còn ai có thể sử làm gì town bạn nữa (Trừ bạn chủ town)\n',
		'**Tiếp theo** là sử dụng quyền với lệnh tương tự:\n',
		'/town set perm resident/nation/ally/outsider build/destroy/switch/itemuse on\n',
		'Vậy là xong giờ bạn đã bảo vệ được town mình rồi đó'
    ];
	const townygriefEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Towny bị phá')
		.setURL('https://www.crystalgemcraft.com/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.com/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()

		interaction.reply({ embeds: [townygriefEmbed] }).catch((err) => {console.log(err)});
}
module.exports = {
	name: "townygrief",
	category: "help",
	description: 'Xem lý do sao town bạn bị phá',
	permissions: [],
	devOnly: false, run
}