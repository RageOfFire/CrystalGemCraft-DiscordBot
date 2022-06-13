module.exports = {
    name: "interactionCreate",
    run: async (bot, interaction) => {
        if(interaction.isCommand()) handleSlashCommand(bot, interaction)
        else if (interaction.isButton()) handleButton(bot, interaction)
    },
}

const handleButton = (bot, interaction) => {
    const { client } = bot

    const[name, ...params] = interaction.customId.split('-')

    const button = client.buttons.get(name)
    if(!button) return
    button.run(client, interaction, params)
}

const handleSlashCommand = (bot, interaction) => {
    const { client } = bot
    if(!interaction.inGuild()) return interaction.reply('this command can be used in server only')
    
    const slashcmd = client.slashcommands.get(interaction.commandName)
    if(!slashcmd) return interaction.reply("Invalid slash command")

    if(slashcmd.permissions && !interaction.member.permissions.has(slashcmd.permissions))
        return interaction.reply("You don't have permission")
    slashcmd.run(client, interaction);
}