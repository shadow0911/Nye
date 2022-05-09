const { QueryType } = require("discord-player");
const player = require("../../client/player");
const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription("Remove a song from queue")
        .addIntegerOption(option => 
            option.setName("position")
            .setDescription("Track position in the queue")
            .setMinValue(1)
            .setRequired(true)
        ),
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);
        let pos = interaction.options.getInteger("position");

        console.log(typeof(pos))
        queue.remove(pos - 1)
        let TrackEmbed = new Discord.MessageEmbed()
        .setAuthor({name: "Removed a music from queue", iconURL: interaction.member.user.avatarURL({dynamic: true, size: 1024, format: 'png'})})
        .setColor("#986c9c")

        interaction.followUp({ embeds: [TrackEmbed] });
    },
};
