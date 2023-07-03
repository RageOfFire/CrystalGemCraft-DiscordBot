const run = async (client, interaction) => {
    const member = interaction.options.getMember('user');
    const time = interaction.options.getInteger('time'); 
    member.timeout(time * 1000);
    interaction.deferReply();
    interaction.deleteReply();
	interaction.channel.send(`Tài khoản ${member} đã hạn chế`).catch((err) => {console.log(err)})
}
module.exports = {
	name: "timeout",
	category: "moderation",
	description: 'Hạn chế người chơi trong máy chủ',
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
            name: "time",
            description: "Thời gian theo giây",
            type: "INTEGER",
            required: true
        },
    ], run
}