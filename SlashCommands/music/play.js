const { QueryType } = require("discord-player");
const player = require("../../client/player");
const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription("Please or queue a song")
        .addStringOption(option => 
            option.setName("track")
            .setDescription("The track link/title you want to play")
            .setRequired(true)
        ),
    run: async (client, interaction) => {
        const songTitle = interaction.options.getString("track");

        if (!interaction.member.voice.channel)
            return interaction.followUp({
                content: "Please join a voice channel first!",
            });

        const searchResult = await player.search(songTitle, {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO,
        });

        const queue = await player.createQueue(interaction.guild, {
            leaveOnEnd: false,
            autoSelfDeaf: true,
            
            metadata: interaction.channel,
        });

        if (!queue.connection)
            await queue.connect(interaction.member.voice.channel);

        //console.log(searchResult)
        searchResult.playlist
            ? queue.addTracks(searchResult.tracks)
            : queue.addTrack(searchResult.tracks[0]);

        //queue.setFilters({ "bassboost_low": true }); //apulsator=hz=0.128
        let TrackEmbed = new Discord.MessageEmbed()
        .setAuthor({name: "Added to queue", iconURL: interaction.member.user.avatarURL({dynamic: true, size: 1024, format: 'png'})})
        .setColor("#986c9c")

        searchResult.playlist 
            ? TrackEmbed.setDescription(`[${searchResult.playlist.title}](${searchResult.playlist.url})`)
            : TrackEmbed.setDescription(`[${searchResult.tracks[0].title}](${searchResult.tracks[0].url})`)

        interaction.followUp({ embeds: [TrackEmbed] });
    },
};
