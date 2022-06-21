module.exports = {
    name: "howhandsome",
    category: "fun",
    description: 'Xem độ đẹp trai của bạn :v',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        const user = message.mentions.users.first();
        if(!user) {
            message.reply(`Bạn có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ đẹp trai`).catch((err) => {console.log(err)});
        }
        else {
            message.reply(`${user} có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ đẹp trai`).catch((err) => {console.log(err)});
        }
    }
}