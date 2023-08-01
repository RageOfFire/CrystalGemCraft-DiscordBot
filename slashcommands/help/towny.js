const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🏰 Có thể thay thế /town = /t\n',
        '🏰 /town new "tên town" : Tạo town của riêng bạn (thay thế "tên town" thành tên bạn muốn)\n',
        '🏰 /town list : Thông tin về các town khác\n',
        '🏰 /town online : Hiển thị những ai đang online ở town nào\n',
		'🏰 /town leave : Rời khỏi town\n',
		'🏰 /town invite "Tên người chơi" : Mời người chơi khác vào town bạn\n',
		'🏰 /town spawn : Dịch chuyển bạn về town\n',
		'🏰 /town claim (auto) : Lấy khu vực bạn đang đứng thành town của bạn (Dùng auto để tự động claim xung quanh bạn)\n',
		'🏰 /town unclaim : Bỏ khu vực bạn đang đứng ra khỏi town của bạn (Dùng all để xóa hết claim của town)\n',
		'🏰 /town deposit ($) : Đóng tiền vào town để duy trì town\n',
		'🏰 /town withdraw ($) : Rút tiền từ town sang tài khoản của bạn\n',
		'🏰 /town buy bonus "số lượng" : Mua thêm giới hạn đất cho town của bạn\n',
		'🏰 /town delete "tên town" : Xóa town của bạn\n',
		'🏰 /town reclaim : Lấy lại tất cả khu vực town của bạn khi mà bạn không đóng tiền\n',
		'🏰 /town say "tin nhắn" : Phát 1 thông báo cho tất cả thành viên trong town đang online\n',
		'🏰 /town set board "Tin nhắn" : Tự động gửi tin nhắn mỗi khi 1 thành viên vào server\n',
		'🏰 /town set spawn : Đặt lại spawn cho /town spawn\n',
		'🏰 /town set name "tên town" : Đổi tên town\n',
		'🏰 /town toggle "?" : Cài đặt town\n',
		'🏰 /town rank (add/remove) "Tên người chơi" (normad/resident/mayor/king) : Thêm rank cho người chơi\n',
		'\n',
		'🏰 /towny map (hud) : Hiển thị map của town ở chat (thêm hud để thay thế = scorebroad)\n',
		'🏰 /towny time : Thời gian tới lần thu thuế tiếp theo\n',
		'🏰 /towny top "?" : Xem xếp hạng town\n',
		'🏰 /towny prices : Xem tiền town\n',
		'🏰 Lưu ý: Khi xóa town (t delete, t unclaim, ...) Hãy đảm bảo bạn đã lấy hết những gì cần thiết trước khi rời town rồi vì khi xóa sẽ làm mới khu vực đó về trạng thái cũ\n',
		'\n',
		'🏰 HOT: /tm : Để sử dụng gui cho town\n',
		'\n',
		'🏰Thêm thông tin tại: ' + hyperlink('Thông tin','https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands'),
    ];
	const townyEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn Towny')
		.setURL('https://www.crystalgemcraft.com/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.com/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()

		interaction.reply({ embeds: [townyEmbed] }).catch((err) => {console.log(err)});
}
module.exports = {
	name: "towny",
	category: "help",
	description: 'Xem hướng dẫn các lệnh của Towny',
	permissions: [],
	devOnly: false, run
}