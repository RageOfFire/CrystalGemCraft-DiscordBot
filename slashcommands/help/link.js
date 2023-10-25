const { templateEmbed } = require("../../util/templateEmbed")
const run = async (client, interaction) => {
	const descriptions = [
        'Để link với discord nhận free rank:\n',
        '🔗Bước 1: vào server nhập /discord link🔗\n',
        '🔗Bước 2: Mang mã số nhận được từ /discord link nhắn tin riêng cho con bot này🔗\n',
        '🔗Bước 3: Giờ discord của bạn đã được liên kết, bạn có thế nhận được rank miễn phí🔗\n',
    ];
	const linkEmbed = templateEmbed(client, interaction, "Hướng dẫn Link discord", descriptions.join("").toString())
	interaction.reply({ embeds: [linkEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "link",
	category: "help",
	description: 'Xem hướng dẫn cách link tới discord',
	permissions: [],
	devOnly: false, run
}