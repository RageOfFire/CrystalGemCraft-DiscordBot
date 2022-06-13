const run = async(client, interaction) => {
    interaction.reply(`🏓Độ trễ là ${Date.now() - message.createdTimestamp}ms. Độ trễ API là ${Math.round(client.ws.ping)}ms`).catch((err) => {console.log(err)});
}

module.exports = {
    name: "ping",
    category: "info",
    description: 'Kiểm tra xem bot còn hoạt động không ?',
    permissions: [],
    devOnly: false, run
}