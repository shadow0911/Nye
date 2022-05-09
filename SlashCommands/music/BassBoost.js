const { QueryType, AudioFilters } = require("discord-player");
const player = require("../../client/player");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bass-boost")
        .setDescription("Add different bass on current track")
        .addStringOption(option => 
            option.setName('type')
            .setDescription("Choose a bass filter type")
            .setChoices(
                {
                    name: 'clear', 
                    value: 'clear'
                },
                {
                    name: 'bassboost_low',
                    value: 'bassboost_low'
                },
                {
                    name: 'bassboost',
                    value: 'bassboost'
                },
                {
                    name: 'bassboost_high',
                    value: 'bassboost_high'
                },
                {
                    name: 'subboost',
                    value: 'subboost'
                }, 
                )
            ),
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);
        let filters = interaction.options.getString("type");

        let filterobj = {
            bassboost_low: false,
            bassboost: false,
            bassboost_high: false,
            subboost: false
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
                bassboost_low: false,
                bassboost: false,
                bassboost_high: false,
                subboost: false
            }
        }

        else {
            FilterToggle()
        }

        queue.setFilters(filterobj);

        interaction.followUp({content: `Bass-boost set to ${filters}`})
    },
};
