const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "market",
	category: "help",
	description: 'Xem hướng dẫn các lệnh chợ đen',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const marketEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Hướng dẫn chợ đen')
			.setURL('http://www.ragefiresmp.ga/')
			.setAuthor({ name: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'http://www.ragefiresmp.ga/' })
			.setDescription(`🏕 /ca view "tên người chơi" : Hiển thị những vật phẩm mà người chơi đó bán
			🏕 /ca sell $ : Bán vật phẩm trên tay bạn với giá tiền tự đặt
			🏕 /ca bid $ : Bắt đầu bán 1 vật phẩm kiểu "đấu giá" với giá tiền khởi điểm tự đặt
			🏕 /ca gui hoặc /ah [sell/buy/bid] : hiển thị giao diện [bán/mua/đấu giá]
			🏕 /ca mail : hiển thị những vật phẩm bị hủy hoặc quá hạn của bạn
			🏕 /ca listed : hiển thị vật phẩm bạn đang bán
			Thêm thông tin tại: ${hyperlink('Thông tin','https://www.spigotmc.org/resources/crazy-auctions-plus-1-8-1-18-global-market-auction-highly-customizable-mysql-free.75655/')}`)
			.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.addFields(
				{ name: 'Tham gia trên Java', value: hyperlink('mc.ragefiresmp.ga','http://www.ragefiresmp.ga/'), inline: true },
				{ name: 'Tham gia trên bedrock', value: hyperlink('mc.ragefiresmp.ga:19132','http://www.ragefiresmp.ga/'), inline: true },
			)
			.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'RageFireSMP', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
		message.reply({ embeds: [marketEmbed] }).catch((err) => {console.log(err)})
	}
}