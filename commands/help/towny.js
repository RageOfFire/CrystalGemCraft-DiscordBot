const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "towny",
	category: "help",
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const townyEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Hướng dẫn Towny')
			.setURL('http://www.ragefiresmp.ga/')
			.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
			.setDescription(`🏰Có thể thay thế /town = /t\n🏰 /town new "tên town" : Tạo town của riêng bạn (thay thế "tên town" thành tên bạn muốn)\n🏰 /town here : Hiển thị thông tin về town mà nơi bạn đang đứng\n🏰 /town list : Thông tin về các town khác\n🏰 /town online : Hiển thị những ai đang online ở town nào\n🏰 /town leave : Rời khỏi town\n🏰 /town invite "Tên người chơi" : Mời người chơi khác vào town bạn\n🏰 /town spawn : Dịch chuyển bạn về town\n🏰 /town claim : Lấy khu vực bạn đang đứng thành town của bạn (Dùng auto để tự động claim xung quanh bạn)\n🏰 /town unclaim : Bỏ khu vực bạn đang đứng ra khỏi town của bạn (Dùng all để xóa hết claim của town)\n🏰 /town deposit ($) : Đóng tiền vào town để duy trì town\n🏰 /town withdraw ($) : Rút tiền từ town sang tài khoản của bạn\n🏰 /town buy bonus "số lượng" : Mua thêm giới hạn đất cho town của bạn\n🏰 /town delete "tên town" : Xóa town của bạn\n🏰 /town reclaim : Lấy lại tất cả khu vực town của bạn khi mà bạn không đóng tiền\n🏰 /town say "tin nhắn" : Phát 1 thông báo cho tất cả thành viên trong town đang online\n🏰 /town set board "Tin nhắn" : Tự động gửi tin nhắn mỗi khi 1 thành viên vào server\n🏰 /town set spawn : Đặt lại spawn cho /town spawn\n🏰 /town set name "tên town" : Đổi tên town\n🏰Thêm thông tin tại: ${hyperlink('Thông tin','https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands')}`)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [townyEmbed] })
	}
}