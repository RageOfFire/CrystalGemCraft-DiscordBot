module.exports = {
    name: "interactionCreate",
    run: async (bot, interaction) => {
        if(interaction.isCommand()) handleSlashCommand(bot, interaction)
        // else if (interaction.isButton()) handleButton(bot, interaction)
    },
}

// const handleButton = (bot, interaction) => {
//     const { client } = bot

//     const[name, ...params] = interaction.customId.split('-')

//     const button = client.buttons.get(name)
//     if(!button) return
//     button.run(client, interaction, params)
// }

const handleSlashCommand = (bot, interaction) => {
    const { client, owner } = bot
    if(!interaction.inGuild()) return interaction.reply('Lệnh chỉ có thể sử dụng trong máy chủ').catch((err) => {console.log(err)});
    
    const slashcmd = client.slashcommands.get(interaction.commandName)
    if(!slashcmd) return interaction.reply("Lệnh không hợp lệ").catch((err) => {console.log(err)});

    let member = interaction.user
    if (slashcmd.devOnly && !owner.includes(member.id)) {
        return interaction.reply("Lệnh này đang trong chế độ phát triển").catch((err) => {console.log(err)});
    }

    if(slashcmd.permissions && !interaction.member.permissions.has(slashcmd.permissions))
        return interaction.reply("Bạn không có quyền sử dụng lệnh này").catch((err) => {console.log(err)});
    slashcmd.run(client, interaction);
}