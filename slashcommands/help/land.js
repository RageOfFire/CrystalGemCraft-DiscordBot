const { templateEmbed } = require("../../util/templateEmbed")
const { hyperlink } = require('@discordjs/builders');
const run = async (client, interaction) => {
	const descriptions = [
        '🏕 Người chơi mới sẽ sở hữu 1 lô đất tự động khi đặt rương đầu tiên,\n',
        'có thể mở rộng claims bằng **xẻng vàng** mà không cần phải dùng lệnh\n',
        '🏕 /AbandonClaim: Xóa đất claim\n',
        '🏕 /ClaimExplosions: Bật / tắt nổ (creeper, tnt,...) trong vùng claim\n',
        '🏕 /Trust (/t): Cấp quyền cho người chơi trong vùng claim\n',
		'🏕 /UnTrust (/ut): Xóa quyền người chơi trong vùng claim\n',
		'🏕 /AccessTrust (/at): Cấp quyền cho người chơi dùng nút, cần gạt và giường\n',
		'🏕 /ContainerTrust (/ct): Cấp quền cho người chơi dùng nút bấm, cần gạt, giường, block chế tạo, chest, shulker và động vật (nhử, cho ăn)\n',
		'🏕 /TrustList: Danh sách người chơi được cấp quyền trong town\n',
		'🏕 /SubdivideClaims (/sc): Chuyển đổi xẻng của bạn để vào chế độ chia lô claim\n',
		'🏕 /RestrictSubclaim: Hạn chế người chơi vào vùng subclaim\n',
		'🏕 /BasicClaims (/bc): Đặt lại xeng về chế độ Basic claims\n',
		'🏕 /PermissionTrust (/pt): Cấp quyền cho người chơi set các quyền vùng claim dựa vào mức độ trust\n',
		'🏕 /Untrust All: Xóa hết tất cả người chơi đã trust\n',
		'🏕 /AbandonAllClaims: Xóa tất cả claim\n',
		'🏕 /ClaimsList: Danh sách claim và loại claim\n',
		'Thêm thông tin tại: ' + hyperlink('Thông tin','https://crystalgemcraft.gitbook.io/wiki/cau-lenh/land')
    ];
	const landEmbed = templateEmbed(client, interaction, "Hướng dẫn sở hữu đất riêng", descriptions.join("").toString())
	interaction.reply({ embeds: [landEmbed] }).catch((err) => {console.log(err)})
}
module.exports = {
	name: "land",
	category: "help",
	description: 'Xem thông tin sử dụng đất riêng',
	permissions: [],
	devOnly: false, run
}