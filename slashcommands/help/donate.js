const { MessageEmbed } = require('discord.js')
const run = async (client, interaction) => {

    const descriptions = [
        '💵 Bước 1 nhập lệnh /napthe ở trong game\n',
        '💵 Bước 2: Chọn tên thẻ và số tiền của thẻ\n',
        '💵 Bước 3: nhập Seri của thẻ vào phía khung đổi tên\n',
		'💵 Bước 4: Sẽ hiện ra 1 mục tiếp theo là Mã Thẻ, bạn hãy nhập mã thẻ vào đây và ngồi chờ đợi thẻ được xử lý',
    ];
    
    const images = [
        "https://raw.githubusercontent.com/RageOfFire/CrystalGemCraft-DiscordBot/main/img/step1.png",
        "https://raw.githubusercontent.com/RageOfFire/CrystalGemCraft-DiscordBot/main/img/step2.png",
        "https://raw.githubusercontent.com/RageOfFire/CrystalGemCraft-DiscordBot/main/img/step3.png",
    ];
    const donateEmbed1 = new MessageEmbed()
    .setColor('#faa152')
    .setTitle('Hướng dẫn Donate')
    .setURL('https://www.crystalgemcraft.com/')
    .setDescription(descriptions.join("").toString())
    .setImage(images[0])
    .setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.com/' })
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    const donateEmbed2 = new MessageEmbed()
    .setColor('#faa152')
    .setURL('https://www.crystalgemcraft.com/')
    .setImage(images[1])
    const donateEmbed3 = new MessageEmbed()
    .setColor('#faa152')
    .setURL('https://www.crystalgemcraft.com/')
    .setImage(images[2])

    interaction.reply({ embeds: [donateEmbed1, donateEmbed2, donateEmbed3] }).catch((err) => {console.log(err)});
}
module.exports = {
	name: "donate",
	category: "help",
	description: 'Xem hướng dẫn cách donate',
	permissions: [],
	devOnly: false, run
}