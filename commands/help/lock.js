const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "lock",
	category: "help",
	description: 'Xem hướng dẫn các lệnh khóa khối',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const lockEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Hướng dẫn khóa khối')
			.setURL('http://www.ragefiresmp.ga/')
			.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
			.setDescription(`🔑Mặc định khi bạn đặt rương,... xuống sẽ được tự động khóa lại để bảo vệ vật phẩm và chỉ có bạn mới mở được\n🔑Để sử dụng lệnh, gõ lệnh rồi đấm vào block bạn cần để sử dụng\n🔑 /cprivate : Tạo ra khóa cho block của bạn không ai có thể tác động nó trừ bạn\n🔑 /cpassword "Mật khẩu" : Tạo ra khóa cho block của bạn không ai có thể tác động nó trừ khi có mật khẩu\n🔑 /cdonation : Tạo ra 1 rương để người chơi có thể đưa vật phẩm vào nhưng không thể lấy ra chỉ có bạn mới có thể lấy ra\n🔑 /cmodify "Tên người chơi" : Cho phép 1 ai đó có thể sử dụng block đó cùng bạn\n🔑 /cremove : Gỡ bỏ khóa có block của bạn\n🔑 /cunlock : Gỡ bảo mật khẩu cho lệnh /cpassword\n🔑 /cinfo : Xem thông tin block đang được bảo vệ\nThêm thông tin tại: ${hyperlink('Thông tin','https://github.com/pop4959/LWCX/wiki/Commands')}`)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [lockEmbed] }).catch((err) => {console.log(err)})
	}
}