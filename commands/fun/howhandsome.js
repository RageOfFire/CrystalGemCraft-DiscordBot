module.exports = {
    name: "howhandsome",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        message.reply(`Bạn có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ đẹp trai`)
    }
}