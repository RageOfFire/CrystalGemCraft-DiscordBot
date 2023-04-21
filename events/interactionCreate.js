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
    if(!interaction.inGuild()) return interaction.reply('this command can be used in server only').catch((err) => {console.log(err)});
    
    const slashcmd = client.slashcommands.get(interaction.commandName)
    if(!slashcmd) return interaction.reply("Invalid slash command").catch((err) => {console.log(err)});

    let member = interaction.user
    if (slashcmd.devOnly && !owner.includes(member.id)) {
        return interaction.reply("Lệnh này đang trong chế độ phát triển").catch((err) => {console.log(err)});
    }

    if(slashcmd.permissions && !interaction.member.permissions.has(slashcmd.permissions))
        return interaction.reply("You don't have permission").catch((err) => {console.log(err)});
    slashcmd.run(client, interaction);
}