const durations = [
    { name: '60 giây', value: 60 * 1000 },
    { name: '5 phút', value: 5 * 60 * 1000 },
    { name: '10 phút', value: 10 * 60 * 1000 },
    { name: '30 phút', value: 30 * 60 * 1000 },
    { name: '1 giờ', value: 60 * 60 * 1000 },
    { name: '1 ngày', value: 24 * 60 * 60 * 1000 },
    { name: '1 tuần', value: 7 * 24 * 60 * 60 * 1000 },
]

const run = async (client, interaction) => {
    let member = interaction.options.getMember("user");
    let duration = interaction.options.GetNumber("duration");
    let reason = interaction.options.getString("reason") || "Không có lý do";

    if(!member) return interaction.reply("Người dùng không hợp lệ");
    try {
        await member.timeout(duration, reason);
        return interaction.reply(`${member.user.tag} đã bị hạn chế trong ${durations.find(d => duration === d.value)?.name} với lý do ${reason}`)
    }
    catch(err) {
        if(err) {
            console.error(err);
            return interaction.reply(`Có sự cố xảy ra khi hạn chế ${member.user.tag}`)
        }
    }
}

module.exports = {
	name: "timeout",
	category: "manager",
	description: 'Hạn chế người dùng',
	permissions: ["MODERATE_MEMBERS"],
	devOnly: false, 
    options: [
        {
            name: "user",
            description: "Người bị hạn chế",
            type: "USER",
            require: true
        },
        {
            name: "duration",
            description: "Thời lượng hạn chế",
            type: "NUMBER",
            choices: durations,
        },
        {
            name: "reason",
            description: "Lý do",
            type: "STRING",
            require: false
        }
    ], run
}