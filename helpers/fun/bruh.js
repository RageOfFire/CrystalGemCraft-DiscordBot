module.exports = {
    name: "bruh",
    category: "fun",
    aliases: [
        "burh",
        "bủh"
    ],
    run: async ({ client, message }) => {
        message.react("🇧");
        message.react("🇷");
        message.react("🇺");
        message.react("🇭");
    }
}