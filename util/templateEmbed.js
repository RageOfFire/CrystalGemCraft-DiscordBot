const { MessageEmbed } = require('discord.js')
const templateEmbed = (client, interaction, title, description) => {
    const embed = new MessageEmbed()
    .setColor('#faa152')
    .setTitle(title)
    .setURL('https://www.crystalgemcraft.com/')
    .setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.com/' })
    .setDescription(description)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    return embed;
}

module.exports = { templateEmbed }