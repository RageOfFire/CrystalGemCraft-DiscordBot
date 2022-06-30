const run = async (client, interaction) => {
    let member = interaction.options.getMember("user");
    let reason = interaction.options.getString("reason") || "Không có lý do";

    if(!member) return interaction.reply("Người dùng không hợp lệ");
    try {
        await interaction.guild.bans.create(member, { reason })
        return interaction.reply(`${member.user.tag} đã bị cấm với lý do ${reason}`)
    }
    catch(err) {
        if(err) {
            console.error(err);
            return interaction.reply(`Có sự cố xảy ra khi cấm ${member.user.tag}`)
        }
    }
}

module.exports = {
	name: "ban",
	category: "manager",
	description: "Cấm người dùng",
	permissions: ["BAN_MEMBERS"],
	devOnly: false, 
    options: [
        {
            name: "user",
            description: "Người bị cấm",
            type: "USER",
            require: true
        },
        {
            name: "reason",
            description: "Lý do",
            type: "STRING",
            require: false
        }
    ], run
}