const { hyperlink } = require('@discordjs/builders');
const skills = [
    '🙌 Mỗi class thường sẽ có 4 kỹ năng 1 số class khác có thể có lên tới\n',
    '6 kỹ năng và đây là cách combo thực hiện kỹ năng của từng slot:\n',
    'Bắt đầu bằng việc ngồi xuống và tiếp theo là: \n',
    '🙌 Combo skill 1: **Chuột phải - Chuột phải - Chuột phải**\n',
    '🙌 Combo skill 2: **Chuột phải - Chuột trái - Chuột phải**\n',
    '🙌 Combo skill 3: **Chuột phải - Chuột phải - Chuột trái**\n',
    '🙌 Combo skill 4: **Chuột phải - Chuột trái - Chuột trái**\n',
    '🙌 Combo skill 5: **Chuột phải - Chuột phải - Ngồi xuống**\n',
    '🙌 Combo skill 6: **Chuột phải - Ngồi xuống - Ngồi xuống**\n',
    'Thông tin về cách sử dụng kỹ năng: ' + hyperlink('Thông tin','https://crystalgemcraft.gitbook.io/wiki/cau-lenh/he-thong-ky-nang')
];
const lands = [
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
const link = [
    'Để link với discord nhận free rank:\n',
    '🔗Bước 1: vào server nhập /discord link🔗\n',
    '🔗Bước 2: Mang mã số nhận được từ /discord link nhắn tin riêng cho con bot này🔗\n',
    '🔗Bước 3: Giờ discord của bạn đã được liên kết, bạn có thế nhận được rank miễn phí🔗\n',
];
const rpg = [
    '🎒 /profile : Mở GUI xem thông tin bản thân (ngồi xuống chuột phải vào người chơi khác để xem thông tin người khác)\n',
    '🎒 /stats|/att|/attributes : Mở GUI nâng cấp điểm cá nhân (như hp,def,...)\n',
    '🎒 /class : Mở GUI chọn class\n',
    '🎒 /skills : Mở GUI nâng cấp skills (cần có class khác mặc định)\n',
    '🎒 /friends : Mở danh sách bạn bè\n',
    '🎒 /party : Mở danh sách nhóm\n',
    '🎒 /mmoinventory|/rpginv|/rpginventory : Mở túi trang bị cho các vật phẩm như (nhẫn, dây chuyền, găng tay, ...)\n',
    'Thông tin về các kỹ năng: ' + hyperlink('Thông tin','https://gitlab.com/phoenix-dvpmt/mythiclib/-/wikis/Skills#default-skills')
];
const shop = [
    '🏦 /shop : Mở shop để mua/bán vật phẩm\n',
    'Lưu ý: Khi sử dụng /shop đưa trỏ chuột vào 1 vật phẩm thì chuột trái để mua/chuột phải để bán\n',
    '🏦 /sellall "Tên vật phẩm" : bán tất cả vật phẩm trong túi đồ của bạn (Tên vật phẩm là vật phẩm bạn cần bán nếu không có sẽ bán hết đồ)\n',
    '🏦 /sellall hand : bán tất cả vật phẩm trên tay bạn\n',
    '🏦 /sellgui : Mở 1 gui bán đồ bạn có thể đưa đồ vào đó rồi đóng gui sẽ tự động bán hết đồ bạn để vào đó\n',
    '🏦 /ah : Mở chợ đen để mua bán vật phẩm giữa người chơi với người chơi\n',
    'Thêm thông tin tại: ' + hyperlink('Thông tin','https://gpplugins.gitbook.io/economyshopgui/basics/commands')
];
const skin = [
    '🎨 /skin "Tên skin" : Đổi skin của bản thân bằng với "Tên skin"\n',
    '🎨 /skin url "Link" : Đổi skin của bản thân bằng với "Link" của skin đó\n',
    '🎨 /skin clear : Xóa skin của bản thân\n',
    '🎨 /skins : Mở 1 gui gồm nhiều skin để bạn chọn'
];
const teleport = [
    '🔮 /sethome "Tên" : Tạo home để có thể di chuyển về đó mọi lúc mọi nơi bằng lệnh /home "tên" và xóa đi bất kỳ lúc nào với /delhome "Tên"\n',
    '🔮 /tpa "Tên người chơi" : Gửi 1 yêu cầu dịch chuyển tới người chơi đó\n',
    '🔮 /tpahere "Tên người chơi" : Gửi 1 yêu cầu người chơi đó dịch chuyển tới bản thân bạn\n',
    '🔮 /rw tp : Dịch chuyển tới thế giới vô hạn tài nguyên\n',
    '🔮 /rw tp nether/end : Dịch chuyển tới thế giới nether/end vô hạn tài nguyên'
];
const vote = [
    '✔️ Khi vote cho server hãy đảm bảo rằng tên bạn dùng để vote giống với trong server\n',
    'Người chơi bedrock(bản điện thoại) thêm dấu **.** ở đầu tên.\n',
    '✔️ Khi vote cho server bạn sẽ nhận được ngẫu nhiên 1 loại key nào đó + tiền + levels\n',
    '✔️ /vote ToggleReminders : Bật/tắt thông báo khi bạn có lượt vote khả dụng mới\n',
    '✔️ /vote Shop : Mở shop mua bằng điểm vote (mỗi khi vote sẽ được 1 điểm)\n',
    '✔️ /vote URL : Hiện tất cả các trang vote khả dụng\n',
    '✔️ /vote Points : Xem điểm hiện tại của bạn dùng để mua trong /vote Shop\n',
    '✔️ /vote : Mở gui vote\n',
    '✔️ /vote Top (All/Monthly/Weekly/Daily) : Xem bảng xếp hạng người chơi đã vote theo thứ tự (Tất cả/Tháng/Tuần/Ngày)',
    '✔️ Thêm thông tin tại: ' + hyperlink('Thông tin','https://github.com/BenCodez/VotingPlugin/wiki/Commands-&-Permissions')
];
module.exports = { skills, lands, link, rpg, shop, skin, teleport, vote }