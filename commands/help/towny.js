const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "towny",
	category: "help",
	description: 'Xem hướng dẫn các lệnh của Towny',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const townyEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn Towny')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: 'CrystalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(`🏰Có thể thay thế /town = /t
		🏰 /town new "tên town" : Tạo town của riêng bạn (thay thế "tên town" thành tên bạn muốn)
		🏰 /town here : Hiển thị thông tin về town mà nơi bạn đang đứng
		🏰 /town list : Thông tin về các town khác🏰 /town online : Hiển thị những ai đang online ở town nào
		🏰 /town leave : Rời khỏi town
		🏰 /town invite "Tên người chơi" : Mời người chơi khác vào town bạn
		🏰 /town spawn : Dịch chuyển bạn về town
		🏰 /town claim (auto) : Lấy khu vực bạn đang đứng thành town của bạn (Dùng auto để tự động claim xung quanh bạn)
		🏰 /town unclaim : Bỏ khu vực bạn đang đứng ra khỏi town của bạn (Dùng all để xóa hết claim của town)
		🏰 /town deposit ($) : Đóng tiền vào town để duy trì town
		🏰 /town withdraw ($) : Rút tiền từ town sang tài khoản của bạn
		🏰 /town buy bonus "số lượng" : Mua thêm giới hạn đất cho town của bạn
		🏰 /town delete "tên town" : Xóa town của bạn
		🏰 /town reclaim : Lấy lại tất cả khu vực town của bạn khi mà bạn không đóng tiền
		🏰 /town say "tin nhắn" : Phát 1 thông báo cho tất cả thành viên trong town đang online
		🏰 /town set board "Tin nhắn" : Tự động gửi tin nhắn mỗi khi 1 thành viên vào server
		🏰 /town set spawn : Đặt lại spawn cho /town spawn
		🏰 /town set name "tên town" : Đổi tên town
		🏰 /town toggle "?" : Cài đặt town
		🏰 /town rank (add/remove) "Tên người chơi" (normad/resident/mayor/king) : Thêm rank cho người chơi

		
		🏰 /towny map (hud) : Hiển thị map của town ở chat (thêm hud để thay thế = scorebroad)
		🏰 /towny time : Thời gian tới lần thu thuế tiếp theo
		🏰 /towny top "?" : Xem xếp hạng town
		🏰 /towny prices : Xem tiền town

		🏰 Lưu ý: Khi xóa town (t delete, t unclaim, ...) Hãy đảm bảo bạn đã lấy hết những gì cần thiết trước 
		khi rời town rồi vì khi xóa sẽ làm mới khu vực đó về trạng thái cũ.

		🏰Thêm thông tin tại: ${hyperlink('Thông tin','https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands')}`)
		.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.setTimestamp()
		.setFooter({ text: 'CrystalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [townyEmbed] }).catch((err) => {console.log(err)})
	}
}