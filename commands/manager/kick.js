module.exports = {
	name: "kick",
	category: "manager",
	description: "Đuổi người dùng",
	permissions: ["KICK_MEMBERS"],
	devOnly: false, 
    run: async ({ client, message, prefix, args }) => {
        let user = message.mentions.users.first();
        let reason = message.content.replace(prefix + 'ban ' + user, '') || "Không có lý do";
    
        if(!user) return message.reply("Người dùng không hợp lệ");
        try {
            await message.guild.member.kick(user, reason)
            return message.reply(`${user.user.tag} đã bị đuổi với lý do ${reason}`)
        }
        catch(err) {
            if(err) {
                console.error(err);
                return message.reply(`Có sự cố xảy ra khi đuổi ${user.user.tag}`)
            }
        }
    }
}