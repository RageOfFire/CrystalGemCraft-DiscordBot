const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const marketEmbed = new MessageEmbed()
		.setColor('#faa152')
		.setTitle('Hướng dẫn chợ đen')
		.setURL('https://www.crystalgemcraft.xyz/')
		.setAuthor({ name: 'CrystalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160', url: 'https://www.crystalgemcraft.xyz/' })
		.setDescription(`🏕 /ca view "tên người chơi" : Hiển thị những vật phẩm mà người chơi đó bán
		🏕 /ca sell $ : Bán vật phẩm trên tay bạn với giá tiền tự đặt
		🏕 /ca bid $ : Bắt đầu bán 1 vật phẩm kiểu "đấu giá" với giá tiền khởi điểm tự đặt
		🏕 /ca gui hoặc /ah [sell/buy/bid] : hiển thị giao diện [bán/mua/đấu giá]
		🏕 /ca mail : hiển thị những vật phẩm bị hủy hoặc quá hạn của bạn
		🏕 /ca listed : hiển thị vật phẩm bạn đang bán
		Thêm thông tin tại: ${hyperlink('Thông tin','https://www.spigotmc.org/resources/crazy-auctions-plus-1-8-1-18-global-market-auction-highly-customizable-mysql-free.75655/')}`)
		.setThumbnail('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.addFields(
			{ name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
			{ name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
		)
		.setImage('https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160')
		.setTimestamp()
		.setFooter({ text: 'CrystalGemCraft', iconURL: 'https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160' });
	interaction.reply({ embeds: [marketEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "market",
	category: "help",
	description: 'Xem hướng dẫn các lệnh chợ đen',
	permissions: [],
	devOnly: false, run
}