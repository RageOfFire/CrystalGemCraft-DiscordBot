const run = async(client, interaction) => {
    await interaction.reply(`Con số ngẫu nhiên của bạn là ${Math.floor(Math.random() * 100) + 1}`).catch((err) => {console.log(err)});
};

module.exports = {
    name: "number",
    category: "fun",
    description: 'Đưa ra 1 số ngẫu nhiên từ 1-100',
    permissions: [],
    devOnly: false, run
}