//Starting Varibles
const {Client,Intents,Collection} = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: [Intents.FLAGS.GUILDS]}); //I use client

client.commands = new Collection();

require("dotenv").config();

//Folders and file filtration
const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

//Void function
(async () =>{
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token);
})();