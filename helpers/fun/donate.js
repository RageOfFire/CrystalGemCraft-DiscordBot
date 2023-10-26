module.exports = {
    name: "donate",
    category: "fun",
    aliases: [
        "nạp"
    ],
    run: async ({ client, message }) => {
        message.react("🤑");
    }
}