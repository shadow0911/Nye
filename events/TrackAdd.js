const player = require('../client/player');
const Discord = require('discord.js');

player.on('trackAdd', async(queue, track) => {
    if (!queue.playing){
        await queue.play();
    }
})