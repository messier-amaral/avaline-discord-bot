const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Consciousness simulation started as ${client.user.tag}!`)
    },
};