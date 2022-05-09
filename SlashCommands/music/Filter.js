const { QueryType, AudioFilters } = require("discord-player");
const player = require("../../client/player");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("filter")
        .setDescription("Add different filter on current track")
        .addStringOption(option => 
            option.setName('options')
            .setDescription("Different type of filters to choose")
            .setChoices(
                {
                    name: 'clear', 
                    value: 'clear'
                },
                {
                    name: '8D',
                    value: '8D'
                },
                {
                    name: 'vaporwave',
                    value: 'vaporwave'
                },
                {
                    name: 'nightcore',
                    value: 'nightcore'
                },
                {
                    name: 'phaser',
                    value: 'phaser'
                }, 
                {
                    name: 'tremolo',
                    value: 'tremolo'
                },
                {
                    name: 'vibrato',
                    value: 'vibrato'
                },
                {
                    name: 'reverse',
                    value: 'reverse'
                },
                {
                    name: 'treble',
                    value: 'treble'
                },

                {
                    name: 'surrounding',
                    value: 'surrounding'
                },
                {
                    name: 'pulsator',
                    value: 'pulsator'
                },
                {
                    name: 'karaoke',
                    value: 'karaoke'
                },
                {
                    name: 'flanger',
                    value: 'flanger'
                },
                {
                    name: 'gate',
                    value: 'gate'
                },
                {
                    name: 'haas',
                    value: 'haas'
                },
                {
                    name: 'mcompand',
                    value: 'mcompand'
                },
                {
                    name: 'mono',
                    value: 'mono'
                },
                {
                    name: 'mstlr',
                    value: 'mstlr'
                },
                {
                    name: 'mstrr',
                    value: 'mstrr'
                },
                {
                    name: 'compressor',
                    value: 'compressor'
                },
                {
                    name: 'expander',
                    value: 'expander'
                },
                {
                    name: 'softlimiter',
                    value: 'softlimiter'
                },
                {
                    name: 'chorus',
                    value: 'chorus'
                },
                {
                    name: 'earrape',
                    value: 'earrape'
                },
                )
            ),
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);
        let filters = interaction.options.getString("options");

        let filterobj = {
            "8D": false,
            vaporwave: false,
            nightcore: false,
            phaser: false,
            tremolo: false,
            vibrato: false,
            reverse: false,
            treble: false,
            normalizer: false,
            surrounding: false,
            pulsator: false,
            karaoke: false,
            flanger: false,
            gate: false,
            haas: false,
            mcompand: false,
            mono: false,
            mstlr: false,
            mstrr: false,
            compressor: false,
            expander: false,
            softlimiter: false,
            chorus: false,
            earrape: false,
        }

        function FilterToggle(){
            let data = filterobj[filters];
        
            if(data == false){
                data = true
            }

            else {
                data = false
            }

            filterobj[filters] = data
        }

        if(filters == 'clear'){
            filterobj = {
                "8D": false,
                vaporwave: false,
                nightcore: false,
                phaser: false,
                tremolo: false,
                vibrato: false,
                reverse: false,
                treble: false,
                normalizer: false,
                surrounding: false,
                pulsator: false,
                karaoke: false,
                flanger: false,
                gate: false,
                haas: false,
                mcompand: false,
                mono: false,
                mstlr: false,
                mstrr: false,
                compressor: false,
                expander: false,
                softlimiter: false,
                chorus: false,
                earrape: false,
            }
        }

        else {
            FilterToggle()
        }

        queue.setFilters(filterobj);

        interaction.followUp({content: `Filter set to ${filters}`})
    },
};
