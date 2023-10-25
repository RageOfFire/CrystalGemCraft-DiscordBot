const { templateEmbed } = require("../../util/templateEmbed")
const run = async (client, interaction) => {
	const descriptions = [
        '🔮 /sethome "Tên" : Tạo home để có thể di chuyển về đó mọi lúc mọi nơi bằng lệnh /home "tên" và xóa đi bất kỳ lúc nào với /delhome "Tên"\n',
		'🔮 /tpa "Tên người chơi" : Gửi 1 yêu cầu dịch chuyển tới người chơi đó\n',
		'🔮 /tpahere "Tên người chơi" : Gửi 1 yêu cầu người chơi đó dịch chuyển tới bản thân bạn\n',
		'🔮 /rw tp : Dịch chuyển tới thế giới vô hạn tài nguyên\n',
		'🔮 /rw tp nether/end : Dịch chuyển tới thế giới nether/end vô hạn tài nguyên'
    ];
	const rtpEmbed = templateEmbed(client, interaction, "Hướng dẫn dịch chuyển", descriptions.join("").toString())
	interaction.reply({ embeds: [rtpEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "teleport",
	category: "help",
	description: 'Xem hướng dẫn các lệnh di chuyển',
	permissions: [],
	devOnly: false, run
}