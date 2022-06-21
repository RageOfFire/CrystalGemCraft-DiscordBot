module.exports = {
    name: "howgay",
    category: "fun",
    description: 'Xem độ gay của bạn :))) ?',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        const user = message.mentions.users.first();
        if(!user) {
            message.reply(`Bạn có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ gay`).catch((err) => {console.log(err)});
        }
        else {
            message.reply(`${user} có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ gay`).catch((err) => {console.log(err)});
        }
    }
}