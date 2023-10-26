module.exports = {
    name: "segg",
    category: "fun",
    aliases: [],
    run: async ({ client, message }) => {
        message.react("🇸");
        message.react("🇪");
        message.react("🇬");
        message.react("❓");
    }
}