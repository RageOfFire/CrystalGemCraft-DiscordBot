const { templateEmbed } = require("../../util/templateEmbed")
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '✔️ Khi vote cho server hãy đảm bảo rằng tên bạn dùng để vote giống với trong server\n',
        'Người chơi bedrock(bản điện thoại) thêm dấu **.** ở đầu tên.\n',
        '✔️ Khi vote cho server bạn sẽ nhận được ngẫu nhiên 1 loại key nào đó + tiền + levels\n',
        '✔️ /vote ToggleReminders : Bật/tắt thông báo khi bạn có lượt vote khả dụng mới\n',
		'✔️ /vote Shop : Mở shop mua bằng điểm vote (mỗi khi vote sẽ được 1 điểm)\n',
		'✔️ /vote URL : Hiện tất cả các trang vote khả dụng\n',
		'✔️ /vote Points : Xem điểm hiện tại của bạn dùng để mua trong /vote Shop\n',
		'✔️ /vote : Mở gui vote\n',
		'✔️ /vote Top (All/Monthly/Weekly/Daily) : Xem bảng xếp hạng người chơi đã vote theo thứ tự (Tất cả/Tháng/Tuần/Ngày)',
		'✔️ Thêm thông tin tại: ' + hyperlink('Thông tin','https://github.com/BenCodez/VotingPlugin/wiki/Commands-&-Permissions')
    ];
	const voteEmbed = templateEmbed(client, interaction, "Hướng dẫn vote", descriptions.join("").toString())
	interaction.reply({ embeds: [voteEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "vote",
	category: "help",
	description: 'Xem hướng dẫn về các vote cho server',
	permissions: [],
	devOnly: false, run
}