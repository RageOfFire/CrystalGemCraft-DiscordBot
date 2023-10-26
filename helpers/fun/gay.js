module.exports = {
    name: "gay",
    category: "fun",
    aliases: [
        "gei"
    ],
    run: async ({ client, message }) => {
        message.react("🇬");
        message.react("🇦");
        message.react("🇾");
    }
}