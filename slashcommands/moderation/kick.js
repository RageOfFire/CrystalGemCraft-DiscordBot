const run = async (client, interaction) => {
    const member = interaction.options.getMember('user');
    const reason = interaction.options.getString('reason');
    if (interaction.user.roles.highest.position > member.user.roles.highest.position) {
        member.kick(reason);
        interaction.deferReply();
        interaction.deleteReply();
        interaction.channel.send(`Tài khoản ${member} đã bị đuổi với lý do ${reason}`).catch((err) => { console.log(err) })
    }
    else {
        interaction.reply({ content: `Bạn không thể thực hiện hàng động này với ${member}`, ephemeral: true }).catch((err) => {console.log(err)})
    }
}
module.exports = {
    name: "kick",
    category: "moderation",
    description: 'Đuổi người chơi ra khỏi máy chủ',
    permissions: ["KICK_MEMBERS"],
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