const { Pagination } = require('pagination.djs');
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
    const descriptions = [
        `Bước 1 nhập lệnh /napthe ở trong game`,
        `Bước 2: Chọn tên thẻ và số tiền của thẻ`,
        `Bước 3: nhập Seri của thẻ vào phía khung đổi tên`,
        `Bước 4: Sẽ hiện ra 1 mục tiếp theo là Mã Thẻ, bạn hãy nhập mã thẻ vào đây và ngồi chờ đợi thẻ được xử lý`
    ];
    const images = [
        "../../img/step1.png",
        "../../img/step2.png",
        "../../img/step3.png",
    ];
    const pagination = new Pagination(interaction, { limit: 1 })
    .setColor('#faa152')
    .setTitle('Hướng dẫn Donate')
    .setURL('https://www.crystalgemcraft.xyz/')
    .setDescriptions(descriptions)
    .setImages(images)
    .setAuthor({ name: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.crystalgemcraft.xyz/' })
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
        { name: 'Tham gia trên Java', value: hyperlink('mc.crystalgemcraft.xyz','https://www.crystalgemcraft.xyz/'), inline: true },
        { name: 'Tham gia trên bedrock', value: hyperlink('mc.crystalgemcraft.xyz:19132','https://www.crystalgemcraft.xyz/'), inline: true },
    )
    .setTimestamp()
    pagination.render().catch((err) => {console.log(err)});
}
module.exports = {
	name: "donate",
	category: "help",
	description: 'Xem hướng dẫn cách donate',
	permissions: [],
	devOnly: false, run
}