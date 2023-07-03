const { MessageEmbed } = require('discord.js')
const run = async (client, interaction) => {
	const channel = interaction.options.getChannel('channel');
	const color = interaction.options.getString('color');
    const title = interaction.options.getString('title');
	const info = interaction.options.getString('info');
    const validColor = /^#[0-9A-F]{6}$/i.test(color);
	const bcEmbed = new MessageEmbed()
	.setColor(color || '#faa152')
	.setTitle(title || 'CrystalGemCraft')
	.setDescription(info || '')
	.setThumbnail(client.user.displayAvatarURL())
	.setTimestamp()
    if(validColor) {
        console.log(`Người quản lý ${interaction.user.username} vừa gửi 1 thông báo tới kênh (${channel}) với /màu là (${color})/tiêu đề là (${title})/mô tả là (${info})`)
	    channel.send({ embeds: [bcEmbed] }).catch((err) => {console.log(err)})
        interaction.reply({ content: "Gửi tin nhắn thành công", ephemeral: true }).catch((err) => {console.log(err);});
    }
    else {
        interaction.reply({ content: "Mã màu không hợp lệ", ephemeral: true }).catch((err) => {console.log(err);});
    }
}
module.exports = {
	name: "boardcast",
	category: "moderation",
	description: 'Gửi 1 tin nhắn tới kênh bất kỳ',
	permissions: ["MANAGE_CHANNELS"],
	devOnly: false,
	options: [
        {
            name: "channel",
            description: "Kênh nhận tin nhắn",
            type: "CHANNEL",
            required: true
        },
		{
            name: "color",
            description: "Màu tin nhắn dạng mã HEX (Ví dụ: #FFFFFF)",
            type: "STRING",
            required: false
        },
        {
            name: "title",
            description: "Tiêu đề tin nhắn gửi đi",
            type: "STRING",
            required: false
        },
		{
            name: "info",
            description: "Nội dung tin nhắn gửi đi",
            type: "STRING",
            required: false
        },
    ], run
}