const run = async (client, interaction) => {
    const id = interaction.options.getInteger('id');
    id.unban();
    interaction.deferReply();
    interaction.deleteReply();
	interaction.channel.send(`Tài khoản ${id} đã được gỡ cấm`).catch((err) => {console.log(err)})
}
module.exports = {
	name: "unban",
	category: "moderation",
	description: 'Bỏ cấm người chơi ra khỏi máy chủ',
	permissions: ["BAN_MEMBERS"],
	devOnly: false,
    options: [
        {
            name: "id",
            description: "Id người dùng",
            type: "INTEGER",
            required: true
        },
    ], run
}