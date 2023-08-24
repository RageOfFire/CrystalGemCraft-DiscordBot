const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "antiMention",
  run: async function runAll(bot, message) {

    const { client } = bot

    if (!message.guild) return;
    if (message.author.bot) return;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return;

    const antiMentionEmbed = new MessageEmbed()
    .setColor('#EE2E0D')
    .setTitle('Ping quản lý !!!')
    .setURL('https://www.crystalgemcraft.com/')
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(), url: 'https://www.crystalgemcraft.com/' })
    .setDescription("Làm ơn đừng làm phiền người quản lý ! Khi nào rảnh bọn mình sẽ xem tin nhắn việc ping này không giúp bạn có câu trả lời nhanh hơn đâu")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setFooter({ text: `Bởi ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) });

    if (message.mentions.users.size && message.type != "REPLY") {
      const mentionedUsers = message.mentions.users;

      const authorRoles = message.member.roles.cache;

      let authorHasBanPermission = false;
      for (const role of authorRoles.values()) {
        if (role.permissions.has("MODERATE_MEMBERS")) {
          authorHasBanPermission = true;
          break;
        }
      }

      mentionedUsers.forEach((mentionedUser) => {
        const mentionedMember = message.guild.members.cache.get(
          mentionedUser.id
        );

        let mentionedUserHasBanPermission = false;
        mentionedMember.roles.cache.forEach((role) => {
          if (role.permissions.has("BAN_MEMBERS")) {
            mentionedUserHasBanPermission = true;
          }
        });

        if (!authorHasBanPermission && mentionedUserHasBanPermission) {
          message.delete();
          return message.channel.send({ embeds: [antiMentionEmbed] }).catch((err) => {console.log(err)});
        }
      });
    }
  },
};
