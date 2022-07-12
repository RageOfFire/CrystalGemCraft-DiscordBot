const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "kd",
	category: "help",
	description: 'Xem hướng dẫn các lệnh sử dụng tiền đặc biệt',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const kdEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Hướng dẫn sử dụng tiền đặc biệt')
			.setURL('http://www.ragefiresmp.ga/')
			.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
			.setDescription(`💰Đây là 1 dạng tiền mới bạn có thể sử dụng để mua các vật phẩm đặc biệt trong shop enchant /es
			💰Có thể sử dụng dạng /kumandra hoặc /kd
			💰 /kd balance : Mở GUI xem tiền của bạn hoặc chuyển từ tiền gốc sang dạng tiền đặc biệt này và ngược lại
			💰 /kd deliver "Tên người chơi" : Chuyển item tới người chơi nào đó giống /trade nhưng sang hơn
			💰 /kd jobs : Mở GUI nhận hoặc hủy việc làm để kiếm loại tiền này
			💰 /kd pay "Tên người chơi" : Chuyển tiền cho người chơi khác`)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [kdEmbed] }).catch((err) => {console.log(err)})
	}
}