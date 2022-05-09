const { generateDependencyReport } = require('@discordjs/voice');

const { Message, Client } = require("discord.js");

module.exports = {
    name: "test",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        console.log(generateDependencyReport())
    },
};
