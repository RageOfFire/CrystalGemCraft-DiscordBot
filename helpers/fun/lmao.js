module.exports = {
    name: "lmao",
    category: "fun",
    aliases: [
        "lamo"
    ],
    run: async ({ client, message }) => {
        message.react("🇱");
        message.react("🇲");
        message.react("🇦");
        message.react("🇴");
    }
}