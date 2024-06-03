const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Da informações sobre o servidor.'),
    async execute(interaction) {
        await interaction.reply(`O centro espacial ${interaction.guild.name} possui ${interaction.guild.memberCount} astronautas no momento.`);
    },
};