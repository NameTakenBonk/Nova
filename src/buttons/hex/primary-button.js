module.exports = {
    data:{
        name: "primary-button"
    },
    async execute (interaction, client) {
        await interaction.reply( { content: "Colour Primary: #ED4245"} );
    }
}