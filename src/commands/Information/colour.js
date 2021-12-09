const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageActionRow,
    MessageSelectMenu
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("colour")
        .setDescription("That's how I spell colour >:("),
    async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("colour-select")
                .setPlaceholder("Nothing Selected!")
                .setMinValues(1)
                .setMaxValues(2)
                .addOptions([{
                        label: "Red",
                        description: "This is red.",
                        value: "red"
                    },
                    {
                        label: "Orange",
                        description: "This is orange.",
                        value: "orange"
                    },
                    {
                        label: "Yellow",
                        description: "This is yellow.",
                        value: "yellow"
                    },
                    {
                        label: "Green",
                        description: "This is green.",
                        value: "green"
                    },
                    {
                        label: "Blue",
                        description: "This is blue.",
                        value: "blue"
                    },
                    {
                        label: "Pink",
                        description: "This is pink.",
                        value: "pink"
                    },
                    {
                        label: "Black",
                        description: "'Emo'",
                        value: "black"
                    }
                ])
            );

        await interaction.reply({
            content: "What is your favourite colour?",
            components: [row]
        });
    },
};