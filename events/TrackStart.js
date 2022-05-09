const player = require('../client/player');
const Discord = require('discord.js');

player.on('trackStart', (queue, track) => {
    let TrackEmbed = new Discord.MessageEmbed()
    .setAuthor({name: "Now playing", iconURL: track.requestedBy.avatarURL({dynamic: true, size: 1024, format: 'png'})})
    .setDescription(`[${track.title}](${track.url})`)
    .setColor("#986c9c")

    queue.metadata.send({embeds: [TrackEmbed]})
})