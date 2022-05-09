const player = require("../../client/player");
const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resume')
        .setDescription("Resume the current track"),
        
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);

        queue.setPaused(false);

        let Embed = new Discord.MessageEmbed()
            .setDescription("The queue has been paused")
            .setColor("#986c9c")
        return interaction.followUp({ content: "Resumed the current track!" });
    },
};
