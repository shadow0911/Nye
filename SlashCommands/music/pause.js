const player = require("../../client/player");
const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pause')
    .setDescription("Pause the current track"),
    
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);

        queue.setPaused(true);

        let Embed = new Discord.MessageEmbed()
            .setDescription("The queue has been paused")
            .setColor("#986c9c")

        return interaction.followUp({ embeds: [Embed] });
    },
};
