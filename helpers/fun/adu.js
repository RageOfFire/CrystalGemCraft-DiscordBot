module.exports = {
    name: "adu",
    category: "fun",
    aliases: [],
    run: async ({ client, message }) => {
        message.react("🇦");
        message.react("🇩");
        message.react("🇺");
    }
}