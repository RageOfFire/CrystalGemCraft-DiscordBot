const { MessageEmbed } = require('discord.js')
const run = async (client, interaction) => {
    const dmMessage = () => {
        console.log(`Người quản lý ${interaction.user.username} vừa gửi 1 tin nhắn riêng tới ${user} với màu là ${color || 'mặc định'}, tiêu đề ${title}, mô tả ${info}`)
	    client.users.send(member, { embeds: [dmEmbed] }).catch((err) => {console.log(err)})
        interaction.reply({ content: "Gửi tin nhắn thành công", ephemeral: true }).catch((err) => {console.log(err);});
    }
	const member = interaction.options.getMember('user');
	const color = interaction.options.getString('color');
    const title = interaction.options.getString('title');
	const info = interaction.options.getString('info');
    const validColor = /^#[0-9A-F]{6}$/i.test(color);
	const dmEmbed = new MessageEmbed()
	.setColor(color || '#faa152')
	.setTitle(title || 'CrystalGemCraft')
	.setDescription(info || '')
	.setTimestamp()
    if(validColor) {
        dmMessage()
    }
    else if(!color) {
        dmMessage()
    }
    else {
        interaction.reply({ content: "Mã màu không hợp lệ", ephemeral: true }).catch((err) => {console.log(err);});
    }
}
module.exports = {
	name: "dm",
	category: "moderation",
	description: 'Gửi 1 tin nhắn riêng tới người dùng',
	permissions: ["MANAGE_CHANNELS"],
	devOnly: false,
	options: [
        {
            name: "user",
            description: "Người dùng",
            type: "USER",
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