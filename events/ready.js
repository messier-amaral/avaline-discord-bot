const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        client.user.setActivity('Explorando planetas, catalogando espécies, refinando minérios 💙🚀.', { type: ActivityType.Playing });
        console.log(`Consciousness simulation started as ${client.user.tag}!`)
    },
};