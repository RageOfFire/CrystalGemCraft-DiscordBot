module.exports = {
    name: "number",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        message.reply(`Con số ngẫu nhiên của bạn là ${Math.floor(Math.random() * 100) + 1}`).catch((err) => {console.log(err)})
    }
}