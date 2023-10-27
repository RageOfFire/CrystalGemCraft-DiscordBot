const { MessageEmbed } = require('discord.js')
const templateEmbed = (client, message, title, description) => {
    const embed = new MessageEmbed()
    .setColor('#faa152')
    .setTitle(title)
    .setURL('https://www.crystalgemcraft.com/')
    .setAuthor({ name: `Được đề xuất bởi ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.com/' })
    .setDescription(description)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    return embed;
}

module.exports = { templateEmbed }