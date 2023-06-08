const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🔒 /cprivate : Tạo ra khóa cho block của bạn không ai có thể tác động nó trừ bạn\n',
        '🔒 /cpassword "Mật khẩu" : Tạo ra khóa cho block của bạn không ai có thể tác động nó trừ khi có mật khẩu\n',
        '🔒 /cdonation : Tạo ra 1 rương để người chơi có thể đưa vật phẩm vào nhưng không thể lấy ra chỉ có bạn mới có thể lấy ra\n',
		'🔒 /cdisplay : Tạo 1 rương chỉ có thể xem\n',
		'🔒 /cmodify "Tên người chơi" : Cho phép 1 ai đó có thể sử dụng block đó cùng bạn\n',
		'🔒 /cremove : Gỡ bỏ khóa có block của bạn\n',
		'🔒 /cunlock : Gỡ bảo mật khẩu cho lệnh /cpassword\n',
		'🔒 /cinfo : Xem thông tin block đang được bảo vệ\n',
		'Thêm thông tin tại:' + hyperlink('Thông tin','https://github.com/pop4959/LWCX/wiki/Commands')
    ];
	const lockEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn Khóa khối')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(descriptions.join("").toString())
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()
	interaction.reply({ embeds: [lockEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "lock",
	category: "help",
	description: 'Xem hướng dẫn các lệnh lock',
	permissions: [],
	devOnly: false, run
}