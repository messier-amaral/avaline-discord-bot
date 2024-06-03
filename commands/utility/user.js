const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Da informações sobre o explorador.'),
    async execute(interaction) {
        await interaction.reply(`O explorador ${interaction.user.username} entrou para o centro espacial em ${interaction.member.joinedAt}.`);
    },
};