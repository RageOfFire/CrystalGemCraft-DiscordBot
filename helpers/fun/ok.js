module.exports = {
    name: "ok",
    category: "fun",
    aliases: [],
    run: async ({ client, message }) => {
        message.react("👌");
    }
}