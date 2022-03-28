module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        message.reply(`🏓Độ trễ là ${Date.now() - message.createdTimestamp}ms. Độ trễ API là ${Math.round(client.ws.ping)}ms`)
    }
}