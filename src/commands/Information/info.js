const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns info based on input.')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets info based on the user mentioned")
                .addUserOption(option => option.setName("target").setDescription("The user mentioned")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("server")
                .setDescription("Gives info based on the server.")),
	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){
            const user = interaction.options.getUser("target")
            if (user) {
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username}'s Information:`)
                    .setDescription(`This is the information of ${user.username}`)
                    .setURL("https://github.com/NameTakenBonk/Nova")
                    .setAuthor(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL)
                    .addFields(
                        {name: `Username:`, value: user.username},
                        {name: `\u200B`, value: "\u200B"},
                        {name: `Tag: `, value: `#${user.discriminator}`},
                        {name: `\u200B`, value: "\u200B"},
                        {name: `User ID:`, value: `${user.id}`}
                    )
                    .setTimestamp()
                    .setImage(user.displayAvatarURL({dynamic: true}))
                    .setColor("GREEN")
                    .setFooter(client.user.tag)

                await interaction.reply({ embeds: [userEmbed]});
            } else{
                 const userEmbed = new MessageEmbed()
                .setTitle(`${interaction.user.username}'s Information:`)
                .setDescription(`This is the information of ${interaction.user.username}`)
                .setURL("https://github.com/NameTakenBonk/Nova")
                .setAuthor(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL)
                .addFields(
                    {name: `Username:`, value: interaction.user.username},
                    {name: `\u200B`, value: "\u200B"},
                    {name: `Tag: `, value: `#${interaction.user.discriminator}`},
                    {name: `\u200B`, value: "\u200B"},
                    {name: `User ID:`, value: `${interaction.user.id}`}
                )
                .setTimestamp()
                .setImage(interaction.user.displayAvatarURL({dynamic: true}))
                .setColor("GREEN")
                .setFooter(client.user.tag)

                await interaction.reply({ embeds: [userEmbed]});
            }
        }else if (interaction.options.getSubcommand() === "server"){
            await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`)
        }else{
            await interaction.reply("No sub command was use :/");
        }
	},
};