module.exports = {
	name: "ban",
	category: "manager",
	description: "Cấm người dùng",
	permissions: ["BAN_MEMBERS"],
	devOnly: false, 
    run: async ({ client, message, prefix, args }) => {
        let user = message.mentions.users.first();
        let reason = message.content.replace(prefix + 'ban ' + user, '') || "Không có lý do";
    
        if(!user) return message.reply("Người dùng không hợp lệ");
        try {
            await message.guild.bans.create(user, { reason })
            return message.reply(`${user.user.tag} đã bị cấm với lý do ${reason}`)
        }
        catch(err) {
            if(err) {
                console.error(err);
                return message.reply(`Có sự cố xảy ra khi cấm ${user.user.tag}`)
            }
        }
    }
}