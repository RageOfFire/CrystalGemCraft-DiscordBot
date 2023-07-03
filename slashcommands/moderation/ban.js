const run = async (client, interaction) => {
    const member = interaction.options.getMember('user');
    const reason = interaction.options.getString('reason'); 
    member.ban(reason);
    interaction.deferReply();
    interaction.deleteReply();
	interaction.channel.send(`Tài khoản ${member} đã bị cấm với lý do ${reason}`).catch((err) => {console.log(err)})
}
module.exports = {
	name: "ban",
	category: "moderation",
	description: 'Cấm người chơi ra khỏi máy chủ',
	permissions: ["BAN_MEMBERS"],
	devOnly: false,
    options: [
        {
            name: "user",
            description: "Người dùng",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "Lý do",
            type: "STRING",
            required: false
        },
    ], run
}